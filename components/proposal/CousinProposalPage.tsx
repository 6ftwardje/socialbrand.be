"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Download, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { cousinProposal as proposal, cousinTotal, cousinVat } from "@/lib/cousin-proposal";
import styles from "./CousinProposalPage.module.css";

const sections = [
  ["visie", "Visie"],
  ["website", "Website"],
  ["scope", "Scope"],
  ["proces", "Proces"],
  ["investering", "Investering"],
  ["praktisch", "Praktisch"],
  ["akkoord", "Akkoord"],
] as const;

const euro = new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 });
const euroCents = new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const formatEuro = (value: number) => euro.format(value).replace(/\s/g, "");
const formatEuroCents = (value: number) => euroCents.format(value).replace(/\s/g, "");

function SectionIntro({ number, eyebrow, title, text, inverse = false }: { number: string; eyebrow: string; title: string; text?: string; inverse?: boolean }) {
  return (
    <header className={`${styles.sectionIntro} ${inverse ? styles.inverse : ""}`}>
      <div className={styles.sectionIndex}><span>{number}</span><p>{eyebrow}</p></div>
      <div><h2>{title}</h2>{text && <p className={styles.lead}>{text}</p>}</div>
    </header>
  );
}

export default function CousinProposalPage() {
  const [active, setActive] = useState("visie");
  const [deliverableIndex, setDeliverableIndex] = useState(0);
  const [deliverablesPaused, setDeliverablesPaused] = useState(false);
  const [deliverablesVisible, setDeliverablesVisible] = useState(false);
  const deliverablesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = sections.map(([id]) => {
      const node = document.getElementById(id);
      if (!node) return;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(id), { rootMargin: "-25% 0px -60%" });
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    const node = deliverablesRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setDeliverablesVisible(entry.isIntersecting);
      if (entry.isIntersecting) setDeliverableIndex(0);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!deliverablesVisible || deliverablesPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setDeliverableIndex((current) => (current + 1) % proposal.deliverables.length);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [deliverablesPaused, deliverablesVisible]);

  return (
    <article className={`proposal-page ${styles.page}`}>
      <nav className={styles.nav} aria-label="Hoofdstukken in het voorstel">
        <div className={styles.navInner}>
          <a href="#top" className={styles.navBrand} aria-label="Naar boven">C × O6</a>
          <div className={styles.navLinks}>
            {sections.map(([id, label], index) => (
              <a key={id} href={`#${id}`} className={active === id ? styles.active : ""}>
                <i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span>
              </a>
            ))}
          </div>
          <button className={styles.printButton} onClick={() => window.print()} aria-label="Bewaar voorstel als PDF">
            <Download aria-hidden="true" /><span>Bewaar als PDF</span>
          </button>
        </div>
      </nav>

      <header id="top" className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroLetter} aria-hidden="true">C</div>
        <div className={styles.container}>
          <div className={styles.heroTop}>
            <div className={styles.lockup}>
              <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
              <span>×</span>
              <Image src="/logos/cousin-wordmark.png" alt="Cousin" width={855} height={234} priority />
            </div>
            <p>Vertrouwelijk voorstel · 2026</p>
          </div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Office6 × Cousin</p>
            <h1>Website<span>voorstel</span></h1>
            <p>Een digitale thuis voor een nieuwe generatie kapsalon in Aalter.</p>
            <a href="#visie" className={styles.heroLink}>Ontdek het voorstel <ArrowDown aria-hidden="true" /></a>
          </div>
          <dl className={styles.metadata}>
            <div><dt>Klant</dt><dd>{proposal.client}</dd></div>
            <div><dt>Locatie</dt><dd>{proposal.location}</dd></div>
            <div><dt>Project</dt><dd>{proposal.project}</dd></div>
            <div><dt>Offerte</dt><dd>{proposal.offer}</dd></div>
            <div><dt>Datum</dt><dd>{proposal.date}</dd></div>
            <div><dt>Geldig tot</dt><dd>{proposal.validUntil}</dd></div>
          </dl>
        </div>
      </header>

      <main>
        <section id="visie" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="01" eyebrow="Projectvisie" title="Cousin, online." text="Een compacte website die de identiteit van Cousin voelbaar maakt en bezoekers vlot naar een afspraak leidt." /></AnimateOnScroll>
            <div className={styles.visionStatement}>
              <p>Geen overbodige pagina’s, wel precies wat een nieuwe zaak nodig heeft om vertrouwen op te bouwen.</p>
              <strong>Meer dan een website.<br />Een digitale plek die voelt als binnenstappen bij Cousin.</strong>
            </div>
            <div className={styles.manifesto} aria-label="Look, Feel, Book">
              {[
                ["Look", "Een sterke eerste indruk met merk, typografie en beeld."],
                ["Feel", "De sfeer van Cousin voelbaar vóór iemand binnenstapt."],
                ["Book", "Van interesse naar afspraak in zo weinig mogelijk stappen."],
              ].map(([title, text], index) => <AnimateOnScroll key={title} delay={index * 70}><article><span>0{index + 1}</span><h3>{title}.</h3><p>{text}</p></article></AnimateOnScroll>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ink}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="02" eyebrow="Doelstellingen" title="Wat de website moet doen." inverse /></AnimateOnScroll>
            <ol className={styles.editorialList}>
              {proposal.goals.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="website" className={`${styles.section} ${styles.warm}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="03" eyebrow="Website-architectuur" title="Wat we bouwen." text="Zes kernpagina’s. De finale sitemap leggen we vast tijdens de kickoff." /></AnimateOnScroll>
            <div className={styles.sitemap}>
              {proposal.pages.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
            <aside className={styles.bookingNote}>
              <p className={styles.eyebrow}>Van interesse naar afspraak</p>
              <h3>De bestaande Salonkee-omgeving, naadloos geïntegreerd.</h3>
              <p>Office6 koppelt de bestaande Salonkee-omgeving op de juiste plaatsen in de website. Het Salonkee-abonnement zelf blijft rechtstreeks bij Salonkee.</p>
            </aside>
          </div>
        </section>

        <section id="scope" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="04" eyebrow="Inbegrepen" title="Van eerste structuur tot livegang." text="Eén duidelijke scope van kickoff tot handover." /></AnimateOnScroll>
            <div className={styles.scopeGrid}>
              {proposal.scope.map((group, index) => <article key={group.title}>
                <div className={styles.scopeHead}><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3></div>
                <ul>{group.items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                {"note" in group && <p className={styles.scopeNote}>{group.note}</p>}
              </article>)}
            </div>
          </div>
        </section>

        <section className={styles.deliverablesSection} aria-labelledby="deliverables-title">
          <div className={styles.container}>
            <p className={styles.eyebrow}>Website Launch Package</p>
            <h2 id="deliverables-title">Alles voor een sterke digitale start.</h2>
            <div
              ref={deliverablesRef}
              className={styles.deliverableStage}
            >
              <div className={styles.deliverableCounter} aria-hidden="true">
                <span>{String(deliverableIndex + 1).padStart(2, "0")}</span>
                <i />
                <span>{String(proposal.deliverables.length).padStart(2, "0")}</span>
              </div>
              <p key={deliverableIndex} className={styles.deliverableActive} aria-live="polite">
                {proposal.deliverables[deliverableIndex]}
              </p>
              <button type="button" onClick={() => setDeliverablesPaused((paused) => !paused)}>
                {deliverablesPaused ? "Verder" : "Pauzeer"}
              </button>
              <div className={styles.deliverableProgress} aria-hidden="true">
                {proposal.deliverables.map((item, index) => <i key={item} className={index === deliverableIndex ? styles.current : ""} />)}
              </div>
            </div>
            <div className={styles.deliverablesPrint}>
              {proposal.deliverables.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
            </div>
          </div>
        </section>

        <section id="proces" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="05" eyebrow="Proces" title="Van kickoff tot livegang." /></AnimateOnScroll>
            <ol className={styles.timeline}>
              {proposal.timeline.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
            </ol>
            <div className={styles.timing}><p>Verwachte doorlooptijd</p><strong>4–6 weken</strong><small>Vanaf voorschot en ontvangst van de nodige content. Tijdige feedback houdt de planning op koers.</small></div>
          </div>
        </section>

        <section id="investering" className={`${styles.section} ${styles.investment}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="06" eyebrow="Investering" title="Eén compact launch package." text="Alles voor een professionele digitale lancering." inverse /></AnimateOnScroll>
            <div className={styles.priceHero}>
              <p>Website Launch Package</p>
              <strong>{formatEuro(proposal.basePrice)}</strong>
              <span>excl. btw</span>
            </div>
            <div className={styles.priceLayout}>
              <div className={styles.breakdown} role="table" aria-label="Prijsopbouw">
                <div className={styles.breakdownHead} role="row"><span role="columnheader">Onderdeel</span><span role="columnheader">Prijs excl. btw</span></div>
                {proposal.pricing.map(([label, amount]) => <div role="row" key={label}><span role="cell">{label}</span><strong role="cell">{formatEuro(amount)}</strong></div>)}
              </div>
              <dl className={styles.totals}>
                <div><dt>Subtotaal</dt><dd>{formatEuroCents(proposal.basePrice)}</dd></div>
                <div><dt>Btw 21%</dt><dd>{formatEuroCents(cousinVat)}</dd></div>
                <div><dt>Totaal incl. btw</dt><dd>{formatEuroCents(cousinTotal)}</dd></div>
              </dl>
            </div>
            <p className={styles.priceNote}>Alle bedragen zijn exclusief externe abonnementen, licenties en productiekosten tenzij expliciet anders vermeld.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.careSection}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="07" eyebrow="Na de lancering" title="Zorgeloos online blijven." text="Terugkerende kosten staan bewust los van de eenmalige website-investering." /></AnimateOnScroll>
            <div className={styles.careLayout}>
              <article className={styles.careMain}>
                <p className={styles.eyebrow}>Office6 Care</p>
                <div className={styles.carePrice}><strong>{formatEuro(proposal.careMonthly)}</strong><span>/ maand excl. btw</span></div>
                <p>Facturatie jaarlijks.</p>
                <ul>{proposal.care.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                <small>Nieuwe pagina’s, designwijzigingen, contentproductie of nieuwe functionaliteiten vallen niet onder het standaard onderhoud.</small>
              </article>
              <div className={styles.costRows}>
                <article><p className={styles.eyebrow}>Extra werk buiten scope</p><strong>{formatEuro(proposal.hourlyRate)} / uur <small>excl. btw</small></strong><p>Alleen na voorafgaand akkoord van Cousin.</p></article>
                <article><h3>Domeinnaam</h3><p>Aan kostprijs of rechtstreeks door Cousin.</p></article>
                <article><h3>Salonkee</h3><p>Het bestaande abonnement loopt rechtstreeks tussen Cousin en Salonkee.</p></article>
                <article><h3>Zakelijke e-mail</h3><p>Niet standaard inbegrepen. Kan indien gewenst apart worden ingesteld.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="praktisch" className={`${styles.section} ${styles.ink}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="08" eyebrow="Heldere grenzen" title="Wat apart blijft." text="Externe kosten en uitbreidingen worden altijd vooraf besproken." inverse /></AnimateOnScroll>
            <div className={styles.productionBlock}>
              <div><p className={styles.eyebrow}>Contentproductie</p><h3>Fotografie en video versterken de lancering.</h3><strong>Niet inbegrepen in deze offerte en altijd apart begroot.</strong></div>
              <div><ul>{proposal.production.map((item) => <li key={item}>{item}</li>)}</ul><p>Een productieofferte volgt zodra de gewenste omvang bekend is.</p></div>
            </div>
            <div className={styles.exclusions}>
              <h3>Niet inbegrepen</h3>
              <ul>{proposal.excluded.map((item) => <li key={item}>{item}</li>)}</ul>
              <p>Meerwerk gebeurt uitsluitend na schriftelijk akkoord.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><SectionIntro number="09" eyebrow="Samenwerken" title="Duidelijk voor we beginnen." /></AnimateOnScroll>
            <div className={styles.collaborationGrid}>
              <article><p className={styles.eyebrow}>Input van Cousin</p><h3>Wij helpen alles structureren.</h3><ul>{proposal.clientInput.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><p className={styles.eyebrow}>Feedback</p><h3>2 gebundelde feedbackrondes.</h3><p>Eén contactpersoon bundelt feedback per ronde. Nieuwe richtingen, pagina’s of wijzigingen na goedkeuring gelden mogelijk als meerwerk—nooit zonder voorafgaand akkoord.</p></article>
            </div>
            <div className={styles.payment}>
              <div><p className={styles.eyebrow}>Betaling</p><h3>50 / 30 / 20</h3></div>
              {[
                ["50%", "Bij goedkeuring", "Start van het project."],
                ["30%", "Na webdesign", "Voor start van de finale developmentfase."],
                ["20%", "Bij oplevering", "Voor de publieke livegang."],
              ].map(([percentage, title, text]) => <article key={percentage}><strong>{percentage}</strong><h4>{title}</h4><p>{text}</p></article>)}
            </div>
            <p className={styles.paymentNote}>Betaaltermijn: 14 dagen · Bedragen excl. btw · Externe kosten worden vooraf duidelijk gecommuniceerd.</p>
            <div className={styles.ownership}>
              <p className={styles.eyebrow}>Eigendom</p>
              <p>Na volledige betaling ontvangt Cousin de rechten en beheertoegang tot het klantspecifieke webdesign. Externe software en fonts behouden hun eigen licentievoorwaarden.</p>
              <p>Office6 mag het project als referentie tonen, tenzij schriftelijk anders afgesproken.</p>
            </div>
            <div className={styles.conditions}>
              <p className={styles.eyebrow}>Praktische voorwaarden</p>
              {proposal.conditions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Office6 × Cousin</p>
            <h2>Ready for Cousin.</h2>
            <p>Een heldere website, lokale vindbaarheid en een korte route naar Salonkee.</p>
            <div className={styles.actions}>
              <a href="#akkoord" className={styles.primaryButton}>Offerte goedkeuren <ArrowDown aria-hidden="true" /></a>
              <a href="mailto:hello@office6.be?subject=Cousin%20%E2%80%94%20websitevoorstel%20bespreken" className={styles.secondaryButton}>Bespreek het voorstel <Mail aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="akkoord" className={`${styles.section} ${styles.approvalSection}`}>
          <div className={styles.container}>
            <div className={styles.approvalHead}><div><p className={styles.eyebrow}>Office6 × Cousin</p><h2>Website Launch Package</h2></div><div><strong>{formatEuro(proposal.basePrice)}</strong><span>excl. btw</span></div></div>
            <div className={styles.signatureGrid}>
              {[["Naam", ""], ["Functie", ""], ["Datum", ""], ["Handtekening", "wide"]].map(([label, kind]) => <div key={label} className={kind === "wide" ? styles.signatureWide : ""}><span>{label}</span><i aria-hidden="true" /></div>)}
            </div>
            <div className={styles.approvalBottom}>
              <p>Door deze offerte schriftelijk goed te keuren bevestigt Cousin akkoord te gaan met de beschreven scope, investering en betalingsvoorwaarden.</p>
              <a href="mailto:hello@office6.be?subject=Cousin%20%E2%80%94%20goedkeuring%20websitevoorstel&body=Beste%20Office6%2C%0A%0AHierbij%20bevestig%20ik%20namens%20Cousin%20de%20goedkeuring%20van%20het%20websitevoorstel.%0A%0AMet%20vriendelijke%20groet%2C">Bevestig per e-mail <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div><strong>Cousin × Office6</strong><p>Vertrouwelijk voorstel · {proposal.date}</p></div>
          <Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} />
          <div><a href="https://office6.be">office6.be</a><a href="mailto:hello@office6.be">hello@office6.be</a></div>
        </div>
      </footer>
    </article>
  );
}
