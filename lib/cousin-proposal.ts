export const cousinProposal = {
  client: "Cousin",
  location: "Aalter",
  project: "Website design & development",
  offer: "Website launch package",
  date: "28 augustus 2026",
  validUntil: "27 september 2026",
  basePrice: 2950,
  vatRate: 0.21,
  careMonthly: 29,
  hourlyRate: 75,
  goals: [
    ["Cousin sterk lanceren", "Vanaf dag één professioneel en herkenbaar online."],
    ["Nieuwe klanten aantrekken", "Merk, services en sfeer helder presenteren."],
    ["Afspraken genereren", "Bezoekers rechtstreeks naar de bestaande Salonkee-omgeving leiden."],
    ["Lokaal gevonden worden", "Een sterke basis leggen voor zoekopdrachten zoals ‘kapper Aalter’."],
    ["Mobiel perfect werken", "Van Google of Instagram vlot naar een afspraak."],
  ],
  pages: [
    ["Home", "Concept, sfeer, belangrijkste services en een duidelijke Salonkee-CTA."],
    ["Cousin", "Het verhaal en de persoonlijkheid achter de zaak."],
    ["Services & prijzen", "Behandelingen, services en vanafprijzen."],
    ["Team", "Kappers, persoonlijkheid en specialisaties."],
    ["Gallery", "Een visueel lookbook van sfeer en werk."],
    ["Contact", "Openingsuren, adres, Maps en praktische informatie."],
  ],
  scope: [
    {
      title: "Strategie & structuur",
      items: ["Kickoff en doelstellingen", "Sitemap, contentstructuur en bezoekersflows", "Salonkee- en CTA-flow", "Mobile-first aanpak"],
    },
    {
      title: "Creative direction & webdesign",
      items: ["Digitale vertaling van de Cousin-identiteit", "Art direction en responsive UX/UI", "Typografie, interactie en subtiele motion", "Ontwerp van alle afgesproken pagina’s", "2 gebundelde feedbackrondes"],
    },
    {
      title: "Development",
      items: ["Responsive development en CMS", "Beheerbare services, prijzen, team en gallery", "Salonkee, Maps, social links en contact", "Moderne browserondersteuning"],
    },
    {
      title: "Content setup",
      items: ["Plaatsing van aangeleverde teksten en fotografie", "Basisredactie, beeldoptimalisatie en alt-teksten"],
      note: "Uitgebreide copywriting en contentproductie worden apart begroot.",
    },
    {
      title: "Lokale SEO-basis",
      items: ["URL’s, headings, titles en meta descriptions", "Sitemap, robots, canonical en Open Graph", "HairSalon structured data met locatie Aalter", "Search Console, Analytics en Google Business Profile"],
      note: "We leggen een sterke basis, maar beloven geen specifieke Google-ranking.",
    },
    {
      title: "Performance & privacy",
      items: ["Geoptimaliseerde afbeeldingen, fonts en Core Web Vitals", "Plaats voor privacy- en cookiebeleid met consent", "Toegankelijkheidsbewuste semantiek"],
      note: "Office6 levert geen juridisch advies. Definitieve juridische teksten worden door Cousin aangeleverd of juridisch nagekeken.",
    },
    {
      title: "Testing & launch",
      items: ["Mobile, desktop en browser-QA", "Links, formulieren en Salonkee-flow", "DNS, SSL, Search Console en livegang"],
    },
    {
      title: "Oplevering",
      items: ["CMS-uitleg en handover", "30 dagen technische bugfixgarantie"],
    },
  ],
  deliverables: ["6 kernpagina’s", "Responsive design & CMS", "Salonkee-integratie", "Lokale SEO & Google", "Performance & analytics", "Launch & handover"],
  timeline: [
    ["Kickoff", "Input, structuur en belangrijkste flows."],
    ["Richting & design", "De digitale stijl, kernpagina’s en mobiele ervaring."],
    ["Development", "Website, CMS, Salonkee en contentplaatsing."],
    ["QA & launch", "Testing, optimalisatie en livegang."],
  ],
  pricing: [
    ["Strategie & websitestructuur", 300],
    ["Creative direction & webdesign", 750],
    ["Development & CMS", 1200],
    ["Salonkee, Google-integraties & lokale SEO", 400],
    ["Testing, launch & handover", 300],
  ] as const,
  care: ["Hosting en SSL", "Technische en security-updates", "Backups en uptime monitoring", "Basis technisch onderhoud", "Technische ondersteuning"],
  production: ["Interieur en sfeer", "Team en behandelingen", "Detailfotografie", "Website loops en social video", "Launchcontent"],
  excluded: ["Branding, logo redesign en drukwerk", "Uitgebreide copywriting, vertaling of juridische redactie", "Social media, advertenties en doorlopende SEO", "Webshop, betalingen, accounts of loyalty", "Maatwerk CRM, API’s of meertaligheid"],
  clientInput: ["Logo en beschikbare brand assets", "Services, prijzen en openingsuren", "Adres, contact, team en social links", "Toegang tot Salonkee en relevante diensten", "Fotografie, bedrijfs- en privacygegevens", "Finale goedkeuring van de content"],
  conditions: [
    ["Geldigheid & planning", "30 dagen geldig. De planning start na goedkeuring en voorschot."],
    ["Input & feedback", "Late input of feedback kan de opleverdatum verschuiven."],
    ["Scope & meerwerk", "De projectprijs geldt voor deze scope. Meerwerk gebeurt alleen na akkoord."],
    ["Externe diensten", "Office6 is niet verantwoordelijk voor prijswijzigingen, storingen of beleidswijzigingen bij Salonkee, hostingproviders, Google of andere externe tools."],
    ["Bugfixperiode", "Technische fouten binnen de afgesproken implementatie worden 30 dagen na livegang kosteloos opgelost."],
  ],
} as const;

export const cousinVat = cousinProposal.basePrice * cousinProposal.vatRate;
export const cousinTotal = cousinProposal.basePrice + cousinVat;
