"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PROGRAM } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";

export function ProgramFull() {
  const [active, setActive] = React.useState(0);
  const day = PROGRAM[active]!;

  return (
    <div>
      {/* Day selector */}
      <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {PROGRAM.map((d, i) => {
          const isActive = i === active;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={cn(
                "flex min-w-[14rem] flex-1 flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200",
                isActive
                  ? "border-green bg-green text-white shadow-soft-green"
                  : "border-line bg-white text-ink hover:border-green/40 hover:shadow-soft"
              )}
            >
              <span className={cn("text-xs font-semibold uppercase tracking-[0.14em]", isActive ? "text-gold" : "text-orange")}>
                {d.dayLabel}
              </span>
              <span className="mt-1 font-heading text-lg font-extrabold">{d.theme}</span>
              <span className={cn("mt-2 inline-flex items-center gap-1.5 text-sm", isActive ? "text-white/80" : "text-muted")}>
                <MapPin className="size-3.5" />
                {d.city} · {d.date}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <AnimatePresence mode="wait">
        <motion.div
          key={day.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-10"
        >
          <motion.ol
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.08)}
            className="relative ml-3 border-l-2 border-dashed border-line pl-6 sm:ml-4 sm:pl-8"
          >
            {day.slots.map((slot, i) => (
              <motion.li key={slot.title} variants={fadeUp} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.1rem] top-1 grid size-7 place-items-center rounded-full border-2 border-green bg-white font-heading text-xs font-extrabold tabular-nums text-green sm:-left-[2.6rem]">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-line bg-white p-5 shadow-soft transition-shadow hover:shadow-soft-lg sm:p-6">
                  <h3 className="font-heading text-lg font-bold text-ink">{slot.title}</h3>
                  {slot.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">{slot.detail}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
