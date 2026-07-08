import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedMuxVideo from "@/components/home/FeaturedMuxVideo";

const CELSIUS_SUPERCUT_PLAYBACK_ID = "PdHJXJUKzwVDAM613xkEoZ7WypQsVXXRM01NZiJKJa4M";

export default function FeaturedCelsiusCase() {
  return (
    <section
      id="featured-celsius-case"
      className="grid grid-cols-1 bg-[var(--surface)] lg:grid-cols-2"
      aria-labelledby="featured-celsius-case-heading"
    >
      <FeaturedMuxVideo
        playbackId={CELSIUS_SUPERCUT_PLAYBACK_ID}
        title="Celsius super cut"
        showAudioToggle
      />

      <div className="flex flex-col justify-center px-5 py-8 md:px-6 md:py-12 lg:aspect-[4/3] lg:min-h-0 lg:px-10 lg:py-8 xl:px-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-3 text-base font-medium leading-relaxed text-[var(--foreground-muted)] md:text-lg lg:h-full lg:max-w-[38rem] lg:gap-4 xl:gap-5">
          <Image
            src="/cases/celsius/logo.webp"
            alt="Celsius"
            width={1000}
            height={315}
            className="h-auto w-44 object-contain brightness-0 md:w-56 xl:w-60"
            sizes="(max-width: 767px) 176px, (max-width: 1279px) 224px, 240px"
          />

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--accent)]">
              Uitgelichte case
            </p>
            <h2
              id="featured-celsius-case-heading"
              className="text-[clamp(1.9rem,7.5vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-4xl lg:text-[clamp(2rem,3.1vw,3rem)]"
            >
              Een herkenbare eventstijl die verder ging dan losse aftermovies.
            </h2>
          </div>

          <p>
            Voor Celsius maakten we social-first campagnes rond hun events in Gent.
            De 4:3 beeldtaal werd een herkenbaar onderdeel van hun marketing en
            hielp mee om meerdere edities uit te verkopen.
          </p>

          <p className="text-base font-semibold leading-relaxed text-[var(--foreground)]">
            Bijna 200k organische views, meerdere uitverkochte events en een
            contentstijl die meteen van Celsius voelde.
          </p>

          <div className="pt-1">
            <Link
              href="/cases/celsius"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:w-fit"
            >
              Bekijk de volledige case
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
