"use client";

import { usePathname } from "next/navigation";
import StickyMobileCTA from "./StickyMobileCTA";

/** Op services/aanbod tonen we geen gewone sticky CTA. */
export default function StickyCTAOrNothing() {
  const pathname = usePathname();
  if (pathname === "/services" || pathname === "/aanbod") return null;
  return <StickyMobileCTA />;
}
