import type { CaseStudy } from "@/lib/content";

export default function CaseListItem({ caseStudy }: { caseStudy: CaseStudy }) {
  const { name, subtitle, niche, externalUrl } = caseStudy;
  return (
    <article className="border-b border-[var(--border-subtle)] py-7 md:py-9">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            {niche}
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
            {name}
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-[var(--foreground-muted)] md:text-lg">
            {subtitle}
          </p>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              Bekijk werk
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
