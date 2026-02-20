export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  commitment: string;
  slug: string;
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
  name: string;
  niche: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  result: string;
  videoThumbnail?: string;
}

export const packages: Package[] = [
  {
    id: "podcast-engine",
    name: "Podcast Engine",
    tagline: "Lange podcast + clips die autoriteit opbouwen",
    description:
      "Ideal voor bedrijven en experts die via longform content thought leadership willen opbouwen. Eén lange podcast wordt omgezet in een reeks clips en standalone content.",
    deliverables: [
      "Opname en productie van lange podcast(s)",
      "Clip-edit voor social (meerdere formaten)",
      "Thumbnails en korte teasers",
      "Planning en contentkalender",
    ],
    commitment: "3 maanden minimum",
    slug: "podcast-engine",
  },
  {
    id: "personal-brand",
    name: "Personal Brand Package",
    tagline: "Mix longform, podcast en standalone content",
    description:
      "Volledige ontzorging voor founder-led merken: combinatie van podcast, longform video en korte clips. Jij levert input aan; wij zorgen voor consistent value-based content.",
    deliverables: [
      "Story extraction en contentstrategie",
      "Longform en/of podcast-opnames",
      "Clips en standalone posts",
      "Revisierondes en feedback loop",
    ],
    commitment: "3 maanden minimum",
    slug: "personal-brand-package",
  },
];

export const methodSteps: MethodStep[] = [
  { title: "Intake & strategie", description: "We bepalen doel, doelgroep en key messages." },
  { title: "Story extraction", description: "Interview om jouw verhalen en expertise boven te halen." },
  { title: "Contentplan", description: "Planning van formats en thema's voor de komende maanden." },
  { title: "Eerste shoot", description: "Opnames in een rustige, professionele setting." },
  { title: "Edit & review", description: "Eerste versies; jij geeft asynchroon feedback." },
  { title: "Revisies", description: "Maximaal twee ronden revisie per item." },
  { title: "Publicatie & ritme", description: "Content gaat live; we houden het ritme vast." },
];

export const faqs: FAQ[] = [
  {
    question: "Wat kost een pakket?",
    answer:
      "Onze pakketten zijn maatwerk. Reken op een investering in de midden- tot hogere range voor een agency met volledige ontzorging. Tijdens de kennismakingscall bespreken we je situatie en geven we een prijsindicatie op maat.",
  },
  {
    question: "Waarom minimaal 3 maanden?",
    answer:
      "Thought leadership en een sterk persoonlijk merk bouw je niet in een paar weken. We hebben tijd nodig voor intake, story extraction, meerdere shoots en een vaste contentstroom. Na 3 maanden zie je pas echt resultaat in autoriteit en herkenning.",
  },
  {
    question: "Wat leveren jullie precies op?",
    answer:
      "Afhankelijk van het pakket: lange podcast(s), clips, standalone video's en/of posts, plus strategie en planning. Concreet aantal items stemmen we af in de intake. Alles is value-based en gericht op jouw expertise, niet op virale hacks.",
  },
  {
    question: "Hoe ziet de workflow eruit?",
    answer:
      "Week 1–2: intake, story extraction interview en eerste shoot. Daarna vaste cycli: we sturen ruwe of eerste edits; jij geeft asynchroon feedback; we verwerken max. twee revisierondes. Geen eindeloze meetings—wel duidelijke deadlines.",
  },
  {
    question: "Hoeveel revisies mag ik?",
    answer:
      "Per item voorzien we maximaal twee revisierondes. Zo blijft het haalbaar en houd je de regie zonder dat het uitloopt. Voor grotere strategiewijzigingen plannen we een korte sync.",
  },
  {
    question: "Ik ben niet relaxed voor de camera. Kan dat?",
    answer:
      "Ja. Veel van onze klanten voelden zich eerst onwennig. We werken in een rustige setting, met duidelijke voorbereiding en geen druk. Het story extraction gesprek helpt om natuurlijk over je expertise te praten. Stap voor stap wordt het makkelijker.",
  },
  {
    question: "Wie is eigenaar van de content?",
    answer:
      "Jij. Alle opnames en eindproducten zijn van jou. We leveren bestanden aan en gebruiken ze alleen voor je eigen kanalen en, met je toestemming, voor onze portfolio (zoals cases op deze site).",
  },
  {
    question: "Doen jullie ook paid ads of alleen organisch?",
    answer:
      "Onze focus is organische, value-based content en thought leadership. Ads kunnen een aanvulling zijn op wat je zelf of met een andere partner doet; we stemmen dat graag af als je er behoefte aan hebt, maar het zit niet standaard in de pakketten.",
  },
];

export const cases: CaseStudy[] = [
  {
    id: "chris-henry",
    name: "Chris Henry",
    niche: "Coaching",
    challenge: "Placeholder: te product-gericht, weinig zichtbaarheid als expert.",
    approach: "Placeholder: Personal Brand Package met longform en clips; story-driven content.",
    deliverables: ["Placeholder: longform video's", "Placeholder: clips", "Placeholder: contentplan"],
    result: "Placeholder: meer autoriteit, betere herkenning in de niche.",
    videoThumbnail: undefined,
  },
  {
    id: "the-health-junkie",
    name: "The Health Junkie",
    niche: "Healthy foods",
    challenge: "Placeholder: merk stond centraal, founder te weinig op de voorgrond.",
    approach: "Placeholder: founder-led content; mix van educatie en persoonlijk verhaal.",
    deliverables: ["Placeholder: podcast clips", "Placeholder: standalone posts", "Placeholder: strategie"],
    result: "Placeholder: sterker persoonlijk merk, meer vertrouwen in het merk.",
    videoThumbnail: undefined,
  },
  {
    id: "vastgoedacademie",
    name: "VastgoedAcademie",
    niche: "Vastgoed",
    challenge: "Placeholder: veel kennis, weinig gestructureerde content voor autoriteit.",
    approach: "Placeholder: Podcast Engine + clips; regelmatige longform en korte tips.",
    deliverables: ["Placeholder: podcast", "Placeholder: clips", "Placeholder: thumbnails"],
    result: "Placeholder: gezien als expert, meer bereik in de doelgroep.",
    videoThumbnail: undefined,
  },
  {
    id: "cryptoriez",
    name: "Cryptoriez",
    niche: "Crypto / Fintech",
    challenge: "Placeholder: complex onderwerp, behoefte aan heldere uitleg en vertrouwen.",
    approach: "Placeholder: value-based uitleg en thought leadership; geen hype, wel inhoud.",
    deliverables: ["Placeholder: longform", "Placeholder: clips", "Placeholder: contentkalender"],
    result: "Placeholder: betere positionering als betrouwbare expert.",
    videoThumbnail: undefined,
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/methode", label: "Methode" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

export const revenueRangeOptions = [
  { value: "", label: "Selecteer omzetrange" },
  { value: "10k-25k", label: "€10k – €25k/maand" },
  { value: "25k-50k", label: "€25k – €50k/maand" },
  { value: "50k-100k", label: "€50k – €100k/maand" },
  { value: "100k+", label: "€100k+/maand" },
] as const;
