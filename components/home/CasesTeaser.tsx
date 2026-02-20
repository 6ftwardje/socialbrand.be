import Link from "next/link";
import { cases } from "@/lib/content";
import CaseCard from "@/components/ui/CaseCard";

export default function CasesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" id="cases-teaser">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Cases
      </h2>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.id} caseStudy={c} variant="teaser" />
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link
          href="/cases"
          className="text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        >
          Bekijk alle cases →
        </Link>
      </p>
    </section>
  );
}
