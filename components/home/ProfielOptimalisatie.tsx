import Section from "@/components/ui/Section";

const BULLETS = [
  "Volledig geoptimaliseerde profielen",
  "Strategische bio en headline",
  "Contentstrategie afgestemd op jouw zakelijke doelen",
  "Begeleiding in hoe je interacties omzet in kansen",
];

export default function ProfielOptimalisatie() {
  return (
    <Section
      title="Jouw profiel is je etalage."
      id="profiel"
      fullWidth
    >
      <p className="max-w-2xl text-lg text-zinc-400 font-medium mb-10">
        Personal branding stopt niet bij content. We zorgen dat je LinkedIn en andere platformen je expertise uitstralen.
      </p>
      <ul className="max-w-2xl space-y-3 text-lg text-zinc-300 font-medium">
        {BULLETS.map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
    </Section>
  );
}
