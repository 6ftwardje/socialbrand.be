import Link from "next/link";
import { packages } from "@/lib/content";
import PackageCard from "@/components/ui/PackageCard";
import CTASection from "@/components/ui/CTASection";
import AanbodHero from "@/components/aanbod/AanbodHero";
import AanbodPositionering from "@/components/aanbod/AanbodPositionering";
import Segmentatie from "@/components/aanbod/Segmentatie";
import WatJijWijSectie from "@/components/aanbod/WatJijWijSectie";
import AanbodSocialProof from "@/components/aanbod/AanbodSocialProof";
import StickyAanbodCTA from "@/components/aanbod/StickyAanbodCTA";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata = {
  title: "Aanbod | SocialBrand",
  description:
    "Launch (eenmalig), Authority en Leadership (min. 3 maanden). Personal branding en thought leadership voor founders. Prijsindicatie op de kennismakingscall.",
};

const CTA_SUBTEXT = "±30 min. Geen verkooppraatje — we kijken of we bij elkaar passen. Daarna krijg je een prijsindicatie op maat.";

export default function AanbodPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AanbodHero />

      <AanbodPositionering />

      <AnimateOnScroll>
      <Segmentatie />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
      <section id="pakketten" className="w-full py-16 md:py-24 border-t border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4">
            Pakketten
          </h2>
          <p className="text-lg text-zinc-400 font-medium max-w-2xl mb-10">
            Investering op maat — prijsindicatie op de kennismakingscall.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                variant="full"
                recommended={pkg.id === "authority"}
                showPriceIndication
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-500 mb-4">{CTA_SUBTEXT}</p>
            <Link
              href="/intake"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Boek een kennismakingscall
            </Link>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <WatJijWijSectie />

      <AanbodSocialProof />

      <CTASection
        title="Klaar om je gezicht centraal te zetten?"
        subtitle="Boek een kennismakingscall. We kijken of we bij elkaar passen."
        paragraph={CTA_SUBTEXT}
        primaryCtaText="Boek een kennismakingscall"
        primaryCtaHref="/intake"
        showSecondaryLink
      />
      <StickyAanbodCTA />
    </div>
  );
}
