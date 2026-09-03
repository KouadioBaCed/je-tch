"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TY_COM } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TyComHero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-4 shadow-soft"
      >
        <span className="relative h-9 w-24 shrink-0 overflow-hidden rounded-full">
          <Image src={TY_COM.logo} alt="" fill sizes="96px" className="object-contain" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
          {TY_COM.eyebrow}
        </span>
      </motion.div>

      <motion.h2
        id="tycom-title"
        variants={fadeUp}
        className="mt-6 text-balance font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {TY_COM.headline}
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
        {TY_COM.tagline}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {TY_COM.activities.map((activity, i) => (
          <span key={activity} className="flex items-center gap-2">
            <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink shadow-soft">
              {activity}
            </span>
            {i < TY_COM.activities.length - 1 && (
              <span aria-hidden className="text-orange">
                •
              </span>
            )}
          </span>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8">
        <Button asChild variant="primary" size="lg" className="group">
          <a href={TY_COM.website} target="_blank" rel="noopener noreferrer">
            {TY_COM.ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
