import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import Positionering from "@/components/home/Positionering";
import FeaturedCelsiusCase from "@/components/home/FeaturedCelsiusCase";
import FeaturedTradePlatformCase from "@/components/home/FeaturedTradePlatformCase";
import FeaturedTheNightCase from "@/components/home/FeaturedTheNightCase";
import CasesTeaser from "@/components/home/CasesTeaser";
import CTASection from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Positionering />
      <FeaturedTheNightCase />
      <FeaturedTradePlatformCase />
      <FeaturedCelsiusCase />
      <CasesTeaser />
      <CTASection
        title="Klaar om je merk sneller te laten groeien?"
        subtitle="Voor ondernemers die content, campagnes en platformen niet meer los van elkaar willen aanpakken."
        paragraph="Vertel ons kort waar je vandaag staat. We denken mee over de juiste volgende stap en nemen binnen 24 uur contact op."
        primaryCtaText="Start intake"
        primaryCtaHref="/intake"
        showSecondaryLink={false}
      />
    </>
  );
}
