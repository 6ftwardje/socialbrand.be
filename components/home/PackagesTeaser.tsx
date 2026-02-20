import Link from "next/link";
import { packages } from "@/lib/content";
import PackageCard from "@/components/ui/PackageCard";

export default function PackagesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" id="aanbod-teaser">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Pakketten
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} variant="teaser" />
        ))}
      </div>
      <p className="mt-6 text-center">
        <Link
          href="/aanbod"
          className="text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        >
          Bekijk volledig aanbod →
        </Link>
      </p>
    </section>
  );
}
