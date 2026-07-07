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
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
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
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-center"
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
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.56)_42%,rgba(0,0,0,0.18)_78%,rgba(0,0,0,0.06)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.42)_34%,rgba(0,0,0,0.08)_72%,rgba(0,0,0,0.02)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.06)_42%,rgba(0,0,0,0.70)_100%)] md:bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.62)_100%)]" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-end px-5 pb-10 pt-28 md:px-6 md:pb-14 lg:px-8">
        <div className="homepage-hero-content max-w-xl text-left">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
            <Office6Text>Office6</Office6Text>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(2.25rem,10.5vw,2.75rem)] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-[3.5rem] md:leading-[0.98] lg:text-[3.9rem]"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            Websites, content en platformen voor merken die serieus willen groeien.
          </h1>
          <p className="mt-5 max-w-lg text-[0.95rem] font-medium leading-relaxed text-white/76 md:text-base">
            We vertalen je verhaal naar digitale systemen die vertrouwen bouwen:
            van video en campagnes tot websites, cases en leerplatformen.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cases"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Bekijk cases
            </Link>
            <Link
              href="/intake"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-black/10 px-5 py-3 text-sm font-bold text-white/88 backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Plan een gesprek
            </Link>
          </div>
          <p className="mt-7 max-w-lg border-t border-white/12 pt-4 text-xs font-medium leading-relaxed text-white/52">
            Selected work: Cryptoriez · Coachedby Academy · SIMCenter Brugge · Auto Viger
          </p>
        </div>
      </div>
    </section>
  );
}
