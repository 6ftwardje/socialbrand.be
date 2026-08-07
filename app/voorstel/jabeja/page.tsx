import type { Metadata } from "next";
import JabejaProposalPage from "@/components/proposal/JabejaProposalPage";

export const metadata: Metadata = {
  title: "Jabeja × Office6 | Casevideo-voorstel 2026",
  description: "Een compact casevideo-voorstel voor Jabeja en Ripal, uitgewerkt door Office6.",
  robots: { index: false, follow: false },
};

export default function Page() { return <JabejaProposalPage />; }
