"use client";

import { usePathname } from "next/navigation";
import StickyMobileCTA from "./StickyMobileCTA";

export default function StickyCTAOrNothing() {
  const pathname = usePathname();
  if (
    pathname === "/intake" ||
    pathname === "/bedankt" ||
    pathname === "/privacy" ||
    pathname === "/aanbod" ||
    pathname.startsWith("/voorstel/")
  ) return null;
  return (
    <>
      <StickyMobileCTA />
      <div className="h-[5.25rem] bg-[var(--background)] md:hidden" aria-hidden />
    </>
  );
}
