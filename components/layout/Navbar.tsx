"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { mobilePrimaryLinks, navLinks } from "@/lib/content";
import Office6Text from "@/components/ui/Office6Text";

const MOBILE_MENU_ANIMATION_MS = 250;
const DESKTOP_MENU_LINKS = navLinks.filter((link) => link.href !== "/contact");

function getFocusables(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  const selector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector));
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const desktopTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    if (!mobileOpen || mobileClosing) return;
    setMobileClosing(true);
    window.setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
      mobileTriggerRef.current?.focus({ preventScroll: true });
    }, MOBILE_MENU_ANIMATION_MS);
  }, [mobileClosing, mobileOpen]);

  const openMobileMenu = () => {
    setMobileOpen(true);
    setMobileClosing(false);
    setDesktopOpen(false);
  };

  const closeDesktopMenu = useCallback(() => {
    setDesktopOpen(false);
    desktopTriggerRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!(mobileOpen || mobileClosing)) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileClosing, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !mobilePanelRef.current || mobileClosing) return;
    mobileCloseRef.current?.focus({ preventScroll: true });
    const panel = mobilePanelRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key !== "Tab") return;
      const focusables = getFocusables(panel);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu, mobileClosing, mobileOpen]);

  useEffect(() => {
    if (!desktopOpen) return;
    const menu = desktopMenuRef.current;
    getFocusables(menu)[0]?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDesktopMenu();
        return;
      }

      if (event.key !== "Tab") return;
      const focusables = getFocusables(desktopMenuRef.current);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        desktopTriggerRef.current?.focus({ preventScroll: true });
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        desktopTriggerRef.current?.focus({ preventScroll: true });
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (
        desktopMenuRef.current?.contains(target) ||
        desktopTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setDesktopOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeDesktopMenu, desktopOpen]);

  const mobileMenuVisible = mobileOpen || mobileClosing;
  const mobileMenuState = mobileClosing ? "closed" : "open";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-start justify-between gap-4">
          <Link
            href="/"
            className="pointer-events-auto inline-flex h-11 items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/90 px-4 shadow-[0_12px_40px_rgba(21,21,21,0.10)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 md:h-12 md:px-5"
            aria-label="Office6 home"
          >
            <Image
              src="/logos/office6-black-6.png"
              alt="Office6"
              width={590}
              height={104}
              className="h-5 w-auto object-contain md:h-6"
              priority
            />
          </Link>

          <button
            ref={mobileTriggerRef}
            type="button"
            onClick={mobileOpen ? closeMobileMenu : openMobileMenu}
            className="pointer-events-auto inline-flex h-11 items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/90 px-4 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_40px_rgba(21,21,21,0.10)] backdrop-blur-xl transition-colors duration-200 hover:border-[var(--foreground)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          >
            <span>{mobileOpen ? "Sluit" : "Menu"}</span>
            <span className="relative h-4 w-5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <div className="pointer-events-auto relative hidden flex-col items-end md:flex">
            <button
              ref={desktopTriggerRef}
              type="button"
              onClick={() => setDesktopOpen((value) => !value)}
              className="inline-flex h-12 items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/90 px-5 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_40px_rgba(21,21,21,0.10)] backdrop-blur-xl transition-colors duration-200 hover:border-[var(--foreground)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
              aria-expanded={desktopOpen}
              aria-controls="desktop-menu"
              aria-haspopup="dialog"
            >
              <span>{desktopOpen ? "Sluit" : "Menu"}</span>
              {desktopOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
            </button>

            {desktopOpen && (
              <div
                ref={desktopMenuRef}
                id="desktop-menu"
                role="dialog"
                aria-label="Navigatiemenu"
                className="desktop-menu mt-3 w-[min(calc(100vw-3rem),25rem)] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/95 p-3 text-[var(--foreground)] shadow-[0_28px_90px_rgba(21,21,21,0.18)] backdrop-blur-2xl"
              >
                <nav aria-label="Hoofdnavigatie">
                  <ul className="divide-y divide-[var(--border-subtle)]">
                    {DESKTOP_MENU_LINKS.map(({ href, label }) => (
                      <li key={href} className="desktop-menu-item">
                        <Link
                          href={href}
                          onClick={() => setDesktopOpen(false)}
                          className="group flex items-center justify-between gap-6 rounded-xl px-3 py-4 text-2xl font-semibold leading-none tracking-tight transition-colors hover:bg-[var(--background-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 md:text-3xl"
                        >
                          <span>
                            <Office6Text>{label}</Office6Text>
                          </span>
                          <ArrowRight
                            className="h-5 w-5 text-[var(--accent)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="desktop-menu-item mt-3 rounded-xl bg-[var(--foreground)] p-4 text-[var(--surface)]">
                  <p className="max-w-xs text-sm font-medium leading-relaxed text-[var(--surface)]/70">
                    Klaar om content, campagnes of platformen scherper te krijgen?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/intake"
                      onClick={() => setDesktopOpen(false)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                    >
                      Plan gesprek
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setDesktopOpen(false)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/18 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {mobileMenuVisible && (
        <div
          data-state={mobileMenuState}
          className="mobile-menu-overlay fixed inset-0 z-[100] md:hidden"
          aria-hidden={!mobileOpen}
        >
          <div
            className="absolute inset-0 bg-[var(--background)]/96 backdrop-blur-md"
            onClick={closeMobileMenu}
            aria-hidden
          />
          <div
            ref={mobilePanelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigatiemenu"
            className="mobile-menu-panel absolute right-0 top-0 flex w-full flex-col bg-[var(--background)] text-[var(--foreground)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="inline-flex h-11 items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/90 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                aria-label="Office6 home"
              >
                <Image
                  src="/logos/office6-black-6.png"
                  alt="Office6"
                  width={590}
                  height={104}
                  className="h-5 w-auto object-contain"
                  priority
                />
              </Link>
              <button
                ref={mobileCloseRef}
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface)] text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                aria-label="Menu sluiten"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-10"
              aria-label="Hoofdnavigatie"
            >
              <ul className="flex w-full max-w-sm flex-col items-center gap-2">
                {mobilePrimaryLinks.map(({ href, label }) => (
                  <li key={href} className="mobile-menu-item w-full">
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className="flex min-h-12 w-full items-center justify-center rounded-lg px-4 py-3 text-xl font-bold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
                    >
                      <Office6Text>{label}</Office6Text>
                    </Link>
                  </li>
                ))}
                <li className="mobile-menu-item flex w-full justify-center pt-3">
                  <Link
                    href="/intake"
                    onClick={closeMobileMenu}
                    className="inline-flex min-h-12 w-full max-w-[14rem] items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
                  >
                    Plan gesprek
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
