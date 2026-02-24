import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/content";

const CHRIS_HENRY_SLUG = "chris-henry";

const CHRIS_CASE_IMAGE =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/chris_case.webp";

export default function CasesTeaser() {
  const featuredCase = cases.find((c) => c.slug === CHRIS_HENRY_SLUG) ?? cases[0];

  return (
    <section
      id="cases-teaser"
      className="w-full py-16 md:py-24 bg-[var(--background)]"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          <div>
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                {featuredCase.niche}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                <Link
                  href={`/cases/${featuredCase.slug}`}
                  className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
                >
                  {featuredCase.name}
                </Link>
              </h3>
              <p className="mt-2 text-lg font-medium text-zinc-300">
                {featuredCase.subtitle}
              </p>
              <p className="mt-2 text-zinc-500">
                {featuredCase.result}
              </p>
              <Link
                href={`/cases/${featuredCase.slug}`}
                className="mt-4 inline-block text-base font-bold text-[var(--accent)] hover:underline"
              >
                Lees de case →
              </Link>
            </div>

            <div className="mt-10">
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                Bekijk andere cases
              </Link>
            </div>
          </div>

          <div className="relative min-h-[200px] w-full aspect-[4/3] lg:min-h-0">
            <Image
              src={featuredCase.imageUrl ?? CHRIS_CASE_IMAGE}
              alt={`${featuredCase.name} – case`}
              fill
              className="object-cover object-center rounded-lg"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
