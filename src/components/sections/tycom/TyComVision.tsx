"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TY_COM_VISION } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TyComVision() {
  return (
    <div className="mt-16 sm:mt-20">
      <SectionHeading
        eyebrow="Notre vision"
        eyebrowClassName="text-base text-green sm:text-lg"
        eyebrowDotClassName="bg-green"
        title="Une signature visuelle qui parle pour vous"
        description="De l'idée à l'objet fini, chaque détail est pensé pour rendre votre marque visible, professionnelle et inoubliable."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {TY_COM_VISION.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-green-50 text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
              <item.icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-heading text-base font-bold leading-snug text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
