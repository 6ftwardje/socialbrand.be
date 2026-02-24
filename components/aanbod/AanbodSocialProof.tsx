import Link from "next/link";
import { cases } from "@/lib/content";

/** Eerste 3 cases als teaser; placeholder metrics tot er echte cijfers zijn. */
const CASE_TEASERS = cases.slice(0, 3);
const METRICS_PLACEHOLDER = "Founders in uiteenlopende niches.";

export default function AanbodSocialProof() {
  return (
    <section
      id="social-proof"
      className="w-full py-16 md:py-24 border-t border-zinc-800/50"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="social-proof-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4"
        >
          Wat we al deden
        </h2>
        <p className="text-lg text-zinc-400 font-medium max-w-2xl mb-10">
          {METRICS_PLACEHOLDER}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_TEASERS.map((c) => (
            <Link
              key={c.id}
              href={`/cases/${c.slug}`}
              className="block rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600 hover:bg-zinc-900/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
                {c.niche}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{c.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{c.result}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)]">
                Lees case →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/cases"
            className="text-base font-bold text-[var(--accent)] hover:underline"
          >
            Bekijk alle cases →
          </Link>
        </p>
      </div>
    </section>
  );
}
