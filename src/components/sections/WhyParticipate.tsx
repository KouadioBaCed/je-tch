"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AUDIENCES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const ACCENT: Record<string, { chip: string; active: string; dot: string }> = {
  green: {
    chip: "hover:border-green/50 hover:text-green",
    active: "border-green bg-green text-white shadow-soft-green",
    dot: "bg-green text-white",
  },
  orange: {
    chip: "hover:border-orange/50 hover:text-orange-hover",
    active: "border-orange bg-orange text-white shadow-soft",
    dot: "bg-orange text-white",
  },
  gold: {
    chip: "hover:border-gold hover:text-[#8a6d12]",
    active: "border-gold bg-gold text-ink shadow-soft",
    dot: "bg-gold text-ink",
  },
};

export function WhyParticipate() {
  const [active, setActive] = React.useState(0);
  const current = AUDIENCES[active]!;
  const accent = ACCENT[current.accent]!;

  return (
    <section className="section bg-white" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Pourquoi participer"
          title={<span id="why-title">Une opportunité concrète, quel que soit votre rôle</span>}
          description="Producteurs, acheteurs, financiers ou institutions : chacun repart avec des résultats tangibles."
        />

        <div className="mt-12">
          {/* Tabs */}
          <div className="no-scrollbar -mx-5 mb-8 flex gap-2.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {AUDIENCES.map((aud, i) => {
              const isActive = i === active;
              const a = ACCENT[aud.accent]!;
              return (
                <button
                  key={aud.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                    isActive ? a.active : cn("border-line bg-white text-ink/80", a.chip)
                  )}
                >
                  <aud.icon className="size-4" />
                  {aud.audience}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className={cn("grid size-12 place-items-center rounded-xl", accent.dot)}>
                  <current.icon className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Si vous êtes</p>
                  <h3 className="font-heading text-xl font-extrabold text-ink">{current.audience}</h3>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {current.points.map((point) => (
                  <li
                    key={point.title}
                    className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-soft transition-shadow hover:shadow-soft-lg"
                  >
                    <span className={cn("mt-0.5 grid size-7 shrink-0 place-items-center rounded-full", accent.dot)}>
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-ink">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
