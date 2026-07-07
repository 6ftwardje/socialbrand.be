import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseMuxVideos from "@/components/cases/CaseMuxVideos";
import CaseVisual from "@/components/cases/CaseVisual";
import { officeCases } from "@/lib/office-cases";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

function findCase(slug: string) {
  return officeCases.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return officeCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findCase(slug);

  if (!item) {
    return {
      title: "Case | Office6",
    };
  }

  return {
    title: `${item.title} | Office6 Case`,
    description: item.subtitle,
  };
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = findCase(slug);

  if (!item) notFound();

  const related = officeCases.filter((entry) => entry.slug !== item.slug).slice(0, 2);
  const hasMuxVideos = Boolean(item.muxVideos?.length);

  return (
    <div className="bg-[var(--background)] pb-16 text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-24 md:px-6 md:pt-28 lg:px-8">
        <Link href="/cases" className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]">
          Cases
        </Link>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
          {item.title}
          <span className="block text-[var(--foreground-muted)]">{item.subtitle}</span>
        </h1>
        <div className="mt-10 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-[var(--foreground-muted)]">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <CaseVisual
          image={item.thumbnail.image}
          alt={item.thumbnail.alt}
          shape={item.thumbnail.shape}
          priority
          sizes="100vw"
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[0.42fr_0.58fr] md:px-6 md:py-24 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
            Scope
          </p>
          <ul className="mt-5 space-y-2 text-sm text-[var(--foreground-muted)]">
            {item.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          {item.metrics && (
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                Resultaten
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--foreground-muted)]">
                {item.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-10">
          <p className="max-w-2xl text-xl font-semibold leading-relaxed text-[var(--foreground)] md:text-2xl">
            {item.intro}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-[var(--foreground)]">Uitdaging</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">{item.challenge}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--foreground)]">Aanpak</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">{item.approach}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--foreground)]">Resultaat</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">{item.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {hasMuxVideos ? (
        <CaseMuxVideos videos={item.muxVideos ?? []} />
      ) : (
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8" aria-label="Media placeholders">
          <div className="space-y-4">
            {item.mediaPlan.map((media, index) => (
              <div key={`${media.label}-${index}`} className={media.shape === "portrait" ? "max-w-sm" : undefined}>
                <CaseVisual
                  image={media.image}
                  alt={media.note}
                  shape={media.shape}
                  sizes="(max-width: 1279px) 100vw, 1280px"
                />
                <div className="mt-3">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{media.label}</p>
                  <p className="mt-1 max-w-md text-xs text-[var(--foreground-muted)]">{media.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto mt-28 max-w-7xl border-t border-[var(--border-subtle)] px-4 pt-8 md:mt-36 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold leading-none tracking-tight text-[var(--foreground)]">
          Andere
          <span className="block text-[var(--foreground-muted)]">cases</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {related.map((relatedCase) => (
            <Link
              key={relatedCase.slug}
              href={`/cases/${relatedCase.slug}`}
              className="group block border-t border-[var(--border-subtle)] py-5"
            >
              <p className="text-sm font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                {relatedCase.title}
              </p>
              <p className="mt-1 text-xs text-[var(--foreground-muted)]">{relatedCase.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
