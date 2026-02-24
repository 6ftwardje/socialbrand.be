import Link from "next/link";

export const metadata = {
  title: "Contact | Boek een call | SocialBrand",
  description:
    "Boek een vrijblijvende call met SocialBrand. Vul ons korte intake formulier in—we reageren binnen 24 uur.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Boek een call
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Klaar om je persoonlijk merk te versterken? Vul ons korte intake formulier in. We nemen binnen 24 uur contact op.
        </p>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">Plan een gesprek</h2>
          <p className="mt-2 text-zinc-400">
            Beantwoord 7 korte vragen (±2 min). Daarna nemen we binnen 24 uur contact met je op.
          </p>
          <Link
            href="/intake"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Start intake
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white">Of plan direct in</h2>
          <p className="mt-2 text-zinc-400">
            Ga naar het intake formulier om je gegevens door te geven.
          </p>
          <Link
            href="/intake"
            className="mt-4 inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 text-base font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Naar intake formulier →
          </Link>
        </div>
      </section>
    </>
  );
}
