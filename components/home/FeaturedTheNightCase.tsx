import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { officeCases } from "@/lib/office-cases";
import FeaturedMuxVideo from "@/components/home/FeaturedMuxVideo";

const THE_NIGHT_FEATURED_PLAYBACK_ID = "02YKHiSHfn00xg3U3hcitHQNhxGlwa1aB00y744kJcPWA4";

function getTheNightCase() {
  const item = officeCases.find((entry) => entry.slug === "the-night");
  if (!item) throw new Error("Missing case data for the-night");
  return item;
}

const theNightCase = getTheNightCase();

export default function FeaturedTheNightCase() {
  return (
    <section
      id="featured-the-night-case"
      className="grid grid-cols-1 bg-zinc-950 lg:grid-cols-2"
      aria-labelledby="featured-the-night-case-heading"
    >
      <FeaturedMuxVideo
        playbackId={THE_NIGHT_FEATURED_PLAYBACK_ID}
        title="The Night 2.0 uitgelicht"
      />

      <div className="flex flex-col justify-center px-5 py-8 md:px-6 md:py-12 lg:aspect-[4/3] lg:min-h-0 lg:px-10 lg:py-8 xl:px-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-3 text-base font-medium leading-relaxed text-zinc-300 md:text-lg lg:h-full lg:max-w-[38rem] lg:gap-4 xl:gap-5">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--accent)]">
              Uitgelichte case
            </p>
            <h2
              id="featured-the-night-case-heading"
              className="text-[clamp(1.9rem,7.5vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-[clamp(2rem,3.1vw,3rem)]"
            >
              The Night 2.0
            </h2>
          </div>

          <p>{theNightCase.challenge}</p>

          <p className="text-base font-semibold leading-relaxed text-white">
            {theNightCase.approach}
          </p>

          <div className="pt-1">
            <Link
              href="/cases/the-night"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-fit"
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
