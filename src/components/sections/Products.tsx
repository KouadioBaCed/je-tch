"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PRODUCTS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Products() {
  return (
    <section className="section bg-white" aria-labelledby="products-title">
      <div className="container">
        <SectionHeading
          eyebrow="Filières agricoles du Tchologo"
          eyebrowClassName="text-base text-green sm:text-lg"
          eyebrowDotClassName="bg-green"
          title={<span id="products-title">Des produits stratégiques à forte valeur</span>}
          description="Anacarde, mangue, coton, maïs, karité, igname : autant de filières dont la valeur se joue dans le stockage."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <motion.article
              key={product.slug}
              variants={fadeUp}
              className="group relative h-72 overflow-hidden rounded-2xl border border-line shadow-soft sm:h-80"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Stat badge */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <span className="text-base" aria-hidden>{product.emoji}</span>
                <span className="text-sm font-extrabold text-white">{product.stat}</span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 bg-green-dark/85 p-6">
                <h3 className="font-heading text-2xl font-extrabold text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-white/85">{product.tagline}</p>
                <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  <p className="border-t border-white/20 pt-3 text-xs leading-relaxed text-white/75">
                    {product.statLabel}
                  </p>
                </div>
              </div>

              {/* Hover arrow */}
              <span className="absolute right-4 top-16 grid size-9 translate-y-2 place-items-center rounded-full bg-orange text-white opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
