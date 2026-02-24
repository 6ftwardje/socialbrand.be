"use client";

import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/podcaststudio-15.webp";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden -mt-20 pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
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
