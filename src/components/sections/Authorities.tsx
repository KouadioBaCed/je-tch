"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeaturedDignitary } from "@/components/institutional/FeaturedDignitary";
import { DignitaryCard } from "@/components/institutional/DignitaryCard";
import { PartnerCard } from "@/components/institutional/PartnerCard";
import { CommitteeCard } from "@/components/institutional/CommitteeCard";
import { DIGNITARIES, SECONDARY_MINISTER, SECONDARY_DIGNITARY, PARTNERS, STEERING_COMMITTEE, COMMITTEE, EVENT } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Section institutionnelle premium — comité d'honneur, personnalités
 * officielles, Commissariat Général & Comité Scientifique.
 * Ambiance « sommet » : fond vert profond, grain, halos or et verre dépoli.
 */
export function Authorities() {
  const principal = DIGNITARIES.find((d) => d.featured) ?? DIGNITARIES[0];
  const others = DIGNITARIES.filter((d) => d !== principal);

  if (!principal) return null;

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
          description="Sous l'impulsion des autorités régionales et nationales, JE-TCH 2026 réunit les institutions qui font de l'entreposage agricole une priorité de développement pour le Tchologo et la Côte d'Ivoire."
        />

        {/* Personnalité principale */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-14 lg:mt-20"
        >
          <FeaturedDignitary person={principal} />
        </motion.div>

        {/* Ministre — juste sous la personnalité principale */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-12 border-t border-white/10 pt-12 lg:mt-16 lg:pt-16"
        >
          <FeaturedDignitary person={SECONDARY_MINISTER} variant="secondary" eyebrow={null} />
        </motion.div>

        {/* Numéro deux — le sénateur, juste sous la personnalité principale */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-12 border-t border-white/10 pt-12 lg:mt-16 lg:pt-16"
        >
          <FeaturedDignitary person={SECONDARY_DIGNITARY} variant="secondary" portraitSide="left" />
        </motion.div>

        {/* Élus locaux */}
        <div className="mt-16 lg:mt-24">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mb-8 text-center text-lg font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xl"
          >
            Élus locaux
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {others.map((person) => (
              <DignitaryCard key={person.name} person={person} />
            ))}
          </motion.div>
        </div>

        {/* Partenaires / Accompagnement technique */}
        <div className="mt-16 lg:mt-24">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mb-8 text-center text-lg font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xl"
          >
            Partenaires / Accompagnement technique
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="flex flex-wrap justify-center gap-5"
          >
            {PARTNERS.map((person) => (
              <PartnerCard key={person.name} person={person} />
            ))}
          </motion.div>
        </div>

        {/* Comité de pilotage */}
        <div className="mt-20 lg:mt-28">
          <div
            aria-hidden
            className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <SectionHeading
            tone="dark"
            align="left"
            title="Comité de pilotage"
            description="L'équipe qui pilote et coordonne l'organisation des Journées de l'Entreposage Tchologo 2026."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
            className="mt-10 grid items-start gap-6 lg:grid-cols-2"
          >
            {STEERING_COMMITTEE.map((person, i) => {
              const loneLast =
                i === STEERING_COMMITTEE.length - 1 && STEERING_COMMITTEE.length % 2 === 1;
              return (
                <CommitteeCard
                  key={person.name}
                  person={person}
                  className={cn(
                    i % 2 === 1 && "lg:mt-12",
                    loneLast && "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                  )}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Commissariat Général & Comité Scientifique */}
        <div className="mt-20 lg:mt-28">
          <div
            aria-hidden
            className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <SectionHeading
            tone="dark"
            align="left"
            title="La rigueur au service de l'événement"
            description="Une organisation pilotée avec exigence, adossée à une expertise scientifique reconnue."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
            className="mt-10 grid items-start gap-6 lg:grid-cols-2"
          >
            {COMMITTEE.map((person, i) => {
              // Carte seule en fin de rangée impaire → centrée sur la largeur d'une colonne.
              const loneLast =
                i === COMMITTEE.length - 1 && COMMITTEE.length % 2 === 1;
              return (
                <CommitteeCard
                  key={person.name}
                  person={person}
                  className={cn(
                    i % 2 === 1 && "lg:mt-12",
                    loneLast && "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                  )}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Signature institutionnelle */}
        <motion.blockquote
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative mx-auto mt-20 max-w-2xl rounded-2xl border border-white/12 bg-white/[0.04] p-8 text-center backdrop-blur-sm lg:mt-24"
        >
          <Quote className="mx-auto size-8 text-gold" />
          <p className="mt-4 text-balance font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
            « Moins de pertes, plus de stocks, plus de revenus, plus de richesse pour le Tchologo. »
          </p>
          <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            {EVENT.baseline}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
