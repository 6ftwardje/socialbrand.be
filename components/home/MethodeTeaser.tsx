import Link from "next/link";
import { methodSteps } from "@/lib/content";

export default function MethodeTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" id="methode-teaser">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        De Content Engine in 7 stappen
      </h2>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {methodSteps.slice(0, 7).map((step, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-sm font-bold text-[var(--accent)]">
              {i + 1}
            </span>
            <div>
              <span className="font-medium text-white">{step.title}</span>
              <p className="mt-0.5 text-sm text-zinc-400">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-center">
        <Link
          href="/methode"
          className="text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        >
          Lees onze methode →
        </Link>
      </p>
    </section>
  );
}
