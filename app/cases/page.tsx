import { cases } from "@/lib/content";
import CaseListItem from "@/components/ui/CaseListItem";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Cases | SocialBrand",
  description:
    "Cases van SocialBrand: studio-opnames, podcasts, YouTube-content, vertical ads en personal branding.",
};

export default function CasesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
        <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
          Werk
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Cases
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
          Een compacte greep uit projecten rond studio-opnames, podcasts, vertical ads en thought leadership.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 md:px-6">
        <div className="border-t border-zinc-800/80">
          {cases.map((c) => (
            <CaseListItem key={c.id} caseStudy={c} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
