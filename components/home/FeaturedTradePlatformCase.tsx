import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedTradePlatformCase() {
  return (
    <section
      id="featured-trade-platform-case"
      className="grid grid-cols-1 border-t border-[var(--border-subtle)] bg-[var(--background)] lg:grid-cols-2"
      aria-labelledby="featured-trade-platform-case-heading"
    >
      <div className="flex flex-col justify-center px-5 py-16 md:px-6 md:py-20 lg:aspect-[4/3] lg:min-h-0 lg:px-10 lg:py-8 xl:px-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-4 text-base font-medium leading-relaxed text-[var(--foreground-muted)] md:text-lg lg:h-full lg:max-w-[38rem] lg:gap-4 xl:gap-5">
          <Image
            src="/cases/het-trade-platform/logo-dark.png"
            alt="Het Trade Platform logo"
            width={1917}
            height={325}
            className="h-auto w-52 object-contain md:w-72 xl:w-80"
            sizes="(max-width: 767px) 208px, (max-width: 1279px) 288px, 320px"
          />

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--accent)]">
              Uitgelichte case
            </p>
            <h2
              id="featured-trade-platform-case-heading"
              className="text-[clamp(1.9rem,7.5vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-4xl lg:text-[clamp(2rem,3.1vw,3rem)]"
            >
              Een leerplatform dat videocontent omzet in een schaalbare opleiding.
            </h2>
          </div>

          <p>
            Voor Het Trade Platform bouwden we de videocourse, de leeromgeving en
            de contentbasis die nodig was om studenten centraal te begeleiden.
          </p>

          <p className="text-base font-semibold leading-relaxed text-[var(--foreground)]">
            140+ actieve gebruikers, modules met examens en een platformervaring
            die de perceived value van de opleiding verhoogt.
          </p>

          <div className="pt-1">
            <Link
              href="/cases/het-trade-platform"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              Bekijk de volledige case
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="group relative aspect-[4/3] min-h-[240px] w-full overflow-hidden bg-zinc-950 lg:min-h-0">
        <Image
          src="/cases/het-trade-platform/platform-modules-mockup.webp"
          alt="Het Trade Platform leerplatform op een laptop"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
