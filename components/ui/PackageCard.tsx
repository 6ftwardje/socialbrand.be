import Link from "next/link";
import type { Package } from "@/lib/content";

interface PackageCardProps {
  pkg: Package;
  variant?: "teaser" | "full";
}

export default function PackageCard({ pkg, variant = "teaser" }: PackageCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 md:p-8">
      <span className="text-sm font-medium text-[var(--accent)]">{pkg.tagline}</span>
      <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">{pkg.name}</h3>
      <p className="mt-2 text-zinc-400">{pkg.description}</p>
      {variant === "full" && (
        <>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-400">
            {pkg.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-500">Commitment: {pkg.commitment}</p>
        </>
      )}
      <Link
        href={variant === "teaser" ? "/aanbod" : "/contact"}
        className="mt-6 inline-flex items-center text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
      >
        {variant === "teaser" ? "Bekijk aanbod" : "Boek een call"}
        <span className="ml-1" aria-hidden>→</span>
      </Link>
    </article>
  );
}
