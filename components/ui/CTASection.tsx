import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showContactForm?: boolean;
  children?: React.ReactNode;
}

export default function CTASection({
  title = "Klaar om je persoonlijk merk te versterken?",
  subtitle = "Boek een vrijblijvende call. We bespreken je situatie en of we bij elkaar passen.",
  showContactForm = false,
  children,
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24" aria-labelledby="cta-heading">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center md:p-12">
        <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-xl text-zinc-400 md:text-lg">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:w-auto"
          >
            Boek een call
          </Link>
          <Link
            href="/cases"
            className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-600 px-6 py-3 text-base font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:w-auto"
          >
            Bekijk cases
          </Link>
        </div>
        {showContactForm && children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
