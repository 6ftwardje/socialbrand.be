import type { Metadata } from "next";
import FoodFairProposalPage from "@/components/proposal/FoodFairProposalPage";

export const metadata: Metadata = {
  title: "Huppa Food Fair × Office6 | Vertical recap video",
  description: "Offerte voor een verticale recap video van de Huppa Food Fair op 27 september 2026.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FoodFairProposalPage />;
}
