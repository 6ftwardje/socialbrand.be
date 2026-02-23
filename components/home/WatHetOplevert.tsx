import Section from "@/components/ui/Section";

const ITEMS = [
  { label: "Vertrouwen", text: "Mensen kennen je voordat ze met je spreken." },
  { label: "Autoriteit", text: "Jij wordt de referentie in je niche." },
  { label: "Kansen", text: "Samenwerkingen, klanten, media, investeerders." },
  { label: "Consistente instroom", text: "Van warme leads." },
];

export default function WatHetOplevert() {
  return (
    <Section
      title="Personal branding die het verschil maakt."
      id="resultaat"
      fullWidth
      alt
    >
      <p className="max-w-2xl text-lg text-zinc-400 font-medium mb-12">
        Een sterke personal brand is meer dan zichtbaarheid.
      </p>
      <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-6">Het zorgt voor:</p>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
        {ITEMS.map((item, i) => (
          <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-lg font-bold text-white">{item.label}</h3>
            <p className="mt-2 text-zinc-400 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
