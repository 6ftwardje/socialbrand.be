import type { IntakeData } from "./intake-types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digitCount(s: string): number {
  return (s.replace(/\D/g, "") || "").length;
}

export function validateStep1FullName(data: IntakeData): boolean {
  const trimmed = data.fullName.trim();
  if (trimmed.length < 3) return false;
  const words = trimmed.split(/\s+/).filter(Boolean);
  return words.length >= 2 || trimmed.length >= 3;
}

export function validateStep2Email(data: IntakeData): boolean {
  const email = data.email.trim();
  return email.length > 0 && EMAIL_REGEX.test(email);
}

export function validateStep3Phone(data: IntakeData): boolean {
  const phone = data.phone.trim();
  if (phone.length === 0) return true;
  return digitCount(phone) >= 8;
}

export function validateStep4BrandType(data: IntakeData): boolean {
  if (!data.brandType.length) return false;
  const hasOther = data.brandType.includes("anders");
  if (hasOther) return data.brandTypeOther.trim().length > 0;
  return true;
}

export function validateStep5MarketingPartners(data: IntakeData): boolean {
  if (!data.marketingPartners.length) return false;
  const hasOther = data.marketingPartners.includes("anders");
  if (hasOther) return data.marketingPartnersOther.trim().length > 0;
  return true;
}

export function validateStep6TeamSize(data: IntakeData): boolean {
  if (!data.teamSize) return false;
  if (data.teamSize === "anders") return data.teamSizeOther.trim().length > 0;
  return true;
}

export function validateStep7RevenueRange(data: IntakeData): boolean {
  if (!data.revenueRange) return false;
  if (data.revenueRange === "anders") return data.revenueOther.trim().length > 0;
  return true;
}

const validators: ((data: IntakeData) => boolean)[] = [
  () => true, // step 0 intro
  validateStep1FullName,
  validateStep2Email,
  validateStep3Phone,
  validateStep4BrandType,
  validateStep5MarketingPartners,
  validateStep6TeamSize,
  validateStep7RevenueRange,
];

export function isStepValid(stepIndex: number, data: IntakeData): boolean {
  if (stepIndex < 0 || stepIndex >= validators.length) return false;
  return validators[stepIndex](data);
}

export function getStepValidationMessage(
  stepIndex: number,
  data: IntakeData
): string | null {
  if (stepIndex < 0 || stepIndex >= validators.length) return null;
  if (validators[stepIndex](data)) return null;
  const messages: Record<number, string> = {
    1: "Vul je volledige naam in (minimaal 2 woorden).",
    2: "Vul een geldig e-mailadres in.",
    3: "Vul een geldig telefoonnummer in (minimaal 8 cijfers) of laat leeg.",
    4: "Kies minstens één optie voor je brand. Bij «Anders» vul je het veld in.",
    5: "Kies minstens één optie voor marketingpartners. Bij «Anders» vul je het veld in.",
    6: "Kies een optie voor teamgrootte. Bij «Anders» vul je het veld in.",
    7: "Kies een optie voor jaaromzet. Bij «Anders» vul je het veld in.",
  };
  return messages[stepIndex] ?? "Vul dit veld in.";
}
