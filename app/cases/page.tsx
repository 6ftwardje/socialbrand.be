import Link from "next/link";
import CaseVisual from "@/components/cases/CaseVisual";
import { officeCases, type OfficeCase } from "@/lib/office-cases";

export const metadata = {
  title: "Cases | Office6",
  description:
    "Cases van Office6: contentproductie, vertical content, performance creatives en custom platforms.",
};

const trustedBy = ["Events", "Coaching", "Education", "Platforms", "Local brands"];

function getCase(slug: string) {
  const item = officeCases.find((entry) => entry.slug === slug);
  if (!item) throw new Error(`Missing case data for ${slug}`);
  return item;
}

const columns: OfficeCase[][] = [
  [
    getCase("chris-henry"),
    getCase("celsius"),
    getCase("bloom"),
    getCase("coachedby"),
    getCase("oasix"),
    getCase("peak-performance-podcast"),
    getCase("glemm"),
    getCase("saturate"),
    getCase("tecjobz"),
  ],
  [
    getCase("het-trade-platform"),
    getCase("auto-viger"),
    getCase("gilles-vandermeulen"),
    getCase("boho"),
    getCase("bora-coworking"),
    getCase("under-pressure-podcast"),
    getCase("kabaal"),
    getCase("sim-brugge"),
    getCase("the-night"),
  ],
];

function WorkTile({ item, priority }: { item: OfficeCase; priority?: boolean }) {
  return (
    <Link href={`/cases/${item.slug}`} className="group block">
      <CaseVisual
        image={item.thumbnail.image}
        hoverLogo={item.thumbnail.logo}
        hoverLabel={item.title}
        alt={item.thumbnail.alt}
        shape={item.thumbnail.shape}
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 46vw, 560px"
      />
      <div className="mt-2">
        <h2 className="text-sm font-semibold leading-none text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
          {item.title}
        </h2>
        <p className="mt-1 text-xs leading-none text-[var(--foreground-muted)]">{item.category}</p>
      </div>
    </Link>
  );
}

export default function CasesPage() {
  return (
    <div className="bg-[var(--background)] pb-16 text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-24 md:px-6 md:pt-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
          Cases
        </p>
        <h1 className="mt-8 max-w-xl text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
          Ontdek
          <span className="block text-[var(--foreground-muted)]">ons werk</span>
        </h1>
        <div className="mt-10 border-t border-[var(--border-subtle)] pt-3">
          <span className="text-xs font-medium text-[var(--foreground-muted)]">Onze cases</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8" aria-label="Cases">
        <div className="grid items-start gap-7 md:grid-cols-2 md:gap-5 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-7 md:space-y-8">
              {column.map((item, itemIndex) => (
                <WorkTile key={item.slug} item={item} priority={itemIndex < 3} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl border-t border-[var(--border-subtle)] px-4 pt-10 text-center md:mt-24 md:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-3xl">
          We bouwen content, campagnes en platformen voor merken die willen blijven bewegen.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-5">
          {trustedBy.map((label) => (
            <div key={label} className="flex h-24 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface)] text-sm font-semibold text-[var(--foreground-muted)]">
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex min-h-[24vh] max-w-7xl items-center justify-center px-4 py-16 text-center md:px-6 lg:px-8">
        <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground-muted)] md:text-4xl">
          Creatie die merken laat opvallen en resultaten ondersteunt
        </h2>
      </section>
    </div>
  );
}
