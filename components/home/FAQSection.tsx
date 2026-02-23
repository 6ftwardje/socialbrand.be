import { faqs } from "@/lib/content";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-zinc-950/80 border-t border-zinc-800/50" id="faq">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12">
          Veelgestelde vragen
        </h2>
        <div className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
