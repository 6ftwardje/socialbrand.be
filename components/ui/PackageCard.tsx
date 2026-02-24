import Link from "next/link";
import type { Package } from "@/lib/content";

interface PackageCardProps {
  pkg: Package;
  variant?: "teaser" | "full";
}

export default function PackageCard({ pkg, variant = "teaser" }: PackageCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden transition-colors hover:border-zinc-700">
      {variant === "teaser" && (
        <div className="aspect-video w-full bg-zinc-800/80 flex items-center justify-center text-zinc-500 text-xs uppercase tracking-wider shrink-0">
          Foto / video placeholder
        </div>
      )}
      <div className="flex flex-col p-6 md:p-8">
      <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">{pkg.tagline}</span>
      <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{pkg.name}</h3>
      <p className="mt-2 text-zinc-400 font-medium">{pkg.description}</p>
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
        href={variant === "teaser" ? "/aanbod" : "/intake"}
        className="mt-6 inline-flex items-center text-base font-bold text-[var(--accent)] hover:underline"
      >
        {variant === "teaser" ? "Bekijk aanbod" : "Boek een call"}
        <span className="ml-1" aria-hidden>→</span>
      </Link>
      </div>
    </article>
  );
}
