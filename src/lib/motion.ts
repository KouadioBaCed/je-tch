import type { Variants } from "framer-motion";

/** Premium easing curve (cubic-bezier) — subtle, never flashy. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/**
 * Réglage d'apparition au scroll.
 * `amount: "some"` (déclenche dès qu'une partie entre dans le viewport) au lieu
 * d'un seuil de 0.25 : un bloc plus haut que ~4× la hauteur de l'écran ne peut
 * jamais atteindre 25 % de visibilité, ce qui laissait son contenu bloqué à
 * `opacity:0` (ex. la longue grille du comité). "some" garantit le déclenchement
 * quelle que soit la hauteur du bloc.
 */
export const viewportOnce = { once: true, amount: "some" } as const;
