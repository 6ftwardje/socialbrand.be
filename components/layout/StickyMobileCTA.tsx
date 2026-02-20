import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-zinc-800/80 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/90 py-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Link
        href="/contact"
        className="flex w-full items-center justify-center rounded-lg bg-[var(--accent)] py-3 px-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Boek een call
      </Link>
    </div>
  );
}
