"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { PARTNER_CATEGORIES } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Partners() {
  return (
    <section className="section bg-surface" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading
          eyebrow="Écosystème & partenaires"
          eyebrowClassName="text-base text-green sm:text-lg"
          eyebrowDotClassName="bg-green"
          title={<span id="partners-title">Tout l'écosystème réuni au même endroit</span>}
          description="Acheteurs, banques, assureurs, fournisseurs, institutions : les acteurs qui font bouger les filières agricoles."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PARTNER_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-green-50 text-green transition-colors group-hover:bg-green group-hover:text-white">
                <cat.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-ink">{cat.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{cat.examples.join(" · ")}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-line bg-white p-8 shadow-soft sm:flex-row sm:p-10"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xl font-extrabold text-ink">
              Associez votre marque à l'agriculture qui gagne
            </h3>
            <p className="mt-1.5 text-muted">
              Stands, visibilité institutionnelle, rencontres B2B qualifiées. Plusieurs formules disponibles.
            </p>
          </div>
          <Button asChild variant="primary" size="lg" className="group shrink-0">
            <Link href="/exposants">
              Devenir partenaire
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
