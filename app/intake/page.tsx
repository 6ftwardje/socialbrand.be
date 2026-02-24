import type { Metadata } from "next";
import IntakeForm from "@/components/intake/IntakeForm";

export const metadata: Metadata = {
  title: "Intake | SocialBrand",
  description:
    "Beantwoord 7 korte vragen. Duurt ±2 minuten. We nemen binnen 24 uur contact op.",
};

export default function IntakePage() {
  return <IntakeForm />;
}
