import Link from "next/link";

const HERO_HEADLINE = "Van ondernemer naar erkende stem in jouw niche. In 90 dagen.";
const HERO_SUBHEAD =
  "Long-form content, podcasts en short-form distributie. Voor founders en bedrijven die hun gezicht centraal zetten.";
const CTA_SUBTEXT = "Kennismakingscall (±30 min). Geen verkooppraatje — we kijken of we bij elkaar passen.";
const FOR_WHO = "Voor ondernemers en bedrijven met min. €10k/maand omzet.";

export default function AanbodHero() {
  return (
    <section
      className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 text-center"
      aria-labelledby="aanbod-hero-heading"
    >
      <h1
        id="aanbod-hero-heading"
        className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        {HERO_HEADLINE}
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium">
        {HERO_SUBHEAD}
      </p>
      <p className="mt-4 text-sm text-zinc-500">{FOR_WHO}</p>
      <div className="mt-10">
        <Link
          href="/intake"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Boek een kennismakingscall
        </Link>
        <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">{CTA_SUBTEXT}</p>
      </div>
      <div id="aanbod-sticky-sentinel" className="h-0 w-full" aria-hidden />
    </section>
  );
}
