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
  /** Article body for case detail page (optional paragraphs) */
  articleIntro?: string;
  articleBody?: string[];
}

export const packages: Package[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Eenmalig",
    description: "Voor founders die hun zichtbaarheid professioneel willen lanceren.",
    deliverables: [
      "Strategische intake",
      "Positioneringssessie",
      "1 high-end podcast / long-form opname",
      "6 short-form clips",
      "Distributie-advies",
      "30-dagen content roadmap",
    ],
    commitment: "Eenmalig",
    slug: "launch",
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Min. 3 maanden",
    description: "Voor bedrijven die structureel willen groeien via personal branding.",
    deliverablesLabel: "Per maand",
    deliverables: [
      "1 long-form podcast/video",
      "6 dedicated short-form video's",
      "6 extra clips uit long-form",
      "Volledig publicatiebeheer",
      "Engagement engine",
      "1 strategische meeting",
      "1 content meeting",
    ],
    commitment: "Min. 3 maanden",
    slug: "authority",
    note: "Maximaal 8 klanten tegelijk.",
  },
  {
    id: "leadership",
    name: "Leadership",
    tagline: "Min. 3 maanden",
    description: "Voor founders die marktleider willen worden.",
    deliverablesLabel: "Per maand",
    deliverables: [
      "2 long-form opnames",
      "8–10 dedicated short-form video's",
      "10 extra clips",
      "Publicatie + engagement",
      "Positioneringscoaching",
      "Concurrentieanalyse",
      "Strategische groeisessie",
    ],
    commitment: "Min. 3 maanden",
    slug: "leadership",
  },
];

export const methodSteps: MethodStep[] = [
  { title: "Intake & strategie", description: "Doel, doelgroep en key messages." },
  { title: "Story extraction & shoot", description: "Verhalen bovenhalen en opnames." },
  { title: "Edit, review & publicatie", description: "Content live; ritme vasthouden." },
];

export const faqs: FAQ[] = [
  { question: "Wat kost een pakket?", answer: "Maatwerk. Prijsindicatie op de kennismakingscall." },
  { question: "Waarom 3 maanden min?", answer: "Autoriteit en herkenning vragen tijd; na 3 maanden zie je resultaat." },
  { question: "Wat leveren jullie op?", answer: "Podcast(s), clips, video's en planning. Value-based, geen virale hacks." },
  { question: "Hoeveel revisies?", answer: "Max. twee revisierondes per item." },
  { question: "Niet relaxed voor camera?", answer: "Kan. Rustige setting, voorbereiding; story extraction helpt." },
  { question: "Eigenaar van de content?", answer: "Jij. We leveren bestanden; portfolio alleen met toestemming." },
  { question: "Alleen organisch of ook ads?", answer: "Focus organisch. Ads kunnen we meenemen als je wilt." },
];

/** Aanbodpagina: bestaande faqs + aanbod-specifieke vragen (call, prijzen, start, zichtbaarheid). */
export const faqsAanbod: FAQ[] = [
  { question: "Wat gebeurt er op de kennismakingscall?", answer: "We bespreken jouw doel, onze aanpak en of we bij elkaar passen. Daarna krijg je een reële prijsindicatie op maat. Geen verkooppraatje, geen verplichtingen." },
  { question: "Waarom staan er geen prijzen op de site?", answer: "Omdat elk traject maatwerk is. Op de kennismakingscall bepalen we samen wat je nodig hebt en geven we een duidelijke prijsindicatie." },
  { question: "Hoe snel kunnen we starten?", answer: "Na de kennismakingscall en intake plannen we de eerste sessie. Meestal binnen enkele weken, afhankelijk van agenda en pakket." },
  { question: "Wat als ik nog niet zichtbaar ben?", answer: "Geen probleem. We starten bij de basis: positionering, verhaal en eerste content. Veel klanten beginnen vanaf nul." },
  ...faqs,
];

export const cases: CaseStudy[] = [
  { id: "chris-henry", slug: "chris-henry", name: "Chris Henry", subtitle: "Van product-gericht naar erkend expert in de coachingniche.", tags: ["Personal brand", "Longform", "Clips", "Coaching"], niche: "Coaching", challenge: "Te product-gericht.", approach: "Personal Brand, longform + clips.", deliverables: ["Longform", "Clips", "Contentplan"], result: "Meer autoriteit in de niche.", videoThumbnail: undefined, articleIntro: "Chris Henry wilde zijn merk verbreden van puur product naar erkende stem in coaching. We zetten in op longform content en clips die zijn expertise en verhalen centraal stellen.", articleBody: ["De aanpak bestond uit een duidelijke positionering: niet de methode verkopen, maar de mens en de visie laten zien. Via story extraction haalden we kernverhalen naar boven die in podcast- en videocontent werden omgezet.", "Het resultaat: een consistente stroom content die Chris positioneert als thought leader. De clips performen sterk op LinkedIn en zorgen voor herkenning zonder harde verkoop."] },
  { id: "the-health-junkie", slug: "the-health-junkie", name: "The Health Junkie", subtitle: "Founder-led content om het merk een gezicht te geven.", tags: ["Founder-led", "Podcast clips", "Healthy foods"], niche: "Healthy foods", challenge: "Founder te weinig zichtbaar.", approach: "Founder-led content.", deliverables: ["Podcast clips", "Posts", "Strategie"], result: "Sterker persoonlijk merk.", videoThumbnail: undefined, articleIntro: "The Health Junkie had een sterk merk maar de founder bleef te veel op de achtergrond. Het doel was om het gezicht van het merk te worden zonder de producten uit het oog te verliezen.", articleBody: ["We kozen voor founder-led content: korte clips uit gesprekken en opnames waarin de founder uitleg geeft, tips deelt en het verhaal van het merk vertelt. De content werd gekoppeld aan een eenvoudige contentkalender.", "Het effect: meer vertrouwen en herkenning. Volgers associëren het merk nu met een gezicht en een stem, wat de band met het merk versterkt."] },
  { id: "vastgoedacademie", slug: "vastgoedacademie", name: "VastgoedAcademie", subtitle: "Van ad-hoc naar een gestructureerd content- en expertpositionering.", tags: ["Podcast Engine", "Clips", "Vastgoed"], niche: "Vastgoed", challenge: "Weinig gestructureerde content.", approach: "Podcast Engine + clips.", deliverables: ["Podcast", "Clips", "Thumbnails"], result: "Gezien als expert.", videoThumbnail: undefined, articleIntro: "VastgoedAcademie wilde gezien worden als de plek voor serieuze vastgoedkennis. De uitdaging was de stap van incidentele content naar een vast ritme en herkenbare formats.", articleBody: ["We introduceerden een Podcast Engine: regelmatige opnames die werden omgezet in longform afleveringen en een reeks clips. Elke clip kreeg een duidelijke thumbnail en titel voor maximale vindbaarheid.", "Het gevolg: een gestage stroom content die VastgoedAcademie positioneert als expert. Het publiek weet waar het terechtkan voor betrouwbare uitleg en inzichten."] },
  { id: "cryptoriez", slug: "cryptoriez", name: "Cryptoriez", subtitle: "Value-based thought leadership in een rumoerige niche.", tags: ["Thought leadership", "Longform", "Crypto"], niche: "Crypto / Fintech", challenge: "Behoefte aan heldere uitleg.", approach: "Value-based thought leadership.", deliverables: ["Longform", "Clips", "Kalender"], result: "Betrouwbare expert.", videoThumbnail: undefined, articleIntro: "In crypto en fintech is er veel ruis. Cryptoriez wilde opvallen door heldere, value-based uitleg en een consistente stem zonder sensatie.", articleBody: ["De strategie draaide om thought leadership: uitleg die waarde biedt, geen prikkelende headlines. Longform content en clips werden gekoppeld aan een kalender zodat het publiek wist wanneer er nieuwe content kwam.", "Het resultaat: Cryptoriez wordt geassocieerd met betrouwbaarheid en helderheid. In een sector waar vertrouwen schaars is, maakt dat het verschil."] },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

/** Primary nav for mobile menu (main sections, max 5–7). Contact moved to secondary. */
export const mobilePrimaryLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
] as const;

/** Secondary links for mobile menu (utility: privacy, contact, socials). */
export const mobileSecondaryLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { href: "https://www.linkedin.com/company/socialbrand", label: "LinkedIn" },
  { href: "https://www.instagram.com/socialbrand.be", label: "Instagram" },
] as const;

export const revenueRangeOptions = [
  { value: "", label: "Selecteer omzetrange" },
  { value: "10k-25k", label: "€10k – €25k/maand" },
  { value: "25k-50k", label: "€25k – €50k/maand" },
  { value: "50k-100k", label: "€50k – €100k/maand" },
  { value: "100k+", label: "€100k+/maand" },
] as const;
