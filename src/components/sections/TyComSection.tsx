import { TyComHero } from "@/components/sections/tycom/TyComHero";
import { TyComVision } from "@/components/sections/tycom/TyComVision";
import { TyComCTA } from "@/components/sections/tycom/TyComCTA";

/**
 * Présentation du partenaire impression/marquage TY COM. Composée de blocs
 * modulaires indépendants (src/components/sections/tycom/) pour rester
 * facile à réordonner ou retirer sans toucher au reste du site.
 */
export function TyComSection() {
  return (
    <section className="section relative isolate overflow-hidden bg-surface" aria-labelledby="tycom-title">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
      />
      <div aria-hidden className="absolute -left-16 top-0 -z-10 size-64 rounded-full bg-orange/10 blur-3xl" />
      <div aria-hidden className="absolute -right-20 bottom-0 -z-10 size-72 rounded-full bg-green/10 blur-3xl" />

      <div className="container">
        <TyComHero />
        <TyComVision />
        <TyComCTA />
      </div>
    </section>
  );
}
