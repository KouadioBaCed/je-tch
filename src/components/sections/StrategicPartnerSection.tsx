"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STRATEGIC_PARTNER } from "@/lib/data";
import { fadeInLeft, fadeInRight, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * StrategicPartnerSection — présentation éditoriale premium d'un partenaire
 * stratégique (SY&CO HOLDING). Volontairement distincte du mur de logos
 * (`PartnerLogos`) : contenu éditorial à gauche, affiche officielle mise en
 * valeur à droite, pour donner une vraie présence institutionnelle.
 */
export function StrategicPartnerSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section relative isolate overflow-hidden bg-white"
      aria-labelledby="strategic-partner-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div aria-hidden className="absolute -left-20 bottom-0 -z-10 size-72 rounded-full bg-green/10 blur-3xl" />
      <div aria-hidden className="absolute -right-16 top-10 -z-10 size-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[9fr_11fr] lg:items-center lg:gap-16">
          {/* Colonne éditoriale */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            <motion.span
              variants={fadeInLeft}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange shadow-soft"
            >
              <span className="size-1.5 rounded-full bg-orange" />
              {STRATEGIC_PARTNER.eyebrow}
            </motion.span>

            <motion.div variants={fadeInLeft} className="mt-6 flex items-center gap-3">
              <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white shadow-soft">
                <Image
                  src={STRATEGIC_PARTNER.logo}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </span>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-ink">
                {STRATEGIC_PARTNER.name}
              </p>
            </motion.div>

            <motion.h2
              id="strategic-partner-title"
              variants={fadeInLeft}
              className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]"
            >
              {STRATEGIC_PARTNER.title}
            </motion.h2>

            <motion.p
              variants={fadeInLeft}
              className="mt-4 max-w-prose text-pretty leading-relaxed text-muted"
            >
              {STRATEGIC_PARTNER.description}
            </motion.p>

            <motion.ul variants={fadeInLeft} className="mt-7 flex flex-col gap-2.5">
              {STRATEGIC_PARTNER.activities.map((activity) => (
                <li
                  key={activity.label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-2.5"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-green-50 text-green">
                    <activity.icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink">{activity.label}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInLeft} className="mt-8">
              <Button asChild variant="primary" size="lg" className="group w-full sm:w-auto">
                <a
                  href={STRATEGIC_PARTNER.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {STRATEGIC_PARTNER.ctaLabel}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Colonne affiche */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeInRight}
            className="relative mx-auto w-full"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 -z-10 size-40 rounded-full bg-gold/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 -z-10 size-32 rounded-full bg-green/10 blur-2xl"
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="group relative aspect-[1600/642] overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-soft-lg transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-glow"
            >
              <div className="relative size-full overflow-hidden rounded-xl bg-surface">
                <Image
                  src={STRATEGIC_PARTNER.poster}
                  alt={STRATEGIC_PARTNER.posterAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  quality={95}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ligne discrète */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-xl text-balance text-center text-sm italic text-muted"
        >
          {STRATEGIC_PARTNER.quote}
        </motion.p>
      </div>
    </section>
  );
}
