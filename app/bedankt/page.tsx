import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Bedankt | Office6",
  description: "Je aanvraag is goed ontvangen. Office6 neemt binnen 24 uur contact met je op.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "We bekijken je antwoorden en de context van je merk.",
  "We nemen binnen 24 uur persoonlijk contact met je op.",
  "Tijdens de kennismaking bepalen we samen de juiste volgende stap.",
];

export default function ThankYouPage() {
  return (
    <section className="min-h-[78svh] bg-[var(--background)] px-5 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Bedankt" }]} />
        <div className="mt-12 grid gap-12 border-t border-[var(--border-subtle)] pt-10 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:gap-20 md:pt-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Aanvraag ontvangen</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--foreground)]">
              Dankjewel. We nemen binnen 24 uur contact op.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[var(--foreground-muted)] md:text-lg">
              Je antwoorden zijn veilig verstuurd. Je hoeft nu niets meer te doen; wij bereiden de kennismaking voor.
            </p>
          </div>

          <div className="md:pt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Wat gebeurt er nu?</p>
            <ol className="mt-5 border-t border-[var(--border-subtle)]">
              {nextSteps.map((step) => (
                <li key={step} className="flex gap-3 border-b border-[var(--border-subtle)] py-4 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href="/cases"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
            >
              Bekijk intussen onze cases
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
