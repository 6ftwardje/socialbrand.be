"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyAanbodCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("aanbod-sticky-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry?.isIntersecting),
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800/80 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/90 py-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="complementary"
      aria-label="Boek een kennismakingscall"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-sm text-zinc-400 hidden sm:block">
          ±30 min · Geen verkooppraatje — we kijken of we passen.
        </p>
        <Link
          href="/intake"
          className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-[var(--accent)] py-3 px-6 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Boek een kennismakingscall
        </Link>
      </div>
    </div>
  );
}
