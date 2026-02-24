import type { Metadata } from "next";
import IntakeForm from "@/components/intake/IntakeForm";

export const metadata: Metadata = {
  title: "Intake | SocialBrand",
  description:
    "Beantwoord 8 korte vragen (±2 min). We plannen daarna je kennismakingscall en nemen binnen 24 uur contact op.",
};

export default function IntakePage() {
  return <IntakeForm />;
}
