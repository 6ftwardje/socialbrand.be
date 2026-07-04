import Section from "@/components/ui/Section";

export default function ProblemFraming() {
  return (
    <Section title="Merk vs. systeem" id="probleem" fullWidth alt>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h3 className="text-xl font-bold text-white md:text-2xl">Merk vs. vertrouwen</h3>
          <p className="mt-3 text-zinc-400 font-medium">Mensen reageren op verhalen, bewijs en gezichten. Niet op generieke merktaal.</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h3 className="text-xl font-bold text-white md:text-2xl">Content vs. distributie</h3>
          <p className="mt-3 text-zinc-400 font-medium">Content zonder kanaal, campagne of platform blijft vaak te licht om echt te groeien.</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 flex flex-col items-center justify-center">
          <div className="w-full aspect-video rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-500 text-xs uppercase tracking-wider">
            Video / foto placeholder
          </div>
        </div>
      </div>
    </Section>
  );
}
