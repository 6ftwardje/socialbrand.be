export type CaseFormat = "wide" | "standard" | "portrait" | "square" | "platform";
export type MuxVideoFormat = "wide" | "standard" | "vertical";

export interface OfficeMuxVideo {
  title: string;
  playbackId: string;
  aspectRatio: "16:9" | "4:3" | "9:16";
  format: MuxVideoFormat;
}

export interface OfficeCase {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  services: string[];
  thumbnail: {
    image?: string;
    logo?: string;
    alt: string;
    shape: CaseFormat;
    span?: "single" | "double";
  };
  intro: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics?: string[];
  mediaPlan: {
    label: string;
    shape: CaseFormat;
    note: string;
  }[];
  muxVideos?: OfficeMuxVideo[];
}

const thumbnails = {
  autoViger: "/cases/auto-viger/thumbnail.webp",
  bloom: "/cases/bloom/thumbnail.webp",
  boho: "/cases/boho/thumbnail.webp",
  bora: "/cases/bora-coworking/thumbnail.webp",
  celsius: "/cases/celsius/thumbnail.webp",
  chrisHenry: "/cases/chris-henry/thumbnail.webp",
  coachedby: "/cases/coachedby/thumbnail.webp",
  gilles: "/cases/gilles-vandermeulen/thumbnail.webp",
  glemm: "/cases/glemm/thumbnail.webp",
  hetTradePlatform: "/cases/het-trade-platform/thumbnail.webp",
  kabaal: "/cases/kabaal/thumbnail.webp",
  oasix: "/cases/oasix/thumbnail.webp",
  peakPerformance: "/cases/peak-performance-podcast/thumbnail.webp",
  underPressure: "/cases/under-pressure-podcast/thumbnail.webp",
  saturate: "/cases/saturate/thumbnail.webp",
  simBrugge: "/cases/sim-brugge/thumbnail.webp",
  tecjobz: "/cases/tecjobz/thumbnail.webp",
  theNight: "/cases/the-night/thumbnail.webp",
} as const;

const logos = {
  autoViger: "/cases/auto-viger/logo.webp",
  bora: "/cases/bora-coworking/logo.webp",
  celsius: "/cases/celsius/logo.webp",
  coachedby: "/cases/coachedby/logo.webp",
  gilles: "/cases/gilles-vandermeulen/logo.webp",
  glemm: "/cases/glemm/logo.webp",
  hetTradePlatform: "/cases/het-trade-platform/logo.webp",
  oasix: "/cases/oasix/logo.webp",
  saturate: "/cases/saturate/logo.webp",
  tecjobz: "/cases/tecjobz/logo.webp",
  theNight: "/cases/the-night/logo.webp",
} as const;

const commonMedia = {
  vertical: { label: "Vertical edits", shape: "portrait" as const, note: "Ruimte voor reels, ads of social-first snippets." },
  wide: { label: "Campaign hero", shape: "wide" as const, note: "Breed beeld voor overzicht, campagnevisuals of hero content." },
  standard: { label: "4:3 content", shape: "standard" as const, note: "Voor formats die editorial, documentaire of social-native mogen voelen." },
  platform: { label: "Platform mockup", shape: "platform" as const, note: "Voor websites, leerplatformen, funnels of dashboards." },
};

const muxVideos = {
  autoViger: [
    { title: "Auto Viger reel 1", playbackId: "rVI7FqTJqDJTnc3V5d01iJ4rYYol9TVzpcFBxCw001Ayg", aspectRatio: "9:16", format: "vertical" },
  ],
  bloom: [
    { title: "BLOOM aftermovie", playbackId: "KUjtaDjReygSN3h5OjBV00Ujj1Diz6qVXHbbTQnoHUro", aspectRatio: "4:3", format: "standard" },
    { title: "BLOOM reel 1", playbackId: "l02cjrLZXI577JjUfgNLASHXZp3R7ccsgDkmsTftgbic", aspectRatio: "9:16", format: "vertical" },
  ],
  boho: [
    { title: "BOHO aftermovie", playbackId: "C13G97VCwSWDfh3IUXH02aCSeZ3f5d6QhcumnwYzP02e4", aspectRatio: "4:3", format: "standard" },
    { title: "BOHO reel 1", playbackId: "HYcATAWAUkvxOwwk00YoOuKfn9YOmrKOEsvqQ00XGsV00s", aspectRatio: "9:16", format: "vertical" },
  ],
  bora: [
    { title: "Bora reel 1", playbackId: "HbNxBdVuFpRnzavXfsD2g02NNHRkjMbh2L1yery9GXyY", aspectRatio: "9:16", format: "vertical" },
    { title: "Bora reel 2", playbackId: "Jdz9200jXVK96pHV1Nlz5QySi65BTXyT3U00HYwYwh00Ho", aspectRatio: "9:16", format: "vertical" },
  ],
  celsius: [
    { title: "Celsius video 1", playbackId: "CudSeCJkNaXoyPOaWaGjQOyKziqvsGvYu00khlyTvbeE", aspectRatio: "4:3", format: "standard" },
    { title: "Celsius video 2", playbackId: "GPl02ZhlId2qTKVZHy7H7w7VKUZ9m7ZKroYydmZJKfBc", aspectRatio: "16:9", format: "wide" },
    { title: "Celsius video 3", playbackId: "vT26OhQBVBmuba01zBo6weABfkfMDppGlnKjiAjhrx02w", aspectRatio: "4:3", format: "standard" },
    { title: "Celsius video 4", playbackId: "RK2CoF6KbFlBUYxkQc3IL8YikMF00USCFwUS7m73gR94", aspectRatio: "16:9", format: "wide" },
    { title: "Celsius video 5", playbackId: "l2HgjIOcm5dTVoK6j9Q8Ayy01BUN01T9K49E4601c00lYJU", aspectRatio: "16:9", format: "wide" },
  ],
  chrisHenry: [
    { title: "Chris reel 1", playbackId: "pkf2ACPLfLrX6DxhQcUl2rXylo6enXYpwvd01ZgfJdzQ", aspectRatio: "9:16", format: "vertical" },
    { title: "Chris reel 2", playbackId: "ckOaqwKoTI5o17yO46jJehfZacahkKG3JmmP5g4Rp84", aspectRatio: "9:16", format: "vertical" },
    { title: "Chris reel 3", playbackId: "oDWBWT6gLcxzPozhJCa00GvrLN2ishBFPdjqFkIU400Ts", aspectRatio: "9:16", format: "vertical" },
    { title: "Chris reel 4", playbackId: "UE7p9V2Q00a93eeffHL00POLPsTRJCOJWo003fKwLyqmG8", aspectRatio: "9:16", format: "vertical" },
  ],
  coachedby: [
    { title: "Coachedby reel 1", playbackId: "I01t00pJkyNLa01GOaljZyWX02S2CIOrsXdwJGLrn4SkHoQ", aspectRatio: "9:16", format: "vertical" },
  ],
  gilles: [
    { title: "Gilles reel 1", playbackId: "5bO2uObENcFS3RzjQcPY1wlGAYod60020102ooQI025cQPY", aspectRatio: "9:16", format: "vertical" },
    { title: "Gilles reel 2", playbackId: "uoew00g2vg4TLgxBZpB00k5cNxK00N4ErOTc01lNfJEGU9I", aspectRatio: "9:16", format: "vertical" },
  ],
  glemm: [
    { title: "Glemm aftermovie", playbackId: "xPHasu01he5BN02zddeDYr1vdNA4WqY6ju5oMhmHvdNDo", aspectRatio: "4:3", format: "standard" },
  ],
  kabaal: [
    { title: "Kabaal video", playbackId: "dZlYMXDmYv2W1iJ9nIE7QYysP5sjPwx4Tgb1ZoqO02rA", aspectRatio: "16:9", format: "wide" },
  ],
  oasix: [
    { title: "Oasix video 1", playbackId: "rGIKp01xkbJeRkGBa5yQFjk004FNhx00vDBXV59dBohnpM", aspectRatio: "4:3", format: "standard" },
    { title: "Oasix video 2", playbackId: "ABkTuT00cZEgl02x3P6UWx8kdD600Lbg7UfB29d2ROj3M00", aspectRatio: "4:3", format: "standard" },
    { title: "Oasix video 3", playbackId: "o6VH8mfBwk7602eVFUUFp71dksNPZbiU1ZOF5Rl5DWVc", aspectRatio: "4:3", format: "standard" },
    { title: "Oasix reel 1", playbackId: "qyCz78F5TDO1Qu7Q8TJC00VGRsUcclG42r3oAIgeKWFc", aspectRatio: "9:16", format: "vertical" },
  ],
  simBrugge: [
    { title: "SIM reel 1", playbackId: "2EHILfGIaDkEF3j5qm2BRK4rNuWvAEsb9mazrtnJxO8", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 2", playbackId: "mLyZ77v9rnz201pJyDcr2bkl6EwNmew02hKGrC8luzOfc", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 3", playbackId: "HvVZg00NLjVS38KUrdUQfdMBu6plLCA7xzfIaJ4obiCc", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 4", playbackId: "rKiDmalR01DeO7fRqlw01mnLV9C3kOLvhz01GPXNO2mGrk", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 5", playbackId: "00sJaiHbqWSHNRX7YeEsVZ1E5m00EUlwwC02hnZzOsOFow", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 6", playbackId: "O02xPP02dZPc47R5Dzd51OuYjIK5D2aShtPkrmpbh2Yy8", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 7", playbackId: "CEFemXDWWC2TO2gpjIbDqoGaUw01UgjAX7yanqHil01YU", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 8", playbackId: "OA7apKK9p3EhA028mWx4LIQuUhkIrTwpk8klDNFEyHu8", aspectRatio: "9:16", format: "vertical" },
    { title: "SIM reel 9", playbackId: "HoTvfECT2BM3YP9TQRfuads87mR01VqBDBRIFWrjfUIE", aspectRatio: "9:16", format: "vertical" },
  ],
  tecjobz: [
    { title: "Tecjobz reel 1", playbackId: "n3Fc0000fXYMfirz00ogOoAt3KminJ2u2KgcGx02IZYmJbo", aspectRatio: "9:16", format: "vertical" },
    { title: "Tecjobz reel 2", playbackId: "gfdA8RZv3oHkDTqi6B9I4qkBqDnP9cSqg4cI96WvxAc", aspectRatio: "9:16", format: "vertical" },
    { title: "Tecjobz reel 3", playbackId: "H00ipcurlJPtzC1AvU01qjQ00xFo14IrkbLkePeYPgnS5o", aspectRatio: "9:16", format: "vertical" },
    { title: "Tecjobz reel 4", playbackId: "nc002sSB6hhUctosOpYd2CrfCMTfv5RFDnRsfUDMNsrs", aspectRatio: "9:16", format: "vertical" },
  ],
  theNight: [
    { title: "The Night reel 1", playbackId: "Byr6vRQoyFXZtQafJo5nTjLy7XymY2tVDMuAqWAm6DE", aspectRatio: "9:16", format: "vertical" },
  ],
} satisfies Record<string, OfficeMuxVideo[]>;

export const officeCases: OfficeCase[] = [
  {
    slug: "auto-viger",
    title: "Auto Viger",
    subtitle: "Short-form ads die verhuur helder maken en vraag activeren.",
    category: "Vertical ads",
    tags: ["Vertical content", "Ads", "Performance marketing"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.autoViger, logo: logos.autoViger, alt: "Auto Viger short-form verhuurcampagne", shape: "wide" },
    intro:
      "Voor Auto Viger maakten we een collectie korte reels die hun verhuurservices duidelijk en snel begrijpbaar maken.",
    challenge:
      "De boodschap moest eenvoudig blijven: wat kan je huren, waarom is dat interessant en hoe voelt de service? Geen overproductie, wel heldere content die meteen inzetbaar is in ads.",
    approach:
      "We bouwden korte formats rond de voertuigen, de use cases en de concrete verhuurcontext. De edits werden gemaakt met performance in het achterhoofd: snel, duidelijk en makkelijk te testen.",
    outcome:
      "In combinatie met de juiste ad strategy hielp de content om hun verhuurschema sterk gevuld te krijgen.",
    metrics: ["Verhuurschema sterk gevuld", "Short-form collectie voor ads", "Heldere formats per voertuig"],
    mediaPlan: [commonMedia.vertical, commonMedia.wide, commonMedia.standard],
    muxVideos: muxVideos.autoViger,
  },
  {
    slug: "bloom",
    title: "BLOOM",
    subtitle: "Eventcontent die verder leeft dan de dag zelf.",
    category: "Event coverage",
    tags: ["Vertical content", "Event coverage", "Content strategy"],
    services: ["Content Creation"],
    thumbnail: { image: thumbnails.bloom, alt: "BLOOM event coverage", shape: "wide", span: "double" },
    intro:
      "Voor BLOOM maakten we een aftermovie en recap reels die de sfeer van het event vangen en tegelijk bruikbaar blijven voor latere marketing.",
    challenge:
      "Eventcontent verdwijnt vaak na een paar posts. BLOOM had nood aan materiaal dat niet alleen het moment documenteert, maar ook doorheen het jaar inzetbaar blijft.",
    approach:
      "We dachten mee over een content database: sterke sfeerbeelden, individuele clips en korte edits die later kunnen terugkomen in carrousels, ads en social posts.",
    outcome:
      "BLOOM kreeg niet enkel een aftermovie, maar een bruikbare set professionele assets voor toekomstige communicatie.",
    metrics: ["Aftermovie", "Recap reels", "Content database voor later gebruik"],
    mediaPlan: [commonMedia.wide, commonMedia.vertical, commonMedia.standard],
    muxVideos: muxVideos.bloom,
  },
  {
    slug: "boho",
    title: "BOHO",
    subtitle: "Een frisse opening aftermovie voor een zomerbar aan de kust.",
    category: "Event coverage",
    tags: ["Vertical content", "Event coverage", "Content strategy"],
    services: ["Content Creation"],
    thumbnail: { image: thumbnails.boho, alt: "BOHO event coverage", shape: "wide" },
    intro:
      "Boho Village Experiences is een van de prominente zomerbars aan de kust. Voor hun opening maakten we een frisse aftermovie en een contentbasis voor later gebruik.",
    challenge:
      "De opening moest niet alleen mooi worden vastgelegd. De content moest ook de energie van BOHO vertalen naar materiaal dat doorheen het seizoen bruikbaar blijft.",
    approach:
      "We legden de sfeer, mensen en details vast in een mix van aftermovie-materiaal en losse clips voor social. Zo ontstond een database die breder inzetbaar is dan een eenmalige recap.",
    outcome:
      "BOHO kreeg een frisse visuele start van het seizoen en een collectie clips om de zomerbar ook na het openingsmoment top-of-mind te houden.",
    mediaPlan: [commonMedia.wide, commonMedia.vertical],
    muxVideos: muxVideos.boho,
  },
  {
    slug: "bora-coworking",
    title: "Bora Coworking",
    subtitle: "Vertical ads voor kantoorruimtes met een frisse, menselijke uitstraling.",
    category: "Vertical ads",
    tags: ["Vertical content", "Ads", "Performance marketing"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.bora, logo: logos.bora, alt: "Bora Coworking vertical ad", shape: "portrait" },
    intro:
      "Voor Bora Coworking maakten we een set vertical ads voor de verhuur van vrijkomende kantoorruimtes.",
    challenge:
      "De content moest professioneel ogen, maar niet afstandelijk. Bora had nood aan ads die het aanbod concreet maken en tegelijk de frisse look van de locatie behouden.",
    approach:
      "We legden de focus op het menselijke: hoe de ruimtes gebruikt worden, hoe de omgeving voelt en waarom de plek aantrekkelijk is voor teams en ondernemers.",
    outcome:
      "De ads gaven Bora een social-first manier om hun kantoorruimtes zichtbaar te maken zonder hun professionele uitstraling te verliezen.",
    mediaPlan: [commonMedia.vertical, commonMedia.standard, commonMedia.wide],
    muxVideos: muxVideos.bora,
  },
  {
    slug: "celsius",
    title: "Celsius",
    subtitle: "Awareness campagnes en een herkenbare 4:3 stijl voor een groeiend event.",
    category: "Event campaign",
    tags: ["Vertical content", "Content strategy"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.celsius, logo: logos.celsius, alt: "Celsius event campaign", shape: "wide" },
    intro:
      "Celsius is een jong event in Gent met edities in onder meer Charlatan en tijdens de Gentse Feesten. We maakten verschillende awareness campagnes voor social media.",
    challenge:
      "Het event had nood aan een herkenbare visuele taal die niet generiek aanvoelt tussen andere nightlife-content.",
    approach:
      "We kozen voor een 4:3 stijl die eigen werd aan Celsius. Die formatkeuze gaf de content een herkenbaar karakter en vormde mee de basis van hun marketing en brand identity.",
    outcome:
      "Celsius groeide snel, verkocht meerdere events uit en genereerde bijna 200.000 organische views op Instagram alleen.",
    metrics: ["Bijna 200k organische Instagram views", "Meerdere events uitverkocht", "Herkenbare 4:3 contentstijl"],
    mediaPlan: [commonMedia.standard, commonMedia.vertical, commonMedia.wide],
    muxVideos: muxVideos.celsius,
  },
  {
    slug: "chris-henry",
    title: "Chris Henry",
    subtitle: "Een contentmachine rond expertise, vertrouwen en zichtbaarheid.",
    category: "Founder-led content",
    tags: ["Vertical content", "Content strategy", "Long-form content"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.chrisHenry, alt: "Chris Henry contentmachine", shape: "wide" },
    intro:
      "Chris Henry had geen expertiseprobleem. Hij had jaren ervaring, klantresultaten en een duidelijke methode binnen snookercoaching. Wat ontbrak, was consistente zichtbaarheid.",
    challenge:
      "Expertise bouwt pas vertrouwen op wanneer mensen ze herhaald zien. In een wereld waar AI steeds meer content produceert, moest Chris zichtbaar worden op een manier die menselijk, inhoudelijk en geloofwaardig voelt.",
    approach:
      "We bouwden een contentmachine rond zijn inzichten, ervaringen en standpunten. Long-form content werd de basis; short-form edits maakten zijn expertise herhaalbaar zichtbaar op social.",
    outcome:
      "Chris kreeg een duidelijke positie binnen zijn niche, sterke groei in bereik en een wachtlijst voor zijn coachingprogramma.",
    metrics: ["330.000+ views", "3.400+ nieuwe volgers", "Wachtlijst voor coachingprogramma"],
    mediaPlan: [commonMedia.wide, commonMedia.vertical, commonMedia.standard],
    muxVideos: muxVideos.chrisHenry,
  },
  {
    slug: "coachedby",
    title: "Coachedby",
    subtitle: "Een leerplatform en videocursus die opleiding schaalbaarder maken.",
    category: "Learning platform",
    tags: ["Vertical content", "Content strategy", "Videocourse", "Leerplatform"],
    services: ["Content Creation", "Custom Platforms"],
    thumbnail: { image: thumbnails.coachedby, logo: logos.coachedby, alt: "Coachedby leerplatform en videocourse", shape: "wide" },
    intro:
      "Voor Coachedby bouwden we een leerplatform met videocursus om de opleiding van hun coaches makkelijker, consistenter en efficiënter te maken.",
    challenge:
      "De opleiding moest schaalbaarder worden zonder aan kwaliteit of merkbeleving in te boeten.",
    approach:
      "We namen de volledige course in-house op en ontwikkelden het platform er rond. Zo konden inhoud, productie en platformervaring als één geheel worden opgebouwd.",
    outcome:
      "Het platform verhoogde de perceived value van het merk en kreeg positieve feedback van gebruikers. In combinatie met short-form content werd Coachedby professioneler in de markt gezet.",
    metrics: ["In-house videocourse", "Custom leerplatform", "Hogere perceived value"],
    mediaPlan: [commonMedia.platform, commonMedia.vertical, commonMedia.wide],
    muxVideos: muxVideos.coachedby,
  },
  {
    slug: "gilles-vandermeulen",
    title: "Gilles Vandermeulen",
    subtitle: "Een professionele website en contentbasis voor een opkomende stylist.",
    category: "Website + content",
    tags: ["Vertical content", "Content strategy", "Website", "Personal brand"],
    services: ["Content Creation", "Custom Platforms"],
    thumbnail: { image: thumbnails.gilles, logo: logos.gilles, alt: "Gilles Vandermeulen website en personal brand content", shape: "portrait" },
    intro:
      "Gilles Vandermeulen is een opkomende stylist uit Gent. Voor verschillende projecten had hij een centrale plek nodig om content op te verzamelen en mensen naartoe te sturen.",
    challenge:
      "Zijn werk moest professioneel gepresenteerd worden, zonder dat de site zwaar of afstandelijk aanvoelde.",
    approach:
      "We bouwden een sleek website met content en namen enkele reels op om zijn personal brand te versterken.",
    outcome:
      "Gilles kreeg een centrale plek voor zijn werk en content die zijn stijl en persoonlijkheid beter zichtbaar maakt.",
    mediaPlan: [commonMedia.platform, commonMedia.vertical, commonMedia.standard],
    muxVideos: muxVideos.gilles,
  },
  {
    slug: "glemm",
    title: "Glemm",
    subtitle: "Promotional content voor een nieuw glamour-event.",
    category: "Campaign content",
    tags: ["Content strategy", "Campaign"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.glemm, logo: logos.glemm, alt: "Glemm promotional content", shape: "wide" },
    intro:
      "Glemm is een jong event rond glamour, georganiseerd door Bar Jan Cremer. We maakten promotional content die mee de brand identity vormde.",
    challenge:
      "Als nieuw event moest Glemm snel een gevoel, stijl en herkenbaarheid opbouwen.",
    approach:
      "We ontwikkelden content die de sfeer en uitstraling van het event scherp neerzette en bruikbaar was in promotiecampagnes.",
    outcome:
      "De reacties waren positief en verschillende edities werden uitverkocht.",
    metrics: ["Positieve reacties", "Verschillende edities uitverkocht"],
    mediaPlan: [commonMedia.wide, commonMedia.vertical],
    muxVideos: muxVideos.glemm,
  },
  {
    slug: "het-trade-platform",
    title: "Het Trade Platform",
    subtitle: "Een videocourse, leerplatform en contentecosysteem in één traject.",
    category: "Learning platform",
    tags: ["Vertical content", "Content strategy", "Leerplatform", "Videocourse", "Ads", "Long-form content"],
    services: ["Content Creation", "Custom Platforms", "Performance Marketing"],
    thumbnail: { image: thumbnails.hetTradePlatform, logo: logos.hetTradePlatform, alt: "Het Trade Platform content en platformproductie", shape: "wide", span: "double" },
    intro:
      "Voor Het Trade Platform bouwden we een brand over de volledige lijn: videocourse, leerplatform en de content die nodig is om het product in de markt te zetten.",
    challenge:
      "Een online cursus is niet automatisch een leerervaring. De vraag was hoe we kennis zo konden structureren dat studenten niet alleen informatie krijgen, maar de materie echt begrijpen en toepassen.",
    approach:
      "We shootten de videocourse volledig in-house, bouwden het platform in modules en lessen, en voegden examens toe na elke module. De eerste modules kunnen als lead magnet gebruikt worden; betalende studenten krijgen een centrale leeromgeving.",
    outcome:
      "Het platform groeide naar meer dan 140 actieve gebruikers en gaf Rousso een schaalbare manier om studenten beter en sneller te begeleiden.",
    metrics: ["140+ actieve gebruikers", "Videocourse in modules", "Lead magnet + betalende leeromgeving"],
    mediaPlan: [commonMedia.platform, commonMedia.wide, commonMedia.vertical, commonMedia.standard],
  },
  {
    slug: "kabaal",
    title: "Kabaal",
    subtitle: "Een alternatieve promotievideo voor een nieuw techno-event in Gent.",
    category: "Video campaign",
    tags: ["Video campaign", "Content strategy", "Ads"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.kabaal, alt: "Kabaal techno event campagne", shape: "wide" },
    intro:
      "Voor Kabaal, een nieuw techno-event in Gent, maakten we een promotievideo in een alternatieve stijl.",
    challenge:
      "Het event moest snel een eigen gevoel krijgen, zonder te verdwijnen in generieke nightlife-promotie.",
    approach:
      "We kozen voor een rauwere visuele aanpak die past bij de energie van techno en inzetbaar is voor social en ads.",
    outcome:
      "Kabaal kreeg een herkenbare eerste campagnebasis om het event scherp in de markt te zetten.",
    mediaPlan: [commonMedia.wide, commonMedia.vertical],
    muxVideos: muxVideos.kabaal,
  },
  {
    slug: "oasix",
    title: "Oasix",
    subtitle: "Alternatieve festivalcontent met menselijke social-first momenten.",
    category: "Video campaign",
    tags: ["Video campaign", "Content strategy", "Ads"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.oasix, logo: logos.oasix, alt: "Oasix festivalcontent", shape: "wide" },
    intro:
      "Oasix is een open-air festival met meerdere edities achter de rug. Voor hun nieuwe editie wilden ze frisse, alternatieve content voor social media en ads.",
    challenge:
      "De content moest meer doen dan sfeer tonen. Ze moest de identiteit van Oasix versterken en werken binnen snelle social contexten.",
    approach:
      "We maakten verschillende video’s met focus op menselijke momenten, snelle edits en een duidelijke festivalidentiteit.",
    outcome:
      "De content droeg bij aan een sterke editie. 2026 werd een van hun beste events tot nu toe.",
    metrics: ["Een van hun beste edities tot nu toe", "Social-first videocampagne", "Frisse festivalidentiteit"],
    mediaPlan: [commonMedia.wide, commonMedia.vertical, commonMedia.standard],
    muxVideos: muxVideos.oasix,
  },
  {
    slug: "peak-performance-podcast",
    title: "Peak Performance Podcast",
    subtitle: "Een podcastformat voor Chris Henry, opgenomen in onze studio.",
    category: "Podcast production",
    tags: ["Podcast production", "Vertical content", "Personal brand"],
    services: ["Content Creation"],
    thumbnail: { image: thumbnails.peakPerformance, alt: "Peak Performance podcastproductie", shape: "wide" },
    intro:
      "Voor Chris Henry bedachten en produceerden we het Peak Performance podcastformat in onze studio in Brugge.",
    challenge:
      "Het format moest aansluiten op Chris zijn personal brand en tegelijk genoeg inhoudelijke diepgang bieden voor long-form distributie.",
    approach:
      "We ontwikkelden het format, namen de podcast professioneel op en vertaalden de afleveringen naar content die zijn expertpositie ondersteunt.",
    outcome:
      "De aflevering met Luca Brecel werd zeer goed ontvangen en sloot sterk aan op Chris zijn bredere contentstrategie.",
    mediaPlan: [commonMedia.wide, commonMedia.vertical, commonMedia.standard],
  },
  {
    slug: "under-pressure-podcast",
    title: "Under Pressure Podcast",
    subtitle: "Een podcastformat voor Rousso van Hoorn en zijn trade education platform.",
    category: "Podcast production",
    tags: ["Podcast production", "Vertical content", "Personal brand"],
    services: ["Content Creation"],
    thumbnail: { image: thumbnails.underPressure, alt: "Under Pressure podcastproductie", shape: "wide" },
    intro:
      "Voor Rousso van Hoorn bedachten en produceerden we de Under Pressure podcast in onze studio in Brugge.",
    challenge:
      "De podcast moest niet losstaan van zijn business, maar aansluiten op zijn personal brand en de ontwikkeling van Het Trade Platform.",
    approach:
      "We maakten een format waarin zijn visie, expertise en educatieve aanpak sterker naar voren komen. De content kon vervolgens doorvertaald worden naar short-form distributie.",
    outcome:
      "De podcast werd een inhoudelijke versterking van Rousso zijn merk en het bredere trade education ecosysteem.",
    mediaPlan: [commonMedia.wide, commonMedia.vertical],
  },
  {
    slug: "saturate",
    title: "Saturate",
    subtitle: "Long-form studiocontent professioneel opgenomen en uitgewerkt.",
    category: "Long-form content",
    tags: ["Long-form content", "Personal brand"],
    services: ["Content Creation"],
    thumbnail: { image: thumbnails.saturate, logo: logos.saturate, alt: "Long-form studioproductie voor Saturate", shape: "wide" },
    intro:
      "Voor Saturate maakten we long-form content in onze eigen studio.",
    challenge:
      "De opname moest professioneel ogen en inhoudelijk sterk genoeg zijn om als basis te dienen voor langere distributie.",
    approach:
      "We verzorgden de studio-opname en werkten het long-form format uit met focus op helder verhaal, ritme en bruikbaarheid.",
    outcome:
      "Saturate kreeg een professionele long-form basis voor hun contentaanwezigheid.",
    mediaPlan: [commonMedia.standard, commonMedia.wide, commonMedia.vertical],
  },
  {
    slug: "sim-brugge",
    title: "SIM Brugge",
    subtitle: "Social ads en snelle edits voor een jonge startup met groeiambitie.",
    category: "Performance content",
    tags: ["Vertical content", "Ads", "Content strategy"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.simBrugge, alt: "SIM Brugge vertical ads en social content", shape: "portrait" },
    intro:
      "Voor SIM Brugge maakten we een reeks ads en social media content die sterk aansloegen.",
    challenge:
      "De jonge startup had nood aan content die snel aandacht trekt, menselijk aanvoelt en duidelijk maakt waarom hun aanbod werkt.",
    approach:
      "We combineerden menselijke content met snelle cuts en een engaging editstijl, afgestemd op social en ads.",
    outcome:
      "SIM Brugge plukt daar vandaag de vruchten van: ze zitten voller geboekt dan ooit en denken aan locatie-uitbreiding.",
    metrics: ["Sterk gevulde agenda", "Social ads en snelle edits", "Groei richting locatie-uitbreiding"],
    mediaPlan: [commonMedia.vertical, commonMedia.wide, commonMedia.standard],
    muxVideos: muxVideos.simBrugge,
  },
  {
    slug: "tecjobz",
    title: "Tecjobz",
    subtitle: "Vertical-first employer content met focus op herkenbaarheid en actie.",
    category: "Recruitment content",
    tags: ["Vertical content", "Employer branding", "Ads"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.tecjobz, logo: logos.tecjobz, alt: "Tecjobz vertical recruitment content", shape: "portrait" },
    intro:
      "Voor Tecjobz voorzien we deze case alvast als recruitmentgerichte contentcase. De definitieve copy vullen we aan zodra de volledige context en resultaten vastliggen.",
    challenge:
      "Recruitmentcontent moet snel duidelijk maken voor wie de job is, waarom iemand moet doorklikken en wat het bedrijf onderscheidt.",
    approach:
      "De basis ligt in social-first formats die herkenbaar zijn voor kandidaten en tegelijk bruikbaar blijven voor performance campagnes.",
    outcome:
      "Deze case krijgt straks de juiste assets, resultaten en concrete learnings zodra we de volledige case samen scherpzetten.",
    mediaPlan: [commonMedia.vertical, commonMedia.wide, commonMedia.standard],
    muxVideos: muxVideos.tecjobz,
  },
  {
    slug: "the-night",
    title: "The Night",
    subtitle: "Vertical campaign content voor een nightlife-concept.",
    category: "Event campaign",
    tags: ["Vertical content", "Event campaign", "Ads"],
    services: ["Content Creation", "Performance Marketing"],
    thumbnail: { image: thumbnails.theNight, logo: logos.theNight, alt: "The Night vertical campaign content", shape: "portrait" },
    intro:
      "Voor The Night voorzien we deze case alvast als nightlife/event campagnecase. De definitieve tekst wordt aangevuld zodra de volledige context bekend is.",
    challenge:
      "Nightlife-content moet in enkele seconden sfeer, energie en urgentie overbrengen.",
    approach:
      "We benaderen dit type content vanuit snelle edits, sterke visuals en formats die bruikbaar zijn voor organische distributie en paid social.",
    outcome:
      "Deze pagina staat klaar om straks gevuld te worden met de concrete campagne, beelden en resultaten.",
    mediaPlan: [commonMedia.vertical, commonMedia.wide],
    muxVideos: muxVideos.theNight,
  },
];
