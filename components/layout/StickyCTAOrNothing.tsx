"use client";

import { usePathname } from "next/navigation";
import StickyMobileCTA from "./StickyMobileCTA";

/** Op /aanbod toont de pagina zelf StickyAanbodCTA; hier tonen we de gewone sticky CTA niet. */
export default function StickyCTAOrNothing() {
  const pathname = usePathname();
  if (pathname === "/aanbod") return null;
  return <StickyMobileCTA />;
}
