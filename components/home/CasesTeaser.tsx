"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { officeCases, type OfficeCase } from "@/lib/office-cases";

const FEATURED_CASE_SLUGS = [
  "celsius",
  "coachedby",
  "het-trade-platform",
  "auto-viger",
  "bloom",
];

const featuredCases: OfficeCase[] = FEATURED_CASE_SLUGS.flatMap((slug) => {
  const item = officeCases.find((entry) => entry.slug === slug);
  return item ? [item] : [];
});

export default function CasesTeaser() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(featuredCases.length > 1);

  const updateControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const nextIndex = itemRefs.current.reduce((closestIndex, item, index) => {
      if (!item) return closestIndex;
      const current = itemRefs.current[closestIndex];
      if (!current) return index;

      const currentDistance = Math.abs(current.offsetLeft - carousel.scrollLeft);
      const itemDistance = Math.abs(item.offsetLeft - carousel.scrollLeft);
      return itemDistance < currentDistance ? index : closestIndex;
    }, 0);

    setCurrentSlide(nextIndex);
    setCanScrollPrev(carousel.scrollLeft > 8);
    setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 8);
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    },
    []
  );

  useEffect(() => {
    updateControls();
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      carousel.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  return (
    <section
      id="cases-teaser"
      className="w-full overflow-hidden bg-[var(--background)] py-16 md:py-24"
      aria-labelledby="cases-teaser-title"
    >
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between gap-8 px-5 md:mb-14 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
            Cases
          </p>
          <h2
            id="cases-teaser-title"
            className="mt-3 text-[clamp(2rem,8vw,2.35rem)] font-bold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl"
          >
            Uitgelichte cases
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--foreground-muted)] md:text-lg">
            Bekijk hoe content, campagnes en platformen samenkomen in werk dat zichtbaar blijft bewegen.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollToSlide(Math.max(currentSlide - 1, 0))}
            disabled={!canScrollPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
            aria-label="Vorige case"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() =>
              scrollToSlide(Math.min(currentSlide + 1, featuredCases.length - 1))
            }
            disabled={!canScrollNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
            aria-label="Volgende case"
          >
            <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] md:px-6 lg:px-8 2xl:pl-[max(2rem,calc(50vw-640px))] 2xl:pr-[max(2rem,calc(50vw-640px))] [&::-webkit-scrollbar]:hidden"
        aria-label="Uitgelichte cases"
      >
        {featuredCases.map((item, index) => {
          if (!item) return null;

          return (
            <Link
              key={item.slug}
              href={`/cases/${item.slug}`}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className="group relative min-h-[25rem] w-[min(84vw,21rem)] shrink-0 snap-start overflow-hidden rounded-lg bg-zinc-950 outline-none ring-offset-2 ring-offset-[var(--background)] transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:min-h-[27rem] md:w-[23rem] lg:w-[25rem]"
            >
              {item.thumbnail.image ? (
                <Image
                  src={item.thumbnail.image}
                  alt={item.thumbnail.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 767px) 82vw, (max-width: 1023px) 368px, 400px"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(225,29,72,0.22),transparent_34%),linear-gradient(145deg,#171717,#050505)]"
                  aria-hidden
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 md:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  {item.category}
                </p>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-base leading-relaxed text-zinc-300">
                  {item.subtitle}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-[var(--accent)]">
                  Bekijk case
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-2 px-5">
        {featuredCases.map((item, index) => (
          <button
            key={item?.slug ?? index}
            type="button"
            onClick={() => scrollToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-[var(--accent)]" : "bg-[var(--border-subtle)]"
            }`}
            aria-label={`Ga naar case ${index + 1}`}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 md:px-6 lg:px-8">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-base font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          Bekijk alle cases
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
