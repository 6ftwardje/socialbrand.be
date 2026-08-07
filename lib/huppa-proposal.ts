export const huppaProposal = {
  client: "Huppa",
  agency: "Office6",
  label: "Contentvoorstel 2026",
  generatedOn: "6 augustus 2026",
  total: 11000,
  currency: "EUR",
  stats: [
    { value: 4, suffix: "", label: "gerichte draaidagen" },
    { value: 12, suffix: "", label: "unieke videoproducties" },
    { value: 30, suffix: "+", label: "afgewerkte foto’s" },
  ],
  principles: [
    { title: "Eerst het verhaal", text: "We bepalen vooraf wat iedere video moet uitleggen, bewijzen of activeren." },
    { title: "Eén productie, meerdere toepassingen", text: "We verzamelen tijdens iedere draaidag materiaal voor brand, social, campagnes en sales." },
    { title: "Native per kanaal", text: "Verticale socialvideo’s worden afzonderlijk gemonteerd en zijn geen automatische uitsneden van horizontale masters." },
  ],
  deliverables: [
    { count: 1, kind: "Brandfilm", title: "Het volledige Huppa-verhaal", goal: "Vertrouwen en merkbegrip opbouwen.", specs: ["Circa 75–90 seconden", "Cinematische 16:9-master", "Van leverancier tot eindconsument", "Voor website, presentatie, sales en campagnes", "Nederlandse master", "Franse ondertitelde versie"] },
    { count: 3, kind: "Pijlerfilms", title: "Drie delen, helder uitgelegd", goal: "Complexe delen van de werking helder en afzonderlijk uitleggen.", specs: ["Warehouse en logistiek", "Commercial en winkels", "Producent tot consument", "Circa 45–60 seconden per video", "Horizontale NL-master", "Franse ondertiteling"] },
    { count: 6, kind: "Native socialvideo’s", title: "Zes eigen montages", goal: "Aandacht trekken en één concrete boodschap per video communiceren.", specs: ["Circa 15–30 seconden", "Specifiek gemonteerd in 9:16", "Eigen hook en ritme per video", "Ondertiteling ingebouwd", "Voor organische social en paid", "Onderwerpen bepaald in preproductie"] },
    { count: 2, kind: "Testimonials", title: "De belofte, verteld door mensen", goal: "De merkbelofte laten bevestigen door echte mensen.", specs: ["Partner, winkel of leverancier", "Medewerker, klant of eindconsument", "Circa 30–60 seconden", "Interview met relevante beelden", "Horizontale NL-master", "Verticale technische versie waar bruikbaar"] },
  ],
  productionDays: [
    { title: "Warehouse en logistiek", capture: ["Inbound, opslag en picking", "Verpakking en kwaliteitscontrole", "Outbound, chauffeur en transport", "Algemene sfeerbeelden"], output: ["Pijlerfilm warehouse en logistiek", "Brandfilm", "Socialcontent", "Fotografie"] },
    { title: "Kantoor en commercieel", capture: ["Kantoorwerking en team", "Customer service en sales", "Bestelproces en platformgebruik", "Tastingmomenten en interviews"], output: ["Commerciële pijlerfilm", "Brandfilm", "Socialcontent", "Testimonial en fotografie"] },
    { title: "Winkels en partners", capture: ["Hero-winkel en aanvullende locatie", "Winkelervaring en productpresentatie", "Interactie, levering en interviews", "Detail- en sfeerbeelden"], output: ["Winkelcontent", "Testimonial", "Brandfilm", "Socialcontent en fotografie"] },
    { title: "Producent en eindconsument", capture: ["Producent of leverancier", "Productie en verhaal achter het product", "Levering richting Huppa", "Gebruik, lifestyle en ketenafsluiting"], output: ["Producent-tot-consumentpijler", "Brandfilm", "Socialcontent", "Fotografie"] },
  ],
  applications: ["Brand", "Website", "Sales", "Organische social", "Paid social", "Interne communicatie", "Partnercommunicatie"],
  included: ["Creatief concept", "Strategische voorbereiding", "Productieplanning", "Callsheets en shotlists", "Vier draaidagen", "Tweepersoonscrew", "Camera-, licht- en audiomateriaal", "Regie en interviews", "Montage en color grading", "Basis sound design", "Muzieklicenties", "Nederlandse masters", "Franse ondertiteling", "Zes native verticale socialvideo’s", "Minimaal 30 afgewerkte foto’s", "Eén inhoudelijke revisieronde", "Eén kleinere correctieronde", "Onbeperkte organische en commerciële gebruiksrechten voor Huppa"],
  excluded: ["Acteurs en modellen", "Locatiehuur", "Styling of visagie", "Professionele voice-overartiest", "Complexe 3D-animatie", "Volledige mascotte-animaties", "Geavanceerde platformanimatie", "Raw footage en projectbestanden", "Extra draaidagen", "Bijkomende inhoudelijke revisierondes"],
  investment: [
    { label: "Strategie en preproductie", price: 1100 },
    { label: "Productie — vier draaidagen", price: 6400 },
    { label: "Montage en postproductie", price: 3250 },
    { label: "Transport en verplaatsing", price: 250 },
  ],
  optionalModules: [
    { id: "voice", title: "Professionele voice-over NL en FR", price: 650, description: "Professionele opname en gebruiksrechten voor de brandfilm." },
    { id: "day", title: "Extra draaidag", price: 1350, description: "Voor bijkomende leveranciers, winkels of locaties buiten de afgesproken productieplanning." },
    { id: "social", title: "Extra socialpakket", price: 1200, description: "Vier bijkomende native verticale video’s op basis van het opgenomen materiaal." },
    { id: "platform", title: "Platformanimatie", price: 850, description: "Gerichte motion-designanimatie van het bestelplatform of een specifieke digitale flow." },
    { id: "mascot", title: "Mascotteconcept", price: 1750, from: true, description: "Een afzonderlijke creatieve module voor Henri, afhankelijk van animatiestijl, aantal scènes en gewenste kwaliteit." },
  ],
  process: ["Scope en budget bevestigen", "Kick-off en inhoudelijke workshop", "Shotlist, planning en locaties vastleggen", "Productiedagen uitvoeren", "Eerste montages en revisie opleveren"],
} as const;

export type OptionalModule = (typeof huppaProposal.optionalModules)[number];
