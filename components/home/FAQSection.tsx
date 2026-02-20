import { faqs } from "@/lib/content";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" id="faq">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Veelgestelde vragen
      </h2>
      <div className="max-w-3xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
