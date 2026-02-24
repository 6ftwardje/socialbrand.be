import { methodSteps } from "@/lib/content";

export default function ProcesSectie() {
  return (
    <section
      id="proces"
      className="w-full py-16 md:py-24 border-t border-zinc-800/50"
      aria-labelledby="proces-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="proces-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4"
        >
          Hoe het werkt
        </h2>
        <p className="text-lg text-zinc-400 font-medium max-w-2xl mb-12">
          Van intake tot publicatie: voorspelbaar en helder.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {methodSteps.map((step, i) => (
            <div key={i} className="relative">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/20 text-sm font-bold text-[var(--accent)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-zinc-400">{step.description}</p>
              {i < methodSteps.length - 1 && (
                <div
                  className="hidden md:block absolute top-5 left-[calc(2rem+24px)] w-[calc(100%-3rem)] h-0.5 bg-zinc-700 -z-10"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
