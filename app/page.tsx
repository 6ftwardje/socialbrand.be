import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import Positionering from "@/components/home/Positionering";
import FeaturedCelsiusCase from "@/components/home/FeaturedCelsiusCase";
import CasesTeaser from "@/components/home/CasesTeaser";
import CTASection from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Positionering />
      <FeaturedCelsiusCase />
      <CasesTeaser />
      <CTASection
        title="Klaar om Office6 in te schakelen?"
        subtitle="Content, campagnes en platformen die elkaar versterken."
        paragraph="Vertel ons waar je merk vandaag staat. We denken mee over de juiste volgende stap."
        primaryCtaText="Plan een kennismakingscall"
        primaryCtaHref="/intake"
        showSecondaryLink={false}
      />
    </>
  );
}
