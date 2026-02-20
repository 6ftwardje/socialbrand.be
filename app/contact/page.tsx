import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Boek een call | SocialBrand",
  description:
    "Boek een vrijblijvende call met SocialBrand. Of stuur een bericht—we reageren binnen 1–2 werkdagen.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Boek een call
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Klaar om je persoonlijk merk te versterken? Boek een call of vul het formulier in. We nemen binnen 1–2 werkdagen contact op.
        </p>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">Plan een gesprek</h2>
          <p className="mt-2 text-zinc-400">
            Koppel hier later je Calendly (of ander boekingssysteem) aan. Tot die tijd gebruik je het formulier hieronder.
          </p>
          <div className="mt-6 flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 text-zinc-500">
            [Calendly-embed placeholder]
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white">Of stuur een bericht</h2>
          <p className="mt-2 text-zinc-400">
            Vul het formulier in; we reageren zo snel mogelijk.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
