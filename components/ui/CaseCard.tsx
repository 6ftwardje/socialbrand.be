import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: "teaser" | "full";
}

const placeholderGradients: Record<string, string> = {
  "chris-henry":
    "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e293b 100%)",
  "the-health-junkie":
    "linear-gradient(135deg, #14532d 0%, #052e16 50%, #166534 100%)",
  "vastgoedacademie":
    "linear-gradient(135deg, #422006 0%, #1c1917 50%, #292524 100%)",
  cryptoriez:
    "linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #3730a3 100%)",
};

function getPlaceholderGradient(id: string): string {
  return placeholderGradients[id] ?? "linear-gradient(135deg, #27272a 0%, #18181b 100%)";
}

export default function CaseCard({ caseStudy, variant = "teaser" }: CaseCardProps) {
  const { name, niche, challenge, approach, deliverables, result } = caseStudy;
  const gradient = getPlaceholderGradient(caseStudy.id);

  const articleContent = (
    <>
      {/* Image / placeholder layer – blur on hover */}
      <div
        className="absolute inset-0 transition-[filter] duration-300 ease-out group-hover:blur-lg"
        style={{ background: gradient }}
        aria-hidden
      />

      {/* Overlay: gradient for readable title */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
        aria-hidden
      />

      {/* Title + niche overlay (stays sharp) */}
      <div className="relative flex min-h-[280px] flex-col justify-end p-6 sm:min-h-[320px] sm:p-8">
        <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {niche}
        </span>
        <h3 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">{name}</h3>
      </div>

      {/* Full variant: detail block below the tile */}
      {variant === "full" && (
        <div className="relative border-t border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Uitdaging
              </h4>
              <p className="mt-2 text-zinc-400">{challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Aanpak
              </h4>
              <p className="mt-2 text-zinc-400">{approach}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Deliverables
              </h4>
              <ul className="mt-2 list-inside list-disc space-y-0.5 text-zinc-400">
                {deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Resultaat
              </h4>
              <p className="mt-2 text-zinc-400">{result}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const article = (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden border border-zinc-800 bg-zinc-900/40",
        "min-h-[280px] sm:min-h-[320px]",
        variant === "teaser" && "focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--background)]"
      )}
    >
      {articleContent}
    </article>
  );

  if (variant === "teaser") {
    return (
      <Link href="/cases" className="block outline-none">
        {article}
      </Link>
    );
  }

  return article;
}
