import Link from "next/link";
import { packages } from "@/lib/content";
import PackageCard from "@/components/ui/PackageCard";
import CTASection from "@/components/ui/CTASection";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Aanbod | SocialBrand",
  description:
    "Podcast Engine en Personal Brand Package. Value-based content en thought leadership in 90 dagen. Volledige ontzorging.",
};

export default function AanbodPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Aanbod
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          We werken met twee pakketten: Podcast Engine voor longform en clips, en het Personal Brand Package voor een mix van podcast, longform en standalone content. Beide vragen een commitment van minimaal 3 maanden.
        </p>
      </section>

      <Section id="pakketten">
        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} variant="full" />
          ))}
        </div>
      </Section>

      <Section title="Wat jij aanlevert">
        <p className="max-w-2xl text-zinc-400">
          Jij levert input aan: bestaande b-roll, foto&apos;s, oude content, en je verhaal. Tijdens de intake en het story extraction interview halen we de rest boven. Daarna nemen we de productie en planning uit handen—volledige ontzorging.
        </p>
      </Section>

      <Section title="Hoe snel resultaat">
        <p className="max-w-2xl text-zinc-400">
          We vragen een minimum van 3 maanden. Thought leadership en een sterk persoonlijk merk bouw je niet in een paar weken. Na de onboarding (week 1–2) draait de Content Engine; na 3 maanden zie je duidelijke resultaten in autoriteit en herkenning.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Boek een call
        </Link>
      </Section>

      <CTASection />
    </>
  );
}
