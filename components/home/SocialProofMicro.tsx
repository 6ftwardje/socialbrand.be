import Office6Text from "@/components/ui/Office6Text";

export default function SocialProofMicro() {
  const bullets = [
    "Content met strategie, geen losse formats",
    "Performance marketing die leert uit echte data",
    "Human-first: merk, team en klantverhaal centraal",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-zinc-950/80" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 id="proof-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-10">
          Waarom <Office6Text>Office6</Office6Text>
        </h2>
        <ul className="max-w-2xl space-y-4 text-lg md:text-xl text-zinc-300 font-medium">
          {bullets.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-3xl">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Voor wie</h3>
            <p className="mt-2 text-zinc-400 font-medium">Merken met ambitie, een duidelijk aanbod en nood aan content, campagnes of digitale systemen.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Niet voor wie</h3>
            <p className="mt-2 text-zinc-500 font-medium">Losse assets zonder strategie. Wij bouwen liever een systeem dat je merk vooruithelpt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
