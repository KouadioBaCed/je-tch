"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { REGION_HIGHLIGHTS, REGION_CAUSES } from "@/lib/data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export function Region() {
  return (
    <section className="relative isolate overflow-hidden surface-green-dark text-white section" aria-labelledby="region-title">
      <div className="noise-overlay absolute inset-0 -z-10 opacity-[0.04]" />
      <div className="absolute -right-32 top-0 -z-10 size-[28rem] rounded-full bg-green/30 blur-3xl" />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — copy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              <span className="size-1.5 rounded-full bg-gold" />
              La région du Tchologo
            </motion.span>
            <motion.h2
              id="region-title"
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              1ère région productrice d'anacarde de Côte d'Ivoire
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-pretty leading-relaxed text-white/75">
              Avec plus de 300 000 tonnes par an — anacarde, mangue, coton, maïs, karité — le Tchologo
              est un géant agricole. Mais <strong className="font-semibold text-white">30 % de la production
              est perdue chaque année</strong>, faute de stockage adapté.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 grid grid-cols-2 gap-4">
              {REGION_HIGHLIGHTS.map((h) => (
                <div key={h.title} className="rounded-xl border border-white/12 bg-white/5 p-5">
                  <h.icon className="size-6 text-gold" />
                  <p className="mt-3 font-heading text-base font-bold text-white">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{h.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image + headline stat */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-soft-lg">
              <Image
                src="/images/region-storage.jpg"
                alt="Agriculture et récolte dans la région du Tchologo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-2 w-60 rounded-2xl border border-line bg-white p-5 text-ink shadow-soft-lg sm:-left-6">
              <div className="flex items-center gap-2 text-orange-hover">
                <AlertTriangle className="size-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Le coût de l'inaction</span>
              </div>
              <p className="mt-2 font-heading text-4xl font-extrabold text-green">
                <AnimatedCounter value={90} suffix=" Mds" />
              </p>
              <p className="text-sm font-medium text-muted">FCFA de valeur détruite chaque année</p>
            </div>
          </motion.div>
        </div>

        {/* Causes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.1)}
          className="mt-20 lg:mt-24"
        >
          <motion.p variants={fadeUp} className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
            Les causes des pertes
          </motion.p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {REGION_CAUSES.map((cause, i) => (
              <motion.div
                key={cause}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/5 p-4"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-orange/20 font-heading text-sm font-bold text-orange">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-white/85">{cause}</span>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} className="mt-8 text-center text-lg font-semibold text-white">
            JE-TCH 2026 est la <span className="text-gold">réponse opérationnelle</span> à ce défi.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
