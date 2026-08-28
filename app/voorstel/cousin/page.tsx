import type { Metadata } from "next";
import CousinProposalPage from "@/components/proposal/CousinProposalPage";

export const metadata: Metadata = {
  title: "Cousin × Office6 | Websitevoorstel 2026",
  description: "Een websitevoorstel voor Cousin in Aalter, uitgewerkt door Office6.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CousinProposalPage />;
}
