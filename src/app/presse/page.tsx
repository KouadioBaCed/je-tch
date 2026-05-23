import type { Metadata } from "next";
import Image from "next/image";
import { Download, Mail, Phone, FileText } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { EVENT, PRESS_FACTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Espace presse",
  description:
    "Dossier de presse, chiffres clés et visuels officiels des Journées de l'Entreposage Tchologo 2026. Ressources à destination des journalistes et partenaires médias.",
  alternates: { canonical: `${EVENT.url}/presse` },
};

const ASSETS = [
  { src: "/presse/je-tch-appel-producteurs.jpg", title: "Affiche — Appel aux producteurs" },
  { src: "/presse/je-tch-contexte.jpg", title: "Affiche — Le contexte" },
  { src: "/presse/je-tch-pourquoi-participer.jpg", title: "Affiche — Pourquoi participer" },
  { src: "/presse/je-tch-objectifs.jpg", title: "Affiche — Objectifs & résultats" },
];

const PALETTE = [
  { name: "Vert principal", hex: "#1F6F4A" },
  { name: "Vert foncé", hex: "#124A30" },
  { name: "Vert clair", hex: "#4FAE5A" },
  { name: "Orange", hex: "#F58220" },
  { name: "Jaune accent", hex: "#F4C430" },
  { name: "Texte", hex: "#1E1E1E" },
];

export default function PressePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Presse"
        eyebrow="Espace presse & médias"
        title="Dossier de presse"
        description="Chiffres clés, messages essentiels et visuels officiels à télécharger pour vos publications."
      />

      {/* Key facts */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">En bref</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_FACTS.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.05} className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">{fact.label}</p>
                <p className="mt-2 font-heading text-lg font-bold text-ink">{fact.value}</p>
              </Reveal>
            ))}
          </div>

          {/* Boilerplate */}
          <Reveal className="mt-10 rounded-2xl border border-line surface-green p-8 text-white shadow-soft-green sm:p-10">
            <div className="flex items-center gap-2 text-gold">
              <FileText className="size-5" />
              <span className="text-xs font-bold uppercase tracking-[0.14em]">À propos de l'événement</span>
            </div>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-white/90">
              Les Journées de l'Entreposage Tchologo 2026 (JE-TCH) sont un événement institutionnel et agricole
              majeur de Côte d'Ivoire. Du 30 septembre au 3 octobre 2026, à Kong, Ouangolodougou et Ferkessédougou,
              l'événement vise à faire de l'entreposage un levier de richesse : réduire les pertes post-récolte
              (30 % de la production, soit 90 milliards FCFA par an), démocratiser le warrantage et connecter
              200 coopératives aux grands acheteurs et financeurs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visuals */}
      <section className="section bg-surface">
        <div className="container">
          <Reveal>
            <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">Visuels officiels</h2>
            <p className="mt-2 text-muted">Affiches de la campagne — libres d'utilisation dans un cadre éditorial relatif à l'événement.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ASSETS.map((asset, i) => (
              <Reveal key={asset.src} delay={i * 0.06} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <span className="text-sm font-semibold text-ink">{asset.title}</span>
                  <a
                    href={asset.src}
                    download
                    aria-label={`Télécharger ${asset.title}`}
                    className="grid size-9 shrink-0 place-items-center rounded-lg bg-green-50 text-green transition-colors hover:bg-green hover:text-white"
                  >
                    <Download className="size-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Palette + contact */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">Charte couleurs</h2>
            <p className="mt-2 text-muted">Les couleurs officielles de l'identité JE-TCH 2026.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PALETTE.map((c) => (
                <div key={c.hex} className="overflow-hidden rounded-xl border border-line bg-white shadow-soft">
                  <div className="h-16" style={{ backgroundColor: c.hex }} />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-ink">{c.name}</p>
                    <p className="font-mono text-xs uppercase text-muted">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">Contact presse</h2>
            <p className="mt-2 text-muted">Pour toute demande d'interview, d'accréditation ou d'information.</p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${EVENT.email}`} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-green/40">
                <span className="grid size-11 place-items-center rounded-full bg-green text-white"><Mail className="size-5" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">E-mail</p>
                  <p className="font-semibold text-ink">{EVENT.email}</p>
                </div>
              </a>
              <a href={EVENT.whatsappHref} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-green/40">
                <span className="grid size-11 place-items-center rounded-full bg-green text-white"><Phone className="size-5" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Téléphone / WhatsApp</p>
                  <p className="font-semibold text-ink">{EVENT.whatsapp}</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
