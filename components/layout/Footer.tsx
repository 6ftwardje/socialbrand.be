import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/content";

const LOGO_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/HTP/socialbrand%20png.png";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded">
              <Image src={LOGO_URL} alt="SocialBrand" width={120} height={48} className="h-8 w-auto opacity-90" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-zinc-400">
              Personal branding agency. Value-based content en thought leadership in 90 dagen.
            </p>
          </div>
          <nav aria-label="Footer navigatie">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-zinc-800/80 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} SocialBrand. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
