export default function SocialProofMicro() {
  const bullets = [
    "Value-based content—geen lege viral hacks",
    "Longform first: podcast en video die autoriteit opbouwen",
    "Human-first: jij als expert, niet alleen je merk",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="sr-only">
        Waarom SocialBrand
      </h2>
      <ul className="mx-auto max-w-2xl space-y-3 text-zinc-300 md:text-lg">
        {bullets.map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:max-w-3xl md:mx-auto">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">Voor wie</h3>
          <p className="mt-2 text-zinc-400">
            Coaches en course-builders, gezonde merken, vastgoedbedrijven. Min. €10k/maand omzet. Je wilt gezien worden als expert en je persoonlijk merk versterken.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Niet voor wie</h3>
          <p className="mt-2 text-zinc-500">
            Wie alleen aftermovies of one-off campagnes zoekt. Wij focussen op consistent value-based content en thought leadership, geen eenmalige productlancering.
          </p>
        </div>
      </div>
    </section>
  );
}
