import { NextResponse } from "next/server";
import {
  brandTypeOptions,
  marketingPartnersOptions,
  platformOptions,
  revenueRangeOptions,
  teamSizeOptions,
  type IntakeData,
} from "@/lib/intake-types";
import { isStepValid } from "@/lib/intake-validation";

export const runtime = "nodejs";

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/maqdjnll";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim())
    : [];
}

function parseIntakeData(value: unknown): IntakeData | null {
  if (!isRecord(value)) return null;

  const data: IntakeData = {
    fullName: stringValue(value.fullName),
    email: stringValue(value.email).toLowerCase(),
    phone: stringValue(value.phone),
    brandType: stringArray(value.brandType),
    brandTypeOther: stringValue(value.brandTypeOther),
    marketingPartners: stringArray(value.marketingPartners),
    marketingPartnersOther: stringValue(value.marketingPartnersOther),
    teamSize: stringValue(value.teamSize),
    teamSizeOther: stringValue(value.teamSizeOther),
    revenueRange: stringValue(value.revenueRange),
    platforms: stringArray(value.platforms),
    platformsOther: stringValue(value.platformsOther),
  };

  return Array.from({ length: 8 }, (_, index) => index + 1).every((step) => isStepValid(step, data))
    ? data
    : null;
}

function optionLabel(options: readonly { value: string; label: string }[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function optionLabels(options: readonly { value: string; label: string }[], values: string[]) {
  return values.map((value) => optionLabel(options, value)).join(", ");
}

async function writeToGoogleSheet(payload: Record<string, unknown>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is niet ingesteld");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(12_000),
  });

  const responseText = await response.text();
  if (!response.ok) throw new Error(`Google Sheets webhook gaf status ${response.status}`);

  try {
    const result = JSON.parse(responseText) as { ok?: boolean; error?: string };
    if (!result.ok) throw new Error(result.error || "Google Sheets bevestigde de rij niet");
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error("Ongeldig antwoord van Google Sheets");
    throw error;
  }
}

async function sendFormspreeBackup(payload: Record<string, unknown>) {
  const endpoint =
    process.env.FORMSPREE_INTAKE_ENDPOINT ||
    process.env.NEXT_PUBLIC_FORMSPREE_INTAKE_ENDPOINT ||
    DEFAULT_FORMSPREE_ENDPOINT;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) throw new Error(`Formspree gaf status ${response.status}`);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const data = parseIntakeData(body);
  if (!data) {
    return NextResponse.json({ ok: false, error: "Controleer de intakevelden" }, { status: 400 });
  }

  const payload = {
    ...data,
    display: {
      brandType: optionLabels(brandTypeOptions, data.brandType),
      marketingPartners: optionLabels(marketingPartnersOptions, data.marketingPartners),
      teamSize: optionLabel(teamSizeOptions, data.teamSize),
      revenueRange: optionLabel(revenueRangeOptions, data.revenueRange),
      platforms: optionLabels(platformOptions, data.platforms),
    },
    meta: {
      submissionId: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      source: "website_intake",
    },
  };

  const [sheetResult, backupResult] = await Promise.allSettled([
    writeToGoogleSheet(payload),
    sendFormspreeBackup(payload),
  ]);

  if (backupResult.status === "rejected") {
    console.error("[intake] Formspree-backup mislukt:", backupResult.reason instanceof Error ? backupResult.reason.message : "Onbekende fout");
  }

  if (sheetResult.status === "rejected") {
    console.error("[intake] Google Sheets-opslag mislukt:", sheetResult.reason instanceof Error ? sheetResult.reason.message : "Onbekende fout");
    return NextResponse.json(
      { ok: false, error: "De intake kon niet veilig worden opgeslagen. Probeer opnieuw." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, backupStored: backupResult.status === "fulfilled" });
}
