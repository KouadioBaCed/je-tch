"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/shared/Countdown";
import { EVENT } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * Hero — l'affiche officielle est l'élément visuel principal (titre, dates, villes,
 * thème et chiffres y sont intégrés). On affiche le visuel « web » (paysage) sur grand
 * écran et le visuel « mobile » (portrait) sur téléphone, à leur ratio natif (jamais
 * rogné). En dessous : la barre interactive — CTAs + compte à rebours — qui, elle, reste
 * vivante (« à partir de Ouverture dans »).
 *
 * Perf : les deux visuels sont `priority` mais avec un `sizes` conditionnel (1px sur le
 * breakpoint non concerné) → chaque appareil ne télécharge que son affiche en pleine
 * qualité, l'autre en vignette ~1px. next/image sert automatiquement en AVIF/WebP.
 */
const POSTER_ALT =
  "Les Journées de l'Entreposage Tchologo 2026 — 30 sept au 2 oct 2026, Kong · Ouangolodougou · Ferkessédougou. Entreposage et valorisation des produits agricoles : de la perte post-récolte à la compétitivité numérique.";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Zone affiche — fond blanc : se fond dans la navbar (frosted blanche) et dans le
          haut clair de l'affiche, et l'encadre proprement sur tablette / ultra-large. */}
      <div className="bg-white">
        {/* Réserve la hauteur de la navbar fixe pour ne jamais recouvrir le logo/titre de l'affiche */}
        <div aria-hidden className="h-16 w-full lg:h-[4.5rem]" />

        {/* Affiche officielle — art direction responsive, ratio natif préservé */}
        <Image
          src="/hero/mobile.png"
          alt={POSTER_ALT}
          width={474}
          height={676}
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="mx-auto block h-auto w-full max-w-[560px] lg:hidden"
        />
        <Image
          src="/hero/web.png"
          alt={POSTER_ALT}
          width={1774}
          height={887}
          priority
          sizes="(max-width: 1023px) 1px, 100vw"
          className="mx-auto hidden h-auto w-full max-w-[2400px] lg:block"
        />
      </div>

      {/* Barre interactive : CTAs + compte à rebours (éléments vivants conservés) */}
      <div className="relative surface-green-dark">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
          className="container relative flex flex-col items-center gap-9 py-12 text-center lg:py-14"
        >
          {/* CTAs — non intégrés à l'image : restent de vrais boutons (parcours de conversion) */}
          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
          >
            <Button asChild variant="primary" size="lg" className="group w-full sm:w-auto">
              <Link href="/#inscription">
                <CalendarCheck className="size-5 transition-transform group-hover:scale-110" />
                Je m'inscris gratuitement
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg" className="w-full sm:w-auto">
              <Link href="/exposants">
                <Handshake className="size-5" />
                Devenir partenaire
              </Link>
            </Button>
          </motion.div>

          {/* Compte à rebours — « Ouverture dans » */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              Ouverture dans
            </p>
            <Countdown target={EVENT.startISO} tone="dark" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
