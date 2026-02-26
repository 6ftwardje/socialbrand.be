"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { useCriticalAsset } from "@/components/CriticalAssetsProvider";
import { HERO_IMAGE_URL } from "@/lib/critical-assets";

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
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden -mt-20 pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 min-h-[90vh]" aria-hidden>
        <Image
          src={HERO_IMAGE_URL}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          onLoadingComplete={handleLoadingComplete}
        />
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
          In 2025 zijn gezichten even belangrijk als logo&apos;s.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto">
          Je publiek wil verbinden met mensen. Niet met een merk.
        </p>
        <div className="mt-10">
          <Link
            href="/intake"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Plan een strategiegesprek
          </Link>
        </div>
      </div>
    </section>
  );
}
