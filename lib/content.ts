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
    tagline: "Podcast + clips voor autoriteit",
    description: "Longform podcast omgezet in clips en content. Voor experts die thought leadership opbouwen.",
    deliverables: [
      "Opname en productie podcast(s)",
      "Clip-edit voor social",
      "Thumbnails en planning",
    ],
    commitment: "3 maanden minimum",
    slug: "podcast-engine",
  },
  {
    id: "personal-brand",
    name: "Personal Brand Package",
    tagline: "Longform, podcast en clips",
    description: "Volledige ontzorging: story extraction, opnames en content. Jij levert input; wij de output.",
    deliverables: [
      "Story extraction en strategie",
      "Opnames en clips",
      "Revisierondes",
    ],
    commitment: "3 maanden minimum",
    slug: "personal-brand-package",
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

export const cases: CaseStudy[] = [
  { id: "chris-henry", name: "Chris Henry", niche: "Coaching", challenge: "Te product-gericht.", approach: "Personal Brand, longform + clips.", deliverables: ["Longform", "Clips", "Contentplan"], result: "Meer autoriteit in de niche.", videoThumbnail: undefined },
  { id: "the-health-junkie", name: "The Health Junkie", niche: "Healthy foods", challenge: "Founder te weinig zichtbaar.", approach: "Founder-led content.", deliverables: ["Podcast clips", "Posts", "Strategie"], result: "Sterker persoonlijk merk.", videoThumbnail: undefined },
  { id: "vastgoedacademie", name: "VastgoedAcademie", niche: "Vastgoed", challenge: "Weinig gestructureerde content.", approach: "Podcast Engine + clips.", deliverables: ["Podcast", "Clips", "Thumbnails"], result: "Gezien als expert.", videoThumbnail: undefined },
  { id: "cryptoriez", name: "Cryptoriez", niche: "Crypto / Fintech", challenge: "Behoefte aan heldere uitleg.", approach: "Value-based thought leadership.", deliverables: ["Longform", "Clips", "Kalender"], result: "Betrouwbare expert.", videoThumbnail: undefined },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/methode", label: "Methode" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

/** Primary nav for mobile menu (main sections, max 5–7). Contact moved to secondary. */
export const mobilePrimaryLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/methode", label: "Methode" },
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
