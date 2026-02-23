import Link from "next/link";
import Section from "@/components/ui/Section";

const BULLETS = [
  "Long-form content die je positioneert als expert",
  "Podcasts + krachtige short-form clips",
  "Meerdere posts per week met duidelijke messaging",
  "Een consistente visuele en inhoudelijke identiteit",
  "Content die vertrouwen én conversie opbouwt",
];

export default function Traject90() {
  return (
    <Section
      title="Van ondernemer naar thought leader in 90 dagen."
      subtitle="Geen losse posts. Geen willekeurige content. Een strategisch opgebouwde zichtbaarheid."
      id="traject-90"
      fullWidth
    >
      <ul className="max-w-2xl space-y-4 text-lg text-zinc-300 font-medium">
        {BULLETS.map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xl text-white font-semibold">
        In 3 maanden bouw je een personal brand die voor je werkt. Niet alleen bereik. Maar autoriteit.
      </p>
      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
        >
          Start jouw traject
        </Link>
      </div>
    </Section>
  );
}
