"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useCriticalAsset } from "@/components/CriticalAssetsProvider";
import type { CaseFormat } from "@/lib/office-cases";

export function shapeClass(shape: CaseFormat) {
  switch (shape) {
    case "portrait":
      return "aspect-[9/16]";
    case "standard":
      return "aspect-[4/3]";
    case "square":
      return "aspect-square";
    case "platform":
      return "aspect-[4/3] bg-zinc-950";
    case "platformPortrait":
      return "aspect-[4/5] bg-zinc-950";
    case "wide":
    default:
      return "aspect-[16/9]";
  }
}

export default function CaseVisual({
  image,
  hoverLogo,
  hoverLabel,
  alt,
  shape,
  priority,
  sizes,
}: {
  image?: string;
  hoverLogo?: string;
  hoverLabel?: string;
  alt: string;
  shape: CaseFormat;
  priority?: boolean;
  sizes?: string;
}) {
  const criticalAsset = useCriticalAsset();
  const resolveRef = useRef<(() => void) | null>(null);
  const registeredRef = useRef(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!priority || !image || registeredRef.current) return;
    registeredRef.current = true;
    let resolveLoad!: () => void;
    const loadPromise = new Promise<void>((resolve) => {
      resolveLoad = resolve;
    });
    resolveRef.current = resolveLoad;
    criticalAsset?.registerCriticalAsset(`case-visual:${image}`, loadPromise);
    if (loadedRef.current) {
      resolveLoad();
      resolveRef.current = null;
    }
  }, [criticalAsset, image, priority]);

  const handleLoad = () => {
    loadedRef.current = true;
    resolveRef.current?.();
    resolveRef.current = null;
  };

  return (
    <div className={`group relative overflow-hidden bg-zinc-950 ${shapeClass(shape)}`}>
      {shape === "platform" && !image ? (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(225,29,72,0.16),transparent_34%),linear-gradient(145deg,#141414,#050505)] p-5 transition-opacity duration-300"
          role="img"
          aria-label={alt}
        >
          <div className="h-full rounded border border-white/10 bg-black/45 shadow-2xl shadow-black/40">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            </div>
            <div className="grid h-[calc(100%-2rem)] grid-cols-[0.34fr_1fr] gap-4 p-4">
              <div className="space-y-2 border-r border-white/10 pr-4">
                <div className="h-2 w-12 rounded-full bg-white/30" />
                <div className="h-2 w-16 rounded-full bg-white/10" />
                <div className="h-2 w-10 rounded-full bg-white/10" />
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded bg-white/10" />
                  <div className="h-12 rounded bg-white/10" />
                  <div className="h-12 rounded bg-[var(--accent)]/30" />
                </div>
                <div className="h-20 rounded bg-white/10" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 rounded bg-white/10" />
                  <div className="h-10 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : shape === "square" || !image ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_74%_28%,rgba(225,29,72,0.22),transparent_32%),linear-gradient(135deg,#1b1b1b,#050505)] transition-opacity duration-300"
          role="img"
          aria-label={alt}
        >
          <div className="text-center">
            <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              OFFICE<span className="text-[var(--accent)]">6</span>
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Visual system
            </p>
          </div>
        </div>
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          onLoad={handleLoad}
          className={
            shape === "platformPortrait"
              ? "object-cover transition-opacity duration-700"
              : "object-cover transition-[opacity,transform] duration-700 group-hover:scale-[1.025]"
          }
          sizes={sizes}
        />
      )}
      {hoverLabel && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-[background-color,opacity] duration-300 group-hover:bg-black/65 group-hover:opacity-100"
          aria-hidden
        >
          {hoverLogo ? (
            <Image
              src={hoverLogo}
              alt=""
              width={520}
              height={220}
              className="max-h-[34%] max-w-[62%] object-contain"
            />
          ) : (
            <p className="max-w-[80%] text-center text-2xl font-semibold leading-none tracking-tight text-white md:text-4xl">
              {hoverLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
