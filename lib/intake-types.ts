/**
 * Intake form types and step options.
 * Formspree endpoint: set NEXT_PUBLIC_FORMSPREE_INTAKE_ENDPOINT or replace YOUR_FORMSPREE_ENDPOINT.
 */
export const FORMSPREE_INTAKE_ENDPOINT =
  (typeof process !== "undefined" &&
    process.env?.NEXT_PUBLIC_FORMSPREE_INTAKE_ENDPOINT) ||
  "https://formspree.io/f/maqdjnll";

export interface IntakeData {
  fullName: string;
  email: string;
  phone: string;
  brandType: string[];
  brandTypeOther: string;
  marketingPartners: string[];
  marketingPartnersOther: string;
  teamSize: string;
  teamSizeOther: string;
  revenueRange: string;
  platforms: string[];
  platformsOther: string;
}

export const initialIntakeData: IntakeData = {
  fullName: "",
  email: "",
  phone: "",
  brandType: [],
  brandTypeOther: "",
  marketingPartners: [],
  marketingPartnersOther: "",
  teamSize: "",
  teamSizeOther: "",
  revenueRange: "",
  platforms: [],
  platformsOther: "",
};

export type StepFieldType =
  | "intro"
  | "text"
  | "email"
  | "tel"
  | "chipMulti"
  | "radioCard";

export interface ChipOption {
  value: string;
  label: string;
  isOther?: boolean;
}

export interface RadioOption {
  value: string;
  label: string;
  isOther?: boolean;
}

export const brandTypeOptions: ChipOption[] = [
  { value: "personal-brand", label: "Personal brand" },
  { value: "bedrijfsbrand", label: "Bedrijfsbrand" },
  { value: "beide", label: "Beide" },
  { value: "nog-in-opbouw", label: "Nog in opbouw" },
  { value: "rebrand-gepland", label: "Rebrand gepland" },
  { value: "anders", label: "Anders", isOther: true },
];

export const marketingPartnersOptions: ChipOption[] = [
  { value: "nee", label: "Nee" },
  { value: "agency", label: "Agency" },
  { value: "freelancer", label: "Freelancer" },
  { value: "in-house", label: "In-house marketeer" },
  { value: "content-creator", label: "Content creator" },
  { value: "performance-partner", label: "Performance partner (ads)" },
  { value: "anders", label: "Anders", isOther: true },
];

export const teamSizeOptions: RadioOption[] = [
  { value: "solo", label: "Solo founder" },
  { value: "2-5", label: "2–5" },
  { value: "6-15", label: "6–15" },
  { value: "16-50", label: "16–50" },
  { value: "50+", label: "50+" },
  { value: "anders", label: "Anders", isOther: true },
];

/** Omzetrange voor pre-kwalificatie (min. €10k/maand). */
export const revenueRangeOptions: RadioOption[] = [
  { value: "10k-25k", label: "€10k – €25k/maand" },
  { value: "25k-50k", label: "€25k – €50k/maand" },
  { value: "50k-100k", label: "€50k – €100k/maand" },
  { value: "100k+", label: "€100k+/maand" },
];

export const platformOptions: ChipOption[] = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "youtube", label: "YouTube" },
  { value: "x-twitter", label: "X (Twitter)" },
  { value: "pinterest", label: "Pinterest" },
  { value: "nog-nergens", label: "Nog nergens actief" },
  { value: "anders", label: "Anders", isOther: true },
];

export const TOTAL_FORM_STEPS = 8;
