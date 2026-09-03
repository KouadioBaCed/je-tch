"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YADI_GROUP, YADI_GROUP_AREAS } from "@/lib/data";
import { fadeInLeft, fadeInRight, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * YadiGroupSection — présentation éditoriale du partenaire multisectoriel
 * YADI GROUP. Même gabarit que `StrategicPartnerSection` (copy à gauche,
 * illustration à droite) complété par une grille de domaines d'activité et
 * un CTA final vers yadi.ci.
 */
export function YadiGroupSection() {
  return (
    <section
      className="section relative isolate overflow-hidden bg-white"
      aria-labelledby="yadi-group-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div aria-hidden className="absolute -right-20 top-0 -z-10 size-72 rounded-full bg-orange/10 blur-3xl" />
      <div aria-hidden className="absolute -left-16 bottom-0 -z-10 size-64 rounded-full bg-green/10 blur-3xl" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
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
              {YADI_GROUP.eyebrow}
            </motion.span>

            <motion.p
              variants={fadeInLeft}
              className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-ink"
            >
              {YADI_GROUP.name}
            </motion.p>

            <motion.h2
              id="yadi-group-title"
              variants={fadeInLeft}
              className="mt-3 text-balance font-heading text-3xl font-extrabold uppercase leading-tight text-green sm:text-4xl lg:text-[2.4rem]"
            >
              {YADI_GROUP.tagline}
            </motion.h2>

            <motion.p
              variants={fadeInLeft}
              className="mt-4 text-balance font-heading text-lg font-bold leading-snug text-ink"
            >
              {YADI_GROUP.title}
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="mt-4 max-w-prose text-pretty leading-relaxed text-muted"
            >
              {YADI_GROUP.description}
            </motion.p>

            <motion.div variants={fadeInLeft} className="mt-8">
              <Button asChild variant="primary" size="lg" className="group w-full sm:w-auto">
                <a href={YADI_GROUP.website} target="_blank" rel="noopener noreferrer">
                  {YADI_GROUP.ctaLabel}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Colonne illustration */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeInRight}
            className="relative mx-auto w-full"
          >
            <div aria-hidden className="absolute -right-8 -top-8 -z-10 size-40 rounded-full bg-gold/10 blur-2xl" />
            <div aria-hidden className="absolute -bottom-6 -left-6 -z-10 size-32 rounded-full bg-green/10 blur-2xl" />

            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-line shadow-soft-lg transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-glow">
              <Image
                src={YADI_GROUP.image}
                alt={YADI_GROUP.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Domaines d'activité */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.1)}
          className="mt-16 lg:mt-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm font-bold uppercase tracking-[0.16em] text-orange sm:text-base"
          >
            Nos domaines d&apos;activité
          </motion.p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {YADI_GROUP_AREAS.map((area) => (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="group rounded-xl border border-line bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-soft-lg"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-green-50 text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                  <area.icon className="size-5" aria-hidden />
                </span>
                <p className="mt-4 font-heading text-base font-bold text-ink">{area.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 text-center"
        >
          <p className="text-pretty text-base leading-relaxed text-muted">
            {YADI_GROUP.finalCtaText}
          </p>
          <Button asChild variant="outline" size="default" className="group">
            <a href={YADI_GROUP.website} target="_blank" rel="noopener noreferrer">
              {YADI_GROUP.finalCtaLabel}
              <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
