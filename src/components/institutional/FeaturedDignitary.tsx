"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, scaleIn } from "@/lib/motion";
import type { Dignitary } from "@/lib/data";

const BADGES = [
  { icon: Landmark, label: "Autorité nationale" },
  { icon: MapPin, label: "Région du Tchologo" },
  { icon: ShieldCheck, label: "Soutien institutionnel" },
] as const;

interface FeaturedDignitaryProps {
  person: Dignitary;
  /**
   * `primary` — personnalité principale : grande, portrait à gauche, badges.
   * `secondary` — numéro deux : plus compacte, portrait à droite (miroir),
   * sans badges, pour s'inscrire juste sous la personnalité principale.
   */
  variant?: "primary" | "secondary";
  /**
   * Côté du portrait pour la variante `secondary`.
   * Par défaut `right` (miroir) ; `left` pour l'aligner comme la principale.
   */
  portraitSide?: "left" | "right";
  /**
   * Libellé du badge au-dessus du nom. `null` masque le badge.
   * Par défaut : « Comité d'honneur » (primary) / « Vice-présidence régionale » (secondary).
   */
  eyebrow?: string | null;
}

/**
 * Mise en avant héroïque d'une personnalité institutionnelle.
 * Disposition asymétrique avec halo or, anneau et zoom au survol ;
 * les deux blocs s'animent en cascade depuis le conteneur parent.
 */
export function FeaturedDignitary({ person, variant = "primary", portraitSide = "right", eyebrow }: FeaturedDignitaryProps) {
  const isSecondary = variant === "secondary";
  const portraitLeft = isSecondary && portraitSide === "left";
  const badgeLabel =
    eyebrow !== undefined ? eyebrow : isSecondary ? "Vice-présidence régionale" : "Comité d'honneur";

  return (
    <div
      className={cn(
        "relative grid items-center gap-8",
        isSecondary
          ? portraitLeft
            ? "lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-12"
            : "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-12"
          : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-14"
      )}
    >
      {/* Portrait */}
      <motion.figure
        variants={scaleIn}
        className={cn(
          "group relative mx-auto w-full lg:mx-0",
          isSecondary
            ? portraitLeft
              ? "max-w-xs lg:order-1 lg:mr-auto"
              : "max-w-xs lg:order-2 lg:ml-auto"
            : "max-w-sm"
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/15">
          <Image
            src={person.image}
            alt={`Portrait officiel de ${person.name}, ${person.role}`}
            fill
            sizes={
              isSecondary
                ? "(max-width: 1024px) 80vw, 28vw"
                : "(max-width: 1024px) 90vw, 36vw"
            }
            quality={90}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {!isSecondary && (
          <figcaption className="absolute left-4 -top-3 z-10 -translate-y-full">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-green-dark/70 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-md">
              <Sparkles className="size-3.5" />
              Personnalité d'honneur
            </span>
          </figcaption>
        )}

        {/* Sceau institutionnel — emblème de l'institution présidée */}
        {person.logo && (
          <div
            title={person.logoAlt}
            className="absolute -bottom-5 -right-3 grid size-20 place-items-center rounded-2xl border border-white/80 bg-white p-1.5 shadow-soft-lg transition-transform duration-500 ease-out hover:scale-[1.06] sm:-right-5 sm:size-24"
          >
            <Image
              src={person.logo}
              alt={person.logoAlt ?? `Logo institutionnel de ${person.name}`}
              width={96}
              height={96}
              sizes="96px"
              className="size-full rounded-xl object-contain"
            />
          </div>
        )}
      </motion.figure>

      {/* Éditorial */}
      <motion.div variants={fadeUp} className={cn("relative", isSecondary && (portraitLeft ? "lg:order-2" : "lg:order-1"))}>
        {badgeLabel && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <span className="size-1.5 rounded-full bg-gold" />
            {badgeLabel}
          </span>
        )}
        <h3
          className={cn(
            "mt-5 text-balance font-heading font-extrabold leading-[1.1] text-white",
            isSecondary
              ? "text-2xl sm:text-3xl lg:text-4xl"
              : "text-3xl sm:text-4xl lg:text-[2.75rem]"
          )}
        >
          {person.name}
        </h3>
        <p
          className={cn(
            "mt-3 text-pretty font-medium text-white/80",
            isSecondary ? "text-base lg:text-lg" : "text-lg"
          )}
        >
          {person.role}
        </p>
        {person.statement && (
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/75">
            {person.statement}
          </p>
        )}
        {!isSecondary && (
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
        )}
      </motion.div>
    </div>
  );
}
