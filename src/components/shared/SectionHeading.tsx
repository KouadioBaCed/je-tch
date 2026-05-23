"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.12)}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
            isDark
              ? "border-white/25 bg-white/10 text-white"
              : "border-line bg-white text-green"
          )}
        >
          <span className={cn("size-1.5 rounded-full", isDark ? "bg-gold" : "bg-orange")} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/75" : "text-muted"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
