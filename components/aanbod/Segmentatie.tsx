"use client";

const SEGMENTS: {
  id: string;
  title: string;
  description: string;
  badge?: string;
}[] = [
  {
    id: "launch",
    title: "Launch",
    description:
      "Je wilt professioneel van start. Eenmalige investering, duidelijke basis: positionering, één sterke long-form, clips en een 30-dagen roadmap.",
  },
  {
    id: "authority",
    title: "Authority",
    badge: "Meest gekozen",
    description:
      "Je wilt structureel groeien. Maandelijkse content-engine, herkenning en autoriteit. Min. 3 maanden — de sweet spot voor wie serieus wil investeren.",
  },
  {
    id: "leadership",
    title: "Leadership",
    description:
      "Je wilt marktleider worden. Meer long-form, meer clips, strategische sessies en positioneringscoaching. Voor wie het maximale wil.",
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
          Welk pakket past bij jou?
        </h2>
        <p className="text-lg text-zinc-400 font-medium max-w-2xl mb-12">
          Kies op basis van je doel: eenmalig lanceren, structureel groeien of marktleider worden.
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
                Bekijk pakket →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
