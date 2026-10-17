"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Download, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { burneysProposal as p, burneysPrice, burneysContactUrl } from "@/lib/burneys-proposal";
import base from "./FoodFairProposalPage.module.css";
import s from "./BurneysProposalPage.module.css";

const sections = [["opdracht", "Opdracht"], ["reels", "De zes reels"], ["scope", "Scope"], ["investering", "Investering"], ["planning", "Planning"], ["referentie", "Referentie"]] as const;

function Heading({ title, text }: { title: string; text?: string }) {
  return <header className={s.heading}><h2>{title}</h2>{text && <p>{text}</p>}</header>;
}

function Actions({ full = false }: { full?: boolean }) {
  return <div className={s.actions}>
    <a href={burneysContactUrl} className="proposal-button primary">Bespreek de offerte <ArrowRight aria-hidden="true" /></a>
    {full && <a href={p.pdfPath} download className="proposal-button secondary">Download PDF <Download aria-hidden="true" /></a>}
  </div>;
}

export default function BurneysProposalPage() {
  const [active, setActive] = useState("opdracht");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -55%" });
    sections.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return <article className={`proposal-page ${base.page} ${s.page}`}>
    <a href="#opdracht" className={s.skip}>Naar de offerte</a>
    <header id="top" className={s.hero}>
      <div className={s.heroPhoto}>
        <Image src="/voorstel/burneys/assets/burneys-people.webp" alt="Collega’s beleven samen een avond bij Burney’s" fill priority unoptimized sizes="(max-width: 760px) 100vw, 60vw" />
      </div>
      <div className={`${s.container} ${s.heroInner}`}>
        <div className={s.heroTop}>
          <div className={s.lockup}>
            <Image src="/voorstel/burneys/assets/burneys-logo-white.png" alt="Burney’s" width={164} height={56} unoptimized priority />
            <span aria-hidden="true">×</span>
            <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
          </div>
          <p>{p.quoteNumber}<br />{p.date}</p>
        </div>
        <div className={s.heroCopy}>
          <h1>Collega’s.<br />Ook na<br /><span>de meeting.</span></h1>
          <p>Zes verticale video’s die organisatoren hun volgende bedrijfsevent bij Burney’s laten beleven.</p>
          <dl className={s.heroFacts}>
            <div><dt>Vaste pakketprijs</dt><dd>{burneysPrice} <small>excl. btw</small></dd></div>
            <div><dt>Oplevering</dt><dd>{p.reelCount} afzonderlijke reels</dd></div>
            <div><dt>Geplande shoot</dt><dd>{p.shootDate}</dd></div>
          </dl>
          <div className={s.heroLinks}><a href="#reels">Ontdek de zes reels <ArrowDown aria-hidden="true" /></a><a href={p.pdfPath} download>Download PDF <Download aria-hidden="true" /></a></div>
        </div>
        <p className={s.photoCredit}>Fotografie Burney’s · Kamill Cosemans</p>
      </div>
    </header>

    <nav className={s.nav} aria-label="Hoofdstukken in de offerte">
      <div className={s.navInner}>
        <a href="#top" className={s.navBrand} aria-label="Burney’s × Office6, naar boven">B × O6</a>
        <div className={s.navLinks}>{sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}</div>
        <a href={p.pdfPath} download className={s.navPdf} aria-label="Download offerte als PDF"><Download aria-hidden="true" /><span>PDF</span></a>
      </div>
    </nav>

    <section id="opdracht" className={s.section}>
      <div className={s.container}>
        <Heading title="Hun volgende teamdag begint met een goed beeld." text="Van een competitieve collega-challenge tot samen tafelen. We maken concreet wat een bedrijfsevent bij Burney’s kan zijn — en nodigen organisatoren uit om een voorstel op maat aan te vragen." />
        <div className={s.introGrid}>
          <div><h3>Jullie creatieve productiepartner.</h3><p>{p.positioning}</p><p>Voor {p.contact} · {p.client}<br />{p.location}</p></div>
          <div className={s.specs}><h3>Wat jullie ontvangen</h3><dl>
            <div><dt>Reeks</dt><dd>{p.reelCount} reels · {p.themeCount} B2B-thema’s</dd></div>
            <div><dt>Beeld</dt><dd>{p.format}</dd></div>
            <div><dt>Duur</dt><dd>{p.duration}</dd></div>
            <div><dt>Afwerking</dt><dd>Nederlandse ondertitels, kleur, geluid, muziek en CTA</dd></div>
            <div><dt>Bestanden</dt><dd>{p.delivery}</dd></div>
          </dl></div>
        </div>
      </div>
    </section>

    <section id="reels" className={`${s.section} ${s.dark}`}>
      <div className={s.container}>
        <Heading title="Drie thema’s. Zes eigen verhalen." text={p.scopeNote} />
        <p className={s.scriptNote}>{p.scriptNote}</p>
        <div className={s.reelJump} aria-label="Ga naar een reel">{p.concepts.flatMap(t => t.reels).map(r => <a href={`#reel-${r.number}`} key={r.number}><span>{String(r.number).padStart(2, "0")}</span>{r.title}<ArrowDown aria-hidden="true" /></a>)}</div>
        {p.concepts.map((theme, i) => <div className={s.theme} key={theme.title}>
          <div className={s.themeTitle}><p>Thema {i + 1}</p><h3>{theme.title}</h3></div>
          <div className={s.reels}>{theme.reels.map(r => <article id={`reel-${r.number}`} className={s.reel} key={r.number}>
            <div className={s.reelTitle}><span>Reel {String(r.number).padStart(2, "0")}</span><h4>{r.title}</h4></div>
            <dl><div><dt>Opening</dt><dd className={s.hook}>“{r.hook}”</dd></div><div><dt>Verhaal</dt><dd>{r.description}</dd></div><div><dt>CTA</dt><dd className={s.reelCta}>{r.cta}</dd></div></dl>
            <p className={s.filename}>{r.filename}</p>
          </article>)}</div>
        </div>)}
      </div>
    </section>

    <section id="scope" className={`${s.section} ${s.warm}`}>
      <div className={s.container}>
        <Heading title="Een volledige productie. Heldere afspraken." />
        <div className={`${base.scopeGrid} ${s.scopeGrid}`}>
          <div><h3>Inbegrepen</h3><ul>{p.included.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
          <div><h3>Niet inbegrepen</h3><ul>{p.excluded.map(item => <li key={item}><Plus aria-hidden="true" />{item}</li>)}</ul><p className={s.extraWork}>{p.extraWork}</p></div>
        </div>
      </div>
    </section>

    <section id="investering" className={`${s.section} ${s.dark}`}>
      <div className={`${s.container} ${s.investment}`}>
        <Heading title="Investering." text="Eén vaste pakketprijs voor de volledige reeks." />
        <div className={s.price}><p><strong>{burneysPrice}</strong><span>excl. btw</span></p><p>{p.investmentSummary}</p><Actions full /></div>
      </div>
    </section>

    <section id="planning" className={s.section}>
      <div className={s.container}>
        <Heading title="Van voorbereiding tot zes finale reels." text="We stemmen de scripts en de dagplanning vooraf af. Zo halen we de juiste momenten uit één gerichte draaidag." />
        <ol className={s.schedule}>{p.schedule.map(item => <li key={item.title}><p>{item.date}</p><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
        <div className={s.practical}>
          <figure><Image src="/voorstel/burneys/assets/burneys-teambuilding.webp" alt="Een groep beleeft samen een activiteit bij Burney’s" width={1400} height={934} unoptimized sizes="(max-width: 760px) 100vw, 40vw" /><figcaption>Burney’s · fotografie Kamill Cosemans</figcaption></figure>
          <div><h3>Voor een vlotte draaidag.</h3><ul>{p.practical.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>

    <section id="referentie" className={`${s.section} ${s.warm}`}>
      <div className={s.container}>
        <div className={s.proof}>
          <a href={p.proof.url} className={s.caseImage} aria-label="Bekijk de SIM Brugge-case"><Image src="/cases/sim-brugge/thumbnail-shoot-02.webp" alt="SIM Brugge: belevingscontent door Office6" width={1200} height={800} sizes="(max-width: 760px) 100vw, 45vw" /></a>
          <div><Heading title={p.proof.title} text={p.proof.text} /><a href={p.proof.url} className={s.textLink}>Bekijk de SIM Brugge-case <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className={s.measurement}><h3>Herkenbaar voor jullie campagnepartner.</h3><p>{p.proof.measurement}</p></div>
      </div>
    </section>

    <section className={`${s.section} ${s.closing}`}>
      <div className={s.container}><h2>Geef jullie volgende bedrijfsevent een gezicht.</h2><p>Bespreken we de zes invalshoeken en de draaidag op {p.shootDate}? We stemmen de definitieve scripts en praktische afspraken samen af.</p><Actions full /></div>
    </section>
    <footer className={base.footer}><div className={s.container}>
      <div><strong>{p.client} × Office6</strong><p>{p.quoteNumber} · {p.date}</p><p>Vertrouwelijk voorstel</p></div>
      <Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} />
      <div><a href="https://office6.be">office6.be</a><a href={`mailto:${p.contacts.email}`}>{p.contacts.email}</a></div>
    </div></footer>
  </article>;
}
