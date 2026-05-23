"use client";

import { motion } from "framer-motion";
import { Gift, MessageCircle, BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProducerForm } from "@/components/forms/ProducerForm";
import { SOLUTIONS, EVENT } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function RegistrationCTA() {
  return (
    <section id="inscription" className="relative scroll-mt-20 bg-white section" aria-labelledby="register-title">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — pitch */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="size-1.5 rounded-full bg-orange" />
              Inscription gratuite
            </motion.span>
            <motion.h2
              id="register-title"
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Inscris ta coopérative maintenant
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-pretty text-muted">
              Tu repars avec une <strong className="text-ink">formation</strong>, des{" "}
              <strong className="text-ink">contacts d'acheteurs</strong> et un{" "}
              <strong className="text-ink">modèle d'entrepôt</strong> — même si tu ne signes pas.
            </motion.p>

            {/* 4 solutions */}
            <motion.ul variants={staggerContainer(0.08)} className="mt-7 grid gap-3 sm:grid-cols-2">
              {SOLUTIONS.map((s) => (
                <motion.li
                  key={s.number}
                  variants={fadeUp}
                  className="flex gap-3 rounded-xl border border-line bg-surface p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-green text-white">
                    <s.icon className="size-[1.05rem]" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-ink">{s.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* WhatsApp + perks */}
            <motion.div variants={fadeUp} className="mt-7 space-y-3">
              <a
                href={EVENT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-green/30 bg-green-50 p-4 transition-colors hover:bg-green-100"
              >
                <span className="grid size-11 place-items-center rounded-full bg-green text-white">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-green">Inscription express sur WhatsApp</p>
                  <p className="text-xs text-muted">« JE-TCH2026 + Nom coopérative + Village + Tonnage »</p>
                </div>
              </a>
              <div className="flex flex-wrap gap-2">
                <Perk icon={Gift} text="Entrée gratuite" />
                <Perk icon={BadgeCheck} text="Formation incluse" />
                <Perk icon={BadgeCheck} text="Contacts acheteurs" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <ProducerForm />
            <p className="mt-5 text-center text-sm text-muted">
              Vous êtes acheteur, banque ou fournisseur ?{" "}
              <Link href="/exposants" className="inline-flex items-center gap-1 font-semibold text-green hover:underline">
                Espace exposants & sponsors
                <ArrowRight className="size-4" />
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Perk({ icon: Icon, text }: { icon: typeof Gift; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3 py-1.5 text-xs font-semibold text-orange-hover">
      <Icon className="size-3.5" />
      {text}
    </span>
  );
}
