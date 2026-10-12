import { Hero } from "@/components/sections/Hero";
import { EventSpotlight } from "@/components/sections/EventSpotlight";
import { NewsSection } from "@/components/sections/NewsSection";
import { Stats } from "@/components/sections/Stats";
import { Region } from "@/components/sections/Region";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Objectives } from "@/components/sections/Objectives";
import { Products } from "@/components/sections/Products";
import { ProgramPreview } from "@/components/sections/ProgramPreview";
import { Authorities } from "@/components/sections/Authorities";
import { MhigiSection } from "@/components/sections/MhigiSection";
import { TyComSection } from "@/components/sections/TyComSection";
import { YadiGroupSection } from "@/components/sections/YadiGroupSection";
import { Partners } from "@/components/sections/Partners";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { RegistrationCTA } from "@/components/sections/RegistrationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventSpotlight />
      <NewsSection />
      <Stats />
      <Region />
      <WhyParticipate />
      <Objectives />
      <Products />
      <ProgramPreview />
      <Authorities />
      <MhigiSection />
      <TyComSection />
      <YadiGroupSection />
      <Partners />
      <PartnerLogos />
      <RegistrationCTA />
    </>
  );
}
