import type { Metadata } from "next";
import { Check, Megaphone, Users2, Handshake, Star } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ExhibitorForm } from "@/components/forms/ExhibitorForm";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EVENT, AUDIENCES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Exposants & Sponsors",
  description:
    "Devenez exposant ou sponsor des Journées de l'Entreposage Tchologo 2026 : stands, visibilité institutionnelle et rencontres B2B avec 200 coopératives et 1 500+ participants.",
  alternates: { canonical: `${EVENT.url}/exposants` },
};

const WHY_EXHIBIT = [
  { icon: Users2, title: "1 500+ participants qualifiés", text: "Producteurs, coopératives présélectionnées, acheteurs et institutions au même endroit." },
  { icon: Handshake, title: "Rencontres B2B ciblées", text: "Contractualisez sur stock certifié et signez des intentions de financement." },
  { icon: Megaphone, title: "Visibilité institutionnelle", text: "Associez votre marque à un événement soutenu par l'État et les filières agricoles." },
];

const TIERS = [
  {
    name: "Bronze",
    tagline: "Présence & networking",
    featured: false,
    perks: ["Stand 6 m²", "2 badges exposant", "Logo sur le site", "Accès aux rencontres B2B"],
  },
  {
    name: "Argent",
    tagline: "Visibilité renforcée",
    featured: true,
    perks: [
      "Stand 12 m² premium",
      "4 badges exposant",
      "Logo site + supports presse",
      "Intervention sur un panel",
      "Mise en relation prioritaire B2B",
    ],
  },
  {
    name: "Or",
    tagline: "Partenaire principal",
    featured: false,
    perks: [
      "Stand 24 m² emplacement clé",
      "8 badges exposant",
      "Logo sur toute la signalétique",
      "Keynote en cérémonie d'ouverture",
      "Citations presse & RSE dédiées",
    ],
  },
];

export default function ExposantsPage() {
  // Audience benefits relevant to exhibitors / sponsors.
  const sponsorAudiences = AUDIENCES.filter((a) => a.id !== "producteurs");

  return (
    <>
      <PageHeader
        breadcrumb="Exposants & Sponsors"
        eyebrow="Partenariat & visibilité"
        title="Associez votre marque à l'agriculture qui gagne"
        description="Stands, sponsoring et rencontres B2B qualifiées au cœur de la 1ère région productrice d'anacarde de Côte d'Ivoire."
      />

      {/* Why exhibit */}
      <section className="section bg-white">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><span className="size-1.5 rounded-full bg-orange" />Pourquoi exposer</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">Un retour sur investissement concret</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WHY_EXHIBIT.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="rounded-2xl border border-line bg-surface p-7 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-green text-white shadow-soft-green">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-extrabold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>

          {/* Per-profile benefits */}
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {sponsorAudiences.map((aud, i) => (
              <Reveal key={aud.id} delay={i * 0.08} className="rounded-2xl border border-line bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-green-50 text-green">
                    <aud.icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-ink">{aud.audience}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {aud.points.map((p) => (
                    <li key={p.title} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-green" strokeWidth={3} />
                      <span><strong className="text-ink">{p.title}.</strong> <span className="text-muted">{p.text}</span></span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor tiers */}
      <section className="section bg-surface">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><span className="size-1.5 rounded-full bg-orange" />Formules de sponsoring</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">Choisissez votre niveau d'engagement</h2>
            <p className="mt-3 text-muted">Formules indicatives — personnalisables selon vos objectifs.</p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 0.08}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-7 shadow-soft",
                  tier.featured ? "border-orange ring-2 ring-orange/20 lg:-translate-y-3" : "border-line"
                )}
              >
                {tier.featured && (
                  <Badge variant="orange" className="absolute -top-3 left-7">
                    <Star className="size-3.5" /> Le plus choisi
                  </Badge>
                )}
                <h3 className="font-heading text-2xl font-extrabold text-green">{tier.name}</h3>
                <p className="text-sm text-muted">{tier.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-green" strokeWidth={3} />
                      <span className="text-ink">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demande"
                  className={cn(
                    "mt-7 inline-flex h-12 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
                    tier.featured
                      ? "bg-orange text-white hover:bg-orange-hover"
                      : "border border-line text-ink hover:border-green hover:text-green"
                  )}
                >
                  Demander cette formule
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="demande" className="section scroll-mt-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="eyebrow"><span className="size-1.5 rounded-full bg-orange" />Demande de partenariat</span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Parlons de votre participation
              </h2>
              <p className="mt-3 text-muted">
                Remplissez le formulaire : notre équipe partenariats revient vers vous sous 48 h ouvrées avec une
                proposition adaptée.
              </p>
              <div className="mt-6 space-y-2 rounded-2xl border border-line bg-surface p-5 text-sm">
                <p className="font-semibold text-ink">Contact direct</p>
                <p className="text-muted">{EVENT.email}</p>
                <p className="text-muted">{EVENT.whatsapp} (WhatsApp)</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ExhibitorForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
