import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Over ons | SocialBrand",
  description:
    "SocialBrand: mensen volgen mensen. Human-first, dan pas merk. Waarden: authenticiteit, eerlijke feedback, ontzorging.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Over ons
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Wij geloven dat mensen mensen volgen—niet logo&apos;s. Eerst human-first, dan pas merk.
        </p>
      </section>

      <Section title="Visie" id="visie">
        <p className="max-w-2xl text-zinc-400">
          Te veel ondernemers posten via het merk-account en blijven product- of dienstgericht. Het resultaat: weinig autoriteit en weinig vertrouwen. Wij helpen je om als expert en thought leader naar voren te treden. Jouw gezicht, jouw verhaal, jouw inzichten—en pas daarna je merk. Dat is hoe je een persoonlijk merk opbouwt dat schaalt.
        </p>
      </Section>

      <Section title="Waarom dit werkt" id="waarom">
        <p className="max-w-2xl text-zinc-400">
          Consumenten en B2B-klanten zoeken verbinding en betrouwbaarheid. Value-based content en longform (podcast, video) positioneren je als de expert. Geen eenmalige campagnes—wel consistentie. Daarom vragen we een commitment van minimaal 3 maanden: dan zie je het verschil.
        </p>
      </Section>

      <Section title="Onze waarden" id="waarden">
        <ul className="max-w-2xl space-y-4 text-zinc-400">
          <li>
            <strong className="text-zinc-300">Authenticiteit.</strong> Geen tone-of-voice die niet bij je past. We halen jouw verhaal naar boven en versterken het.
          </li>
          <li>
            <strong className="text-zinc-300">Eerlijke feedback.</strong> We zeggen wat we denken. Als iets niet werkt, zeggen we het—zodat we samen het beste resultaat halen.
          </li>
          <li>
            <strong className="text-zinc-300">Ontzorging.</strong> Jij levert input aan; wij nemen productie en planning uit handen. Geen gedoe—wel duidelijkheid en ritme.
          </li>
        </ul>
      </Section>

      <CTASection />
    </>
  );
}
