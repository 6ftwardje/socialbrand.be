import Hero from "@/components/home/Hero";
import SocialProofMicro from "@/components/home/SocialProofMicro";
import ProblemFraming from "@/components/home/ProblemFraming";
import PackagesTeaser from "@/components/home/PackagesTeaser";
import MethodeTeaser from "@/components/home/MethodeTeaser";
import CasesTeaser from "@/components/home/CasesTeaser";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/ui/CTASection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofMicro />
      <ProblemFraming />
      <PackagesTeaser />
      <MethodeTeaser />
      <CasesTeaser />
      <FAQSection />
      <CTASection
        title="Klaar om je persoonlijk merk te versterken?"
        subtitle="Boek een vrijblijvende call. We bespreken je situatie en of we bij elkaar passen."
        showContactForm
      >
        <ContactForm />
      </CTASection>
    </>
  );
}