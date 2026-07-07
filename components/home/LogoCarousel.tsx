import Image from "next/image";

const LOGOS = [
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
    src: "/cases/het-trade-platform/logo-dark.png",
    width: 1917,
    height: 325,
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
  {
    name: "Gilles Vandermeulen",
    src: "/cases/gilles-vandermeulen/logo.webp",
    width: 1000,
    height: 442,
  },
  {
    name: "Glemm",
    src: "/cases/glemm/logo.webp",
    width: 1000,
    height: 747,
  },
  {
    name: "Oasix",
    src: "/cases/oasix/logo.webp",
    width: 1000,
    height: 422,
  },
  {
    name: "Saturate",
    src: "/cases/saturate/logo.webp",
    width: 900,
    height: 834,
  },
  {
    name: "Tecjobz",
    src: "/cases/tecjobz/logo.webp",
    width: 900,
    height: 900,
  },
  {
    name: "The Night",
    src: "/cases/the-night/logo.webp",
    width: 900,
    height: 900,
  },
] as const;

function LogoGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="logo-marquee-group" aria-hidden={decorative || undefined}>
      {LOGOS.map((logo) => (
        <div
          key={logo.src}
          className="flex h-14 min-w-[7.5rem] shrink-0 items-center justify-center md:h-16 md:min-w-[9rem]"
        >
          <Image
            src={logo.src}
            alt={decorative ? "" : logo.name === "Het Trade Platform" ? "Het Trade Platform logo" : logo.name}
            width={logo.width}
            height={logo.height}
            className="max-h-10 w-auto max-w-[8rem] object-contain opacity-65 brightness-0 transition-opacity duration-300 hover:opacity-100 md:max-h-12 md:max-w-[10rem]"
            sizes="160px"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <section
      className="w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] py-9 md:py-10"
      aria-labelledby="logo-carousel-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:gap-8 md:px-6 lg:px-8">
        <div className="shrink-0 text-center md:w-48 md:border-r md:border-[var(--border-subtle)] md:pr-8 md:text-right">
          <p
            id="logo-carousel-title"
            className="text-sm font-medium leading-relaxed text-[var(--foreground-muted)]"
          >
            Vertrouwd door merken die blijven bewegen
          </p>
        </div>

        <div className="logo-marquee-mask min-w-0 flex-1">
          <div className="logo-marquee-track">
            <LogoGroup />
            <LogoGroup decorative />
          </div>
        </div>
      </div>
    </section>
  );
}
