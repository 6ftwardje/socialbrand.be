import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Office6",
  description: "Deze pagina bestaat niet meer. Bekijk de cases en diensten van Office6.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[78svh] items-center bg-[var(--background)] px-5 pb-16 pt-32 md:px-6 md:pt-36">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">404</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,11vw,7.75rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-[var(--foreground)]">
          Deze pagina is uit beeld verdwenen.
        </h1>
        <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-[var(--foreground-muted)] md:text-lg">
          De link is verplaatst of bestaat niet meer. Ons werk en onze diensten staan gelukkig nog waar ze horen.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Terug naar home
          </Link>
          <Link
            href="/cases"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] px-6 text-sm font-bold text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/30 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
          >
            Bekijk cases
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
