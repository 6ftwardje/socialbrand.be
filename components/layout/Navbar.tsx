"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, mobilePrimaryLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

const MENU_ANIMATION_MS = 250;

function getFocusables(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  const selector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector));
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    if (!mobileOpen) return;
    setIsClosing(true);
    const t = setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
      hamburgerButtonRef.current?.focus({ preventScroll: true });
    }, MENU_ANIMATION_MS);
    return () => clearTimeout(t);
  }, [mobileOpen]);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen || isClosing) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen, isClosing]);

  // ESC to close
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMenu]);

  // Focus trap and initial focus
  useEffect(() => {
    if (!mobileOpen || !menuPanelRef.current) return;
    closeButtonRef.current?.focus({ preventScroll: true });
    const panel = menuPanelRef.current;
    const focusables = getFocusables(panel);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (focusables.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const openMenu = () => setMobileOpen(true);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeMenu();
  };

  const menuVisible = mobileOpen || isClosing;
  const menuState = isClosing ? "closed" : "open";

  // Header background on scroll (desktop)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header: volledig transparant bovenaan, donkere bar pas na scrollen
  const headerStyle: React.CSSProperties = scrolled
    ? {
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }
    : {
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      };

  return (
    <>
      <header
        style={headerStyle}
        className="sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"
          aria-label="Hoofdnavigatie"
        >
          <Link
            href="/"
            className="flex shrink-0 font-bold text-white focus-visible:outline-none rounded transition-opacity hover:opacity-90"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            <Image
              src="https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/navbar.png"
              alt="Socialbrand"
              width={160}
              height={44}
              className="h-5 w-auto md:h-6 object-contain"
              priority
            />
          </Link>

          <ul className="hidden md:flex md:items-center md:gap-10">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline-none py-1 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-white/80 after:transition-[width] after:duration-200 hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/intake"
                className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none"
              >
                Boek een call
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white hover:opacity-95 transition-opacity min-h-[44px]"
            >
              Boek een call
            </Link>
            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={mobileOpen ? closeMenu : openMenu}
              className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-zinc-400 hover:text-white hover:opacity-90 active:opacity-80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
              aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            >
              <span className="sr-only">{mobileOpen ? "Menu sluiten" : "Menu openen"}</span>
              {/* Hamburger / X morph: three lines that animate to X */}
              <span className="relative w-5 h-4 flex flex-col justify-between" aria-hidden>
                <span
                  className={cn(
                    "h-0.5 w-5 bg-current rounded-full origin-center transition-transform duration-300 ease-in-out",
                    mobileOpen && "rotate-45 translate-y-[7px]"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out",
                    mobileOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-5 bg-current rounded-full origin-center transition-transform duration-300 ease-in-out",
                    mobileOpen && "-rotate-45 -translate-y-[7px]"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu: only on small viewports */}
      {menuVisible && (
        <div
          ref={menuOverlayRef}
          data-state={menuState}
          className="mobile-menu-overlay fixed inset-0 z-[100] md:hidden"
          aria-hidden={!mobileOpen}
        >
          {/* Backdrop: blocks interaction, click to close */}
          <div
            className="absolute inset-0 bg-[var(--background)]/95 supports-[backdrop-filter]:backdrop-blur-md"
            onClick={handleOverlayClick}
            aria-hidden
          />
          {/* Panel: slides in from right */}
          <div
            ref={menuPanelRef}
            className="mobile-menu-panel absolute right-0 top-0 w-full bg-[var(--background)] flex flex-col shadow-none"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigatiemenu"
            id="mobile-menu"
          >
            {/* Close only — top right */}
            <div className="absolute top-0 right-0 z-10 flex items-center justify-end p-4">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-zinc-400 hover:text-white transition-colors duration-200 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="Menu sluiten"
              >
                <span className="sr-only">Sluiten</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Primary nav + CTA — centered, full height */}
            <nav className="flex-1 flex flex-col items-center justify-center overflow-y-auto px-4 py-8" aria-label="Hoofdnavigatie">
              <ul className="flex flex-col items-center gap-1 w-full max-w-xs">
                {mobilePrimaryLinks.map(({ href, label }) => (
                  <li key={href} className="mobile-menu-item w-full flex justify-center">
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="flex items-center justify-center min-h-[44px] py-3 w-full text-lg font-bold text-zinc-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-md relative after:absolute after:left-1/2 after:bottom-2 after:h-px after:w-0 after:bg-white/50 after:transition-[width] after:duration-200 hover:after:w-8 after:-translate-x-1/2 active:opacity-90"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="mobile-menu-item pt-2 w-full flex justify-center">
                  <Link
                    href="/intake"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 text-base font-bold text-white bg-[var(--accent)] rounded-md w-full max-w-[200px] transition-opacity duration-200 hover:opacity-95 active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    Boek een call
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
