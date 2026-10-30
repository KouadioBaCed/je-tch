"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LUCARNE_PARTNERS } from "@/lib/data";

const STORAGE_KEY = "jetch-lucarne-closed";
const INTERVAL_MS = 4000;

/**
 * Lucarne partenaires — petite fenêtre flottante (coin bas gauche) qui fait
 * défiler les logos de `LUCARNE_PARTNERS`. Fermable ; reste fermée pendant
 * la session. Pause au survol.
 */
export function PartnerLucarne() {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    let closed = false;
    try {
      closed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (closed) return;
    // Apparition différée : ne concurrence pas le chargement de la page.
    const t = window.setTimeout(() => setVisible(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!visible || paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % LUCARNE_PARTNERS.length), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [visible, paused]);

  const close = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  const partner = LUCARNE_PARTNERS[index]!;

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Nos partenaires"
          className="fixed bottom-4 left-4 z-50 w-40 overflow-hidden rounded-2xl border border-line bg-white shadow-soft-lg sm:bottom-6 sm:left-6 sm:w-52"
        >
          <div className="flex items-center justify-between bg-green px-3 py-1.5">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">Partenaire</p>
            <button
              type="button"
              onClick={close}
              className="grid size-6 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Fermer la lucarne partenaires"
            >
              <X className="size-3.5" />
            </button>
          </div>

          <div className="relative aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={partner.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image src={partner.src} alt={`Logo ${partner.name}`} fill sizes="208px" className="object-contain p-3" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1.5 pb-2.5">
            {LUCARNE_PARTNERS.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-orange" : "w-1.5 bg-line hover:bg-muted"}`}
                aria-label={`Afficher ${p.name}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
