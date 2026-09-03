"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TY_COM } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TyComCTA() {
  return (
    <div className="relative mt-16 overflow-hidden rounded-2xl surface-green-dark sm:mt-20 sm:rounded-3xl">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="relative flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-10 sm:py-16"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white"
        >
          <span className="size-1.5 rounded-full bg-gold" />
          {TY_COM.finalSlogan}
        </motion.span>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-pretty text-lg font-medium leading-relaxed text-white/90 sm:text-xl"
        >
          {TY_COM.finalText}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button asChild variant="primary" size="lg" className="group">
            <a href={TY_COM.website} target="_blank" rel="noopener noreferrer">
              {TY_COM.ctaFinalLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-white/15 pt-6"
        >
          <a
            href={TY_COM.contact.phone.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <Phone className="size-4" aria-hidden />
            {TY_COM.contact.phone.label}
          </a>
          <a
            href={TY_COM.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href={TY_COM.contact.email.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <Mail className="size-4" aria-hidden />
            {TY_COM.contact.email.label}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
