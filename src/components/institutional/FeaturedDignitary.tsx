"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { fadeUp, scaleIn } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";

const BADGES = [
  { icon: Landmark, label: "Autorité nationale" },
  { icon: MapPin, label: "Région du Tchologo" },
  { icon: ShieldCheck, label: "Soutien institutionnel" },
] as const;

/**
 * Mise en avant héroïque de la personnalité principale.
 * Disposition asymétrique : portrait à gauche (halo or, ring, zoom au survol),
 * bloc éditorial à droite. Les deux éléments s'animent en cascade depuis
 * le conteneur parent (`staggerContainer`).
 */
export function FeaturedDignitary({ person }: { person: Dignitary }) {
  return (
    <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-14">
      {/* Portrait */}
      <motion.figure
        variants={scaleIn}
        className="group relative mx-auto w-full max-w-sm lg:mx-0"
      >
        {/* Halo doré — lueur subtile sur la personnalité principale */}
        <div
          aria-hidden
          className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gold/20 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-soft-lg ring-1 ring-gold/30">
          <Image
            src={person.image}
            alt={`Portrait officiel de ${person.name}, ${person.role}`}
            fill
            sizes="(max-width: 1024px) 90vw, 36vw"
            quality={90}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-green-dark/85 via-green-dark/15 to-transparent"
          />
          <figcaption className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-green-dark/70 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-md">
              <Sparkles className="size-3.5" />
              Personnalité d'honneur
            </span>
          </figcaption>
        </div>
      </motion.figure>

      {/* Éditorial */}
      <motion.div variants={fadeUp} className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
          <span className="size-1.5 rounded-full bg-gold" />
          Comité d'honneur
        </span>
        <h3 className="mt-5 text-balance font-heading text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
          {person.name}
        </h3>
        <p className="mt-3 text-pretty text-lg font-medium text-gold">{person.role}</p>
        {person.statement && (
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/75">
            {person.statement}
          </p>
        )}
        <ul className="mt-7 flex flex-wrap gap-3">
          {BADGES.map((badge) => (
            <li
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/85"
            >
              <badge.icon className="size-4 text-gold" />
              {badge.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
