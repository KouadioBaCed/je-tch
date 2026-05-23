"use client";

import { motion } from "framer-motion";
import { UserRound, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ORGANIZERS, EVENT } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Organizers() {
  return (
    <section className="section bg-white" aria-labelledby="organizers-title">
      <div className="container">
        <SectionHeading
          eyebrow="Comité d'organisation"
          title={<span id="organizers-title">Un événement piloté avec rigueur</span>}
          description="Porté par un comité dédié, en concertation avec l'État, le secteur privé et les filières agricoles."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2"
        >
          {ORGANIZERS.map((person) => (
            <motion.div
              key={person.name}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft"
            >
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-green text-white shadow-soft-green">
                <UserRound className="size-8" />
              </span>
              <div>
                <p className="font-heading text-lg font-extrabold text-ink">{person.name}</p>
                <p className="text-sm font-medium text-green">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative mx-auto mt-10 max-w-2xl rounded-2xl border border-line surface-green p-8 text-center text-white shadow-soft-green"
        >
          <Quote className="mx-auto size-8 text-gold" />
          <p className="mt-4 text-balance font-heading text-xl font-bold leading-snug sm:text-2xl">
            « Moins de pertes, plus de stocks, plus de revenus, plus de richesse pour le Tchologo. »
          </p>
          <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            {EVENT.baseline}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
