"use client";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import { ArrowDown, ArrowRight, Check, Download, Mail, Plus, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { jabejaProposal as proposal } from "@/lib/jabeja-proposal";
import styles from "./JabejaProposalPage.module.css";

const sections = [
  ["verhaal", "Verhaal"],
  ["videos", "Video’s"],
  ["productie", "Productie"],
  ["scope", "Scope"],
  ["investering", "Investering"],
  ["proces", "Volgende stap"],
] as const;

const money = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: proposal.currency,
  maximumFractionDigits: 0,
});

function Heading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) {
  return (
    <header className="proposal-heading">
      <div><span className="proposal-number">{number}</span><p className="proposal-eyebrow">{eyebrow}</p></div>
      <div><h2>{title}</h2>{text && <p className="proposal-lead">{text}</p>}</div>
    </header>
  );
}

function Reel({ playbackId, title }: { playbackId: string; title: string }) {
  return (
    <div className={styles.reel}>
      <MuxPlayer
        playbackId={playbackId}
        metadataVideoTitle={title}
        autoPlay="muted"
        muted
        loop
        playsInline
        nohotkeys
        disableTracking
        className="absolute inset-0 h-full w-full"
        style={{ "--controls": "none", "--dialog": "none", "--loading-indicator": "none", "--media-object-fit": "cover", "--media-object-position": "center" }}
      />
    </div>
  );
}

export default function JabejaProposalPage() {
  const [active, setActive] = useState("verhaal");
  const [modal, setModal] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = sections.map(([id]) => {
      const node = document.getElementById(id);
      if (!node) return;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(id), { rootMargin: "-30% 0px -55%" });
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLInputElement>("input")?.focus();
    const close = (event: KeyboardEvent) => event.key === "Escape" && setModal(false);
    addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", close);
      previous?.focus();
    };
  }, [modal]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    window.location.href = "mailto:hello@office6.be?subject=Jabeja%20%E2%80%94%20casevideo-voorstel";
  };

  return (
    <div className="proposal-page jabeja-proposal">
      <nav className="huppa-progress" aria-label="Voorstel hoofdstukken">
        <span className="huppa-progress-brand">J × O6</span>
        <div className="huppa-progress-track">
          {sections.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-label={`${String(index + 1).padStart(2, "0")} — ${label}`}>
              <i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span>
            </a>
          ))}
        </div>
        <button onClick={() => window.print()} className="huppa-progress-print" aria-label="Bewaar als PDF"><Download /></button>
      </nav>

      <header className="proposal-hero huppa-simple-hero jab-hero">
        <div className="huppa-hero-line" aria-hidden />
        <div className="proposal-container proposal-hero-inner">
          <div className="proposal-lockup jab-lockup">
            <span className="jab-logo-badge"><Image src="https://jabeja.be/logo.png" alt="Jabeja" width={180} height={60} priority /></span>
            <span>×</span>
            <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
          </div>
          <div className="proposal-hero-copy">
            <p className="proposal-eyebrow light">{proposal.label}</p>
            <h1>70 trackers.<br />Eén helder zicht<br />op de vloot.</h1>
            <p>Vier social-first casevideo’s over hoe Jabeja en Ripal dat samen mogelijk maakten.</p>
            <div className="proposal-actions"><a href="#verhaal" className="proposal-button primary">Bekijk het voorstel <ArrowDown /></a></div>
          </div>
        </div>
      </header>

      <main>
        <section id="verhaal" className="proposal-section proposal-container">
          <AnimateOnScroll><Heading number="01" eyebrow="Het verhaal" title="Van beperkt overzicht naar realtime inzicht." text="Geen softwaredemo, wel een helder verhaal over een operationeel probleem, een aanpak op maat en wat dat vandaag verandert voor Ripal." /></AnimateOnScroll>
          <div className="principles jab-principles">
            <article><span>01</span><h3>De uitdaging</h3><p>Tientallen voertuigen tegelijk onderweg, zonder één helder beeld voor planning en opvolging.</p></article>
            <article><span>02</span><h3>De aanpak</h3><p>Jabeja verbindt 70 trackers, installatie en custom software tot één praktische oplossing.</p></article>
            <article><span>03</span><h3>Het bewijs</h3><p>De mensen van Ripal vertellen wat realtime inzicht concreet betekent in hun werkdag.</p></article>
          </div>
        </section>

        <section id="videos" className="proposal-section proposal-dark">
          <div className="proposal-container">
            <AnimateOnScroll><Heading number="02" eyebrow="Vier video’s" title="Vier rollen. Eén case die verkoopt zonder verkooppraat." text="Elke montage krijgt een eigen hook, doelgroep en commerciële functie." /></AnimateOnScroll>
            <div className={`deliverables ${styles.deliverables}`}>
              {proposal.videos.map((video, index) => (
                <AnimateOnScroll key={video.number} delay={index * 60}>
                  <article>
                    <div className="deliverable-top"><span className="deliverable-count">{video.number}</span><p>{video.owner}</p></div>
                    <h3>{video.title}</h3>
                    <blockquote>“{video.hook}”</blockquote>
                    <p className={styles.angle}>{video.angle}</p>
                    <p className="deliverable-goal"><span>Rol in de reeks</span>{video.goal}</p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
            <div className={styles.adStrategy}>
              <div><p className="proposal-eyebrow">Meta Ads</p><h3>Een eenvoudige funnel met één heldere belofte.</h3></div>
              <dl>{proposal.adStrategy.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
            </div>
          </div>
        </section>

        <section id="productie" className="proposal-section proposal-container">
          <AnimateOnScroll><Heading number="03" eyebrow="Productie" title="Eén compacte productiedag als uitgangspunt." text="We leggen interviews en operationele momenten vooraf vast. Blijkt niet alles geloofwaardig op één dag te passen, dan stemmen we eerst een tweede moment af." /></AnimateOnScroll>
          <div className={styles.production}>
            <div className={styles.productionNotes}>
              {proposal.production.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>
            <div className={styles.productionReels}>
              <figure><Reel playbackId="JhNcbySNFf9AEFIswLrABdkckaypTpuCBnvQpmTJCzg" title="Voorbeeld verticaal droneshot Office6" /><figcaption>Voorbeeld · verticaal droneshot</figcaption></figure>
              <figure><Reel playbackId="HvVZg00NLjVS38KUrdUQfdMBu6plLCA7xzfIaJ4obiCc" title="Voorbeeld social-first advertentie Office6" /><figcaption>Voorbeeld · social-first montage</figcaption></figure>
            </div>
          </div>
          <div className={styles.interviews}><p className="proposal-eyebrow">Voor de camera</p><div>{proposal.interviewees.map((person, index) => <span key={person}><b>{String(index + 1).padStart(2, "0")}</b>{person}</span>)}</div></div>
        </section>

        <section id="scope" className="proposal-section proposal-system">
          <div className="proposal-container">
            <AnimateOnScroll><Heading number="04" eyebrow="De scope" title="Alles wat nodig is om vier sterke reels te maken." /></AnimateOnScroll>
            <div className="scope-grid"><div><h3>Inbegrepen</h3><ul>{proposal.included.map((item) => <li key={item}><Check />{item}</li>)}</ul></div><div><h3>Niet standaard inbegrepen</h3><ul>{proposal.boundaries.map((item) => <li key={item}><Plus />{item}</li>)}</ul></div></div>
            <div className={styles.proof}>
              <Reel playbackId="rVI7FqTJqDJTnc3V5d01iJ4rYYol9TVzpcFBxCw001Ayg" title="Auto Viger vertical ad door Office6" />
              <div><p className="proposal-eyebrow">Relevant werk · Auto Viger</p><h3>Vertical ads voor een aanbod dat eerst uitleg nodig heeft.</h3><p>Ook hier vertaalden we een praktische service naar korte, heldere video’s: mobiel gekadreerd, snel te begrijpen en klaar voor paid social.</p></div>
            </div>
          </div>
        </section>

        <section id="investering" className="proposal-section proposal-investment">
          <div className="proposal-container">
            <AnimateOnScroll><Heading number="05" eyebrow="Investering" title="Eén duidelijke prijs voor de volledige case." /></AnimateOnScroll>
            <div className={styles.price}><strong>{money.format(proposal.total)}</strong><span>excl. btw</span><p>Inclusief voorbereiding, één productiedag, drone, vier unieke verticale montages, eenvoudige motion graphics, advertentieversies en gebruiksrechten binnen de beschreven scope.</p></div>
            <div className={styles.staticOption}><div><p className="proposal-eyebrow">Optioneel</p><h3>{proposal.optional.title}</h3><p>{proposal.optional.description}</p></div><strong>+ {money.format(proposal.optional.price)}</strong></div>
          </div>
        </section>

        <section id="proces" className="proposal-section proposal-container">
          <AnimateOnScroll><Heading number="06" eyebrow="Na akkoord" title="Van gesprek naar draaidag." /></AnimateOnScroll>
          <ol className="process-list">{proposal.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </section>

        <section className="proposal-cta"><div className="proposal-container"><p className="proposal-eyebrow light">Jabeja × Office6</p><h2>Klaar om 70 trackers een menselijk verhaal te geven?</h2><p>Een compacte case die Ripal met trots kan delen en Jabeja gericht kan inzetten om nieuwe vlootklanten te bereiken.</p><div className="proposal-actions"><button className="proposal-button primary" onClick={() => setModal(true)}>Voorstel bespreken <ArrowRight /></button><a className="proposal-button secondary" href="mailto:hello@office6.be?subject=Jabeja%20%E2%80%94%20aanpassingen%20casevideo-voorstel">Vraag een aanpassing</a></div></div></section>
      </main>

      <footer className="proposal-footer"><div className="proposal-container"><div><strong>Jabeja × Office6</strong><p>Vertrouwelijk voorstel · Enkel bestemd voor interne evaluatie</p><p className="print-date">Gegenereerd op {proposal.generatedOn}</p></div><Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} /><div><a href="https://office6.be">office6.be</a><a href="mailto:hello@office6.be">hello@office6.be</a></div></div></footer>

      {modal && <div className="proposal-modal" onMouseDown={(event) => event.target === event.currentTarget && setModal(false)}><div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="jabeja-modal-title" className="proposal-dialog"><button className="modal-close" onClick={() => setModal(false)} aria-label="Sluiten"><X /></button><p className="proposal-eyebrow">Voorstel bespreken</p><h2 id="jabeja-modal-title">Laat weten wie we mogen contacteren.</h2><p>Dit is geen juridisch bindende ondertekening. We nemen contact op om scope, planning en volgende stappen te bevestigen.</p><form onSubmit={submit}><label>Naam<input required name="name" autoComplete="name" /></label><label>E-mailadres<input required type="email" name="email" autoComplete="email" /></label><label>Bedrijf<input required name="company" defaultValue="Jabeja" /></label><label>Bericht of opmerking<textarea rows={4} name="message" /></label><button className="proposal-button primary" type="submit">Contacteer mij <Mail /></button></form></div></div>}
    </div>
  );
}
