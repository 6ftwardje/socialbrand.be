"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Download, MapPin, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { foodFairProposal as proposal } from "@/lib/foodfair-proposal";
import styles from "./FoodFairProposalPage.module.css";

const sections = [
  ["opdracht", "Opdracht"],
  ["aanpak", "Aanpak"],
  ["scope", "Scope"],
  ["investering", "Investering"],
  ["praktisch", "Praktisch"],
  ["volgende", "Next steps"],
] as const;

const euro = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: proposal.currency,
  maximumFractionDigits: 0,
});

function Heading({ number, eyebrow, title, text, inverse = false }: {
  number: string;
  eyebrow: string;
  title: string;
  text?: string;
  inverse?: boolean;
}) {
  return (
    <header className={`${styles.heading} ${inverse ? styles.inverse : ""}`}>
      <div><span>{number}</span><p>{eyebrow}</p></div>
      <div><h2>{title}</h2>{text && <p className={styles.lead}>{text}</p>}</div>
    </header>
  );
}

export default function FoodFairProposalPage() {
  const [active, setActive] = useState("opdracht");

  useEffect(() => {
    const observers = sections.map(([id]) => {
      const node = document.getElementById(id);
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-30% 0px -55%" },
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <article className={`proposal-page ${styles.page}`}>
      <nav className={styles.sideNav} aria-label="Hoofdstukken in de offerte">
        <a href="#top" className={styles.sideBrand} aria-label="Naar boven">H × O6</a>
        <div className={styles.sideTrack}>
          {sections.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className={active === id ? styles.active : ""} aria-label={`${index + 1}. ${label}`}>
              <i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span>
            </a>
          ))}
        </div>
        <a className={styles.downloadIcon} href="/voorstel/foodfair/offerte-huppa-food-fair-recap.pdf" download aria-label="Download offerte als PDF">
          <Download aria-hidden="true" />
        </a>
      </nav>

      <header id="top" className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroTop}>
            <div className={styles.lockup}>
              <Image src="https://huppapitch-production.up.railway.app/huppa-logo-white.png" alt="Huppa" width={120} height={32} priority />
              <span>×</span>
              <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
            </div>
            <p>Offerte · {proposal.generatedOn}</p>
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Vertical recap · 9:16</p>
            <h1>Food Fair<br /><span>in beweging.</span></h1>
            <p>Een snelle, smaakvolle recap die de energie van Huppa’s B2B-foodbeurs vertaalt naar social.</p>
            <div className={styles.heroActions}>
              <a href="#opdracht">Bekijk de offerte <ArrowDown aria-hidden="true" /></a>
              <a href="/voorstel/foodfair/offerte-huppa-food-fair-recap.pdf" download>Download PDF <Download aria-hidden="true" /></a>
            </div>
          </div>

          <dl className={styles.metadata}>
            <div><dt>Datum</dt><dd>{proposal.eventDate}</dd></div>
            <div><dt>Aanwezig</dt><dd>4 uur</dd></div>
            <div><dt>Formaat</dt><dd>9:16 · 30–45 sec.</dd></div>
            <div><dt>Locatie</dt><dd>Planet Group Arena, Gent</dd></div>
          </dl>
        </div>
      </header>

      <main>
        <section id="opdracht" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="01" eyebrow="De opdracht" title="Eén compacte recap. Meteen klaar voor social." text="We capteren vier uur lang de mensen, smaken en energie die de Huppa Food Fair de moeite maken — en brengen dat samen in één sterke verticale edit." /></AnimateOnScroll>
            <div className={styles.deliverable}>
              <p className={styles.eyebrow}>Finale oplevering</p>
              <h3>{proposal.deliverable.title}</h3>
              <dl>
                <div><dt>Duur</dt><dd>{proposal.deliverable.duration}</dd></div>
                <div><dt>Beeldverhouding</dt><dd>{proposal.deliverable.format}</dd></div>
                <div><dt>Timing</dt><dd>{proposal.deliverable.delivery}</dd></div>
                <div><dt>Feedback</dt><dd>2 gebundelde rondes</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="aanpak" className={`${styles.section} ${styles.ink}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="02" eyebrow="Wat we capteren" title="Disco, food & inspiration. Zonder omwegen." text="Een ritmische montage die de beurs voelbaar maakt en Huppa herkenbaar in beeld houdt." inverse /></AnimateOnScroll>
            <ol className={styles.captureList}>
              {proposal.capture.map(([title, text], index) => (
                <AnimateOnScroll key={title} delay={index * 60}>
                  <li><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>
                </AnimateOnScroll>
              ))}
            </ol>
          </div>
        </section>

        <section id="scope" className={`${styles.section} ${styles.warm}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="03" eyebrow="Scope" title="Duidelijk inbegrepen. Duidelijk afgebakend." /></AnimateOnScroll>
            <div className={styles.scopeGrid}>
              <div><h3>Inbegrepen</h3><ul>{proposal.included.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
              <div><h3>Niet inbegrepen</h3><ul>{proposal.excluded.map((item) => <li key={item}><Plus aria-hidden="true" />{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="investering" className={`${styles.section} ${styles.priceSection}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="04" eyebrow="Investering" title="Eén vaste productieprijs." inverse /></AnimateOnScroll>
            <div className={styles.price}>
              <strong>{euro.format(proposal.total)}</strong><span>excl. btw</span>
              <p>Voor voorbereiding, vier uur opname, montage, eenvoudige motion graphics, muzieklicentie en twee correctierondes.</p>
            </div>
            <div className={styles.travel}>
              <span>Verplaatsing</span>
              <p>Verplaatsingskosten vanuit Brugge zijn niet inbegrepen. Ze worden afzonderlijk berekend en vooraf bevestigd.</p>
            </div>
            <aside className={styles.testimonial}>
              <div><p className={styles.eyebrow}>Aanbevolen supplement</p><h3>{proposal.testimonial.title}</h3><p>{proposal.testimonial.text}</p></div>
              <strong>{proposal.testimonial.price}</strong>
            </aside>
          </div>
        </section>

        <section id="praktisch" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="05" eyebrow="Voor de draaidag" title="Wat we nog van Huppa nodig hebben." text="Tijdige input houdt de vier opname-uren gericht en zorgt dat geen sleutelmoment verloren gaat." /></AnimateOnScroll>
            <div className={styles.requirements}>
              {proposal.required.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <div className={styles.location}>
              <MapPin aria-hidden="true" />
              <div><p className={styles.eyebrow}>Opnamelocatie</p><h3>Planet Group Arena</h3><p>Ottergemsesteenweg Zuid 808, 9000 Gent</p></div>
              <div><p className={styles.eyebrow}>Oplevering</p><h3>Uiterlijk 4 oktober</h3><p>Binnen 7 kalenderdagen na de opnames.</p></div>
            </div>
          </div>
        </section>

        <section id="volgende" className={`${styles.section} ${styles.warm}`}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="06" eyebrow="Next steps" title="Van akkoord naar recap." /></AnimateOnScroll>
            <ol className={styles.process}>
              {proposal.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
            </ol>
            <div className={styles.terms}>
              <div><span>30%</span><p>voorschot bij akkoord</p></div>
              <div><span>70%</span><p>bij finale oplevering</p></div>
              <div><span>27.09</span><p>offerte geldig tot eventdag</p></div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Huppa × Office6</p>
            <h2>Klaar om de Food Fair vast te leggen?</h2>
            <p>Na akkoord plannen we de praktische voorbereiding en vertalen we het draaiboek naar een compacte shotlist.</p>
            <div className={styles.ctaActions}>
              <a href="mailto:hello@office6.be?subject=Akkoord%20offerte%20Huppa%20Food%20Fair%20Recap">Bevestig de offerte <ArrowRight aria-hidden="true" /></a>
              <a href="/voorstel/foodfair/offerte-huppa-food-fair-recap.pdf" download>Download PDF <Download aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div><strong>Huppa Food Fair × Office6</strong><p>Offerte · {proposal.generatedOn}</p></div>
          <Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} />
          <div><a href="https://office6.be">office6.be</a><a href="mailto:hello@office6.be">hello@office6.be</a></div>
        </div>
      </footer>
    </article>
  );
}
