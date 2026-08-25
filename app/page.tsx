import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import Positionering from "@/components/home/Positionering";
import FeaturedCelsiusCase from "@/components/home/FeaturedCelsiusCase";
import FeaturedTradePlatformCase from "@/components/home/FeaturedTradePlatformCase";
import FeaturedTheNightCase from "@/components/home/FeaturedTheNightCase";
import CasesTeaser from "@/components/home/CasesTeaser";
import FAQSection from "@/components/home/FAQSection";

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
      <FAQSection />
    </>
  );
}
