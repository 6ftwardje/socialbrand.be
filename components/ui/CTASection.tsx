import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  /** Extra paragraph below subtitle */
  paragraph?: string;
  /** Primary CTA label (default: Boek een call) */
  primaryCtaText?: string;
  /** Primary CTA link (default: /intake) */
  primaryCtaHref?: string;
  /** Show secondary "Bekijk cases" link (default: true) */
  showSecondaryLink?: boolean;
  /** Short value bullets shown beside the CTA */
  items?: string[];
}

export default function CTASection({
  title = "Klaar om je merk te versterken?",
  subtitle = "Boek een call. We kijken of we bij elkaar passen.",
  paragraph,
  primaryCtaText = "Boek een call",
  primaryCtaHref = "/intake",
  showSecondaryLink = true,
  items = [
    "Content, campagnes en platform in één traject",
    "Strategie en uitvoering zonder losse freelancers aan te sturen",
    "Sneller testen wat werkt voor je merk en aanbod",
    "Assets die bruikbaar blijven voor sales, ads en socials",
  ],
}: CTASectionProps) {
  return (
    <section className="w-full bg-[var(--background)] py-16 md:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-lg border border-zinc-800 bg-zinc-950/80 px-6 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:items-center">
            <div>
              <h2
                id="cta-heading"
                className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-zinc-300 md:text-lg">
                  {subtitle}
                </p>
              )}
              {paragraph && (
                <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
                  {paragraph}
                </p>
              )}

              <Link
                href={primaryCtaHref}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto"
              >
                {primaryCtaText}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>

              {showSecondaryLink && (
                <Link
                  href="/cases"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-zinc-700 px-7 py-3.5 text-base font-bold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white sm:ml-3 sm:mt-8 sm:w-auto"
                >
                  Bekijk cases
                </Link>
              )}
            </div>

            <ul className="grid gap-3 text-sm font-semibold text-zinc-200 md:gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
