import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Archive — JE-TCH 2026",
  description: "Retour sur Les Journées de l'Entreposage Tchologo 2026 (18 - 20 octobre 2026).",
};

export default function Edition2026Page() {
  return (
    <>
      <Hero />
      <div className="bg-orange py-3 text-center text-sm font-semibold text-white">
        Vous consultez l'archive de l'édition 2026 (JE-TCH).{" "}
        <Link href="/" className="underline underline-offset-2">Découvrir JET-PO 2027 à Korhogo →</Link>
      </div>
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
