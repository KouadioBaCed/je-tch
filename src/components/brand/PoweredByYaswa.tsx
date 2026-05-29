"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PoweredByYaswaProps {
  /** Surface sur laquelle le bloc est posé. */
  variant?: "dark" | "light";
  /** Texte d'introduction au-dessus du logo. */
  label?: string;
  /** Lien optionnel vers le site de YASWA TECHNOLOGIE. */
  href?: string;
  /** Affiche le badge « Trusted Technology Partner ». */
  showBadge?: boolean;
  /** Affiche la ligne séparatrice en haut du bloc. */
  showDivider?: boolean;
  className?: string;
}

const YASWA_LOGO = "/logo/yaswa_logo_transparent.png";

const STYLES = {
  dark: {
    label: "text-white/45",
    divider: "via-white/15",
    plaque: "border-white/15 bg-white shadow-soft-lg",
    badge: "border-white/12 bg-white/5 text-white/55",
    badgeIcon: "text-white/45",
  },
  light: {
    label: "text-muted",
    divider: "via-line",
    plaque: "border-line bg-white shadow-soft",
    badge: "border-line bg-surface text-muted",
    badgeIcon: "text-green",
  },
} as const;

export function PoweredByYaswa({
  variant = "dark",
  label = "Conçu & développé par",
  href,
  showBadge = true,
  showDivider = true,
  className,
}: PoweredByYaswaProps) {
  const reduceMotion = useReducedMotion();
  const s = STYLES[variant];

  const logo = (
    <span className="group relative inline-flex">
      {/* Halo lumineux animé derrière le logo */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[rgba(59,169,224,0.20)] blur-2xl"
        animate={reduceMotion ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [0.97, 1.03, 0.97] }}
        transition={
          reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
      />
      {/* Plaque glassmorphism premium */}
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-2xl border px-6 py-4 backdrop-blur-sm",
          "transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:shadow-soft-lg",
          s.plaque
        )}
      >
        <Image
          src={YASWA_LOGO}
          alt="YASWA TECHNOLOGIE"
          width={200}
          height={200}
          sizes="200px"
          className="h-12 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-14"
        />
      </span>
    </span>
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.12)}
      className={cn("flex flex-col items-center gap-5 text-center", className)}
    >
      {showDivider && (
        <motion.span
          aria-hidden
          variants={fadeIn}
          className={cn("h-px w-full max-w-xs bg-gradient-to-r from-transparent to-transparent", s.divider)}
        />
      )}

      <motion.span
        variants={fadeUp}
        className={cn("text-[0.7rem] font-semibold uppercase tracking-[0.28em]", s.label)}
      >
        {label}
      </motion.span>

      <motion.div variants={fadeUp}>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YASWA TECHNOLOGIE — ouvrir le site dans un nouvel onglet"
            className="inline-flex rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            {logo}
          </a>
        ) : (
          logo
        )}
      </motion.div>

      {showBadge && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em]",
            s.badge
          )}
        >
          <ShieldCheck className={cn("size-3.5", s.badgeIcon)} />
          Trusted Technology Partner
        </motion.span>
      )}
    </motion.div>
  );
}
