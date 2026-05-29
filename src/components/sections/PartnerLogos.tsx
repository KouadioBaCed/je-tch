"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PARTNER_LOGOS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Mur de partenaires & sponsors — vitrine logos.
 * Tuiles uniformes sur fond blanc (les logos à fond blanc se fondent),
 * logos en `object-contain` (jamais déformés), révélation en cascade.
 * L'ordre suit `PARTNER_LOGOS` (source de vérité unique).
 */
export function PartnerLogos() {
  return (
    <section className="section bg-white" aria-labelledby="partner-logos-title">
      <div className="container">
        <SectionHeading
          eyebrow="Partenaires & sponsors"
          eyebrowClassName="text-base text-green sm:text-lg"
          eyebrowDotClassName="bg-green"
          title={<span id="partner-logos-title">Ils soutiennent JE-TCH 2026</span>}
          description="Ministères, partenaires financiers, médias et entreprises mobilisés pour faire de l'entreposage agricole un levier de richesse pour le Tchologo."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.04)}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {PARTNER_LOGOS.map((logo) => (
            <motion.li
              key={logo.src}
              variants={fadeUp}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-soft-lg"
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
