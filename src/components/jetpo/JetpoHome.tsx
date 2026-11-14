import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, MessageCircle, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/shared/Countdown";

export const JETPO = {
  shortName: "JET-PO 2027",
  fullTitle: "JET-PO — Les Journées de l'Entreposage dans le Poro",
  theme: "Stocker mieux, innover, progresser",
  datesLabel: "28 - 30 OCT 2027",
  city: "Korhogo",
  startISO: "2027-10-28T08:00:00Z",
  commissioner: "M. TRAORÉ Isahq",
  phone: { label: "07 07 91 91 26", href: "tel:+2250707919126" },
  whatsapp: { label: "05 74 74 67 14", href: "https://wa.me/2250574746714" },
} as const;

const ALT =
  "JET-PO 2027 — Les Journées de l'Entreposage dans le Poro, Korhogo, 28 au 30 octobre 2027. Thème : Stocker mieux, innover, progresser.";

const CONTEXT = [
  { value: "1 040 000+", label: "habitants, dont 62% d'actifs agricoles" },
  { value: "350 000 t", label: "produites par an : coton, anacarde, mangue, riz, maïs, karité" },
  { value: "30 à 40%", label: "des récoltes perdues, soit ~120 000 t / an" },
  { value: "25 Mds FCFA", label: "perdus chaque année faute de stockage" },
  { value: "< 15 / 80", label: "entrepôts modernes existants pour un besoin de plus de 80" },
  { value: "600 km", label: "d'Abidjan, carrefour du corridor Abidjan - Bamako - Ouagadougou" },
];

const TARGETS = [
  {
    title: "Autorités et Institutions",
    text: "Ministère du Commerce, Ministère de l'Agriculture, Conseil Régional du Poro, Mairie de Korhogo, Chambre de Commerce et d'Industrie, Port Autonome d'Abidjan, Douanes, ANADER, OCPV, FIRCA.",
  },
  {
    title: "Acteurs économiques",
    text: "Producteurs et coopératives, transformateurs, commerçants, transporteurs, logisticiens, banques et microfinances, assurances, investisseurs, BTP, fournisseurs de matériel d'entreposage, startups AgriTech.",
  },
  {
    title: "Partenaires mobilisables",
    text: "CCIP, IPS-CGRAE, PETROCI, MHIGI, Groupe Carré d'Or, MULTIPACK, entreprises locales du Poro.",
  },
];

const OBJECTIVES = [
  "Mobiliser au moins 40 investisseurs et bailleurs pour le financement de 5 nouveaux entrepôts à Korhogo d'ici 2028",
  "Exposer et vulgariser 30 solutions et matériels modernes d'entreposage auprès de 1 000 visiteurs",
  "Former et sensibiliser 500 acteurs aux bonnes pratiques de stockage, de sécurité, de traçabilité et de gestion",
  "Organiser un Panel RSE de haut niveau pour engager les entreprises dans le développement local durable",
  "Faciliter 15 partenariats B2B entre coopératives du Poro et acheteurs / exportateurs",
  "Promouvoir le récépissé d'entreposage comme garantie bancaire pour l'accès au crédit",
];

const PROGRAM = [
  {
    day: "Jour 1",
    date: "Jeudi 28 octobre 2027",
    title: "Expositions matériels entreposage",
    items: [
      "Cérémonie d'ouverture officielle par les Autorités",
      "Grande Exposition : rayonnages, chariots élévateurs, palettes, containers, silos, chambres froides, logiciels de gestion de stock",
      "Démonstrations en direct et visites guidées d'entrepôts de Korhogo",
      "Rencontres B2B Exposants / Coopératives / Acheteurs",
    ],
  },
  {
    day: "Jour 2",
    date: "Vendredi 29 octobre 2027",
    title: "Panel RSE",
    items: [
      "Panel 1 : RSE et Entreposage — Comment les entreprises peuvent transformer le Poro ?",
      "Panel 2 : Financement, Récépissé d'entreposage, Accès au crédit pour les coopératives",
      "Panel 3 : Femmes, Jeunesse et Entrepreneuriat logistique",
      "Signature de protocoles d'accord et remise de distinctions aux entreprises citoyennes",
    ],
  },
  {
    day: "Jour 3",
    date: "Samedi 30 octobre 2027",
    title: "Informations, sensibilisation, bonnes pratiques",
    items: [
      "Ateliers pratiques : Comment bien stocker ? Hygiène, sécurité, lutte contre les ravageurs, traçabilité",
      "Sensibilisation grand public : sécurité alimentaire, réduction des pertes, tri et conservation",
      "Clôture officielle, Remise des Trophées JET-PO, Recommandations et Charte de Korhogo pour l'Entreposage",
    ],
  },
];

const RESULTS = [
  { value: "40% → 15%", label: "de pertes dans les zones couvertes en 2 ans" },
  { value: "5", label: "protocoles d'accord pour construire / exploiter des entrepôts" },
  { value: "500", label: "acteurs formés aux bonnes pratiques" },
  { value: "1 000", label: "visiteurs à l'exposition" },
  { value: "30", label: "exposants" },
  { value: "1 000", label: "emplois directs et indirects" },
  { value: "+30%", label: "de revenus pour les coopératives participantes" },
  { value: "1", label: "Charte de Korhogo pour l'Entreposage adoptée" },
];

const WHY = [
  { who: "Autorités", text: "Un projet d'impact direct, visible, mesurable, aligné sur le PND et la sécurité alimentaire." },
  { who: "Investisseurs", text: "Un marché sous-exploité, une demande réelle, un retour sécurisé par la production." },
  { who: "Entreprises (RSE)", text: "Une visibilité forte, un ancrage local, un engagement concret pour le Poro." },
  { who: "Producteurs", text: "Ne plus vendre à perte. Stocker pour vendre mieux, au meilleur prix." },
  { who: "Banques", text: "Un nouveau produit adossé à des stocks réels et tracés." },
];

function Heading({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className={`eyebrow text-base ${light ? "text-orange" : "text-green"}`}>
        <span className={`size-1.5 rounded-full ${light ? "bg-orange" : "bg-green"}`} />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-4xl ${light ? "text-white" : ""}`}>
        {title}
      </h2>
    </div>
  );
}

export function JetpoHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="bg-white">
          <div aria-hidden className="h-16 w-full lg:h-[4.5rem]" />
          <Image
            src="/hero/mobile_2027.png"
            alt={ALT}
            width={1024}
            height={1535}
            priority
            sizes="(min-width: 1024px) 1px, 100vw"
            className="mx-auto block h-auto w-full max-w-[560px] lg:hidden"
          />
          <Image
            src="/hero/web_2027.png"
            alt={ALT}
            width={1774}
            height={887}
            priority
            sizes="(max-width: 1023px) 1px, 100vw"
            className="mx-auto hidden h-auto w-full max-w-[2400px] lg:block"
          />
        </div>
        <div className="relative surface-green-dark">
          <div className="container relative flex flex-col items-center gap-9 py-12 text-center lg:py-14">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <a href={JETPO.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="size-5" />
                  Je participe
                </a>
              </Button>
              <Button asChild variant="outline-light" size="lg" className="w-full sm:w-auto">
                <Link href="/edition-2026">
                  <History className="size-5" />
                  Revoir l'édition 2026
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Korhogo · Ouverture dans
              </p>
              <Countdown target={JETPO.startISO} tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Contexte */}
      <section className="bg-surface section-tight" id="contexte">
        <div className="container">
          <Heading eyebrow="Pourquoi le Poro ? Pourquoi maintenant ?" title="Le Poro produit, mais ne stocke pas" />
          <p className="mx-auto -mt-4 mb-10 max-w-2xl text-pretty text-center text-muted">
            Le Poro est le grenier agricole du Nord et la porte logistique vers le Mali et le Burkina Faso.
            Sans entrepôts, pas de sécurité alimentaire, pas de valeur ajoutée, pas d'exportation compétitive.
            JET-PO vient combler ce vide.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTEXT.map((c) => (
              <div key={c.label} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <p className="text-3xl font-extrabold text-green">{c.value}</p>
                <p className="mt-2 text-sm text-muted">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="section-tight" id="objectifs">
        <div className="container">
          <Heading eyebrow="Objectif général" title="Faire du Poro un pôle régional d'excellence" />
          <p className="mx-auto -mt-4 mb-10 max-w-3xl text-pretty text-center text-muted">
            Faire de Korhogo et du Poro un pôle régional d'excellence en entreposage, logistique et
            transformation agricole, capable de réduire les pertes post-récolte, de sécuriser les revenus
            des producteurs et d'attirer les investissements structurants.
          </p>
          <ol className="grid gap-4 md:grid-cols-2">
            {OBJECTIVES.map((o, i) => (
              <li key={o} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-ink/90">{o}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programme */}
      <section className="relative surface-green-dark section-tight" id="programme">
        <div className="container">
          <Heading eyebrow="Programme détaillé" title="3 jours d'activités à Korhogo" light />
          <div className="grid gap-5 lg:grid-cols-3">
            {PROGRAM.map((d) => (
              <article key={d.day} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-orange">{d.day}</p>
                <p className="text-sm text-white/60">{d.date}</p>
                <h3 className="mt-3 text-xl font-bold">{d.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cibles */}
      <section className="section-tight" id="cibles">
        <div className="container">
          <Heading eyebrow="Qui ?" title="Les cibles de JET-PO" />
          <div className="grid gap-5 lg:grid-cols-3">
            {TARGETS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <h3 className="text-lg font-bold text-green">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-surface section-tight" id="resultats">
        <div className="container">
          <Heading eyebrow="Résultats attendus" title="Un impact mesurable pour le Poro" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line bg-white p-6 text-center">
                <p className="text-3xl font-extrabold text-orange">{r.value}</p>
                <p className="mt-2 text-sm text-muted">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi adhérer */}
      <section className="section-tight" id="adherer">
        <div className="container">
          <Heading eyebrow="Pourquoi adhérer maintenant ?" title="Chacun y gagne" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map((w) => (
              <div key={w.who} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-bold text-green">Pour les {w.who}</h3>
                <p className="mt-2 text-sm text-muted">{w.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-balance text-center text-xl font-extrabold">
            JET-PO, ce n'est pas un événement. C'est une infrastructure économique pour le Poro.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative surface-green-dark section-tight" id="inscription">
        <div className="container text-center text-white">
          <Image
            src="/presentation/traore_issa.jpeg"
            alt="M. TRAORÉ Isahq, Commissaire Général JET-PO"
            width={160}
            height={160}
            className="mx-auto mb-6 size-36 rounded-full border-4 border-orange object-cover object-top shadow-soft-lg sm:size-40"
          />
          <Heading eyebrow="Contact" title={`${JETPO.commissioner}, Commissaire Général JET-PO`} light />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <a href={JETPO.phone.href}>
                <Phone className="size-5" /> {JETPO.phone.label}
              </a>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <a href={JETPO.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> WhatsApp {JETPO.whatsapp.label}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
