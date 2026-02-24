"use client";

import Link from "next/link";
import { useState } from "react";

/** Vervang door je eigen Vimeo video-ID (uit de Vimeo URL: vimeo.com/123456789 → 123456789) */
const VIMEO_VIDEO_ID = "123456789";

export default function IntroVideoSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section
      id="intro-video"
      className="grid grid-cols-1 lg:grid-cols-2 w-full border-t border-zinc-800/50 bg-zinc-950/80 min-h-0"
      aria-labelledby="intro-video-heading"
    >
      {/* Video – linkerkant (gespiegeld t.o.v. Positionering: daar is beeld rechts) */}
      <div
        className="relative min-h-[200px] w-full aspect-video lg:min-h-0"
        aria-hidden
      >
        {videoPlaying ? (
          <iframe
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1`}
            title="SocialBrand: hoe het werkt, wie we zijn en wat de bedoeling is"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setVideoPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            aria-label="Video afspelen: hoe het werkt, wie we zijn en wat de bedoeling is"
          >
            <div
              className="absolute inset-0 bg-zinc-800/60 group-hover:bg-zinc-800/80 transition-colors duration-200"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-2 text-zinc-400 group-hover:text-white transition-colors duration-200">
              <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[var(--accent)]/90 text-white shadow-lg group-hover:bg-[var(--accent)] group-hover:opacity-100 group-hover:scale-110 transition-all duration-200 opacity-95">
                <svg className="h-6 w-6 md:h-7 md:w-7 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
              <span className="text-sm font-medium">Bekijk de video</span>
            </div>
          </button>
        )}
      </div>
      {/* Tekst – rechterkant,zelfde stijl/hiërarchie als Positionering */}
      <div className="flex flex-col justify-center px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:pr-12 xl:pr-16">
        <div className="mx-auto w-full max-w-2xl space-y-6 text-lg font-medium text-zinc-400 md:text-xl">
          <h2 id="intro-video-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Hoe het werkt
          </h2>
          <p>
            In deze video leggen we kort uit wie we zijn, hoe we te werk gaan en wat de bedoeling is.
          </p>
          <p className="font-semibold text-white">
            Jouw verhaal, jouw gezicht — wij maken er content van die opvalt.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              Plan een strategiegesprek
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
