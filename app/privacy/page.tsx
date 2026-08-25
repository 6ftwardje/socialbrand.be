import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacybeleid | Office6",
  description: "Lees hoe Office6 persoonsgegevens verwerkt via de website, intakeformulieren en digitale communicatie.",
};

const sections = [
  {
    title: "Welke gegevens we verwerken",
    body: [
      "Wanneer je het contact- of intakeformulier invult, verwerken we de informatie die je zelf doorgeeft. Dat kan onder meer gaan om je naam, e-mailadres, telefoonnummer, bedrijfsinformatie, website, marketingcontext en je antwoorden op de intakevragen.",
      "Daarnaast kunnen onze technische leveranciers beperkte gegevens ontvangen die nodig zijn om de website, formulieren, afbeeldingen en video’s te laden, zoals je IP-adres, browsertype en tijdstip van je bezoek.",
    ],
  },
  {
    title: "Waarom we die gegevens gebruiken",
    body: [
      "We gebruiken je gegevens om je aanvraag te beantwoorden, een kennismakingsgesprek voor te bereiden, een mogelijke samenwerking te beoordelen en onze communicatie en dienstverlening te organiseren.",
      "We gebruiken je contactgegevens niet voor ongevraagde nieuwsbrieven. Als we later marketingmails versturen, vragen we daarvoor afzonderlijk toestemming en kan je je altijd uitschrijven.",
    ],
  },
  {
    title: "Leveranciers en doorgifte",
    body: [
      "Voor de werking van de site gebruiken we gespecialiseerde leveranciers, onder meer voor hosting, formulierverwerking, bestandsopslag en videoweergave. Zij verwerken gegevens alleen voor hun technische opdracht en volgens hun eigen beveiligings- en privacyvoorwaarden.",
      "Intakeformulieren worden primair opgeslagen in een private Google Sheet en daarnaast via Formspree als operationele e-mailbackup verwerkt. Beeldmateriaal kan via Supabase worden geladen en video’s via Mux. Sommige leveranciers kunnen gegevens buiten de Europese Economische Ruimte verwerken en gebruiken daarvoor passende waarborgen.",
    ],
  },
  {
    title: "Cookies en analytics",
    body: [
      "Google Analytics is momenteel niet actief op office6.be. De website kan wel strikt noodzakelijke technische opslag gebruiken om onderdelen correct te laten werken. Externe media, zoals videospelers, kunnen bij het laden technische verbindingsgegevens ontvangen.",
      "Wanneer we later analytics of marketingtechnologie toevoegen, passen we dit beleid aan en vragen we waar nodig eerst je keuze via een toestemmingsbanner.",
    ],
  },
  {
    title: "Bewaartermijn en beveiliging",
    body: [
      "We bewaren persoonsgegevens niet langer dan nodig voor de aanvraag, samenwerking en wettelijke of administratieve verplichtingen. Gegevens van aanvragen die niet tot een samenwerking leiden, worden periodiek verwijderd.",
      "We nemen redelijke technische en organisatorische maatregelen om gegevens te beschermen. Geen enkele online overdracht of opslag kan echter volledig risicoloos worden gemaakt.",
    ],
  },
  {
    title: "Je rechten",
    body: [
      "Je kan vragen welke persoonsgegevens we over je hebben, onjuiste gegevens laten verbeteren en in de toepasselijke gevallen vragen om verwijdering, beperking, overdracht of bezwaar tegen de verwerking.",
      "Stuur je verzoek naar hello@office6.be. We kunnen bijkomende informatie vragen om je identiteit te controleren. Je kan ook contact opnemen met de bevoegde gegevensbeschermingsautoriteit.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article className="bg-[var(--background)] px-5 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
        <header className="mt-12 max-w-4xl border-t border-[var(--border-subtle)] pt-10 md:pt-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Privacy</p>
          <h1 className="mt-5 text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--foreground)]">
            Helder over je gegevens.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[var(--foreground-muted)] md:text-lg">
            Office6 verwerkt alleen gegevens die nodig zijn om de website te laten werken, aanvragen te beantwoorden en samenwerkingen uit te voeren.
          </p>
          <p className="mt-4 text-sm text-[var(--foreground-muted)]">Laatst bijgewerkt op 25 augustus 2026.</p>
        </header>

        <div className="mt-16 grid gap-12 md:grid-cols-[minmax(12rem,0.32fr)_minmax(0,0.68fr)] md:gap-20">
          <aside className="md:sticky md:top-28 md:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Verantwoordelijke</p>
            <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">Office6</p>
            <a className="mt-1 inline-block text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]" href="mailto:hello@office6.be">
              hello@office6.be
            </a>
          </aside>

          <div className="border-t border-[var(--border-subtle)]">
            {sections.map((section, index) => (
              <section key={section.title} className="grid gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[3rem_1fr] md:gap-8 md:py-10">
                <span className="text-xs font-bold text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)] md:text-2xl">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--foreground-muted)] md:text-base">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border-subtle)] pt-8">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--foreground-muted)]">
            Heb je een vraag over dit beleid? Mail naar <a className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]" href="mailto:hello@office6.be">hello@office6.be</a> of ga naar de <Link className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]" href="/contact">contactpagina</Link>.
          </p>
        </div>
      </div>
    </article>
  );
}
