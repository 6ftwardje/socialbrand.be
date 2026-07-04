"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { useCriticalAsset } from "@/components/CriticalAssetsProvider";
import {
  HERO_IMAGE_URL,
  HERO_VIDEO_MP4_URL,
  HERO_VIDEO_URL,
} from "@/lib/critical-assets";

export default function Hero() {
  const registerCriticalAsset = useCriticalAsset()?.registerCriticalAsset;
  const resolveRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    if (!registerCriticalAsset) return;
    const promise = new Promise<void>((resolve) => {
      resolveRef.current = resolve;
    });
    registerCriticalAsset("hero-image", promise);
  }, [registerCriticalAsset]);

  const handleLoadingComplete = () => {
    resolveRef.current?.();
    resolveRef.current = null;
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-20 pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 min-h-screen w-full" aria-hidden>
        {/* Hidden image loads poster so critical asset resolves on poster load, not video */}
        <Image
          src={HERO_IMAGE_URL}
          alt=""
          fill
          className="object-cover opacity-0 pointer-events-none"
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          onLoadingComplete={handleLoadingComplete}
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster={HERO_IMAGE_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HERO_VIDEO_MP4_URL} type="video/mp4" />
          <source src={HERO_VIDEO_URL} type="video/quicktime" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1
          id="hero-heading"
          className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
          Office6
        </h1>
        <p className="mt-6 text-xl font-semibold text-white md:text-2xl">
          Content creation. Performance marketing. Custom platforms.
        </p>
        <p className="mt-5 text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto">
          We bouwen content, campagnes en digitale systemen voor merken die menselijker willen communiceren en meetbaar willen groeien.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/intake"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Plan een strategiegesprek
          </Link>
          <a
            href="https://wa.me/32485714104?text=Hey%20Office6%2C%20ik%20wil%20weten%20wat%20jullie%20kunnen%20betekenen%20voor%20onze%20content%2C%20campagnes%20of%20platformen."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white border border-neutral-700 px-6 py-4 text-base font-bold hover:bg-[#2ad366] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 shrink-0" aria-hidden>
              <path fill="currentColor" d="M16.04 2C8.84 2 3 7.82 3 15c0 2.65.78 5.11 2.13 7.17L3 30l7.98-2.08A12.9 12.9 0 0016.04 28C23.24 28 29 22.18 29 15S23.24 2 16.04 2zm0 23.64c-2.16 0-4.18-.63-5.88-1.72l-.42-.27-4.73 1.23 1.26-4.61-.28-.47A10.54 10.54 0 015.5 15c0-5.8 4.73-10.52 10.54-10.52 5.8 0 10.52 4.72 10.52 10.52s-4.72 10.64-10.52 10.64zm5.77-7.86c-.31-.16-1.82-.9-2.1-1s-.49-.16-.7.16-.8 1-1 1.21-.36.23-.67.08c-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.47.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.84.39s-1.1 1.08-1.1 2.63 1.13 3.04 1.29 3.25c.16.21 2.21 3.37 5.36 4.72.75.32 1.34.51 1.8.65.76.24 1.46.21 2.01.13.61-.09 1.82-.74 2.07-1.46.26-.72.26-1.34.18-1.46-.07-.12-.28-.2-.59-.36z"/>
            </svg>
            Chat op WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
