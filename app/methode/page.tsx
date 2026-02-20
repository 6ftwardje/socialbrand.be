import Link from "next/link";
import { methodSteps } from "@/lib/content";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Methode | SocialBrand",
  description:
    "Content Engine in 7 stappen: intake, story extraction, contentplan, shoots, edit, revisies, publicatie. Geen aftermovies—wel value-based thought leadership.",
};

export default function MethodePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Onze methode
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          De Content Engine is ons vaste proces: van intake tot vaste contentstroom. Geen eindeloze meetings—wel duidelijke stappen en asynchrone feedback.
        </p>
      </section>

      <Section title="Content Engine: 7 stappen" id="stappen">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Onboarding: week 1–2" id="onboarding">
        <div className="max-w-2xl space-y-4 text-zinc-400">
          <p>
            <strong className="text-zinc-300">Intake en workshop.</strong> We bepalen doel, doelgroep en key messages.
          </p>
          <p>
            <strong className="text-zinc-300">Story extraction interview.</strong> We halen je verhalen en expertise naar boven—de basis voor alle content.
          </p>
          <p>
            <strong className="text-zinc-300">Eerste shoot.</strong> Opnames in een rustige, professionele setting.
          </p>
          <p>
            <strong className="text-zinc-300">Planning.</strong> Contentkalender en ritme voor de komende maanden.
          </p>
        </div>
      </Section>

      <Section title="Feedback loop" id="feedback">
        <p className="max-w-2xl text-zinc-400">
          We sturen ruwe of eerste edits; jij geeft asynchroon feedback. Per item voorzien we maximaal twee revisierondes. Geen eindeloze syncs—wel duidelijke deadlines en eigenaarschap aan onze kant.
        </p>
      </Section>

      <Section title="Wat we niet doen" id="niet">
        <ul className="max-w-2xl list-inside list-disc space-y-2 text-zinc-400">
          <li><strong className="text-zinc-300">Geen aftermovies.</strong> Onze focus is value-based content en thought leadership.</li>
          <li><strong className="text-zinc-300">Geen lege viral hacks.</strong> Geen trucjes voor likes—wel inhoud die autoriteit opbouwt.</li>
        </ul>
      </Section>

      <CTASection />
    </>
  );
}
