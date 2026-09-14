"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";
import { ArreBrochureViewer } from "@/components/institutional/ArreBrochureViewer";
import { ShieldCheck, Sparkles } from "lucide-react";

/**
 * Carte « Partenaire / Accompagnement technique ».
 * Présentation institutionnelle d'excellence pour l'A.R.R.E-CI :
 * 1. En-tête exécutif : Logo officiel de l'ARRE-CI et portrait du Pr. Koffi Justin (DG).
 * 2. Sous la photo du DG : Intégration de la documentation officielle (dépliants recto/verso
 *    du SRE avec visionneuse interactive haute définition et modal plein écran).
 */
export function PartnerCard({ person }: { person: Dignitary }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative mx-auto flex w-full max-w-4xl lg:max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-9 lg:p-10 shadow-soft-lg backdrop-blur-md transition-all duration-500 hover:border-white/30"
    >
      {/* Badge institutionnel supérieur */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
          <ShieldCheck className="size-3.5 text-gold" aria-hidden="true" />
          Accompagnement Technique & Régulation d&apos;État
        </span>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
          <Sparkles className="size-3.5 text-gold" aria-hidden="true" />
          Tutelle du Système SRE
        </span>
      </div>

      {/* Profil exécutif : Logo ARRE-CI (gauche) & Portrait DG Pr. Koffi Justin (droite) */}
      <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:gap-12 items-start">
        {/* Colonne logo institutionnel */}
        {person.logo && (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="flex aspect-[4/5] w-36 sm:w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white p-4 shadow-soft-lg transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <Image
                src={person.logo}
                alt={person.logoAlt ?? `Logo institutionnel de ${person.name}`}
                width={1080}
                height={792}
                sizes="180px"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              {person.logoTitle && (
                <h3 className="font-heading text-xl font-extrabold leading-tight text-white">
                  {person.logoTitle}
                </h3>
              )}
              {person.logoCaption && (
                <p className="mt-2 text-pretty text-sm font-medium leading-relaxed text-white/80">
                  {person.logoCaption}
                </p>
              )}
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[0.7rem] font-semibold text-white/75">
                Organisme Public de Régulation
              </div>
            </div>
          </div>
        )}

        {/* Colonne portrait : DG Pr. Koffi Justin */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="relative aspect-[4/5] w-36 sm:w-40 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-green-dark shadow-soft-lg">
            <Image
              src={person.image}
              alt={`Portrait officiel de ${person.name}, ${person.role}`}
              fill
              sizes="180px"
              quality={95}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading text-xl font-extrabold leading-tight text-white">
              {person.name}
            </h3>
            <p className="mt-2 text-pretty text-sm font-medium leading-relaxed text-white/80">
              {person.role}
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.7rem] font-bold text-gold">
              Direction Générale
            </div>
          </div>
        </div>
      </div>

      {/* Ligne de séparation élégante */}
      <div
        aria-hidden="true"
        className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Section Documentation officielle ARRE-CI située en dessous de la photo du DG */}
      <ArreBrochureViewer />
    </motion.article>
  );
}
