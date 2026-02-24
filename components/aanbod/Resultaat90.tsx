const EXPECTATIONS = [
  "Een herkenbare stem in je niche",
  "Een stabiele stroom content die voor je werkt",
  "Minder ad-hoc, meer strategie en ritme",
  "Duidelijke voortgang en feedbackmomenten",
];

const PHASES = [
  { month: "Maand 1", label: "Fundament" },
  { month: "Maand 2", label: "Zichtbaarheid" },
  { month: "Maand 3", label: "Autoriteit" },
];

export default function Resultaat90() {
  return (
    <section
      id="resultaat-90"
      className="w-full py-16 md:py-24 border-t border-zinc-800/50 bg-zinc-950/80"
      aria-labelledby="resultaat-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="resultaat-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Wat je na 90 dagen mag verwachten
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 font-medium">
          Bij Authority en Leadership bouwen we in drie maanden aan een personal brand die voor je werkt.
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
              90 dagen in 3 fases
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
