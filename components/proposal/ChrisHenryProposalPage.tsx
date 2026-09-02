"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Award, Check, CreditCard, Download, Lock, Mail, Play, Plus, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { chrisHenryProposal as proposal } from "@/lib/chris-henry-proposal";
import styles from "./ChrisHenryProposalPage.module.css";

const sections = [
  ["visie", "Vision"],
  ["programma", "Programme"],
  ["productie", "Production"],
  ["platform", "Platform"],
  ["planning", "Timeline"],
  ["investering", "Partnership"],
  ["praktisch", "Scope"],
] as const;

const money = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: proposal.currency,
  maximumFractionDigits: 0,
});

function Heading({ number, eyebrow, title, text, inverse = false }: { number: string; eyebrow: string; title: string; text?: string; inverse?: boolean }) {
  return (
    <header className={`${styles.heading} ${inverse ? styles.inverse : ""}`}>
      <div><span>{number}</span><p>{eyebrow}</p></div>
      <div><h2>{title}</h2>{text && <p className={styles.lead}>{text}</p>}</div>
    </header>
  );
}

function SnookerTable() {
  const balls = [
    ["50%", "50%", "white"], ["73%", "50%", "red"], ["76%", "45%", "red"],
    ["76%", "55%", "red"], ["79%", "40%", "red"], ["79%", "50%", "red"],
    ["79%", "60%", "red"], ["28%", "50%", "yellow"], ["36%", "50%", "blue"],
  ];
  return (
    <div className={styles.tableScene} aria-hidden="true">
      <div className={styles.tableLight} />
      <div className={styles.tableRail}>
        <div className={styles.tableFelt}>
          <i className={styles.baulkLine} />
          <i className={styles.baulkArc} />
          {balls.map(([left, top, color], index) => <b key={index} className={styles[color]} style={{ left, top }} />)}
        </div>
      </div>
      <span className={styles.tableCaption}>Level 1 · built for focus</span>
    </div>
  );
}

export default function ChrisHenryProposalPage() {
  const [active, setActive] = useState("visie");
  const [modal, setModal] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = sections.map(([id]) => {
      const node = document.getElementById(id);
      if (!node) return;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(id), { rootMargin: "-28% 0px -58%" });
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
    window.location.href = "mailto:hello@office6.be?subject=Chris%20Henry%20%E2%80%94%20platform%20partnership";
  };

  return (
    <div className={`proposal-page ${styles.page}`} lang="en">
      <nav className={styles.progress} aria-label="Proposal chapters">
        <a href="#top" className={styles.progressBrand} aria-label="Back to top">CH × O6</a>
        <div className={styles.progressTrack}>
          {sections.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className={active === id ? styles.active : ""} aria-label={`${String(index + 1).padStart(2, "0")} — ${label}`}>
              <i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span>
            </a>
          ))}
        </div>
        <button onClick={() => window.print()} className={styles.print} aria-label="Save as PDF"><Download /></button>
      </nav>

      <header id="top" className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.lockup}>
            <div className={styles.clientMark}><span>CH</span><small>Chris Henry<br />Coaching</small></div>
            <i>×</i>
            <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
          </div>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{proposal.label}</p>
              <h1>From knowledge<br />to <em>mastery.</em></h1>
              <p>A custom coaching platform bringing 60 lessons, practical demonstrations and certification together in one premium learning experience.</p>
              <a href="#visie" className={styles.heroButton}>Explore the proposal <ArrowDown /></a>
            </div>
            <SnookerTable />
          </div>
          <dl className={styles.heroStats}>
            <div><dt>{proposal.totals.lessons}</dt><dd>video lessons</dd></div>
            <div><dt>{proposal.totals.duration}</dt><dd>course duration</dd></div>
            <div><dt>{proposal.totals.modules}</dt><dd>modules</dd></div>
            <div><dt>1</dt><dd>certification journey</dd></div>
          </dl>
        </div>
      </header>

      <main>
        <section id="visie" className={styles.paperSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="01" eyebrow="The ambition" title="Not simply watching videos. Learning to coach." text="We turn an intensive Level 1 programme into a digital environment where knowledge, technique and certification build naturally on one another." /></AnimateOnScroll>
            <div className={styles.manifesto}>
              <p>The digital experience should carry the same authority as the method itself.</p>
              <strong>A globally accessible coaching programme that still feels personal.</strong>
            </div>
            <div className={styles.principles}>
              {proposal.principles.map((item, index) => <AnimateOnScroll key={item.title} delay={index * 80}><article><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article></AnimateOnScroll>)}
            </div>
          </div>
        </section>

        <section id="programma" className={styles.programSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="02" eyebrow="Learning architecture" title="Five free lessons open the door. The full journey builds expertise." text="One clear learning path connects the free preview, paid membership, module progression and certification." inverse /></AnimateOnScroll>
            <div className={styles.accessFlow}>
              <div><Play /><span>Free preview</span><strong>5 lessons</strong><small>Prove value and convert</small></div>
              <i><ArrowRight /></i>
              <div><CreditCard /><span>Membership</span><strong>55 lessons</strong><small>The complete Level 1 programme</small></div>
              <i><ArrowRight /></i>
              <div><Award /><span>Certification</span><strong>Exam</strong><small>Assessment and proof of completion</small></div>
            </div>
            <div className={styles.curriculum}>
              {proposal.curriculum.map((module) => (
                <article key={module.code}>
                  <span>{module.code}</span>
                  <div><h3>{module.title}</h3><p>{module.access}</p></div>
                  <strong>{module.lessons}<small>lessons</small></strong>
                  <time>{module.duration}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="productie" className={styles.paperSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="03" eyebrow="Content production" title="Two setups. One consistent course look." text="We group theory and table demonstrations efficiently without compromising the quality of the learning experience." /></AnimateOnScroll>
            <div className={styles.productionSplit}>
              <div className={styles.productionVisual} aria-hidden="true"><span>23</span><i /><span>37</span><p>Talking head<br />vs. table demo</p></div>
              <div className={styles.productionList}>
                {proposal.production.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><p>{item.timing}</p><h3>{item.title}</h3><small>{item.text}</small></div></article>)}
              </div>
            </div>
            <aside className={styles.productionNote}><strong>12–20</strong><div><p>focused filming days</p><span>The final schedule depends on the scripts, coach and venue availability, and the complexity of the 37 table demonstrations.</span></div></aside>
          </div>
        </section>

        <section id="platform" className={styles.platformSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="04" eyebrow="Custom platform" title="From first click to certificate. One system." text="Not a collection of disconnected tools, but one manageable platform connecting audience, content, payments and learning progress." inverse /></AnimateOnScroll>
            <div className={styles.platformGrid}>
              {proposal.platform.map((item, index) => <AnimateOnScroll key={item.title} delay={(index % 3) * 70}><article><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>{index === 1 && <CreditCard />}{index === 2 && <Play />}{index === 4 && <Award />}{index === 0 && <ArrowRight />}{index === 3 && <Lock />}</article></AnimateOnScroll>)}
            </div>
            <p className={styles.platformPromise}><Lock /> Secure content, a frictionless member experience and a foundation ready for Level 2 and future programmes.</p>
          </div>
        </section>

        <section id="planning" className={styles.timelineSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="05" eyebrow="Timeline" title="Content and platform move forward in parallel." text="With a compact team, we expect a delivery window of approximately 4 to 5.5 months. The exact calendar follows discovery and availability checks." /></AnimateOnScroll>
            <ol className={styles.timeline}>
              {proposal.timeline.map((item) => <li key={item.phase}><span>{item.phase}</span><div><p>{item.timing}</p><h3>{item.title}</h3><small>{item.text}</small></div></li>)}
            </ol>
            <div className={styles.speedCompare}><div><span>Compact team</span><strong>4–5.5 months</strong><p>1–2 developers + designer</p></div><div><span>Accelerated team</span><strong>3–4 months</strong><p>3–4 developers + designer</p></div></div>
          </div>
        </section>

        <section id="investering" className={styles.investmentSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="06" eyebrow="Partnership model" title="We invest in the platform together." text="A limited setup contribution lowers the upfront barrier. Office6 carries the remaining production and development risk in exchange for a share in the platform’s success." inverse /></AnimateOnScroll>
            <div className={styles.priceRange}><p>Commercial model</p><div><strong>{money.format(proposal.partnership.setupFee)}</strong><i>+</i><strong>{proposal.partnership.revenueShare}%</strong></div><span>setup fee excl. VAT · revenue share for {proposal.partnership.termMonths} months</span></div>
            <div className={styles.breakdown}>
              {proposal.partnershipIncludes.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><p><b>{item.title}</b><small>{item.text}</small></p><strong>{item.value}</strong></div>)}
            </div>
            <aside className={styles.budgetNote}><p>Net platform revenue</p><span>{proposal.partnership.definition}</span></aside>
          </div>
        </section>

        <section id="praktisch" className={styles.paperSection}>
          <div className={styles.container}>
            <AnimateOnScroll><Heading number="07" eyebrow="Scope & terms" title="Clear before we begin." /></AnimateOnScroll>
            <div className={styles.scopeGrid}>
              <div><h3>Included</h3><ul>{proposal.included.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
              <div><h3>Not included as standard</h3><ul>{proposal.excluded.map((item) => <li key={item}><Plus />{item}</li>)}</ul></div>
            </div>
            <div className={styles.assumptions}>{proposal.assumptions.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.nextSection}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>After alignment</p>
            <h2>From expertise to a platform built to grow worldwide.</h2>
            <ol>{proposal.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
            <div className={styles.actions}><button onClick={() => setModal(true)}>Discuss the partnership <ArrowRight /></button><a href="mailto:hello@office6.be?subject=Chris%20Henry%20%E2%80%94%20proposal%20feedback">Request an adjustment</a></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><div className={styles.container}><div><strong>Chris Henry × Office6</strong><p>Confidential proposal · valid until {proposal.validUntil}</p></div><Image src="/logos/office6-black-6.png" alt="Office6" width={590} height={104} loading="eager" /><div><a href="https://office6.be">office6.be</a><a href="mailto:hello@office6.be">hello@office6.be</a></div></div></footer>

      {modal && <div className={styles.modal} onMouseDown={(event) => event.target === event.currentTarget && setModal(false)}><div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="chris-modal-title" className={styles.dialog}><button className={styles.close} onClick={() => setModal(false)} aria-label="Close"><X /></button><p className={styles.eyebrow}>Discuss the partnership</p><h2 id="chris-modal-title">Let’s align scope, responsibilities and timing.</h2><p>Leave your details and we will get in touch to discuss the partnership model and discovery.</p><form onSubmit={submit}><label>Name<input required name="name" autoComplete="name" defaultValue="Chris Henry" /></label><label>Email address<input required type="email" name="email" autoComplete="email" /></label><label>Company<input required name="company" defaultValue={proposal.organisation} /></label><label>Message or question<textarea rows={4} name="message" /></label><button type="submit">Contact me <Mail /></button></form></div></div>}
    </div>
  );
}
