import Link from "next/link";
import type { Package } from "@/lib/content";

interface PackageCardProps {
  pkg: Package;
  variant?: "teaser" | "full";
  /** Mark as recommended — badge + stronger border */
  recommended?: boolean;
  /** Show price indication line (full variant on aanbod page) */
  showPriceIndication?: boolean;
}

export default function PackageCard({ pkg, variant = "teaser", recommended, showPriceIndication }: PackageCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border transition-colors hover:border-[var(--foreground-muted)] ${
        recommended
          ? "border-[var(--accent)]/60 bg-[var(--surface)] ring-1 ring-[var(--accent)]/20"
          : "border-[var(--border-subtle)] bg-[var(--surface)]"
      }`}
    >
      {recommended && (
        <div className="bg-[var(--accent)]/15 px-6 py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Vaak gecombineerd</span>
        </div>
      )}
      {variant === "teaser" && !recommended && (
        <div className="flex aspect-video w-full shrink-0 items-center justify-center bg-[var(--surface-muted)] text-xs uppercase tracking-wider text-[var(--foreground-muted)]">
          Foto / video placeholder
        </div>
      )}
      <div className="flex flex-col p-6 md:p-8">
      <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">{pkg.tagline}</span>
      <h3 className="mt-2 text-xl font-bold text-[var(--foreground)] md:text-2xl">{pkg.name}</h3>
      <p className="mt-2 font-medium text-[var(--foreground-muted)]">{pkg.description}</p>
      {variant === "full" && (
        <>
          {pkg.deliverablesLabel && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">{pkg.deliverablesLabel}</p>
          )}
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--foreground-muted)]">
            {pkg.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[var(--foreground-muted)]">Commitment: {pkg.commitment}</p>
          {pkg.note && <p className="mt-1 text-sm italic text-[var(--foreground-muted)]">{pkg.note}</p>}
          {showPriceIndication && (
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">Investering op maat — prijsindicatie op de kennismakingscall.</p>
          )}
        </>
      )}
      <Link
        href={variant === "teaser" ? "/services" : "/intake"}
        className="mt-6 inline-flex items-center text-base font-bold text-[var(--accent)] hover:underline"
      >
        {variant === "teaser" ? "Bekijk services" : "Boek een kennismakingscall"}
        <span className="ml-1" aria-hidden>→</span>
      </Link>
      </div>
    </article>
  );
}
