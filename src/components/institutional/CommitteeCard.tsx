"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";

interface CommitteeCardProps {
  person: Dignitary;
  className?: string;
}

/**
 * Carte horizontale sobre et institutionnelle pour le Commissariat Général
 * et le Comité Scientifique : portrait encadré, fonction en pastille,
 * barre d'accent verticale et phrase de mission.
 */
export function CommitteeCard({ person, className }: CommitteeCardProps) {
  const Icon = person.icon;
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-soft-lg backdrop-blur-sm",
        "transition-all duration-500 hover:-translate-y-1 hover:border-gold/40",
        "sm:flex-row sm:items-center sm:gap-6 sm:p-7",
        className
      )}
    >
      {/* Barre d'accent */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-orange to-gold opacity-70"
      />

      <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-white/15 ring-1 ring-gold/25 sm:size-28">
        <Image
          src={person.image}
          alt={`Portrait officiel de ${person.name}, ${person.role}`}
          fill
          sizes="120px"
          quality={85}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="min-w-0">
        {Icon && (
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
            <Icon className="size-3.5" />
            {person.role}
          </span>
        )}
        <h3 className="font-heading text-xl font-extrabold leading-tight text-white">
          {person.name}
        </h3>
        {person.statement && (
          <p className="mt-2 text-pretty text-sm leading-relaxed text-white/70">
            {person.statement}
          </p>
        )}
      </div>
    </motion.article>
  );
}
