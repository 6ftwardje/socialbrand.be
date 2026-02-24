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
}

export default function CTASection({
  title = "Klaar om je merk te versterken?",
  subtitle = "Boek een call. We kijken of we bij elkaar passen.",
  paragraph,
  primaryCtaText = "Boek een call",
  primaryCtaHref = "/intake",
  showSecondaryLink = true,
}: CTASectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)]" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center md:p-12 lg:p-16">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-400 font-medium">{subtitle}</p>}
          {paragraph && <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400 font-medium">{paragraph}</p>}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={primaryCtaHref}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors sm:w-auto"
            >
              {primaryCtaText}
            </Link>
            {showSecondaryLink && (
              <Link
                href="/cases"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-zinc-600 px-8 py-4 text-base font-bold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors sm:w-auto"
              >
                Bekijk cases
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
