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
 */
export function DignitaryCard({ person, sizes, className }: DignitaryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-soft-lg backdrop-blur-sm",
        "transition-all duration-500 hover:-translate-y-1 hover:border-gold/40",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={person.image}
          alt={`Portrait officiel de ${person.name}, ${person.role}`}
          fill
          sizes={sizes ?? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"}
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
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          aria-hidden
          className="mb-3 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-16"
        />
        <h3 className="font-heading text-lg font-extrabold leading-tight text-white">
          {person.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold/90">{person.role}</p>
      </div>
    </motion.article>
  );
}
