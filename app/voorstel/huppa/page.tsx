import type { Metadata } from "next";
import HuppaProposalPage from "@/components/proposal/HuppaProposalPage";

export const metadata: Metadata = {
  title: "Huppa × Office6 | Vertrouwelijk contentvoorstel 2026",
  description: "Een gericht contentvoorstel voor Huppa, uitgewerkt door Office6.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HuppaProposalPage />;
}
