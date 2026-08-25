"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { OfficeCase, OfficeMuxVideo } from "@/lib/office-cases";

const gallery = Array.from({ length: 11 }, (_, index) =>
  `/cases/sim-brugge/gallery/sim-brugge-${index + 1}.webp`,
);

function muxUrl(video: OfficeMuxVideo) {
  const params = new URLSearchParams({ "metadata-video-title": video.title });
  return `https://player.mux.com/${video.playbackId}?${params.toString()}`;
}

function Reel({ video }: { video: OfficeMuxVideo }) {
  return (
    <article className="min-w-0">
      <div className="relative aspect-[9/16] overflow-hidden bg-zinc-950">
        <iframe
          src={muxUrl(video)}
          title={video.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-sm font-semibold">{video.title}</p>
    </article>
  );
}

function Campaign({
  number,
  eyebrow,
  title,
  text,
  videos,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  videos: OfficeMuxVideo[];
}) {
  return (
    <section className="border-t border-[var(--border-subtle)] py-16 md:py-24">
      <AnimateOnScroll className="grid gap-8 md:grid-cols-[0.42fr_0.58fr]">
        <div className="flex items-start gap-5">
          <span className="text-sm font-semibold text-[var(--accent)]">{number}</span>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
            {eyebrow}
          </p>
        </div>
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold leading-[0.98] tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--foreground-muted)] md:text-lg">
            {text}
          </p>
        </div>
      </AnimateOnScroll>
      {videos.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:mt-14 md:gap-6 lg:grid-cols-4">
          {videos.map((video) => <Reel key={video.playbackId} video={video} />)}
        </div>
      )}
    </section>
  );
}

export default function SimBruggeCase({ item }: { item: OfficeCase }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const originalAds = item.muxVideos?.filter((video) => video.campaign === "original") ?? [];
  const enduranceAds = item.muxVideos?.filter((video) => video.campaign === "endurance") ?? [];
  const mobileAds = item.muxVideos?.filter((video) => video.campaign === "mobile") ?? [];

  const moveGallery = (direction: number) => {
    galleryRef.current?.scrollBy({ left: direction * galleryRef.current.clientWidth * 0.72, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden bg-[var(--background)] pb-16 text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-24 md:px-6 md:pb-14 md:pt-28 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cases", href: "/cases" }, { label: item.title }]} />
        <div className="mt-8 grid items-end gap-8 md:grid-cols-[0.58fr_0.42fr]">
          <h1 className="text-5xl font-semibold leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-8xl">
            SIM<br />Brugge
          </h1>
          <p className="max-w-md pb-1 text-lg leading-relaxed text-[var(--foreground-muted)] md:justify-self-end md:text-xl">
            Van lokale startup naar een merk dat klaarstaat voor een tweede vestiging.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative h-[68svh] min-h-[430px] max-h-[780px] overflow-hidden bg-zinc-950 md:h-[72svh]">
          <Image
            src={item.thumbnail.image ?? ""}
            alt={item.thumbnail.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_42%] transition-transform duration-[1400ms] ease-out hover:scale-[1.015]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" aria-hidden />
          <p className="absolute bottom-5 left-5 max-w-[15rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-white md:bottom-8 md:left-8">
            Content die meegroeide met de ambitie
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[0.35fr_0.65fr] md:px-6 md:py-24 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Samenwerking</p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--foreground-muted)]">Content creation<br />Performance marketing<br />Fotografie</p>
        </div>
        <AnimateOnScroll>
          <p className="max-w-3xl text-2xl font-semibold leading-[1.22] tracking-tight md:text-4xl">
            High-paced video&apos;s waarin mensen en hun ervaring centraal staan. Het perfecte recept om SIM Brugge op de kaart te zetten — en vandaag verder te bouwen aan de volgende groeifase.
          </p>
          <div className="mt-10 grid gap-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-2">
            <div><span className="text-4xl font-semibold text-[var(--accent)]">02</span><p className="mt-2 text-sm text-[var(--foreground-muted)]">Een tweede vestiging opent binnenkort in Antwerpen.</p></div>
            <div><span className="text-4xl font-semibold text-[var(--accent)]">01</span><p className="mt-2 text-sm text-[var(--foreground-muted)]">Een mobiele setup brengt de SIM-ervaring naar klanten op locatie.</p></div>
          </div>
        </AnimateOnScroll>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Campaign number="01" eyebrow="Het verhaal" title="Eerst de founders. Daarna de reacties die voor zich spreken." text="We begonnen bij de kern: hoe ontstond SIM Brugge, hoe verliep het proces en wat maakt deze setup anders? Daarna brachten we zoveel mogelijk authentieke reacties van bezoekers in beeld. Hun enthousiasme werkt aanstekelijk — zonder ingewikkelde marketing." videos={originalAds} />
        <Campaign number="02" eyebrow="Endurance races" title="De intensiteit van de race, vertaald naar social." text="Drie nieuwe ads brengen snelheid, competitie en uithouding naar voren. High-paced edits maken het endurance-format in enkele seconden voelbaar en bouwen verder op dezelfde menselijke energie." videos={enduranceAds} />
        <Campaign number="03" eyebrow="Mobiele SIM setup" title="De SIM-ervaring komt nu ook naar je toe." text="SIM Brugge bouwde een mobiele trailer waarmee de rigs inzetbaar zijn op bedrijfsfeesten, automotive events, teambuildings en beurzen. De nieuwe ads maken die uitbreiding meteen concreet." videos={mobileAds} />
      </div>

      <section className="py-20 md:py-32">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-4 md:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Fotografie</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[0.98] tracking-tight md:text-5xl">Een professioneler beeld, over elk contactpunt.</h2>
          </AnimateOnScroll>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => moveGallery(-1)} aria-label="Vorige foto" className="grid size-11 place-items-center rounded-full border border-[var(--border-subtle)] transition-colors hover:border-[var(--foreground)]"><ArrowLeft size={18} /></button>
            <button onClick={() => moveGallery(1)} aria-label="Volgende foto" className="grid size-11 place-items-center rounded-full border border-[var(--border-subtle)] transition-colors hover:border-[var(--foreground)]"><ArrowRight size={18} /></button>
          </div>
        </div>
        <div ref={galleryRef} className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:mt-14 md:gap-5 md:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2))] [&::-webkit-scrollbar]:hidden">
          {gallery.map((src, index) => (
            <div key={src} className="relative aspect-[2/3] w-[72vw] max-w-[410px] shrink-0 snap-start overflow-hidden bg-zinc-200 sm:w-[42vw] lg:w-[31vw]">
              <Image src={src} alt={`SIM Brugge fotoshoot ${index + 1}`} fill sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 410px" className="object-cover transition-transform duration-700 hover:scale-[1.025]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
