import type { Metadata } from "next";
import ChrisHenryProposalPage from "@/components/proposal/ChrisHenryProposalPage";

export const metadata: Metadata = {
  title: "Chris Henry × Office6 | Coaching Platform Proposal 2026",
  description: "A confidential platform and production partnership proposal for the Chris Henry Level 1 Coaching programme.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ChrisHenryProposalPage />;
}
