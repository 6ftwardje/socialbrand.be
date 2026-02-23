import Section from "@/components/ui/Section";

export default function Positionering() {
  return (
    <Section title="Jouw gezicht is je sterkste marketingkanaal." id="positionering" fullWidth alt>
      <div className="max-w-3xl space-y-6 text-lg md:text-xl text-zinc-400 font-medium">
        <p>
          In een wereld vol advertenties vertrouwen mensen geen merken meer.
          Ze volgen mensen. Ze kopen van mensen. Ze verbinden met mensen.
        </p>
        <p className="text-white font-semibold">
          Als jij niet zichtbaar bent, wint iemand anders jouw markt.
        </p>
      </div>
    </Section>
  );
}
