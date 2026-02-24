import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/content";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

const chipClass =
  "rounded-full border border-zinc-700 bg-transparent px-3 py-1 text-xs text-zinc-400";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) return { title: "Case | SocialBrand" };
  return {
    title: `${caseStudy.name} | Cases | SocialBrand`,
    description: caseStudy.subtitle,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) notFound();

  const {
    name,
    subtitle,
    tags,
    articleIntro,
    articleBody,
    niche,
    challenge,
    approach,
    result,
    imageUrl,
  } = caseStudy;

  return (
    <article className="min-h-screen">
      {/* Back link */}
      <div className="mx-auto max-w-3xl px-4 pt-8 md:px-6">
        <Link
          href="/cases"
          className="text-sm text-zinc-500 hover:text-[var(--accent)] focus:outline-none focus-visible:underline"
        >
          ← Cases
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative mt-8 aspect-[21/9] w-full border-y border-zinc-800 overflow-hidden bg-zinc-900">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs uppercase tracking-wider text-zinc-600">
              Hero image
            </span>
          </div>
        )}
      </div>

      {/* Article header */}
      <header className="mx-auto max-w-2xl px-4 pt-12 md:px-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className={chipClass}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {name}
        </h1>
        <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>
      </header>

      {/* Article body */}
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        {articleIntro && (
          <p className="text-lg leading-relaxed text-zinc-300">
            {articleIntro}
          </p>
        )}
        {articleBody && articleBody.length > 0 && (
          <div className="mt-8 space-y-6">
            {articleBody.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Key facts */}
        <dl className="mt-12 grid gap-6 border-t border-zinc-800 pt-12 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Niche
            </dt>
            <dd className="mt-1 text-zinc-300">{niche}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Uitdaging
            </dt>
            <dd className="mt-1 text-zinc-300">{challenge}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Aanpak
            </dt>
            <dd className="mt-1 text-zinc-300">{approach}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Resultaat
            </dt>
            <dd className="mt-1 text-zinc-300">{result}</dd>
          </div>
        </dl>
      </div>

      {/* Media section – placeholders */}
      <section className="border-t border-zinc-800 bg-zinc-950/50 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Beeldmateriaal
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div
              className={cn(
                "aspect-video rounded-lg border border-zinc-800 bg-zinc-900/80",
                "flex items-center justify-center"
              )}
            >
              <span className="text-xs uppercase tracking-wider text-zinc-600">
                Video placeholder
              </span>
            </div>
            <div
              className={cn(
                "aspect-video rounded-lg border border-zinc-800 bg-zinc-900/80",
                "flex items-center justify-center"
              )}
            >
              <span className="text-xs uppercase tracking-wider text-zinc-600">
                Image placeholder
              </span>
            </div>
            <div
              className={cn(
                "aspect-video rounded-lg border border-zinc-800 bg-zinc-900/80",
                "flex items-center justify-center sm:col-span-2"
              )}
            >
              <span className="text-xs uppercase tracking-wider text-zinc-600">
                Full-width image / video placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Back to cases */}
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          ← Alle cases
        </Link>
      </div>
    </article>
  );
}
