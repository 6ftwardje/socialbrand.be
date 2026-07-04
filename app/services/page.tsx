import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/content";
import { officeCases, type OfficeCase } from "@/lib/office-cases";

export const metadata = {
  title: "Services | Office6",
  description:
    "Content creation, performance marketing en custom platforms voor merken die menselijker willen communiceren en meetbaar willen groeien.",
};

const serviceCaseSlugs: Record<string, string> = {
  "content-creation": "bloom",
  "performance-marketing": "auto-viger",
  "custom-platforms": "het-trade-platform",
};

const serviceCopy: Record<string, { eyebrow: string; body: string }> = {
  "content-creation": {
    eyebrow: "Meer over content",
    body: "Sterke content vertrekt vanuit een helder verhaal en eindigt als formats die je merk herkent.",
  },
  "performance-marketing": {
    eyebrow: "Meer over performance",
    body: "Creatives, campagnes en data komen samen zodat je sneller leert wat werkt.",
  },
  "custom-platforms": {
    eyebrow: "Meer over platforms",
    body: "Websites, flows en dashboards die je merk niet alleen tonen, maar ook vooruithelpen.",
  },
};

const featuredCaseSlugs = ["bloom", "auto-viger", "het-trade-platform"];

function getCase(slug: string) {
  const item = officeCases.find((entry) => entry.slug === slug);
  if (!item) throw new Error(`Missing case data for ${slug}`);
  return item;
}

const featuredCases = featuredCaseSlugs.map(getCase);

function RelevantCase({ item }: { item: OfficeCase }) {
  return (
    <Link href={`/cases/${item.slug}`} className="group block">
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
        {item.thumbnail.image && (
          <Image
            src={item.thumbnail.image}
            alt={item.thumbnail.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 767px) 100vw, 32vw"
          />
        )}
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        {item.category}
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
      <p className="mt-1 max-w-md text-xs leading-relaxed text-zinc-500">
        {item.outcome}
      </p>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)] pb-16 text-white">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-24 md:px-6 md:pb-16 md:pt-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Services
        </p>
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
          Ontdek
          <span className="block text-zinc-500">onze services</span>
        </h1>

        <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-3">
          <span className="text-xs font-medium text-zinc-500">Services</span>
          <nav aria-label="Services" className="hidden gap-5 text-xs font-medium text-zinc-600 md:flex">
            {packages.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="transition-colors hover:text-white">
                {service.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8" aria-label="Office6 services">
        <div className="space-y-24 md:space-y-32">
          {packages.map((service, index) => {
            const serviceCase = getCase(serviceCaseSlugs[service.id]);
            const copy = serviceCopy[service.id];

            return (
              <article
                key={service.id}
                id={service.id}
                className="grid gap-8 scroll-mt-24 md:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.7fr)] md:gap-20 lg:gap-28"
              >
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight text-white md:text-3xl">
                    {copy.eyebrow}
                    <span className="block text-zinc-500">{service.name.toLowerCase()}</span>
                  </p>
                  <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                    {serviceCase.thumbnail.image && (
                      <Image
                        src={serviceCase.thumbnail.image}
                        alt={serviceCase.thumbnail.alt}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                        sizes="(max-width: 767px) 100vw, 48vw"
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center md:pt-20">
                  <p className="max-w-sm text-sm font-semibold leading-relaxed text-zinc-200">
                    {copy.body}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-sm leading-relaxed text-zinc-500">
                    {service.deliverables.slice(1, 6).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl border-t border-zinc-900 px-4 pt-8 md:mt-36 md:px-6 lg:px-8">
        <h2 className="max-w-xs text-2xl font-semibold leading-none tracking-tight text-white">
          Relevante
          <span className="block text-zinc-500">cases</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredCases.map((item) => (
            <RelevantCase key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex min-h-[42vh] max-w-7xl items-center justify-center px-4 text-center md:px-6 lg:px-8">
        <div>
          <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight text-zinc-500 md:text-4xl">
            Creatie die merken laat opvallen en resultaten ondersteunt
          </h2>
        </div>
      </section>
    </div>
  );
}
