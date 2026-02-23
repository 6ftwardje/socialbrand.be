import Link from "next/link";
import Image from "next/image";

const EXPRESS_ILLUSTRATION =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/express.png";

const BULLETS = [
  "Video's voor LinkedIn, Instagram en TikTok",
  "Geoptimaliseerde copy die je boodschap versterkt",
  "Authentieke messaging gebaseerd op jouw positionering",
  "Content die direct klaar is om te publiceren",
];

export default function ExpressFormat() {
  return (
    <section
      id="express"
      className="relative w-full overflow-hidden border-t border-zinc-800/50 bg-zinc-950/80 py-16 md:py-24"
      aria-labelledby="express-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          <div>
            {/* Mobile: titel + illustratie naast elkaar in flexbox; desktop: alleen titel */}
            <header className="mb-10 flex flex-row items-start gap-4 lg:block">
              <h2
                id="express-heading"
                className="min-w-0 flex-1 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                <span className="text-[var(--accent)]">Socialbrand Express.</span>
                <br />
                Snelle content.
                <br />
                Maximale impact.
              </h2>
              <div className="relative h-28 w-28 shrink-0 lg:hidden" aria-hidden>
                <Image
                  src={EXPRESS_ILLUSTRATION}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </header>
            <p className="max-w-2xl text-lg font-medium text-zinc-400 mb-10">
              Geen tijdverspilling. Geen ingewikkelde draaidagen. In één sessie creëren we weken aan strategische content.
            </p>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Wat je krijgt:</p>
            <ul className="max-w-2xl space-y-3 text-lg font-medium text-zinc-300">
              {BULLETS.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xl font-semibold text-white">
              Je vertrekt met content die presteert.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                Boek een content sessie
              </Link>
            </div>
          </div>
          {/* Illustratie alleen op desktop (rechterkolom); op mobile staat hij in de header */}
          <div className="relative hidden min-h-[280px] w-full lg:block lg:min-h-0">
            <Image
              src={EXPRESS_ILLUSTRATION}
              alt="Socialbrand Express – snelle content, maximale impact"
              fill
              className="object-contain object-center lg:object-right"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
