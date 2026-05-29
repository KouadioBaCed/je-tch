import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Region } from "@/components/sections/Region";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Objectives } from "@/components/sections/Objectives";
import { Products } from "@/components/sections/Products";
import { ProgramPreview } from "@/components/sections/ProgramPreview";
import { Authorities } from "@/components/sections/Authorities";
import { Partners } from "@/components/sections/Partners";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { RegistrationCTA } from "@/components/sections/RegistrationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Region />
      <WhyParticipate />
      <Objectives />
      <Products />
      <ProgramPreview />
      <Authorities />
      <Partners />
      <PartnerLogos />
      <RegistrationCTA />
    </>
  );
}
