"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  Clock3,
  LockKeyhole,
  MoveUpRight,
  Play,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./PlatformPage.module.css";

const steps = [
  ["01", "Strategy", "We scherpen doelgroep, aanbod, curriculum en de commerciële rol van het platform aan."],
  ["02", "Course design", "Jij brengt de expertise. Samen vertalen we die naar heldere modules, lessen en scripts."],
  ["03", "Opname & montage", "Eén gefocuste draaidag in onze studio, gevolgd door montage en ondertiteling."],
  ["04", "Development", "We bouwen de ervaring rond jouw merk, niche en manier van begeleiden."],
  ["05", "Testing & launch", "We testen de volledige flow, vullen de content en zetten het platform gecontroleerd live."],
  ["06", "Growth & care", "Na de lancering houden we het platform gezond en kan marketing de instroom versnellen."],
];

const included = [
  "1 opleiding met 3 modules van elk 3 lessen",
  "Tot 50 studentaccounts en 1 administrator",
  "9 video’s · samen tot 90 afgewerkte minuten",
  "1 opnamedag · 2 sessies van 3 uur",
  "Courseworkshop, scriptbegeleiding en teleprompter",
  "1 camera-angle, automatische ondertitels en thumbnails",
  "Meerkeuze-examen met 10 tekstvragen per module",
  "Voortgang en resultaten per student in het adminpanel",
  "Automatisch certificaat na succesvolle afronding",
  "Veilige login, registratie en rolgebaseerde toegang",
  "Responsive ervaring voor desktop, tablet en mobiel",
  "2 feedbackrondes op design, development en montage",
];

const extensions = [
  ["Extra 30 min. afgewerkte course", "€ 950"],
  ["Extra volledige opnamedag", "€ 1.250"],
  ["Extra module · tot 3 lessen", "€ 650"],
  ["Extra les · tot 10 afgewerkte minuten", "€ 350"],
  ["Betalingen of abonnementen", "vanaf € 1.250"],
  ["CRM, agenda of e-mailintegratie", "vanaf € 750"],
  ["Meertaligheid", "vanaf € 950"],
  ["Custom animatie of motion graphics", "op offerte"],
];

const care = [
  "Hosting en technisch beheer",
  "Dagelijkse back-ups met 30 dagen bewaartermijn",
  "Monitoring en beveiligingsupdates",
  "Bugfixes op de opgeleverde scope",
  "Support tijdens Belgische kantooruren",
  "Maandelijkse software- en dependency-updates",
];

const practicalItems = [
  ["Planning & feedback", "De gemiddelde doorlooptijd is 12 weken vanaf ontvangst van alle input. De klant levert curriculum, domeintoegang en brand assets aan. Per fase zijn 2 gebundelde feedbackrondes inbegrepen; feedback wordt binnen 7 kalenderdagen aangeleverd."],
  ["Eigendom & accounts", "De klant blijft eigenaar van content, video’s, advertentie-assets en data. Office6 behoudt de broncode en platformarchitectuur. Bestaande domein- en advertentieaccounts blijven op naam van de klant. Een volledige technische overdracht is mogelijk in overleg vanaf €2.750 excl. btw."],
  ["Privacy & beveiliging", "De klant is verwerkingsverantwoordelijke; Office6 handelt als verwerker onder een verwerkersovereenkomst. We werken standaard met versleutelde verbindingen, rolgebaseerde toegang, Europese hosting waar mogelijk en dagelijkse back-ups. Juridische teksten en expliciete compliance-audits zijn niet inbegrepen."],
  ["Support & beschikbaarheid", "We streven naar 99,5% beschikbaarheid, uitgezonderd gepland onderhoud en externe storingen. Kritieke meldingen krijgen binnen 1 werkdag reactie; reguliere vragen binnen 2 werkdagen. Nieuwe functies en contentwijzigingen vallen buiten bugfixing."],
  ["Wanneer Platform Care stopt", "Het platform gaat offline op de einddatum. De klant kan vooraf data exporteren. Platformconfiguratie en contentback-up worden maximaal 12 maanden bewaard; persoonsgegevens van studenten worden na export in principe binnen 90 dagen verwijderd, tenzij een andere wettelijke afspraak geldt."],
];

export default function PlatformPage() {
  const [openPractical, setOpenPractical] = useState(0);

  return (
    <div className={`${styles.page} platform-sales-page`}>
      <header className={styles.hero}>
        <nav className={styles.nav}>
          <Link href="/" aria-label="Office6 home">
            <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
          </Link>
          <div>
            <a href="#aanpak">Aanpak</a>
            <a href="#investering">Investering</a>
            <a href="#cases">Cases</a>
          </div>
          <Link href="/contact" className={styles.navCta}>Bespreek jouw platform <ArrowRight /></Link>
        </nav>

        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroOrb} aria-hidden="true"><span /><span /><span /></div>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Custom learning platforms · by Office6</p>
          <h1>Van jouw kennis<br />naar een eigen<br /><em>leerplatform.</em></h1>
          <p className={styles.heroLead}>Wij vertalen kennis naar een custom leeromgeving — inclusief videocourse, technologie, lancering en onderhoud.</p>
          <div className={styles.heroActions}>
            <a href="#investering" className={styles.primary}>Bekijk het aanbod <ArrowDown /></a>
            <a href="#aanpak" className={styles.textLink}>Zo werken we <ChevronRight /></a>
          </div>
        </div>
        <div className={styles.heroFoot}><span>Strategie</span><i /><span>Productie</span><i /><span>Platform</span><i /><span>Growth</span></div>
      </header>

      <main>
        <section className={styles.intro}>
          <AnimateOnScroll>
            <p className={styles.eyebrow}>Niet zomaar een online course</p>
            <h2>Een digitale thuisbasis voor je kennis, klanten en groei.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className={styles.introCopy}>
              <p>Geen verzameling losse tools en generieke templates. We starten vanuit een bewezen technische basis en bouwen de ervaring rond jouw niche, merk en commerciële model.</p>
              <p>Zo voelt het platform volledig eigen, zonder dat tijd en budget verloren gaan aan fundamenten die al opgelost zijn.</p>
            </div>
          </AnimateOnScroll>
        </section>

        <section className={styles.product}>
          <div className={styles.productCopy}>
            <p className={styles.eyebrow}>De leerervaring</p>
            <h2>Alles wat een student nodig heeft. Niets wat afleidt.</h2>
            <ul>
              <li><CirclePlay />Heldere videocourse in modules en lessen</li>
              <li><Check />Examens die begrip bewaken voor de volgende stap</li>
              <li><LockKeyhole />Persoonlijke, beveiligde toegang</li>
              <li><MoveUpRight />Voortgang en resultaten in één adminomgeving</li>
            </ul>
          </div>
          <div className={styles.productVisual}>
            <div className={styles.browserMockup}>
              <div><i /><i /><i /><span>coachedbymentorship.be</span></div>
              <Image src="/cases/coachedby/platform/video.webp" alt="Videoles in Coachedby Mentorship" width={3456} height={1916} sizes="(max-width: 800px) 100vw, 58vw" />
            </div>
          </div>
        </section>

        <section className={styles.showcase}>
          <div className={styles.showcaseHead}>
            <p className={styles.eyebrow}>Van interface naar begeleiding</p>
            <h2>Gebouwd rond de manier waarop zij werken.</h2>
            <p>Geen dashboard vol functies, maar een gerichte flow: de student weet wat volgt en de coach ziet waar begeleiding nodig is.</p>
          </div>
          <p className={styles.interfaceNote}>Illustratieve interface · opgebouwd uit typische platformflows</p>

          <div className={styles.featureStories}>
            <article className={styles.featureStory}>
              <AnimateOnScroll>
                <div className={styles.featureCopy}>
                  <span className={styles.featureNumber}>01 · Coachoverzicht</span>
                  <h3>Zie meteen wie je aandacht nodig heeft.</h3>
                  <p>Voortgang, laatste activiteit en blokkades staan per student samen. Zo wordt opvolging gericht in plaats van reactief.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className={`${styles.uiStage} ${styles.coachStage}`}>
                  <div className={styles.coachPanel}>
                    <div className={styles.uiTopline}>
                      <div>
                        <span>Mentor workspace</span>
                        <h4>Studenten</h4>
                      </div>
                      <span className={styles.activeBadge}><i /> 12 actief</span>
                    </div>

                    <div className={styles.coachStats}>
                      <div><strong>8</strong><span>Op schema</span></div>
                      <div><strong>3</strong><span>Opvolgen</span></div>
                      <div><strong>1</strong><span>Herexamen</span></div>
                    </div>

                    <div className={styles.studentTable}>
                      <div className={styles.tableHead}><span>Student</span><span>Voortgang</span><span>Status</span></div>
                      <div className={styles.studentRow}>
                        <div className={styles.studentName}><i>NP</i><span><strong>Noor Peeters</strong><small>Vandaag actief</small></span></div>
                        <div className={styles.progressCell}><span><i style={{ width: "78%" }} /></span><small>78%</small></div>
                        <em className={styles.statusGood}>Op schema</em>
                      </div>
                      <div className={styles.studentRow}>
                        <div className={styles.studentName}><i>EM</i><span><strong>Elias Martens</strong><small>7 dagen geleden</small></span></div>
                        <div className={styles.progressCell}><span><i style={{ width: "42%" }} /></span><small>42%</small></div>
                        <em className={styles.statusAttention}>Opvolgen</em>
                      </div>
                      <div className={styles.studentRow}>
                        <div className={styles.studentName}><i>AJ</i><span><strong>Amélie Jans</strong><small>Gisteren actief</small></span></div>
                        <div className={styles.progressCell}><span><i style={{ width: "64%" }} /></span><small>64%</small></div>
                        <em className={styles.statusExam}>Herexamen</em>
                      </div>
                    </div>
                  </div>

                  <div className={styles.followupCard}>
                    <span className={styles.followupIcon}><AlertCircle /></span>
                    <div><small>Vandaag opvolgen</small><strong>Elias zit vast in module 2</strong></div>
                    <ArrowRight />
                  </div>
                </div>
              </AnimateOnScroll>
            </article>

            <article className={`${styles.featureStory} ${styles.featureStoryReverse}`}>
              <AnimateOnScroll>
                <div className={styles.featureCopy}>
                  <span className={styles.featureNumber}>02 · Leerpad</span>
                  <h3>De volgende stap is altijd duidelijk.</h3>
                  <p>Modules, lessen en examens volgen één logisch pad. De student hervat waar die stopte en ziet wat nodig is om verder te gaan.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className={`${styles.uiStage} ${styles.courseStage}`}>
                  <div className={styles.courseCard}>
                    <div className={styles.lessonVisual}>
                      <span>Module 02 · Les 04</span>
                      <div><Play fill="currentColor" /></div>
                      <small>08:42</small>
                    </div>
                    <div className={styles.courseInfo}>
                      <span>Positionering</span>
                      <h4>Van expertise naar een helder aanbod</h4>
                      <div className={styles.courseProgress}><span><i /></span><small>62% van de opleiding</small></div>
                      <span className={styles.continueButton}>Verder kijken <ArrowRight /></span>
                    </div>
                  </div>

                  <div className={styles.moduleList}>
                    <div className={styles.moduleListHead}><span>Jouw leerpad</span><small>6 van 9 lessen</small></div>
                    <div className={styles.moduleDone}><CheckCircle2 /><span><strong>01 · Fundament</strong><small>3 lessen afgerond</small></span><em>100%</em></div>
                    <div className={styles.moduleCurrent}><CirclePlay /><span><strong>02 · Positionering</strong><small>Les 4 wordt afgespeeld</small></span><em>62%</em></div>
                    <div className={styles.moduleLocked}><LockKeyhole /><span><strong>03 · Activatie</strong><small>Na het examen beschikbaar</small></span></div>
                  </div>

                  <div className={styles.resumeChip}><Clock3 /><span><small>Verder waar je stopte</small><strong>08:42 van 10:16</strong></span></div>
                </div>
              </AnimateOnScroll>
            </article>

            <article className={styles.featureStory}>
              <AnimateOnScroll>
                <div className={styles.featureCopy}>
                  <span className={styles.featureNumber}>03 · Examenfeedback</span>
                  <h3>Toetsen wordt bruikbare feedback.</h3>
                  <p>Na elke module ziet de student het resultaat en waar herhaling nodig is. Bij een voldoende resultaat komt de volgende module vrij.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className={`${styles.uiStage} ${styles.examStage}`}>
                  <div className={styles.resultCard}>
                    <div className={styles.resultTop}>
                      <div className={styles.scoreRing}><span><strong>8</strong><small>/10</small></span></div>
                      <div><span className={styles.passBadge}><Check /> Geslaagd</span><h4>Module afgerond</h4><p>Je beheerst de basis. Bekijk één antwoord opnieuw voor je verdergaat.</p></div>
                    </div>
                    <div className={styles.feedbackList}>
                      <div><CheckCircle2 /><span><strong>Vraag 08</strong><small>Correct beantwoord</small></span><em>+ 1 punt</em></div>
                      <div className={styles.feedbackReview}><AlertCircle /><span><strong>Vraag 09</strong><small>Bekijk het verschil tussen doelgroep en segment opnieuw.</small></span><em>Herbekijk</em></div>
                    </div>
                  </div>

                  <div className={styles.unlockedCard}>
                    <span><BookOpen /></span>
                    <div><small>Nu beschikbaar</small><strong>Module 03 · Activatie</strong></div>
                    <ArrowRight />
                  </div>

                  <div className={styles.profileChip}><UserRound /><span><small>Jouw totaal</small><strong>2 van 3 modules</strong></span></div>
                </div>
              </AnimateOnScroll>
            </article>
          </div>
        </section>

        <section id="aanpak" className={styles.process}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Van eerste idee tot eerste student</p>
            <h2>Eén team.<br />De volledige flow.</h2>
            <p>Doordat strategie, productie, technologie en marketing bij hetzelfde team zitten, verliezen we geen tijd tussen partners.</p>
          </div>
          <ol>
            {steps.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="investering" className={styles.offer}>
          <div className={styles.offerIntro}>
            <p className={styles.eyebrow}>Het basisplatform</p>
            <h2>Een duidelijke kern.<br />Custom waar het telt.</h2>
            <p>Een vaste scope voor een sterke eerste lancering. Uitbreidingen worden vooraf begroot, zodat de investering voorspelbaar blijft.</p>
          </div>

          <div className={styles.priceBand}>
            <div><span>Eenmalige investering</span><strong>€ 9.750</strong><small>excl. btw</small></div>
            <p>Strategie, courseproductie, design, development, testing en lancering binnen één traject van gemiddeld 12 weken.</p>
          </div>

          <div className={styles.scope}>
            <h3>Dit zit standaard in jouw platform</h3>
            <ul>{included.map(item => <li key={item}><Check />{item}</li>)}</ul>
          </div>

          <div className={styles.care}>
            <div>
              <p className={styles.eyebrow}>Platform Care · verplicht vanaf livegang</p>
              <h3>Online, veilig en up-to-date.</h3>
              <p>Niet alleen serverruimte, maar actief technisch beheer en een aanspreekpunt wanneer dat nodig is.</p>
              <strong>€ 295 <span>/ maand excl. btw</span></strong>
              <small>Jaarlijks gefactureerd · minimale looptijd 12 maanden</small>
            </div>
            <ul>{care.map(item => <li key={item}><Check />{item}</li>)}</ul>
          </div>

          <div className={styles.extensions}>
            <div><p className={styles.eyebrow}>Mogelijke uitbreidingen</p><h3>Groeit je scope, dan groeit het platform mee.</h3></div>
            <dl>{extensions.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>
          </div>
        </section>

        <section className={styles.marketing}>
          <div className={styles.marketingTitle}>
            <p className={styles.eyebrow}>Go-to-market</p>
            <h2>Gebouwd om gebruikt te worden.</h2>
            <p>Een platform zonder instroom is infrastructuur. Daarom kan Office6 ook de funnel, creatives en campagnes rond de lancering verzorgen.</p>
          </div>
          <div className={styles.marketingPlans}>
            <article>
              <span>01 · Launch</span><h3>Van platform naar campagne.</h3>
              <strong>€ 2.750 <small>eenmalig</small></strong>
              <ul><li>Positionering en campagnehoek</li><li>Intake- of landingspagina</li><li>Tracking en advertentieaccount setup</li><li>6 verticale ads uit bestaande opnames</li><li>Eerste campagne-opzet</li></ul>
            </article>
            <article>
              <span>02 · Growth</span><h3>Meten, leren en blijven verbeteren.</h3>
              <strong>€ 1.250 <small>/ maand</small></strong>
              <ul><li>Beheer van Meta-campagnes</li><li>4 nieuwe vertical edits per maand</li><li>Optimalisatie van ads en funnel</li><li>Maandelijkse rapportage en groeisessie</li><li>Minimumlooptijd van 3 maanden</li></ul>
              <p>Advertentiebudget niet inbegrepen. Aanbevolen vanaf €1.500 per maand, rechtstreeks betaald door de klant.</p>
            </article>
          </div>
        </section>

        <section id="cases" className={styles.cases}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Reeds gebouwd door Office6</p>
            <h2>Dezelfde sterke basis.<br />Een ander businessmodel.</h2>
          </div>
          <div className={styles.caseList}>
            <a href="https://coachedbymentorship.be" target="_blank" rel="noreferrer">
              <div className={styles.caseImage}><Image src="/cases/coachedby/thumbnail.webp" alt="Coachedby Mentorship" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
              <span>Mentorship · course · community</span><h3>Coachedby Mentorship</h3><p>Een centrale leeromgeving waar videocontent, examens en persoonlijke begeleiding samenkomen.</p><MoveUpRight />
            </a>
            <a href="https://hettradeplatform.be" target="_blank" rel="noreferrer">
              <div className={styles.caseImage}><Image src="/cases/het-trade-platform/thumbnail.webp" alt="Het Trade Platform" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
              <span>Lead generation · education · sales</span><h3>Het Trade Platform</h3><p>Gratis kennis als lead magnet, gekoppeld aan intake, begeleiding en een commercieel vervolgtraject.</p><MoveUpRight />
            </a>
          </div>
        </section>

        <section className={styles.practical}>
          <div><p className={styles.eyebrow}>Heldere afspraken</p><h2>Voor we beginnen.</h2></div>
          <div className={styles.practicalList}>
            {practicalItems.map(([title, text], index) => {
              const isOpen = openPractical === index;
              return <article className={isOpen ? styles.practicalOpen : ""} key={title}>
                <button type="button" aria-expanded={isOpen} aria-controls={`practical-${index}`} onClick={() => setOpenPractical(index)}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><ChevronDown />
                </button>
                <div
                  id={`practical-${index}`}
                  className={styles.practicalPanel}
                  aria-hidden={!isOpen}
                  style={{ maxHeight: isOpen ? "260px" : "0px", opacity: isOpen ? 1 : 0 }}
                ><p>{text}</p></div>
              </article>;
            })}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaOrb} aria-hidden="true" />
          <p className={styles.eyebrow}>Jouw expertise verdient een eigen plek</p>
          <h2>Klaar om kennis om te zetten in een platform?</h2>
          <p>In een eerste gesprek toetsen we het businessmodel, de course en de nodige custom functionaliteit af.</p>
          <Link href="/contact" className={styles.primary}>Plan een verkennend gesprek <ArrowRight /></Link>
        </section>
      </main>
    </div>
  );
}
