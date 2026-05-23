"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { STATS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative bg-surface section-tight" aria-labelledby="stats-title">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="size-1.5 rounded-full bg-orange" />
            Le constat
          </motion.span>
          <motion.h2
            id="stats-title"
            variants={fadeUp}
            className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-4xl"
          >
            Une richesse agricole immense, des pertes évitables
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-pretty text-muted">
            La région du Tchologo produit massivement — mais chaque année, une part considérable de
            cette valeur disparaît faute de stockage adapté.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-lg border border-line bg-white p-7 shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-xl bg-green text-white shadow-soft-green">
                  <stat.icon className="size-6" />
                </span>
                <p className="mt-5 font-heading text-4xl font-extrabold leading-none text-green sm:text-[2.75rem]">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-heading text-sm font-bold text-ink">{stat.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
