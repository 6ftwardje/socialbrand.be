import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact | Boek een call | Office6",
  description:
    "Boek een vrijblijvende call met Office6. Vul ons korte intake formulier in - we reageren binnen 24 uur.",
};

const SOCIAL_PROOF_LOGOS = [
  {
    name: "Celsius",
    src: "/cases/celsius/logo.webp",
    width: 1000,
    height: 334,
  },
  {
    name: "Coachedby",
    src: "/cases/coachedby/logo.webp",
    width: 1000,
    height: 345,
  },
  {
    name: "Het Trade Platform",
    src: "/cases/het-trade-platform/logo.webp",
    width: 1200,
    height: 204,
  },
  {
    name: "Auto Viger",
    src: "/cases/auto-viger/logo.webp",
    width: 900,
    height: 900,
  },
  {
    name: "Bora Coworking",
    src: "/cases/bora-coworking/logo.webp",
    width: 900,
    height: 900,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-[var(--accent)]">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Boek een call
        </h1>
        <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-zinc-400 md:text-xl">
          Vertel ons kort waar je aan werkt. Beantwoord 7 vragen in ongeveer 2
          minuten en we nemen binnen 24 uur contact op.
        </p>

        <Link
          href="/intake"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          Start intake
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-16 border-t border-zinc-900 pt-8 md:mt-20">
        <p className="text-sm font-medium text-zinc-500">
          Deze bedrijven gingen je voor
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {SOCIAL_PROOF_LOGOS.map((logo) => (
            <div key={logo.src} className="flex h-14 items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-10 w-auto max-w-[9rem] object-contain opacity-50 grayscale transition-[opacity,filter] duration-300 hover:opacity-90 hover:grayscale-0"
                sizes="144px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
