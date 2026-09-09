import { NextResponse } from "next/server";
import { getPlatformPassword } from "@/lib/platform-auth";

export const runtime = "nodejs";

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/maqdjnll";
const REQUEST_WINDOW_MS = 30 * 60 * 1000;
const REQUEST_LIMIT = 5;
const recentRequests = new Map<string, number[]>();

type AccessRequest = {
  name: string;
  email: string;
  company: string;
  website: string;
};

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseAccessRequest(value: unknown): AccessRequest | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const record = value as Record<string, unknown>;
  if (stringValue(record.website)) return null;

  const data = {
    name: stringValue(record.name),
    email: stringValue(record.email).toLowerCase(),
    company: stringValue(record.company),
    website: "",
  };

  if (data.name.length < 2 || data.name.length > 100) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 180) return null;
  if (data.company.length > 120) return null;
  return data;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (recentRequests.get(key) ?? []).filter((timestamp) => now - timestamp < REQUEST_WINDOW_MS);
  if (recent.length >= REQUEST_LIMIT) return true;
  recent.push(now);
  recentRequests.set(key, recent);
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

async function sendAccessEmail(data: AccessRequest, accessCode: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from = process.env.PLATFORM_ACCESS_FROM_EMAIL || "Office6 <hello@office6.be>";
  const safeName = escapeHtml(data.name);
  const safeCode = escapeHtml(accessCode);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [data.email],
      reply_to: "hello@office6.be",
      subject: "Jouw toegang tot Office6 Platforms",
      text: `Hallo ${data.name},\n\nMet deze code krijg je toegang tot onze platformpropositie:\n\n${accessCode}\n\nOpen https://office6.be/platform en vul de code in.\n\nOffice6`,
      html: `<div style="background:#11100f;padding:40px 20px;font-family:Arial,sans-serif;color:#f7f4ef"><div style="max-width:560px;margin:auto"><p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#dc1326">Office6 · private access</p><h1 style="margin:24px 0 12px;font-size:34px;line-height:1.05">Jouw toegang staat klaar.</h1><p style="color:#b9b4ad;line-height:1.6">Hallo ${safeName}, gebruik onderstaande code om onze platformpropositie te bekijken.</p><div style="margin:32px 0;padding:24px;border:1px solid #ffffff2b;background:#181716;font-size:28px;font-weight:700;letter-spacing:.18em;text-align:center">${safeCode}</div><a href="https://office6.be/platform" style="display:inline-block;background:#dc1326;color:#fff;text-decoration:none;padding:14px 20px;font-size:14px;font-weight:700">Open Platforms</a><p style="margin-top:34px;color:#77716a;font-size:12px;line-height:1.5">Deze toegang is bedoeld om onze aanpak intern te beoordelen. Reageer gerust op deze e-mail met vragen.</p></div></div>`,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) throw new Error(`Resend gaf status ${response.status}`);
  return true;
}

async function storeAccessRequest(data: AccessRequest) {
  const payload = {
    fullName: data.name,
    email: data.email,
    company: data.company,
    meta: {
      submissionId: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      source: "platform_access_request",
    },
  };

  const requests: Promise<unknown>[] = [];
  const sheetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetWebhook) {
    requests.push(fetch(sheetWebhook, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    }).then((response) => {
      if (!response.ok) throw new Error(`Google Sheets gaf status ${response.status}`);
      return response;
    }));
  }

  const formspreeEndpoint =
    process.env.FORMSPREE_PLATFORM_ENDPOINT ||
    process.env.FORMSPREE_INTAKE_ENDPOINT ||
    process.env.NEXT_PUBLIC_FORMSPREE_INTAKE_ENDPOINT ||
    DEFAULT_FORMSPREE_ENDPOINT;

  requests.push(fetch(formspreeEndpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      _subject: `Platformtoegang aangevraagd door ${data.name}`,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
  }).then((response) => {
    if (!response.ok) throw new Error(`Formspree gaf status ${response.status}`);
    return response;
  }));

  const results = await Promise.allSettled(requests);
  if (!results.some((result) => result.status === "fulfilled")) {
    throw new Error("Geen enkele leadopslag is gelukt.");
  }
  return results;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const data = parseAccessRequest(body);
  if (!data) {
    return NextResponse.json({ ok: false, error: "Controleer je naam en e-mailadres." }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`${forwardedFor}:${data.email}`)) {
    return NextResponse.json({ ok: false, error: "Te veel aanvragen. Probeer het later opnieuw." }, { status: 429 });
  }

  const accessCode = getPlatformPassword();
  if (!accessCode) {
    return NextResponse.json({ ok: false, error: "Toegang is nog niet geconfigureerd." }, { status: 503 });
  }

  const [storageResult, emailResult] = await Promise.allSettled([
    storeAccessRequest(data),
    sendAccessEmail(data, accessCode),
  ]);

  if (storageResult.status === "rejected") {
    console.error("[platform-access] Leadopslag mislukt:", storageResult.reason);
  }
  if (emailResult.status === "rejected") {
    console.error("[platform-access] Toegangsmail mislukt:", emailResult.reason);
  }

  const delivered = emailResult.status === "fulfilled" && emailResult.value;
  return NextResponse.json({ ok: true, delivered });
}
