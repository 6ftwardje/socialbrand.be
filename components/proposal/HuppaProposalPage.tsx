"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Download, Mail, Plus, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { huppaProposal as proposal } from "@/lib/huppa-proposal";

const sections = [
  ["aanpak", "Aanpak"], ["content", "Content"], ["planning", "Planning"],
  ["scope", "Scope"], ["investering", "Investering"], ["proces", "Proces"],
] as const;

const money = new Intl.NumberFormat("nl-BE", { style: "currency", currency: proposal.currency, maximumFractionDigits: 0 });

function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) {
  return <header className="proposal-heading">
    <div><span className="proposal-number">{number}</span><p className="proposal-eyebrow">{eyebrow}</p></div>
    <div><h2>{title}</h2>{text && <p className="proposal-lead">{text}</p>}</div>
  </header>;
}

export default function HuppaProposalPage() {
  const [active, setActive] = useState("aanpak"); const [selected, setSelected] = useState<string[]>([]); const [modal, setModal] = useState(false); const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => { const observers = sections.map(([id]) => { const node = document.getElementById(id); if (!node) return null; const o = new IntersectionObserver(([e]) => e.isIntersecting && setActive(id), { rootMargin: "-30% 0px -55%" }); o.observe(node); return o; }); return () => observers.forEach(o => o?.disconnect()); }, []);
  useEffect(() => { if (!modal) return; const prior = document.activeElement as HTMLElement | null; document.body.style.overflow = "hidden"; dialog.current?.querySelector<HTMLInputElement>("input")?.focus(); const key = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(false); }; addEventListener("keydown", key); return () => { document.body.style.overflow = ""; removeEventListener("keydown", key); prior?.focus(); }; }, [modal]);
  const exactAddons = proposal.optionalModules.filter(m => selected.includes(m.id) && !("from" in m)); const hasEstimate = selected.includes("mascot");
  const total = useMemo(() => proposal.total + exactAddons.reduce((sum, m) => sum + m.price, 0), [exactAddons]);
  const toggle = (id: string) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const submit = (e: FormEvent) => { e.preventDefault(); window.location.href = "mailto:hello@office6.be?subject=Huppa%20%E2%80%94%20voorstel%20bespreken"; };

  return <div className="proposal-page huppa-proposal">
    <nav className="huppa-progress" aria-label="Voorstel hoofdstukken">
      <span className="huppa-progress-brand">H × O6</span>
      <div className="huppa-progress-track">{sections.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-label={`${String(index + 1).padStart(2, "0")} — ${label}`}><i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span></a>)}</div>
      <button onClick={() => window.print()} className="huppa-progress-print" aria-label="Bewaar als PDF"><Download aria-hidden /></button>
    </nav>

    <header className="proposal-hero huppa-simple-hero" id="top">
      <div className="huppa-hero-line" aria-hidden />
      <div className="proposal-container proposal-hero-inner">
        <div className="proposal-lockup">
          <Image src="https://huppapitch-production.up.railway.app/huppa-logo-white.png" alt="Huppa" width={120} height={32} priority />
          <span>×</span><Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
        </div>
        <div className="proposal-hero-copy"><p className="proposal-eyebrow light">{proposal.label}</p><h1>Eén sterk verhaal.<br/>Content die blijft werken.</h1>
          <p>Van leverancier tot eindconsument.</p>
          <div className="proposal-actions"><a href="#aanpak" className="proposal-button primary">Bekijk het voorstel <ArrowDown /></a></div>
        </div>
      </div>
    </header>

    <div>
      <section id="aanpak" className="proposal-section proposal-container"><AnimateOnScroll><SectionHeading number="01" eyebrow="De aanpak" title="Geen losse video’s. Eén contentfundament." text="We bouwen de productie rond een beperkt aantal sterke kernverhalen. Elk verhaal krijgt een duidelijke doelgroep, toepassing en plaats binnen de marketing van Huppa." /></AnimateOnScroll>
        <div className="principles">{proposal.principles.map((p, i) => <AnimateOnScroll key={p.title} delay={i * 80}><article><span>0{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></article></AnimateOnScroll>)}</div>
      </section>

      <section id="content" className="proposal-section proposal-dark"><div className="proposal-container"><AnimateOnScroll><SectionHeading number="02" eyebrow="Het contentsysteem" title="Twaalf kernvideo’s. Elk met een duidelijke functie." /></AnimateOnScroll>
        <div className="deliverables">{proposal.deliverables.map((d, i) => <AnimateOnScroll key={d.kind} delay={i * 60}><article><div className="deliverable-top"><span className="deliverable-count">{String(d.count).padStart(2, "0")}</span><p>{d.kind}</p></div><h3>{d.title}</h3><ul>{d.specs.map(x => <li key={x}>{x}</li>)}</ul><p className="deliverable-goal"><span>Doel</span>{d.goal}</p></article></AnimateOnScroll>)}</div>
        <p className="proposal-callout">We tellen kernproducties, geen bestandsversies. De zes socialvideo’s zijn unieke montages met een eigen hook en ritme — geen crops van de brandfilm.</p></div></section>

      <section className="proposal-section proposal-photo"><div className="proposal-container photo-grid"><div><p className="proposal-number">03</p><p className="proposal-eyebrow">Fotografie</p></div><AnimateOnScroll><div><h2>Beeld dat ook buiten video blijft werken.</h2><strong className="photo-count">30<span>+</span></strong><p className="proposal-lead">Afgewerkte campagnebeelden, portretten, werk-, detail- en behind-the-scenesbeelden. Selectie, basisretouche en web- en socialvriendelijke exports inbegrepen.</p><div className="media-placeholder"><span>Fotografie geïntegreerd in iedere draaidag</span></div></div></AnimateOnScroll></div></section>

      <section id="planning" className="proposal-section proposal-container"><AnimateOnScroll><SectionHeading number="04" eyebrow="Productieplanning" title="Vier draaidagen met één duidelijk plan." /></AnimateOnScroll>
        <ol className="timeline">{proposal.productionDays.map((day, i) => <li key={day.title}><span className="timeline-dot">{String(i + 1).padStart(2, "0")}</span><AnimateOnScroll><div className="timeline-body"><p className="proposal-eyebrow">Draaidag {String(i + 1).padStart(2, "0")}</p><h3>{day.title}</h3><div className="timeline-columns"><div><h4>Te filmen</h4><ul>{day.capture.map(x => <li key={x}>{x}</li>)}</ul></div><div><h4>Primaire output</h4><ul>{day.output.map(x => <li key={x}>{x}</li>)}</ul></div></div></div></AnimateOnScroll></li>)}</ol>
        <p className="scope-note">De planning gaat uit van locaties die vooraf efficiënt worden gegroepeerd. Bijkomende verspreide locaties of extra leveranciersbezoeken kunnen als aanvullende draaidag worden ingepland.</p>
      </section>

      <section className="proposal-section proposal-system"><div className="proposal-container"><AnimateOnScroll><SectionHeading number="05" eyebrow="Van opname tot asset" title="Eén opname. Meerdere toepassingen. Zonder de kern te verdunnen." /></AnimateOnScroll>
        <div className="asset-flow"><div className="asset-source"><span>Opgenomen materiaal</span><ArrowRight /></div><div className="asset-lines">{proposal.applications.map(x => <span key={x}>{x}</span>)}</div></div>
        <div className="definitions"><div><span>01</span><h3>Kernproductie</h3><p>Een uniek concept of een unieke montage met een eigen doel.</p></div><div><span>02</span><h3>Technische versie</h3><p>Een aangepast formaat, ondertiteling of taalversie van een bestaande kernproductie.</p></div></div>
        <p className="proposal-callout ink">Zo blijft de scope transparant en weet Huppa exact hoeveel afzonderlijke verhalen er werkelijk worden gemaakt.</p></div></section>

      <section id="scope" className="proposal-section proposal-container"><AnimateOnScroll><SectionHeading number="06" eyebrow="De scope" title="Duidelijk inbegrepen. Bewust afgebakend." /></AnimateOnScroll>
        <div className="scope-grid"><div><h3>Inbegrepen</h3><ul>{proposal.included.map(x => <li key={x}><Check />{x}</li>)}</ul></div><div><h3>Optioneel, wanneer nodig</h3><ul>{proposal.excluded.map(x => <li key={x}><Plus />{x}</li>)}</ul></div></div>
      </section>

      <section id="investering" className="proposal-section proposal-investment"><div className="proposal-container"><AnimateOnScroll><SectionHeading number="07" eyebrow="Investering" title="Een helder budget voor een duidelijke scope." /></AnimateOnScroll>
        <div className="investment-grid"><div><p className="investment-kicker">Aanbevolen basisvoorstel</p><strong className="investment-total">{money.format(proposal.total)}</strong><span>excl. btw</span><p>Alle kernproducties, afgesproken taalversies, technische exports en gebruiksrechten binnen bovenstaande scope zijn in deze prijs inbegrepen.</p></div><dl>{proposal.investment.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{money.format(row.price)}</dd></div>)}<div className="investment-sum"><dt>Totaal</dt><dd>{money.format(proposal.total)}</dd></div></dl></div>
        <div className="options"><div className="options-head"><div><p className="proposal-eyebrow">Optionele uitbreidingen</p><h3>Breid uit waar het verhaal dat vraagt.</h3></div><div className="running-total"><span>Geschat totaal</span><strong>{money.format(total)}{hasEstimate && " + prijs op maat"}</strong></div></div>
          {proposal.optionalModules.map(m => { const isFrom = "from" in m && m.from; return <label key={m.id} className={selected.includes(m.id) ? "option selected" : "option"}><input type="checkbox" checked={selected.includes(m.id)} onChange={() => toggle(m.id)} /><span className="checkbox"><Check /></span><span className="option-copy"><strong>{m.title}</strong><small>{m.description}</small>{isFrom && selected.includes(m.id) && <em>Prijs wordt bevestigd na conceptbepaling.</em>}</span><span className="option-price">{isFrom ? "Vanaf " : "+ "}{money.format(m.price)}</span></label>; })}
        </div></div></section>

      <section id="proces" className="proposal-section proposal-container"><AnimateOnScroll><SectionHeading number="08" eyebrow="Na goedkeuring" title="Van akkoord naar eerste draaidag." /></AnimateOnScroll><ol className="process-list">{proposal.process.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span><p>{x}</p></li>)}</ol></section>

      <section className="proposal-cta"><div className="proposal-container"><p className="proposal-eyebrow light">Huppa × Office6</p><h2>Klaar om het verhaal van Huppa zichtbaar te maken?</h2><p>Met deze aanpak bouwen we geen verzameling losse bestanden, maar een gerichte contentbasis die inzetbaar blijft voor merk, sales en campagnes.</p><div className="proposal-actions"><button onClick={() => setModal(true)} className="proposal-button primary">Voorstel goedkeuren <ArrowRight /></button><a href="mailto:hello@office6.be?subject=Huppa%20%E2%80%94%20aanpassingen%20voorstel" className="proposal-button secondary">Bespreek aanpassingen</a></div></div></section>
    </div>

    <footer className="proposal-footer"><div className="proposal-container"><div><strong>Huppa × Office6</strong><p>Vertrouwelijk voorstel · Enkel bestemd voor interne evaluatie</p><p className="print-date">Gegenereerd op {proposal.generatedOn}</p></div><Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} /><div><a href="https://office6.be">office6.be</a><a href="mailto:hello@office6.be">hello@office6.be</a></div></div></footer>

    {modal && <div className="proposal-modal" role="presentation" onMouseDown={e => e.target === e.currentTarget && setModal(false)}><div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="modal-title" className="proposal-dialog"><button className="modal-close" onClick={() => setModal(false)} aria-label="Sluiten"><X /></button><p className="proposal-eyebrow">Voorstel bespreken</p><h2 id="modal-title">Laat weten wie we mogen contacteren.</h2><p>Dit is geen juridisch bindende ondertekening. We nemen contact op om scope en volgende stappen te bevestigen.</p><form onSubmit={submit}><label>Naam<input required name="name" autoComplete="name" /></label><label>E-mailadres<input required type="email" name="email" autoComplete="email" /></label><label>Bedrijf<input required name="company" autoComplete="organization" defaultValue="Huppa" /></label><label>Bericht of opmerking<textarea name="message" rows={4} /></label><button className="proposal-button primary" type="submit">Contacteer mij <Mail /></button></form></div></div>}
  </div>;
}
