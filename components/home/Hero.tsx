"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { useCriticalAsset } from "@/components/CriticalAssetsProvider";
import Office6Text from "@/components/ui/Office6Text";
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
      className="relative -mt-20 flex min-h-[calc(100svh-5rem)] w-full flex-col justify-end overflow-hidden pt-20 md:min-h-[calc(100svh-4rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 min-h-full w-full" aria-hidden>
        {/* Hidden image loads poster so critical asset resolves on poster load, not video */}
        <Image
          src={HERO_IMAGE_URL}
          alt=""
          fill
          className="object-cover opacity-0 pointer-events-none"
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          onLoad={handleLoadingComplete}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
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
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_38%,rgba(0,0,0,0.34)_68%,rgba(0,0,0,0.18)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.10)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.12)_42%,#0a0a0a_100%)]" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-10 pt-24 md:px-6 md:pb-16 lg:px-8">
        <div className="homepage-hero-content max-w-3xl text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            <Office6Text>Office6</Office6Text>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold leading-[0.96] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            Websites, content en platformen voor merken die serieus willen groeien.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-zinc-200 md:text-xl">
            We vertalen je verhaal naar digitale systemen die vertrouwen bouwen:
            van video en campagnes tot websites, cases en leerplatformen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cases"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Bekijk cases
            </Link>
            <Link
              href="/intake"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 bg-black/25 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-white/55 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Plan een gesprek
            </Link>
          </div>
          <p className="mt-8 max-w-2xl border-t border-white/15 pt-5 text-sm font-medium leading-relaxed text-zinc-400">
            Selected work: Cryptoriez · Coachedby Academy · SIMCenter Brugge · Auto Viger
          </p>
        </div>
      </div>
    </section>
  );
}
