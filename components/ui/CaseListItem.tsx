import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

const chipClass =
  "rounded-full border border-zinc-700 bg-transparent px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-600";

export default function CaseListItem({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, name, subtitle, tags } = caseStudy;
  return (
    <Link
      href={`/cases/${slug}`}
      className={cn(
        "group block border-b border-zinc-800/80 py-8 transition-colors md:py-10",
        "hover:border-zinc-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Illustratie placeholder */}
        <div
          className="w-full aspect-[4/3] sm:w-48 sm:shrink-0 sm:aspect-square rounded-lg border border-zinc-800 bg-zinc-800/60 flex items-center justify-center text-zinc-500 text-xs uppercase tracking-wider"
          aria-hidden
        >
          Illustratie
        </div>
        <div className="min-w-0 flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[var(--accent)] md:text-2xl">
                {name}
              </h2>
              <p className="mt-1 text-sm text-zinc-400 md:text-base">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:shrink-0">
              {tags.map((tag) => (
                <span key={tag} className={chipClass}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
            Lees case →
          </span>
        </div>
      </div>
    </Link>
  );
}
