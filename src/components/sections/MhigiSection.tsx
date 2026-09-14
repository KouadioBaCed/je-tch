"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Home,
  Sprout,
  Zap,
  Warehouse,
  Factory,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MHIGI } from "@/lib/data";
import { fadeInLeft, fadeInRight, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SECTOR_ICONS: Record<string, typeof Building2> = {
  Construction: Building2,
  Immobilier: Home,
  Agriculture: Sprout,
  Énergie: Zap,
  Infrastructures: Warehouse,
  Industrie: Factory,
};

/**
 * Lucarne promotionnelle / Section partenaire dédiée à la structure MHIGI.
 * Présente le groupe MHIGI, son logo officiel, son visuel de partenariat,
 * ses 6 secteurs clés, son accroche et le CTA vers https://mhigi.com/.
 */
export function MhigiSection() {
  return (
    <section
      id="mhigi"
      className="section relative isolate overflow-hidden bg-surface"
      aria-labelledby="mhigi-title"
    >
      {/* Motifs géométriques & halos d'ambiance aux couleurs de la charte */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -left-20 top-1/4 -z-10 size-72 rounded-full bg-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-1/4 -z-10 size-80 rounded-full bg-green/10 blur-3xl"
      />

      <div className="container">
        {/* Encart / Carte "Lucarne" principale */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 sm:p-10 lg:p-12 shadow-soft-lg">
          <div className="grid gap-10 lg:grid-cols-[11fr_10fr] lg:items-center lg:gap-14">
            
            {/* Colonne éditoriale */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.1)}
            >
              {/* En-tête : Badge + Mention partenaire */}
              <motion.div variants={fadeInLeft} className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange shadow-soft">
                  <span className="size-1.5 rounded-full bg-orange" />
                  {MHIGI.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                  <Sparkles className="size-3.5 text-gold" aria-hidden />
                  Partenaire Stratégique
                </span>
              </motion.div>

              {/* Logo officiel MHIGI */}
              <motion.div variants={fadeInLeft} className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-36 sm:h-14 sm:w-44 shrink-0">
                  <Image
                    src={MHIGI.logo}
                    alt="Logo officiel MHIGI"
                    fill
                    sizes="(max-width: 640px) 150px, 180px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </motion.div>

              {/* Titre */}
              <motion.h2
                id="mhigi-title"
                variants={fadeInLeft}
                className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-ink"
              >
                {MHIGI.name}
              </motion.h2>

              {/* Accroche mise en évidence */}
              <motion.div
                variants={fadeInLeft}
                className="mt-4 relative rounded-2xl border-l-4 border-orange bg-surface p-4 sm:p-5 shadow-sm"
              >
                <p className="font-heading text-base sm:text-lg font-bold text-ink italic leading-snug">
                  « {MHIGI.tagline} »
                </p>
              </motion.div>

              {/* Texte de présentation */}
              <motion.p
                variants={fadeInLeft}
                className="mt-5 max-w-prose text-pretty text-sm sm:text-base leading-relaxed text-muted"
              >
                {MHIGI.description}
              </motion.p>

              {/* Domaines d'activité */}
              <motion.div variants={fadeInLeft} className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/70 mb-3">
                  Pôles d&apos;excellence & solutions durables
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {MHIGI.sectors.map((sector) => {
                    const IconComponent = SECTOR_ICONS[sector.label] ?? CheckCircle2;
                    return (
                      <div
                        key={sector.label}
                        className="flex items-center gap-2.5 rounded-xl border border-line bg-surface/70 px-3 py-2 transition-colors hover:border-orange/40 hover:bg-surface"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-green-50 text-green">
                          <IconComponent className="size-3.5" aria-hidden />
                        </span>
                        <span className="text-xs font-semibold text-ink">{sector.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Bouton CTA */}
              <motion.div variants={fadeInLeft} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="group w-full sm:w-auto font-heading font-bold uppercase tracking-wider shadow-soft hover:shadow-soft-lg"
                >
                  <a
                    href={MHIGI.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {MHIGI.ctaLabel}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </Button>
                <span className="text-xs font-medium text-muted text-center sm:text-left">
                  Visiter mhigi.com · Ouvre dans un nouvel onglet
                </span>
              </motion.div>
            </motion.div>

            {/* Colonne visuelle (Image principale issue de public/new_part) */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInRight}
              className="relative mx-auto w-full"
            >
              {/* Effet halo or & vert derrière l'image */}
              <div
                aria-hidden
                className="absolute -right-6 -top-6 -z-10 size-48 rounded-full bg-gold/15 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -left-6 -z-10 size-48 rounded-full bg-green/15 blur-2xl"
              />

              {/* Cadre de l'image principale */}
              <div className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl border border-line bg-green-dark shadow-soft-lg transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-glow">
                <Image
                  src={MHIGI.image}
                  alt={MHIGI.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={90}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/85 via-green-dark/15 to-transparent" />

                {/* Badge contextuel en bas de photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="rounded-xl border border-white/20 bg-green-dark/80 p-3 sm:p-4 backdrop-blur-md shadow-soft">
                    <div className="flex items-center gap-2 text-gold">
                      <Sparkles className="size-3.5 text-gold" aria-hidden />
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                        Partenariat d&apos;Envergure
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-white/95 leading-snug">
                      Ingénierie industrielle, BTP & infrastructures modernes au service du Tchologo
                    </p>
                  </div>
                </div>
              </div>

              {/* Encart d'expertise complémentaire connectant au Comité Scientifique JE-TCH */}
              <motion.div
                variants={fadeUp}
                className="mt-4 flex items-center gap-3.5 rounded-2xl border border-line bg-surface p-3.5 shadow-sm"
              >
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-orange/40 bg-white">
                  <Image
                    src="/presentation/hein_mikel.jpg"
                    alt="M. Mikel Hein"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-orange">
                    Expertise Mobilisée JE-TCH 2026
                  </p>
                  <p className="truncate font-heading text-sm font-bold text-ink">
                    M. Mikel HEIN · Ingénierie & Construction d&apos;Entrepôts
                  </p>
                  <p className="truncate text-xs text-muted">
                    Commissariat Général & Comité Scientifique JE-TCH
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

