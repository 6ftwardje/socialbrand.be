import Hero from "@/components/home/Hero";
import Positionering from "@/components/home/Positionering";
import Traject90 from "@/components/home/Traject90";
import ExpressFormat from "@/components/home/ExpressFormat";
import ProfielOptimalisatie from "@/components/home/ProfielOptimalisatie";
import WatHetOplevert from "@/components/home/WatHetOplevert";
import CasesTeaser from "@/components/home/CasesTeaser";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/ui/CTASection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Positionering />
      <Traject90 />
      <ExpressFormat />
      <ProfielOptimalisatie />
      <WatHetOplevert />
      <CasesTeaser />
      <FAQSection />
      <CTASection
        title="Jouw persoonlijke merk begint hier."
        subtitle="Je personal brand is je superkracht."
        paragraph="Wij zorgen dat jouw zichtbaarheid net zo krachtig wordt als jouw ideeën. Klaar om dominant te worden in jouw niche?"
        primaryCtaText="Plan een strategiegesprek"
        showSecondaryLink={false}
        showContactForm
      >
        <ContactForm />
      </CTASection>
    </>
  );
}