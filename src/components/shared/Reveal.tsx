"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps extends React.ComponentProps<typeof motion.div> {
  variants?: Variants;
  /** Stagger delay in seconds. */
  delay?: number;
  as?: "div" | "section" | "ul" | "li" | "span";
}

/**
 * Scroll-reveal wrapper. Animates once when it enters the viewport,
 * respects prefers-reduced-motion via the global CSS override.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
