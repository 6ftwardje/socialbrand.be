import Link from "next/link";
import { packages } from "@/lib/content";
import PackageCard from "@/components/ui/PackageCard";

export default function PackagesTeaser() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] border-t border-zinc-800/50" id="aanbod-teaser">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12">
          Pakketten
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} variant="teaser" />
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/aanbod"
            className="text-base font-bold text-[var(--accent)] hover:underline"
          >
            Bekijk volledig aanbod →
          </Link>
        </p>
      </div>
    </section>
  );
}
