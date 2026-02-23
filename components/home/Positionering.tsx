import Image from "next/image";

const POSITIONERING_IMAGE =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/podcast_02.jpg";

export default function Positionering() {
  const hasImage = Boolean(POSITIONERING_IMAGE);

  return (
    <section
      id="positionering"
      className="grid grid-cols-1 lg:grid-cols-2 w-full border-t border-zinc-800/50 bg-zinc-950/80 min-h-0"
      aria-labelledby="positionering-heading"
    >
      {/* Tekst – linkerkant met padding */}
      <div className="flex flex-col justify-center px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:pl-12 xl:pl-16">
        <div className="mx-auto w-full max-w-2xl space-y-6 text-lg font-medium text-zinc-400 md:text-xl">
          <h2 id="positionering-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Jouw gezicht is je sterkste marketingkanaal.
          </h2>
          <p>
            In een wereld vol advertenties vertrouwen mensen geen merken meer.
            Ze volgen mensen. Ze kopen van mensen. Ze verbinden met mensen.
          </p>
          <p className="font-semibold text-white">
            Als jij niet zichtbaar bent, wint iemand anders jouw markt.
          </p>
        </div>
      </div>
      {/* Foto – rechterkant, volledige helft,zelfde hoogte/verhouding als voorheen (aspect 4/3) */}
      <div
        className="relative min-h-[200px] w-full aspect-[4/3] lg:aspect-[4/3] lg:min-h-0"
        aria-hidden
      >
        {hasImage ? (
          <Image
            src={POSITIONERING_IMAGE}
            alt="Jouw gezicht als sterkste marketingkanaal"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-zinc-800/40 text-sm font-medium text-zinc-500"
            role="img"
            aria-label="Plaatshouder voor illustratie"
          >
            Illustratie volgt
          </div>
        )}
      </div>
    </section>
  );
}
