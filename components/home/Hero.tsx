"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/HTP/socialbrand%20png.png";

const HERO_IMAGES = [
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/podcaststudio-15.webp",
];

const ROTATING_WORDS = ["thought leader", "expert", "persoonlijk merk", "founder-led"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const t = setInterval(() => {
      setImageIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center md:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Cycling background images */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === imageIndex ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <Image
          src={LOGO_URL}
          alt="SocialBrand"
          width={200}
          height={80}
          className="mx-auto mb-8 h-auto w-40 md:w-48"
          priority
        />
        <h1
          id="hero-heading"
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Word een <span className="text-[var(--accent)]">{ROTATING_WORDS[wordIndex]}</span>
          <br />
          in 90 dagen
        </h1>
        <p className="mt-4 text-lg text-zinc-300 md:text-xl">
          Value-based content en thought leadership. Geen virale hacks—wel consistent autoriteit voor coaches, gezonde merken en vastgoed.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-black/50"
          >
            Boek een call
          </Link>
          <Link
            href="/cases"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black/50"
          >
            Bekijk cases
          </Link>
        </div>
      </div>
    </section>
  );
}
