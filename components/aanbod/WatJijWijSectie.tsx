export default function WatJijWijSectie() {
  return (
    <section
      id="wat-jij-wij"
      className="w-full py-16 md:py-24 bg-zinc-950/80"
      aria-labelledby="wat-jij-wij-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="wat-jij-wij-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12"
        >
          Verwachtingen afstemmen
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-white">Wat jij aanlevert</h3>
            <p className="mt-3 text-zinc-400">
              Jij levert input: bestaande content, merkcontext, doelen, aanbod en inzichten uit je markt. Wij brengen structuur aan en bepalen wat nodig is voor content, campagnes of platform.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Wat wij doen</h3>
            <ul className="mt-3 space-y-2 text-zinc-400">
              <li>Strategie en positionering</li>
              <li>Contentconcepten, scripts en productie</li>
              <li>Campagne-opzet, testing en optimalisatie</li>
              <li>Websites, flows en platformonderdelen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
