"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { PROGRAM } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ProgramPreview() {
  return (
    <section className="section bg-surface" aria-labelledby="program-title">
      <div className="container">
        <SectionHeading
          eyebrow="3 jours, 3 villes"
          title={<span id="program-title">Un programme dense, du constat à la signature</span>}
          description="De l'ouverture officielle aux contrats signés sur le terrain — chaque journée a son cap."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {PROGRAM.map((day, i) => (
            <motion.article
              key={day.id}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-5xl font-extrabold text-green-50">
                  0{i + 1}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green">
                  <MapPin className="size-3.5" />
                  {day.city}
                </span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                {day.dayLabel} · {day.date}
              </p>
              <h3 className="mt-1.5 font-heading text-xl font-extrabold text-ink">{day.theme}</h3>

              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {day.slots.slice(0, 3).map((slot) => (
                  <li key={slot.title} className="flex gap-3 text-sm">
                    <span className="font-heading font-bold tabular-nums text-green">{slot.time}</span>
                    <span className="text-muted">{slot.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 text-sm font-semibold text-green/70">
                + {day.slots.length - 3} autres temps forts
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="green" size="lg" className="group">
            <Link href="/programme">
              Voir le programme complet
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
