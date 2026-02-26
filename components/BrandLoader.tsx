"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAVBAR_LOGO_SRC =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/navbar.png";

const FADE_DURATION_MS = 250;
/** Fade-out duration for initial load (above-the-fold assets); 300–500ms. */
const FADE_DURATION_MS_INITIAL = 400;
const MIN_VISIBLE_MS = 250;

export interface BrandLoaderProps {
  /** 0–100 for determinate bar; null for indeterminate (initial load) */
  progress: number | null;
  /** When true, overlay is fading out (opacity transition) */
  isExiting?: boolean;
  /** Optional class for the overlay root */
  className?: string;
  /** Override fade duration (ms); default 250, use FADE_DURATION_MS_INITIAL for initial load */
  fadeDurationMs?: number;
}

/**
 * Presentational full-screen loader: logo + progress bar.
 * Accessible, respects prefers-reduced-motion, uses site accent/background.
 */
export default function BrandLoader({
  progress,
  isExiting = false,
  className,
  fadeDurationMs = FADE_DURATION_MS,
}: BrandLoaderProps) {
  const isIndeterminate = progress === null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={cn(
        "loader-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)] transition-opacity duration-[var(--loader-fade-duration,250ms)] ease-out",
        isExiting && "loader-overlay--exiting opacity-0 pointer-events-none",
        className
      )}
      style={
        {
          "--loader-fade-duration": `${fadeDurationMs}ms`,
        } as React.CSSProperties
      }
    >
      <span className="sr-only">Loading…</span>

      {/* Logo: same as navbar */}
      <div className="mb-10 flex flex-col items-center gap-2">
        <Image
          src={NAVBAR_LOGO_SRC}
          alt="Socialbrand"
          width={160}
          height={44}
          className="h-8 w-auto object-contain md:h-10"
          aria-hidden
          priority
        />
      </div>

      {/* Progress bar */}
      <div
        className="h-1 w-48 min-w-[12rem] max-w-[16rem] overflow-hidden rounded-full bg-zinc-800 md:w-56"
        aria-hidden
      >
        <div
          className={cn(
            "h-full rounded-full bg-[var(--accent)] transition-[width] ease-out",
            "loader-progress-bar",
            isIndeterminate && "loader-progress-bar--indeterminate"
          )}
          style={
            !isIndeterminate
              ? { width: `${Math.min(100, Math.max(0, progress))}%` }
              : undefined
          }
        />
      </div>
    </div>
  );
}

export { FADE_DURATION_MS, FADE_DURATION_MS_INITIAL, MIN_VISIBLE_MS };
