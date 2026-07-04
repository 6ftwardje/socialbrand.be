"use client";

const SEGMENTS: {
  id: string;
  title: string;
  description: string;
  badge?: string;
}[] = [
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Je wilt een herkenbare contentbasis: strategie, formats, productie, editing en planning.",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    badge: "Meest gekozen",
    description:
      "Je wilt content koppelen aan campagnes, testing, funnels en duidelijke commerciële learnings.",
  },
  {
    id: "custom-platforms",
    title: "Custom Platforms",
    description:
      "Je wilt een website, landing page, intakeflow, dashboard of platform dat je groei ondersteunt.",
  },
];

export default function Segmentatie() {
  function scrollToPakketten() {
    document.getElementById("pakketten")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="segmentatie"
      className="w-full py-16 md:py-24"
      aria-labelledby="segmentatie-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="segmentatie-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4"
        >
          Welke pijler past bij jou?
        </h2>
        <p className="text-lg text-zinc-400 font-medium max-w-2xl mb-12">
          Kies op basis van je doel: content bouwen, campagnes opschalen of een digitaal systeem ontwikkelen.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((seg) => (
            <button
              key={seg.id}
              type="button"
              onClick={scrollToPakketten}
              className="text-left rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600 hover:bg-zinc-900/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              {seg.badge && (
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2">
                  {seg.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{seg.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{seg.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)]">
                Bekijk dienst →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
