"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";

interface DignitaryCardProps {
  person: Dignitary;
  /** Override the responsive `sizes` hint for the optimizer. */
  sizes?: string;
  className?: string;
}

/**
 * Carte portrait premium — « mur d'honneur » institutionnel.
 * Pensée pour un fond sombre (verre dépoli + accent or, zoom léger au survol).
 * Reçoit son apparition au scroll de la grille parente (variant `fadeUp`).
 * Si `person.logo` est défini, un sceau institutionnel déborde le coin
 * bas-droit du portrait — même traitement que la personnalité principale.
 */
export function DignitaryCard({ person, sizes, className }: DignitaryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn("group relative transition-all duration-500 hover:-translate-y-1", className)}
    >
      {/* Cadre portrait (arrondi + clip du zoom image) */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-soft-lg backdrop-blur-sm transition-colors duration-500 group-hover:border-gold/40">
        <Image
          src={person.image}
          alt={`Portrait officiel de ${person.name}, ${person.role}`}
          fill
          sizes={sizes ?? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"}
          quality={85}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Voile dégradé pour lisibilité du cartouche */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-green-dark via-green-dark/35 to-transparent"
        />
        {/* Filet de lumière supérieur (verre) */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        {/* Cartouche nom — réserve de l'espace à droite quand un sceau déborde */}
        <div className={cn("absolute inset-x-0 bottom-0 p-5", person.logo && "pr-20")}>
          <span
            aria-hidden
            className="mb-3 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-16"
          />
          <h3 className="font-heading text-lg font-extrabold leading-tight text-white">
            {person.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold/90">{person.role}</p>
        </div>
      </div>

      {/* Sceau institutionnel débordant le coin — comme la personnalité principale */}
      {person.logo && (
        <div
          title={person.logoAlt}
          className="absolute -bottom-4 -right-3 grid size-16 place-items-center rounded-2xl border border-white/80 bg-white p-1.5 shadow-soft-lg ring-2 ring-gold/50 transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <Image
            src={person.logo}
            alt={person.logoAlt ?? `Logo institutionnel de ${person.name}`}
            width={64}
            height={64}
            sizes="64px"
            className="size-full rounded-xl object-contain"
          />
        </div>
      )}
    </motion.article>
  );
}
