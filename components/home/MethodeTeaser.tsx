import Link from "next/link";
import { methodSteps } from "@/lib/content";

export default function MethodeTeaser() {
  return (
    <section className="w-full py-16 md:py-24 bg-zinc-950/80 border-t border-zinc-800/50" id="methode-teaser">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12">
          De methode in 3 stappen
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {methodSteps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 flex flex-col"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-lg font-bold text-[var(--accent)]">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white md:text-2xl">{step.title}</h3>
              <p className="mt-2 text-zinc-400 font-medium">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 aspect-video w-full max-w-4xl mx-auto rounded-xl bg-zinc-800/80 flex items-center justify-center text-zinc-500 text-sm uppercase tracking-wider border border-zinc-700/50">
          Video placeholder – methode / behind the scenes
        </div>
        <p className="mt-10 text-center">
          <Link href="/methode" className="text-base font-bold text-[var(--accent)] hover:underline">
            Lees onze methode →
          </Link>
        </p>
      </div>
    </section>
  );
}
