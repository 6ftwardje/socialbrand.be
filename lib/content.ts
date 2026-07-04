export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  commitment: string;
  slug: string;
  /** Optional note (e.g. "Maximaal 8 klanten tegelijk") */
  note?: string;
  /** Label above deliverables (e.g. "Per maand" for recurring packages) */
  deliverablesLabel?: string;
}

export interface MethodStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tags: string[];
  niche: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  result: string;
  videoThumbnail?: string;
  /** Hero/thumbnail image for case (e.g. on cases list and detail page) */
  imageUrl?: string;
  /** External proof link while case detail pages are not part of the MVP */
  externalUrl?: string;
  /** Article body for case detail page (optional paragraphs) */
  articleIntro?: string;
  articleBody?: string[];
}

export const packages: Package[] = [
  {
    id: "content-creation",
    name: "Content Creation",
    tagline: "Strategie + productie",
    description: "Voor merken die consistente content willen maken vanuit een scherp verhaal en een herkenbare menselijke stem.",
    deliverables: [
      "Strategische intake",
      "Contentstrategie en formats",
      "Video, foto, podcast of short-form productie",
      "Editing en copy",
      "Publicatieplanning",
      "Content roadmap",
    ],
    commitment: "Project of retainer",
    slug: "content-creation",
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    tagline: "Creatives + campagnes",
    description: "Voor bedrijven die content willen koppelen aan groei, campagnes en duidelijke commerciële signalen.",
    deliverablesLabel: "Typische scope",
    deliverables: [
      "Paid social strategie",
      "Creative testing",
      "Campagne-opzet en optimalisatie",
      "Retargeting en funnels",
      "Rapportage op learnings en rendement",
      "Nieuwe contentbriefings op basis van data",
    ],
    commitment: "Vanaf 3 maanden",
    slug: "performance-marketing",
    note: "Meest relevant wanneer er al aanbod, content of traffic is.",
  },
  {
    id: "custom-platforms",
    name: "Custom Platforms",
    tagline: "Websites + systemen",
    description: "Voor merken die een website, landing page, intakeflow of digitaal platform nodig hebben dat hun groei ondersteunt.",
    deliverablesLabel: "Mogelijke deliverables",
    deliverables: [
      "Websites en landing pages",
      "Custom intakeflows",
      "Content hubs of lead magnets",
      "Automatisaties en dashboards",
      "Integraties met bestaande tools",
      "Conversiegericht design en copy",
    ],
    commitment: "Project op maat",
    slug: "custom-platforms",
  },
];

export const methodSteps: MethodStep[] = [
  { title: "Strategie", description: "Doel, doelgroep, boodschap en kanaalkeuze scherp krijgen." },
  { title: "Creatie", description: "Content, campagnes of platformen bouwen vanuit dat fundament." },
  { title: "Optimalisatie", description: "Publiceren, meten, leren en verbeteren wat werkt." },
];

export const faqs: FAQ[] = [
  { question: "Wat kost een traject?", answer: "Maatwerk. Op de kennismakingscall bepalen we de juiste scope en geven we een duidelijke prijsindicatie." },
  { question: "Kunnen jullie content en performance combineren?", answer: "Ja. Dat is vaak net de kracht: creatie die niet losstaat van campagnes, data en conversie." },
  { question: "Bouwen jullie ook websites of platformen?", answer: "Ja. We bouwen websites, landing pages, intakeflows, dashboards en custom platformen wanneer die nodig zijn voor groei." },
  { question: "Hoeveel revisies?", answer: "Max. twee revisierondes per item." },
  { question: "Moet ik zelf voor de camera?", answer: "Niet altijd. We kijken welk menselijk gezicht of verhaal het merk nodig heeft: founder, team, klant, expert of productervaring." },
  { question: "Eigenaar van de content?", answer: "Jij. We leveren bestanden; portfolio alleen met toestemming." },
  { question: "Werken jullie alleen organisch?", answer: "Nee. We doen content creation, performance marketing en custom platforms los of gecombineerd." },
];

/** Aanbodpagina: bestaande faqs + aanbod-specifieke vragen (call, prijzen, start, zichtbaarheid). */
export const faqsAanbod: FAQ[] = [
  { question: "Wat gebeurt er op de kennismakingscall?", answer: "We bespreken jouw doel, onze aanpak en of we bij elkaar passen. Daarna krijg je een reële prijsindicatie op maat. Geen verkooppraatje, geen verplichtingen." },
  { question: "Waarom staan er geen prijzen op de site?", answer: "Omdat elk traject maatwerk is. Op de kennismakingscall bepalen we samen wat je nodig hebt en geven we een duidelijke prijsindicatie." },
  { question: "Hoe snel kunnen we starten?", answer: "Na de kennismakingscall en intake plannen we de eerste sessie. Meestal binnen enkele weken, afhankelijk van agenda en pakket." },
  { question: "Wat als onze contentbasis nog niet sterk is?", answer: "Geen probleem. Dan starten we bij positionering, boodschap en formats voordat we campagnes of platformen opschalen." },
  ...faqs,
];

export const cases: CaseStudy[] = [
  { id: "chris-henry", slug: "chris-henry", name: "Chris Henry", subtitle: "Van product-gericht naar erkend expert in de coachingniche.", tags: ["Personal brand", "Longform", "Clips", "Coaching"], niche: "Coaching", challenge: "Te product-gericht.", approach: "Personal Brand, longform + clips.", deliverables: ["Longform", "Clips", "Contentplan"], result: "Meer autoriteit in de niche.", imageUrl: "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/chris_case.webp", externalUrl: "https://www.instagram.com/chrishenry147/", videoThumbnail: undefined, articleIntro: "Chris Henry wilde zijn merk verbreden van puur product naar erkende stem in coaching. We zetten in op longform content en clips die zijn expertise en verhalen centraal stellen.", articleBody: ["De aanpak bestond uit een duidelijke positionering: niet de methode verkopen, maar de mens en de visie laten zien. Via story extraction haalden we kernverhalen naar boven die in podcast- en videocontent werden omgezet.", "Het resultaat: een consistente stroom content die Chris positioneert als thought leader. De clips performen sterk op LinkedIn en zorgen voor herkenning zonder harde verkoop."] },
  { id: "rousso-van-hoorn", slug: "rousso-van-hoorn", name: "Rousso Van Hoorn", subtitle: "Thought leadership en zichtbaarheid voor een handelsplatform.", tags: ["Thought leadership", "Personal brand", "Trading"], niche: "Trading / Financiën", challenge: "Expertise onvoldoende zichtbaar.", approach: "Personal brand en contentstrategie.", deliverables: ["Longform", "Clips", "Positionering"], result: "Sterkere positionering in de niche.", imageUrl: "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/rous_case.webp", externalUrl: "https://hettradeplatform.be/", videoThumbnail: undefined, articleIntro: "Rousso Van Hoorn wilde als betrouwbare stem in de sector gezien worden. De uitdaging was om de expertise consistent en herkenbaar te maken via content.", articleBody: ["We werkten aan een duidelijke positionering en een contentstrategie op maat: longform en clips die de visie en kennis uitdragen.", "Het resultaat: een herkenbare stem en meer autoriteit in de trading- en financiële niche."] },
  { id: "simcenter", slug: "simcenter", name: "SimCenter", subtitle: "Expertpositionering en content voor een gespecialiseerde niche.", tags: ["Personal brand", "Longform", "Expertise"], niche: "Simulatie / Training", challenge: "Kennis te weinig zichtbaar.", approach: "Thought leadership en contentstrategie.", deliverables: ["Longform", "Clips", "Positionering"], result: "Gezien als autoriteit in de sector.", imageUrl: "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/sim_case.png", externalUrl: "https://www.instagram.com/simbrugge/", videoThumbnail: undefined, articleIntro: "SimCenter wilde haar expertise en unieke aanpak beter uitdragen. De uitdaging was om de waarde van simulatie en training helder en herkenbaar te maken via content.", articleBody: ["We zetten in op een duidelijke positionering en een contentstrategie: longform en clips die de kennis en ervaring van SimCenter in de spotlight zetten.", "Het resultaat: meer zichtbaarheid en erkenning als expert in de simulatie- en trainingsniche."] },
  { id: "cryptoriez", slug: "cryptoriez", name: "Cryptoriez", subtitle: "Value-based thought leadership in een rumoerige niche.", tags: ["Thought leadership", "Longform", "Crypto"], niche: "Crypto / Fintech", challenge: "Behoefte aan heldere uitleg.", approach: "Value-based thought leadership.", deliverables: ["Longform", "Clips", "Kalender"], result: "Betrouwbare expert.", imageUrl: "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/cryptoriez_case.webp", externalUrl: "https://www.youtube.com/@cryptoriez", videoThumbnail: undefined, articleIntro: "In crypto en fintech is er veel ruis. Cryptoriez wilde opvallen door heldere, value-based uitleg en een consistente stem zonder sensatie.", articleBody: ["De strategie draaide om thought leadership: uitleg die waarde biedt, geen prikkelende headlines. Longform content en clips werden gekoppeld aan een kalender zodat het publiek wist wanneer er nieuwe content kwam.", "Het resultaat: Cryptoriez wordt geassocieerd met betrouwbaarheid en helderheid. In een sector waar vertrouwen schaars is, maakt dat het verschil."] },
  { id: "saturate", slug: "saturate", name: "Saturate", subtitle: "YouTube-content opgenomen en uitgewerkt vanuit onze studio.", tags: ["YouTube", "Studio", "Longform"], niche: "YouTube / Content", challenge: "Consistente content nodig voor YouTube.", approach: "Studio-opnames met focus op helder verhaal en ritme.", deliverables: ["YouTube-content", "Studio-opname"], result: "Een professionele basis voor hun YouTube-aanwezigheid.", externalUrl: "https://www.youtube.com/watch?v=Sybq0Tz_ewc&t=11s" },
  { id: "coachedbyclub", slug: "coachedbyclub", name: "Coachedbyclub", subtitle: "Verschillende vertical ads opgenomen in de studio.", tags: ["Vertical ads", "Studio", "Paid social"], niche: "Coaching / Ads", challenge: "Nood aan korte, directe ads voor verticale kanalen.", approach: "Meerdere vertical ad concepts efficiënt opgenomen in de studio.", deliverables: ["Vertical ads", "Studio-opname"], result: "Een set ads klaar voor social distributie.", externalUrl: "https://www.instagram.com/coachedbyclub/" },
  { id: "peak-performance", slug: "peak-performance", name: "Peak Performance", subtitle: "De podcastreeks van Chris Henry, van opname tot contentbasis.", tags: ["Podcast", "Longform", "Coaching"], niche: "Podcast / Coaching", challenge: "Een inhoudelijke podcastreeks professioneel neerzetten.", approach: "Podcastopnames rond performance, coaching en ondernemerschap.", deliverables: ["Podcastreeks", "Longform content"], result: "Een herkenbare reeks rond de expertise van Chris Henry.", externalUrl: "https://www.youtube.com/watch?v=I_ft0Zz2elE&t=670s" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Cases" },
  { href: "/contact", label: "Contact" },
] as const;

/** Primary nav for mobile menu (main sections, max 5–7). Contact moved to secondary. */
export const mobilePrimaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Cases" },
] as const;

/** Secondary links for mobile menu (utility: privacy, contact, socials). */
export const mobileSecondaryLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
] as const;

export const revenueRangeOptions = [
  { value: "", label: "Selecteer omzetrange" },
  { value: "10k-25k", label: "€10k – €25k/maand" },
  { value: "25k-50k", label: "€25k – €50k/maand" },
  { value: "50k-100k", label: "€50k – €100k/maand" },
  { value: "100k+", label: "€100k+/maand" },
] as const;
