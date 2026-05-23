"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { OBJECTIVE_GENERAL, OBJECTIVES, EXPECTED_RESULTS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Objectives() {
  return (
    <section className="section bg-surface" aria-labelledby="objectives-title">
      <div className="container">
        <SectionHeading
          eyebrow="Objectifs & ambition"
          title={<span id="objectives-title">Ce que nous voulons accomplir ensemble</span>}
        />

        {/* General objective */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-9"
        >
          <div className="flex items-center gap-2 text-green">
            <Target className="size-5" />
            <span className="text-xs font-bold uppercase tracking-[0.14em]">Objectif général</span>
          </div>
          <p className="mt-3 text-pretty text-lg font-medium leading-relaxed text-ink sm:text-xl">
            {OBJECTIVE_GENERAL}
          </p>
        </motion.div>

        {/* Specific objectives */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {OBJECTIVES.map((obj, i) => (
            <motion.div
              key={obj.title}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-green-50 text-green">
                  <obj.icon className="size-5" />
                </span>
                <span className="font-heading text-2xl font-extrabold text-green-50">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-extrabold text-ink">{obj.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{obj.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expected results */}
        <div className="mt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-green">
            À l'issue des 3 jours, nous visons
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >
            {EXPECTED_RESULTS.map((r) => (
              <motion.div
                key={r.label}
                variants={fadeUp}
                className="flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center shadow-soft"
              >
                <span className="font-heading text-4xl font-extrabold leading-none text-orange sm:text-5xl">
                  <AnimatedCounter value={r.value} />
                </span>
                <p className="mt-3 text-xs leading-relaxed text-muted">{r.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
