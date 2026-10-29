"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeaturedDignitary } from "@/components/institutional/FeaturedDignitary";
import { COMMITTEE } from "@/lib/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Section institutionnelle — mise en avant du Commissaire Général.
 * Ambiance « sommet » : fond vert profond, halos or et verre dépoli.
 */
export function Authorities() {
  const commissaire = COMMITTEE.find((d) => d.name === "Traoré Isahq Touramann");
  if (!commissaire) return null;

  return (
    <section
      className="relative isolate overflow-hidden bg-green-dark text-white section"
      aria-labelledby="authorities-title"
    >
      <div className="container">
        <SectionHeading
          tone="dark"
          eyebrow="Comité d'honneur & soutien institutionnel"
          eyebrowClassName="mb-3 border-orange/40 text-base text-orange sm:text-lg"
          eyebrowDotClassName="bg-orange"
          title={<span id="authorities-title">Un événement porté au plus haut niveau</span>}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mx-auto mt-14 max-w-5xl lg:mt-20"
        >
          <FeaturedDignitary
            person={commissaire}
            variant="secondary"
            portraitSide="left"
            eyebrow="Commissariat Général"
          />
        </motion.div>
      </div>
    </section>
  );
}
