export default function SocialProofMicro() {
  const bullets = [
    "Value-based content, geen lege viral hacks",
    "Longform first: podcast en video voor autoriteit",
    "Human-first: jij als expert",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-zinc-950/80 border-t border-zinc-800/50" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 id="proof-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-10">
          Waarom SocialBrand
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
            <p className="mt-2 text-zinc-400 font-medium">Coaches, gezonde merken, vastgoed. Min. €10k/maand. Je wilt gezien worden als expert.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Niet voor wie</h3>
            <p className="mt-2 text-zinc-500 font-medium">Alleen aftermovies of one-offs. Wij doen consistent value-based content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
