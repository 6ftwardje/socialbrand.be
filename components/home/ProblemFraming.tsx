import Section from "@/components/ui/Section";

export default function ProblemFraming() {
  return (
    <Section title="Het probleem: merk vs. persoon" id="probleem">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Brand-account vs. persoonlijk account</h3>
          <p className="mt-3 text-zinc-400">
            Veel ondernemers posten via het merk-account. Mensen volgen echter mensen—niet logo&apos;s. Zonder jouw gezicht en verhaal blijft de connectie zwak en de autoriteit laag.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Product-focus vs. persoon-focus</h3>
          <p className="mt-3 text-zinc-400">
            Content die alleen over je product of dienst gaat, verveelt snel. Thought leadership draait om jouw inzichten, verhalen en expertise. Eerst de persoon, dan het merk.
          </p>
        </div>
      </div>
    </Section>
  );
}
