import { cases } from "@/lib/content";
import CaseCard from "@/components/ui/CaseCard";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Cases | SocialBrand",
  description:
    "Cases van SocialBrand: Chris Henry, The Health Junkie, VastgoedAcademie, Cryptoriez. Thought leadership en persoonlijk merk.",
};

export default function CasesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Cases
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Een greep uit de projecten waarmee we thought leadership en persoonlijk merk hebben opgebouwd. Met toestemming van de klanten.
        </p>
      </section>

      <Section id="cases-list" className="px-0">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {cases.map((c) => (
            <CaseCard key={c.id} caseStudy={c} variant="full" />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
