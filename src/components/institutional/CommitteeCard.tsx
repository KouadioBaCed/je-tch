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
        className="absolute inset-y-0 left-0 w-1 bg-white/15"
      />

      <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-white/15 sm:size-28">
        <Image
          src={person.image}
          alt={person.role ? `Portrait officiel de ${person.name}, ${person.role}` : `Portrait officiel de ${person.name}`}
          fill
          sizes="120px"
          quality={85}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="min-w-0">
        {Icon && (
          <span className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.14em] text-white/80">
            <Icon className="size-3.5 shrink-0" />
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
