const EXPECTATIONS = [
  "Een duidelijk verhaal en herkenbare contentlijn",
  "Creatives en campagnes die elkaar versterken",
  "Minder ad-hoc werk, meer strategie en ritme",
  "Digitale flows die leads, intake of conversie ondersteunen",
];

const PHASES = [
  { month: "Stap 1", label: "Strategie" },
  { month: "Stap 2", label: "Build" },
  { month: "Stap 3", label: "Optimalisatie" },
];

export default function Resultaat90() {
  return (
    <section
      id="resultaat-90"
      className="w-full py-16 md:py-24 bg-zinc-950/80"
      aria-labelledby="resultaat-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="resultaat-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Wat je mag verwachten
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 font-medium">
          We bouwen geen losse marketingassets, maar een systeem waarin content, media en platformen samen vooruitgaan.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-3 text-lg font-medium text-zinc-300">
            {EXPECTATIONS.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              Werkwijze
            </p>
            <div className="flex gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
              {PHASES.map((phase, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="block text-xs text-zinc-500">{phase.month}</span>
                  <span className="font-semibold text-white">{phase.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
