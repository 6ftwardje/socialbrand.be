import { cases } from "@/lib/content";
import CaseListItem from "@/components/ui/CaseListItem";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Cases | SocialBrand",
  description:
    "Cases van SocialBrand: Chris Henry, Rousso Van Hoorn, SimCenter, Cryptoriez. Thought leadership en persoonlijk merk.",
};

export default function CasesPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
        <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Cases
        </h1>
        <p className="mt-3 text-sm text-zinc-500 md:text-base">
          Een greep uit de projecten waarmee we thought leadership en persoonlijk merk hebben opgebouwd.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 md:px-6">
        <div className="divide-y-0">
          {cases.map((c) => (
            <CaseListItem key={c.id} caseStudy={c} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
