/**
 * Source de vérité du contenu — JE-TCH 2026.
 * Tout le contenu institutionnel est centralisé ici pour rester maintenable
 * et réutilisable entre les pages (App Router) et les composants.
 */

import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Briefcase,
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Truck,
  Warehouse,
} from "lucide-react";

export const EVENT = {
  shortName: "JE-TCH 2026",
  name: "Les Journées de l'Entreposage Tchologo",
  year: 2026,
  fullTitle: "Les Journées de l'Entreposage Tchologo 2026",
  slogan: "Que chaque kilo produit = chaque kilo vendu au bon prix.",
  baseline: "Stocker mieux · Gagner plus · Bâtir l'avenir",
  datesLabel: "30 SEPT → 2 OCT 2026",
  /** ISO start used for the live countdown (Africa/Abidjan, UTC). */
  startISO: "2026-09-30T08:00:00Z",
  endISO: "2026-10-03T18:00:00Z",
  citiesLabel: "Kong · Ouangolodougou · Ferkessédougou",
  cities: ["Kong", "Ouangolodougou", "Ferkessédougou"],
  region: "Région du Tchologo",
  country: "Côte d'Ivoire",
  entry: "Entrée gratuite pour les producteurs",
  whatsapp: "+225 00 00 00 00",
  whatsappHref: "https://wa.me/2250000000000",
  email: "contact@je-tch2026.ci",
  url: "https://je-tch2026.ci",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/exposants", label: "Exposants & Sponsors" },
  { href: "/presse", label: "Presse" },
  { href: "/faq", label: "FAQ" },
] as const;

/* -------------------------------------------------------------------------- */
/* Statistiques clés                                                          */
/* -------------------------------------------------------------------------- */

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
}

export const STATS: Stat[] = [
  {
    value: 300000,
    suffix: " t",
    label: "de production par an",
    sublabel: "1ère région productrice d'anacarde de Côte d'Ivoire",
    icon: Sprout,
  },
  {
    value: 30,
    suffix: " %",
    label: "de pertes post-récolte",
    sublabel: "chaque année, faute de stockage adapté",
    icon: TrendingUp,
  },
  {
    value: 90,
    suffix: " Mds",
    prefix: "",
    label: "FCFA perdus / an",
    sublabel: "valeur détruite pour les producteurs et l'économie locale",
    icon: Banknote,
  },
  {
    value: 1500,
    suffix: "+",
    label: "participants attendus",
    sublabel: "producteurs, coopératives, acheteurs et institutions",
    icon: Handshake,
  },
];

/* -------------------------------------------------------------------------- */
/* Pourquoi participer — par profil                                           */
/* -------------------------------------------------------------------------- */

export interface AudienceBenefit {
  id: string;
  audience: string;
  icon: LucideIcon;
  accent: "green" | "orange" | "gold";
  points: { title: string; text: string }[];
}

export const AUDIENCES: AudienceBenefit[] = [
  {
    id: "producteurs",
    audience: "Producteurs & Coopératives",
    icon: Sprout,
    accent: "green",
    points: [
      {
        title: "Vendez plus cher",
        text: "Rencontrez le Groupe Carré d'Or et d'autres acheteurs qui paient cash vos stocks certifiés.",
      },
      {
        title: "Obtenez un crédit",
        text: "Les banques viennent prospecter et financer vos stocks via le warrantage. Votre stock = votre garantie.",
      },
      {
        title: "Ne perdez plus",
        text: "Apprenez gratuitement à stocker 12 mois sans insectes ni moisissures.",
      },
      {
        title: "Équipez-vous",
        text: "Découvrez bâches, palettes, séchoirs et capteurs à prix salon.",
      },
    ],
  },
  {
    id: "acheteurs",
    audience: "Acheteurs & Transformateurs",
    icon: PackageCheck,
    accent: "orange",
    points: [
      {
        title: "Sécurisez vos appros",
        text: "Contractualisez sur stock certifié avec 200 coopératives présélectionnées.",
      },
      {
        title: "Réduisez vos coûts",
        text: "Achetez bord-champ un stock déjà trié, séché et certifié.",
      },
      {
        title: "Impact RSE",
        text: "Associez votre marque à la réduction des pertes et à la hausse des revenus paysans.",
      },
    ],
  },
  {
    id: "banques",
    audience: "Banques & Assureurs",
    icon: ShieldCheck,
    accent: "green",
    points: [
      {
        title: "Nouveau marché",
        text: "Le warrantage sur anacarde et mangue est le crédit le moins risqué.",
      },
      {
        title: "Clients qualifiés",
        text: "Des coopératives présélectionnées, avec volumes et historique.",
      },
      {
        title: "Visibilité",
        text: "Devenez la banque de référence de la filière dans le Nord.",
      },
    ],
  },
  {
    id: "institutions",
    audience: "Élus & Institutions",
    icon: Landmark,
    accent: "gold",
    points: [
      {
        title: "Emploi local",
        text: "1 entrepôt certifié = 5 emplois directs dans votre commune.",
      },
      {
        title: "Recettes fiscales",
        text: "Plus de stock = plus de transactions traçables.",
      },
      {
        title: "Leadership",
        text: "Positionnez votre territoire comme hub logistique du corridor Abidjan – Bamako – Ouaga.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Les 4 solutions en 1 jour                                                  */
/* -------------------------------------------------------------------------- */

export interface Solution {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const SOLUTIONS: Solution[] = [
  {
    number: "01",
    title: "Vends plus cher",
    text: "Les grands acheteurs signent des contrats pour acheter ton stock certifié. Cash.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Obtiens un crédit",
    text: "Les banques financent ton stock avec le warrantage. Ton stock = ta garantie.",
    icon: Banknote,
  },
  {
    number: "03",
    title: "Apprends à stocker",
    text: "Formation gratuite : garde anacarde, mangue et maïs 12 mois sans pertes.",
    icon: Warehouse,
  },
  {
    number: "04",
    title: "Équipe-toi moins cher",
    text: "Bâches, palettes, séchoirs, capteurs à prix salon. Démonstrations en direct.",
    icon: PackageCheck,
  },
];

/* -------------------------------------------------------------------------- */
/* Objectifs spécifiques                                                      */
/* -------------------------------------------------------------------------- */

export const OBJECTIVE_GENERAL =
  "Faire de l'entreposage un levier de création de richesse et de compétitivité pour les filières agricoles du Tchologo, en réduisant les pertes post-récolte et en sécurisant les revenus des producteurs.";

export interface Objective {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const OBJECTIVES: Objective[] = [
  {
    title: "Infrastructures",
    text: "Vulgariser les normes et modèles d'entrepôts adaptés au climat du Nord pour anacarde, mangue, coton.",
    icon: Warehouse,
  },
  {
    title: "Financement",
    text: "Démocratiser le warrantage et connecter les coopératives aux banques et aux assureurs.",
    icon: Banknote,
  },
  {
    title: "Marché",
    text: "Organiser la rencontre directe entre 200 coopératives et les grands acheteurs pour contractualiser sur stock certifié.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    text: "Présenter les solutions digitales de traçabilité, de gestion des stocks et d'accès au marché.",
    icon: Cpu,
  },
  {
    title: "Gouvernance",
    text: "Mettre en place un cadre de concertation État – secteur privé – producteurs pour pérenniser les acquis.",
    icon: Landmark,
  },
];

/* -------------------------------------------------------------------------- */
/* Résultats attendus                                                         */
/* -------------------------------------------------------------------------- */

export interface ExpectedResult {
  label: string;
}

export const EXPECTED_RESULTS: ExpectedResult[] = [
  { label: "Des producteurs seront formés aux bonnes pratiques de stockage sans perte" },
  { label: "Des intentions de financement seront signées entre banques et coopératives via warrantage" },
  { label: "Des contrats d'achat seront engagés entre acheteurs et organisations de producteurs" },
  { label: "Des modèles d'entrepôts seront validés et diffusés pour réplication dans la région" },
  { label: "La feuille de route Tchologo 2026-2028 sera adoptée pour la modernisation du stockage" },
];

/* -------------------------------------------------------------------------- */
/* Produits agricoles                                                         */
/* -------------------------------------------------------------------------- */

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  image: string;
  emoji: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "anacarde",
    name: "Anacarde",
    tagline: "Le moteur économique du Nord ivoirien.",
    stat: "1ère",
    statLabel: "région productrice de Côte d'Ivoire",
    image: "/images/prod-anacarde.jpg",
    emoji: "🌰",
  },
  {
    slug: "mangue",
    name: "Mangue",
    tagline: "Une filière à fort potentiel export.",
    stat: "+12%",
    statLabel: "de croissance annuelle des volumes",
    image: "/images/prod-mangue.jpg",
    emoji: "🥭",
  },
  {
    slug: "coton",
    name: "Coton",
    tagline: "Pilier industriel de la région.",
    stat: "Or blanc",
    statLabel: "structurant l'économie agricole du Tchologo",
    image: "/images/prod-coton.jpg",
    emoji: "🌱",
  },
  {
    slug: "mais",
    name: "Maïs",
    tagline: "Sécurité alimentaire et stockage longue durée.",
    stat: "12 mois",
    statLabel: "de conservation avec un stockage adapté",
    image: "/images/prod-mais.jpg",
    emoji: "🌽",
  },
  {
    slug: "karite",
    name: "Karité",
    tagline: "L'or des femmes, à forte valeur ajoutée.",
    stat: "RSE",
    statLabel: "filière inclusive portée par les coopératives féminines",
    image: "/images/prod-karite.jpg",
    emoji: "🧈",
  },
  {
    slug: "igname",
    name: "Igname",
    tagline: "Culture vivrière stratégique.",
    stat: "Vivrier",
    statLabel: "clé pour la souveraineté alimentaire régionale",
    image: "/images/prod-igname.jpg",
    emoji: "🍠",
  },
];

/* -------------------------------------------------------------------------- */
/* Programme — 3 jours                                                        */
/* -------------------------------------------------------------------------- */

export interface ProgramSlot {
  time: string;
  title: string;
  desc: string;
  tag: "Officiel" | "Panel" | "Atelier" | "B2B" | "Terrain" | "Networking";
}

export interface ProgramDay {
  id: string;
  dayLabel: string;
  date: string;
  city: string;
  theme: string;
  slots: ProgramSlot[];
}

export const PROGRAM: ProgramDay[] = [
  {
    id: "jour-1",
    dayLabel: "Jour 1",
    date: "Mer. 30 sept. 2026",
    city: "Kong",
    theme: "Ouverture & enjeux du stockage",
    slots: [
      { time: "08:30", title: "Accueil & enregistrement", desc: "Remise des badges, café d'accueil et orientation des délégations.", tag: "Networking" },
      { time: "10:00", title: "Cérémonie d'ouverture officielle", desc: "Allocutions des autorités, du Conseil Coton-Anacarde et des partenaires institutionnels.", tag: "Officiel" },
      { time: "11:30", title: "Panel — Le constat : 90 milliards FCFA perdus", desc: "État des lieux des pertes post-récolte et de l'enjeu économique régional.", tag: "Panel" },
      { time: "14:30", title: "Atelier — Normes & modèles d'entrepôts", desc: "Présentation des modèles adaptés au climat du Nord.", tag: "Atelier" },
      { time: "16:30", title: "Cocktail de networking", desc: "Rencontres informelles entre coopératives, acheteurs et institutions.", tag: "Networking" },
    ],
  },
  {
    id: "jour-2",
    dayLabel: "Jour 2",
    date: "Jeu. 1 oct. 2026",
    city: "Ouangolodougou",
    theme: "Financement, marché & B2B",
    slots: [
      { time: "09:00", title: "Panel — Démocratiser le warrantage", desc: "Banques et assureurs : comment financer le stock des coopératives.", tag: "Panel" },
      { time: "10:30", title: "Rencontres B2B — Acheteurs & coopératives", desc: "Sessions de contractualisation sur stock certifié.", tag: "B2B" },
      { time: "14:00", title: "Atelier — Traçabilité & solutions digitales", desc: "Outils de gestion des stocks et d'accès au marché.", tag: "Atelier" },
      { time: "16:00", title: "Salon des équipements", desc: "Bâches, palettes, séchoirs, capteurs — démonstrations en direct.", tag: "Terrain" },
    ],
  },
  {
    id: "jour-3",
    dayLabel: "Jour 3",
    date: "Ven. 3 oct. 2026",
    city: "Ferkessédougou",
    theme: "Terrain, gouvernance & feuille de route",
    slots: [
      { time: "09:00", title: "Visite d'entrepôts modèles", desc: "Démonstration terrain des bonnes pratiques de conservation.", tag: "Terrain" },
      { time: "11:00", title: "Cadre de concertation État – secteur privé", desc: "Adoption de la feuille de route Tchologo 2026-2028.", tag: "Officiel" },
      { time: "14:30", title: "Signature des engagements", desc: "Contrats d'achat et intentions de financement officialisés.", tag: "B2B" },
      { time: "16:00", title: "Clôture & restitution", desc: "Synthèse des résultats des trois journées.", tag: "Officiel" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Organisateurs & partenaires                                                */
/* -------------------------------------------------------------------------- */

export interface Person {
  name: string;
  role: string;
}

export const ORGANIZERS: Person[] = [
  { name: "M. TRAORÉ Isahq", role: "Commissaire Général" },
  { name: "M. OUATTARA Mamadou", role: "Comité Scientifique" },
];

/* -------------------------------------------------------------------------- */
/* Comité d'honneur & soutien institutionnel                                  */
/* -------------------------------------------------------------------------- */

export interface Dignitary {
  name: string;
  role: string;
  /** Chemin local sous /public — photo officielle. */
  image: string;
  /** Mise en avant héroïque (personnalité principale). */
  featured?: boolean;
  /** Phrase institutionnelle courte (carte principale / comité). */
  statement?: string;
  /** Icône de fonction (comité). */
  icon?: LucideIcon;
  /** Sceau institutionnel associé (chemin local sous /public). */
  logo?: string;
  /** Texte alternatif / infobulle du sceau institutionnel. */
  logoAlt?: string;
}

/** Personnalités institutionnelles — la première (featured) est mise en avant. */
export const DIGNITARIES: Dignitary[] = [
  {
    name: "Téné Birahima Ouattara",
    role: "Vice-Premier Ministre · Président du Conseil Régional du Tchologo",
    image: "/presentation/premier_ministre.jpg",
    featured: true,
    statement:
      "Sous son impulsion, le Tchologo fait de la modernisation de l'entreposage agricole une priorité de développement régional et national.",
    logo: "/logo/tchologo.jpeg",
    logoAlt: "Armoiries officielles de la Région du Tchologo",
  },
  {
    name: "M.Abdramane Berté",
    role: "Maire de la Commune de Kong",
    image: "/presentation/abdramane_berte.jpg",
  },
  {
    name: "M.Moussa Toungara",
    role: "Maire de la Commune de Ouangolodougou",
    image: "/presentation/moussa_toungara.jpeg",
  },
  {
    name: "M.Kaweli Ouattara",
    role: "Maire de la Commune de Ferkessédougou",
    image: "/presentation/keweli_ouattara.jpg",
  },
  {
    name: "M.Alassane Ouattara",
    role: "Maire de la Commune de Nielle",
    image: "/presentation/alassane.jpeg",
  },
  {
    name: "M.Mamadou Ouattara",
    role: "Maire de la Commune de Diawala",
    image: "/presentation/mamadou_ouat.jpeg",
  },
  {
    name: "Pr. Koffi Justin",
    role: "Directeur Général de l'ARRE-CI",
    image: "/presentation/pr_koffi.jpeg",
    logo: "/logo/arre_ci.jpeg",
    logoAlt: "Logo officiel de l'ARRE-CI",
  },
];

/** Numéro deux institutionnel — mis en avant juste sous la personnalité principale. */
export const SECONDARY_DIGNITARY: Dignitary = {
  name: "Sénateur Traoré Bamoudien",
  role: "Vice-Président du Conseil Régional du Tchologo",
  image: "/presentation/senateur.jpeg",
};

/** Commissariat Général & Comité Scientifique. */
export const COMMITTEE: Dignitary[] = [
  {
    // Moussa Toungara figure aussi dans DIGNITARIES (Maire de Ouangolodougou) ;
    // il est volontairement dupliqué ici avec une fonction d'organisation.
    name: "Moussa Toungara",
    role: "Chargé des relations avec les cadres du Tchologo",
    image: "/presentation/moussa_toungara.jpeg",
    icon: Handshake,
    statement:
      "Mobilise et fédère les cadres et les forces vives du Tchologo autour de l'événement.",
  },
  {
    name: "Traoré Isahq Touramann",
    role: "Commissaire Général",
    image: "/presentation/traore_issa.jpeg",
    icon: Briefcase,
    statement:
      "Pilote l'organisation générale et la coordination institutionnelle des trois journées.",
  },
  {
    name: "Mamadou Ouattara HK",
    role: "Président du Comité Scientifique",
    image: "/presentation/mamadou_ouattara.jpeg",
    icon: GraduationCap,
    statement:
      "Garantit la rigueur des contenus, des panels et des recommandations techniques de l'événement.",
  },
];

export interface PartnerCategory {
  label: string;
  icon: LucideIcon;
  examples: string[];
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  { label: "Acheteurs", icon: PackageCheck, examples: ["Groupe Carré d'Or", "Transformateurs", "Exportateurs"] },
  { label: "Banques", icon: Banknote, examples: ["Banques commerciales", "Institutions de microfinance"] },
  { label: "Assureurs", icon: ShieldCheck, examples: ["Assurance récolte", "Assurance stock"] },
  { label: "Fournisseurs matériel", icon: Truck, examples: ["Séchoirs", "Bâches & palettes", "Capteurs"] },
  { label: "Ministère de l'Agriculture", icon: Landmark, examples: ["Tutelle institutionnelle"] },
  { label: "Conseil Coton-Anacarde", icon: Leaf, examples: ["Régulateur de filière"] },
];

/* -------------------------------------------------------------------------- */
/* Région du Tchologo                                                         */
/* -------------------------------------------------------------------------- */

export const REGION_HIGHLIGHTS = [
  { icon: Sprout, title: "1ère région anacarde", text: "Plus de 300 000 tonnes produites chaque année." },
  { icon: Truck, title: "Corridor stratégique", text: "Hub logistique sur l'axe Abidjan – Bamako – Ouagadougou." },
  { icon: Building2, title: "Trois pôles urbains", text: "Kong, Ouangolodougou et Ferkessédougou." },
  { icon: Leaf, title: "Filières diversifiées", text: "Anacarde, mangue, coton, maïs, karité, igname." },
];

export const REGION_CAUSES = [
  "Entrepôts inadéquats",
  "Manque de financement sur stock",
  "Faible maîtrise des normes qualité",
  "Absence de lien direct avec les acheteurs",
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "L'inscription est-elle vraiment gratuite ?",
    a: "Oui. L'entrée est totalement gratuite pour tous les producteurs et coopératives. Vous repartez avec une formation, des contacts d'acheteurs et un modèle d'entrepôt — même si vous ne signez aucun contrat.",
  },
  {
    q: "Quand et où se déroulent les Journées ?",
    a: "Du 30 septembre au 3 octobre 2026, dans la région du Tchologo, sur trois villes : Kong, Ouangolodougou et Ferkessédougou.",
  },
  {
    q: "Qui peut participer ?",
    a: "Les producteurs et coopératives, les acheteurs et transformateurs, les banques et assureurs, les fournisseurs de matériel, ainsi que les élus et institutions.",
  },
  {
    q: "Qu'est-ce que le warrantage ?",
    a: "C'est un crédit garanti par votre stock : vous entreposez votre production certifiée, et la banque vous prête de l'argent en attendant de vendre au meilleur prix. Votre stock devient votre garantie.",
  },
  {
    q: "Comment inscrire ma coopérative ?",
    a: `Remplissez le formulaire « Producteurs / Coopératives » sur ce site, ou écrivez-nous sur WhatsApp au ${EVENT.whatsapp} avec : « JE-TCH2026 + Nom de la coopérative + Village + Tonnage ».`,
  },
  {
    q: "Je suis acheteur ou banque : comment exposer ?",
    a: "Rendez-vous sur la page « Exposants & Sponsors » et remplissez le formulaire dédié. Notre équipe vous recontacte avec les formules de stand et de partenariat.",
  },
  {
    q: "Quels produits sont concernés ?",
    a: "Principalement l'anacarde, la mangue et le coton, ainsi que le maïs, le karité et l'igname.",
  },
  {
    q: "Que vais-je apprendre concrètement ?",
    a: "Comment conserver anacarde, mangue et maïs jusqu'à 12 mois sans insectes ni moisissures, comment accéder au financement, et comment vendre votre stock certifié au bon prix.",
  },
];

/* -------------------------------------------------------------------------- */
/* Presse                                                                     */
/* -------------------------------------------------------------------------- */

export const PRESS_FACTS = [
  { label: "Édition", value: "1ère édition — 2026" },
  { label: "Dates", value: "30 sept. → 3 oct. 2026" },
  { label: "Lieu", value: "Kong · Ouangolodougou · Ferkessédougou" },
  { label: "Participants attendus", value: "1 500+" },
  { label: "Filières", value: "Anacarde, mangue, coton, maïs, karité, igname" },
  { label: "Enjeu", value: "90 milliards FCFA de pertes évitables / an" },
];
