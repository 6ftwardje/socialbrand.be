import Link from "next/link";
import { cases } from "@/lib/content";
import CaseCard from "@/components/ui/CaseCard";

export default function CasesTeaser() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] border-t border-zinc-800/50" id="cases-teaser">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12">
          Cases
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.id} caseStudy={c} variant="teaser" />
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/cases" className="text-base font-bold text-[var(--accent)] hover:underline">
            Bekijk alle cases →
          </Link>
        </p>
      </div>
    </section>
  );
}
