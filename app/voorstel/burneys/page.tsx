import type { Metadata } from "next";
import BurneysProposalPage from "@/components/proposal/BurneysProposalPage";

export const metadata: Metadata = {
  title: "Burney’s × Office6 | Zes B2B-reels",
  description: "Een productievoorstel voor zes afzonderlijke B2B-reels bij Burney’s.",
  robots: { index: false, follow: false, noarchive: true },
};

export default function Page() { return <BurneysProposalPage />; }
