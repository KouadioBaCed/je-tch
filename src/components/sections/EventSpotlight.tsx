"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Lightbulb,
  MapPin,
  MessagesSquare,
  PackageSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT, SECONDARY_MINISTER } from "@/lib/data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const THEMES = [
  { icon: MessagesSquare, label: "Échanges" },
  { icon: PackageSearch, label: "Logistique" },
  { icon: Lightbulb, label: "Innovation" },
];

interface EventSpotlightProps {
  /** Chemin local sous /public de l'affiche officielle. */
  posterSrc?: string;
  posterAlt?: string;
}

/**
 * EventSpotlight — bandeau publicitaire événementiel (« Event Spotlight »).
 * Reprend l'affiche officielle dans un cadre premium à côté d'un pitch
 * institutionnel court + CTAs, pour une réutilisation hors Hero (ex. rappel
 * en milieu de page, page presse, etc.).
 */
export function EventSpotlight({
  posterSrc = "/hero/mobile.png",
  posterAlt = `Affiche officielle ${EVENT.fullTitle} — ${EVENT.datesLabel}, ${EVENT.citiesLabel}.`,
}: EventSpotlightProps) {
  return (
    <section
      className="section relative isolate overflow-hidden bg-white"
      aria-labelledby="spotlight-title"
    >
      {/* Texture + accents décoratifs très discrets */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      <div aria-hidden className="absolute -left-24 top-10 -z-10 size-72 rounded-full bg-green/10 blur-3xl" />
      <div aria-hidden className="absolute -right-16 bottom-0 -z-10 size-64 rounded-full bg-orange/10 blur-3xl" />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne texte */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-green/25 bg-green-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-green"
            >
              <span className="size-1.5 rounded-full bg-green" />
              Événement 2026
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-heading text-sm font-bold uppercase tracking-[0.22em] text-orange"
            >
              {EVENT.shortName}
            </motion.p>
            <motion.h2
              id="spotlight-title"
              variants={fadeUp}
              className="mt-2 text-balance font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]"
            >
              Les Journées de l&apos;Entreposage dans le Nord
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-prose text-pretty leading-relaxed text-muted"
            >
              Un rendez-vous majeur autour des enjeux de l&apos;entreposage, de la
              logistique et de l&apos;innovation dans le Nord de la Côte d&apos;Ivoire.
            </motion.p>

            {/* Carte date */}
            <motion.div
              variants={fadeUp}
              className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-line bg-white p-4 pr-6 shadow-soft"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                <Calendar className="size-6" aria-hidden />
              </div>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-ink">
                  15 – 17
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-orange">
                  Octobre 2026
                </p>
              </div>
            </motion.div>

            {/* Localisation */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-2 text-sm font-medium text-muted"
            >
              <MapPin className="size-4 shrink-0 text-green" aria-hidden />
              <span>{EVENT.citiesLabel}</span>
            </motion.div>

            {/* Thématiques */}
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
              {THEMES.map((theme) => (
                <span
                  key={theme.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  <theme.icon className="size-4 text-green" aria-hidden />
                  {theme.label}
                </span>
              ))}
            </motion.div>

            {/* Parrain */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-3 rounded-xl border border-line bg-surface p-3"
            >
              <Image
                src={SECONDARY_MINISTER.image}
                alt={SECONDARY_MINISTER.name}
                width={96}
                height={96}
                className="size-12 shrink-0 rounded-full object-cover ring-2 ring-gold/50"
              />
              <div className="min-w-0">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Sous le parrainage de
                </p>
                <p className="truncate font-heading text-sm font-bold text-ink">
                  {SECONDARY_MINISTER.name}
                </p>
                <p className="truncate text-xs text-muted">{SECONDARY_MINISTER.role}</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="green" size="lg" className="group w-full sm:w-auto">
                <Link href="/#objectifs">
                  Découvrir l&apos;événement
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link href="/#inscription" aria-label="Je participe à JE-TCH 2026">
                  Je participe
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Colonne affiche */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line shadow-soft-lg transition-transform duration-300 lg:hover:-translate-y-1">
              <Image
                src={posterSrc}
                alt={posterAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-green shadow-soft backdrop-blur-sm">
                {EVENT.shortName}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bandeau de rappel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-full border border-orange/25 bg-orange/5 px-5 py-2.5 text-sm font-semibold text-orange-hover"
        >
          <Calendar className="size-4" aria-hidden />
          15 au 17 octobre 2026 — {EVENT.citiesLabel}
        </motion.div>
      </div>
    </section>
  );
}
