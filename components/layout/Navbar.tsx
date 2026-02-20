"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/HTP/socialbrand%20png.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6" aria-label="Hoofdnavigatie">
        <Link
          href="/"
          className="flex shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        >
          <Image src={LOGO_URL} alt="SocialBrand" width={140} height={56} className="h-9 w-auto" priority />
        </Link>

        <ul className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded px-1 py-0.5"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Boek een call
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white"
          >
            Boek een call
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          >
            <span className="sr-only">{mobileOpen ? "Menu sluiten" : "Menu openen"}</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobiel menu"
        className={cn(
          "md:hidden border-t border-zinc-800/80 bg-[var(--background)]",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
