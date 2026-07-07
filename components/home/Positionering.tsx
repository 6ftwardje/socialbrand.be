"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Office6Text from "@/components/ui/Office6Text";

const POSITIONERING_IMAGE =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/podcast_02.jpg";

export default function Positionering() {
  const hasImage = Boolean(POSITIONERING_IMAGE);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [highlightInView, setHighlightInView] = useState(false);

  useEffect(() => {
    const el = highlightRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setHighlightInView(!!entry?.isIntersecting);
      },
      { threshold: 0.5, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="positionering"
      className="grid w-full grid-cols-1 border-y border-[var(--border-subtle)] bg-[var(--surface)] lg:grid-cols-2"
      aria-labelledby="positionering-heading"
    >
      {/* Tekst – linkerkant met padding */}
      <div className="flex flex-col justify-center px-5 py-16 md:px-6 md:py-24 lg:px-8 lg:pl-12 xl:pl-16">
        <div className="mx-auto w-full max-w-2xl space-y-6 text-lg font-medium text-[var(--foreground-muted)] md:text-xl">
          <h2 id="positionering-heading" className="text-[clamp(2rem,8vw,2.35rem)] font-bold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
            <span ref={highlightRef} className={`positionering-highlight ${highlightInView ? "in-view" : ""}`}>Menselijke content</span> maakt merken sterker.
          </h2>
          <p>
            Een podcast geeft ondernemers en personal brands een plek om expertise,
            visie en vertrouwen op te bouwen zonder telkens opnieuw te moeten uitleggen
            waarom ze relevant zijn.
          </p>
          <p className="font-semibold text-[var(--foreground)]">
            <Office6Text>Office6</Office6Text> helpt met format, studio-opname en de korte clips die je verhaal
            verder brengen op social.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/cases/peak-performance-podcast"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              Bekijk podcastcase
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/intake"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] px-6 py-3 text-base font-bold text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/35 hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              Ontdek je podcastaanpak
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
      {/* Foto – rechterkant, volledige helft,zelfde hoogte/verhouding als voorheen (aspect 4/3) */}
      <div
        className="relative aspect-[4/3] min-h-[240px] w-full lg:min-h-0"
        aria-hidden
      >
        {hasImage ? (
          <Image
            src={POSITIONERING_IMAGE}
            alt="Menselijke contentproductie voor merken"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-zinc-800/40 text-sm font-medium text-zinc-500"
            role="img"
            aria-label="Plaatshouder voor illustratie"
          >
            Illustratie volgt
          </div>
        )}
      </div>
    </section>
  );
}
