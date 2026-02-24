"use client";

import Link from "next/link";
import { useState } from "react";

const BULLETS = [
  "Long-form content die je positioneert als expert",
  "Podcasts + krachtige short-form clips",
  "Meerdere posts per week met duidelijke messaging",
  "Een consistente visuele en inhoudelijke identiteit",
  "Content die vertrouwen én conversie opbouwt",
];

const PHASES = [
  { month: "Maand 1", label: "Fundament" },
  { month: "Maand 2", label: "Zichtbaarheid" },
  { month: "Maand 3", label: "Autoriteit" },
];

export default function Traject90() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const highlight = hoveredPhase ?? -1;

  return (
    <section
      id="traject-90"
      className="traject-90-bg relative w-full overflow-hidden border-t border-white/20 py-16 md:py-24"
      aria-labelledby="traject-90-title"
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="mb-8 md:mb-10">
          <h2
            id="traject-90-title"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Van ondernemer naar thought leader in 90 dagen.
          </h2>
          <p className="mt-3 md:mt-4 max-w-3xl text-lg font-medium text-white/90 md:text-xl">
            Geen losse posts. Geen willekeurige content. Een strategisch opgebouwde zichtbaarheid.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(200px,360px)] lg:items-start lg:gap-16">
          <div>
            <ul className="max-w-2xl space-y-2.5 text-lg font-medium text-white/95 md:space-y-3">
              {BULLETS.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="min-w-0 lg:pt-0"
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-white/70">
              90 dagen in 3 fases
            </p>
            <div className="flex h-2 gap-0.5 overflow-hidden rounded-full bg-white/20">
              {PHASES.map((_, i) => (
                <div
                  key={i}
                  role="img"
                  aria-label={`Fase ${i + 1}: ${PHASES[i].label}`}
                  className="h-full flex-1 cursor-default transition-colors duration-200"
                  style={{
                    backgroundColor: highlight === i ? "white" : "rgba(255,255,255,0.25)",
                  }}
                  onMouseEnter={() => setHoveredPhase(i)}
                />
              ))}
            </div>
            <div className="mt-2.5 grid grid-cols-3">
              {PHASES.map((phase, i) => (
                <div
                  key={i}
                  className="cursor-default text-center transition-opacity duration-200"
                  style={{ opacity: highlight === i ? 1 : 0.7 }}
                  onMouseEnter={() => setHoveredPhase(i)}
                >
                  <span className="block text-xs text-white/80">{phase.month}</span>
                  <span className="font-semibold text-white">{phase.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xl font-semibold text-white md:mt-10">
          In 3 maanden bouw je een personal brand die voor je werkt. Niet alleen bereik. Maar
          autoriteit.
        </p>
        <div className="mt-6 md:mt-8">
          <Link
            href="/intake"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-[var(--accent)] transition-colors hover:bg-zinc-100"
          >
            Start jouw traject
          </Link>
        </div>
      </div>
    </section>
  );
}
