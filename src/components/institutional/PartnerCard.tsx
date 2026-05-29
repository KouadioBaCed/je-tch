"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";

/**
 * Carte « Partenaire / Accompagnement technique ».
 * Deux colonnes symétriques : à gauche le logo de l'institution (même format
 * que le portrait) avec le texte du logo dessous ; à droite le portrait avec
 * le nom et la fonction alignés à gauche.
 */
export function PartnerCard({ person }: { person: Dignitary }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative mx-auto flex w-full max-w-2xl flex-col items-center gap-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-soft-lg backdrop-blur-sm transition-colors duration-500 hover:border-white/30 sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:p-9"
    >
      {/* Colonne logo — sigle + texte (même famille que la colonne de droite) */}
      {person.logo && (
        <div className="flex w-40 shrink-0 flex-col items-start gap-3 text-left sm:w-44">
          <div className="flex aspect-[4/5] w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white p-5 shadow-soft-lg transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:w-44">
            <Image
              src={person.logo}
              alt={person.logoAlt ?? `Logo institutionnel de ${person.name}`}
              width={1080}
              height={792}
              sizes="220px"
              className="h-auto w-full object-contain"
            />
          </div>
          {person.logoTitle && (
            <h3 className="font-heading text-lg font-extrabold leading-tight text-white">
              {person.logoTitle}
            </h3>
          )}
          {person.logoCaption && (
            <p className="text-pretty text-sm font-medium leading-relaxed text-white/80">
              {person.logoCaption}
            </p>
          )}
        </div>
      )}

      {/* Colonne portrait — nom & fonction alignés à gauche */}
      <div className="flex w-40 shrink-0 flex-col items-start gap-3 text-left sm:w-44">
        <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl border border-white/15 sm:w-44">
          <Image
            src={person.image}
            alt={`Portrait officiel de ${person.name}, ${person.role}`}
            fill
            sizes="180px"
            quality={90}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="font-heading text-lg font-extrabold leading-tight text-white">
          {person.name}
        </h3>
        <p className="text-pretty text-sm font-medium leading-relaxed text-white/80">
          {person.role}
        </p>
      </div>
    </motion.article>
  );
}
