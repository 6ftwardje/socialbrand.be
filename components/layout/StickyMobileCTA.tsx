"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > Math.min(window.innerHeight * 0.45, 420));
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 block border-t border-[var(--border-subtle)] bg-[var(--background)]/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-[transform,opacity] duration-200 supports-[backdrop-filter]:bg-[var(--background)]/90 md:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}
      aria-hidden={!visible}
    >
      <Link
        href="/intake"
        className="flex w-full items-center justify-center rounded-lg bg-[var(--accent)] py-3 px-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Start intake
      </Link>
    </div>
  );
}
