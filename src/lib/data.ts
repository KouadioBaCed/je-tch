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
  Car,
  Code,
  Cpu,
  Eye,
  Globe,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  Lightbulb,
  Megaphone,
  Package,
  PackageCheck,
  PenTool,
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
  datesLabel: "18 - 20 OCT 2026",
  /** ISO start used for the live countdown (Africa/Abidjan, UTC). */
  startISO: "2026-10-18T08:00:00Z",
  endISO: "2026-10-20T18:00:00Z",
  citiesLabel: "Kong · Ouangolodougou · Ferkessédougou",
  cities: ["Kong", "Ouangolodougou", "Ferkessédougou"],
  region: "Région du Tchologo",
  country: "Côte d'Ivoire",
  entry: "Entrée gratuite pour les producteurs",
  whatsapp: "+225 05 74 74 67 14",
  whatsappHref: "https://wa.me/2250574746714",
  phones: [
    { label: "+225 07 09 59 03 27", href: "tel:+2250709590327" },
    { label: "+225 07 07 91 91 26", href: "tel:+2250707919126" },
  ],
  email: "contact@je-tch2026.ci",
  url: "https://je-tch2026.ci",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/evenements", label: "Évènements" },
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
    value: 180000,
    suffix: " t",
    label: "de production par an",
    sublabel: "6ème rang des régions productrices d'anacarde de Côte d'Ivoire",
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
        text: "Achetez auprès d'entrepôts certifiés des produits bien stockés, déjà triés, bien séchés.",
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
        text: "Le warrantage sur la noix d'anacarde et les autres produits à forte valeur marchande, est le crédit le moins risqué.",
      },
      {
        title: "Clients qualifiés",
        text: "Des coopératives présélectionnées, avec volumes et historique.",
      },
      {
        title: "Visibilité",
        text: "Devenez la banque de référence des filières agricoles dans le Nord.",
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
        text: "1 entrepôt certifié = emplois directs, y compris pour les jeunes et les femmes, dans votre commune.",
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
  title: string;
  detail?: string;
}

export interface ProgramDay {
  id: string;
  dayLabel: string;
  date: string;
  city: string;
  theme: string;
  slots: ProgramSlot[];
}

/** Activités communes à chaque journée (Kong, Ouangolodougou, Ferkessédougou). */
const COMMON_ACTIVITIES: ProgramSlot[] = [
  { title: "Cérémonie d'ouverture", detail: "Allocutions & prestation culturelle" },
  { title: "Présentation des produits du terroir" },
  { title: "Atelier de sensibilisation et formation / Panel thématique" },
];

export const PROGRAM: ProgramDay[] = [
  {
    id: "jour-1",
    dayLabel: "Jour 1",
    date: "Dim. 18 oct. 2026",
    city: "Kong",
    theme: "Ouverture & enjeux du stockage",
    slots: [...COMMON_ACTIVITIES],
  },
  {
    id: "jour-2",
    dayLabel: "Jour 2",
    date: "Lun. 19 oct. 2026",
    city: "Ouangolodougou",
    theme: "Financement, marché & B2B",
    slots: [...COMMON_ACTIVITIES],
  },
  {
    id: "jour-3",
    dayLabel: "Jour 3",
    date: "Mar. 20 oct. 2026",
    city: "Ferkessédougou",
    theme: "Terrain, gouvernance & feuille de route",
    slots: [
      ...COMMON_ACTIVITIES,
      { title: "Adoption de la feuille de route" },
      { title: "Cérémonie de clôture", detail: "Allocutions & prestation culturelle" },
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
  /** Sigle/titre affiché sous le logo (comme le nom à droite). */
  logoTitle?: string;
  /** Légende affichée sous le logo (texte porté par le logo). */
  logoCaption?: string;
  /** Cadrage du portrait dans les vignettes carrées (défaut : centre). */
  imagePosition?: "top" | "center" | "bottom";
}

/** Personnalités institutionnelles — la première (featured) est mise en avant. */
export const DIGNITARIES: Dignitary[] = [
  {
    name: "Téné Birahima Ouattara",
    role: "Vice-Premier Ministre · Président du Conseil Régional du Tchologo",
    image: "/presentation/premier_ministre.png",
    featured: true,
    statement:
      "Sous son impulsion, le Tchologo fait de la modernisation de l'entreposage agricole une priorité de développement régional et national.",
    logo: "/logo/tchologo.jpeg",
    logoAlt: "Armoiries officielles de la Région du Tchologo",
  },
  {
    name: "M. Abdramane BERTE",
    role: "Maire de Kong\nDirecteur Général de la CGRAE",
    image: "/presentation/abdramane_berte.png",
  },
  {
    name: "M.Moussa Toungara",
    role: "Maire de la Commune de Ouangolodougou",
    image: "/presentation/moussa_toungara.png",
  },
  {
    name: "M.Kaweli Ouattara",
    role: "Maire de la Commune de Ferkessédougou",
    image: "/presentation/keweli_ouattara.png",
  },
  {
    name: "M.Alassane Ouattara",
    role: "Maire de la Commune de Nielle",
    image: "/presentation/alassane.jpeg",
  },
  {
    name: "M.Mamadou Ouattara",
    role: "Maire de la Commune de Diawala",
    image: "/presentation/mamadou_ouat.png",
  },
  {
    name: "M.Teneyoumon Coulibaly",
    role: "Maire de la Commune de Koumbala",
    image: "/presentation/teneyoumon_coulibaly.png",
  },
];

/** Parrain mis en avant juste sous la personnalité principale. */
export const SECONDARY_MINISTER: Dignitary = {
  name: "M. Abdramane BERTE",
  role: "Maire de Kong\nDirecteur Général de la CGRAE",
  image: "/presentation/abdramane_berte.png",
};

/** Numéro deux institutionnel — mis en avant juste sous la personnalité principale. */
export const SECONDARY_DIGNITARY: Dignitary = {
  name: "Sénateur Traoré Bamoudien",
  role: "Vice-Président du Conseil Régional du Tchologo",
  image: "/presentation/senateur.png",
};

/** Partenaires & accompagnement technique. */
export const PARTNERS: Dignitary[] = [
  {
    name: "Pr. Koffi Justin",
    role: "Directeur Général de l'Autorité de Régulation du Système de Récépissés d'Entreposage de la Côte d'Ivoire (A.R.R.E-CI)",
    image: "/presentation/pr_koffi.jpeg",
    logo: "/logo/arre_ci.jpeg",
    logoAlt: "Logo officiel de l'A.R.R.E-CI",
    logoTitle: "ARRE-CI",
    logoCaption: "Autorité de Régulation du Système de Récépissés d'Entreposage",
  },
];

/** Commissariat Général & Comité Scientifique. */
export const COMMITTEE: Dignitary[] = [
  {
    // Moussa Toungara figure aussi dans DIGNITARIES (Maire de Ouangolodougou) ;
    // il est volontairement dupliqué ici avec une fonction d'organisation.
    name: "Moussa Toungara",
    role: "Chargé des relations avec les cadres du Tchologo",
    image: "/presentation/moussa_toungara.png",
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
    name: "M. Issam EZZEDINE",
    role: "Commissaire Général adjoint",
    image: "/presentation/ezzedine.jpeg",
    icon: Briefcase,
  },
  {
    name: "Mamadou Ouattara HK",
    role: "Président du Comité Scientifique",
    image: "/presentation/mamadou_ouattara.jpeg",
    icon: GraduationCap,
    statement:
      "Garantit la rigueur des contenus, des panels et des recommandations techniques de l'événement.",
  },
  {
    name: "M. KONE Aboubakar",
    role: "Vice-Président du Comité Scientifique",
    image: "/presentation/kone_aboubakar.png",
    icon: Sprout,
    statement: "Agronome, consultant international FAO (ONU).",
  },
  {
    name: "M. MOHAMED Ben Moulaye",
    role: "Télécom & Transformation Digitale",
    image: "/presentation/mohamed_ben.jpg",
    icon: Cpu,
  },
  {
    name: "M. HEIN Mikel",
    role: "Ingénierie des ouvrages",
    image: "/presentation/hein_mikel.jpg",
    icon: Building2,
  },
  {
    name: "Mme BORGES Filomena Lopes",
    role: "Relations Pays Lusophones",
    image: "/presentation/borges_filomena.png",
    icon: Globe,
  },
  {
    name: "Mme OUATTARA Awa",
    role: "Relations Institutionnelles",
    image: "/presentation/ouattara_awa.png",
    icon: Landmark,
  },
  {
    name: "Mamadou Traoré",
    role: "Direction Communication",
    image: "/presentation/mamadou_traore.jpeg",
    icon: Megaphone,
  },
  {
    name: "Madame Nanan TRAORÉ ",
    role: "Chargé des Finances",
    image: "/presentation/ousmane_sidiane.jpeg",
    imagePosition: "top",
    icon: Banknote,
  },
  {
    name: "Addy Touré",
    role: "Direction Logistique",
    image: "/presentation/addy_toure.png",
    icon: Truck,
  },
  {
    name: "Keita Badra Ali",
    role: "",
    image: "/presentation/keita_badra_ali.jpeg",
  },
  {
    name: "Mme Juslène DURREL",
    role: "Chargée des Relations Sous-Régionales",
    image: "/presentation/juslene_durrel.jpeg",
    icon: Globe,
  },
  {
    name: "M. Cédric Kouadio",
    role: "Développeur & Data Scientist du Commissaire Général",
    image: "/presentation/cedric.jpeg",
    imagePosition: "top",
    icon: Code,
    statement:
      "Conçoit et développe la plateforme digitale officielle de JE-TCH 2026, du site web à la valorisation des données de l'événement.",
  },
];

/** Comité de pilotage. */
export const STEERING_COMMITTEE: Dignitary[] = [
  {
    name: "Moussa Toungara",
    role: "Maire de Ouangolodougou · Président du Comité de Pilotage",
    image: "/presentation/moussa_toungara.png",
    icon: Landmark,
  },
  {
    name: "Pr. Koffi Justin",
    role: "",
    image: "/presentation/pr_koffi.jpeg",
  },
  {
    name: "Adonis HOUANGO",
    role: "",
    image: "/presentation/adonis_image.png",
  },
  {
    name: "Traoré Isahq Touramann",
    role: "",
    image: "/presentation/traore_issa.jpeg",
  },
  {
    name: "Mamadou Ouattara HK",
    role: "",
    image: "/presentation/mamadou_ouattara.jpeg",
  },
  {
    name: "M. KONE Aboubakar",
    role: "",
    image: "/presentation/kone_aboubakar.png",
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

export interface PartnerLogo {
  /** Chemin local sous /public. */
  src: string;
  /** Nom lisible — sert au texte alternatif (accessibilité). */
  name: string;
}

/**
 * Mur des partenaires & sponsors. L'ORDRE D'AFFICHAGE = l'ordre de ce tableau ;
 * pour réordonner, il suffit de déplacer une ligne.
 * Regroupés : ministères → institutionnel/financier → médias → entreprises.
 */
export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/partenaires/minister_one.jpg", name: "Ministère partenaire" },
  { src: "/partenaires/minister_two.jpg", name: "Ministère partenaire" },
  { src: "/partenaires/minister_three.jpg", name: "Ministère partenaire" },
  { src: "/partenaires/minister_four.jpg", name: "Ministère partenaire" },
  { src: "/partenaires/minister_five.jpg", name: "Ministère partenaire" },
  { src: "/partenaires/arte_one.jpg", name: "Arte One" },
  { src: "/partenaires/mangue.png", name: "Mangue" },
  { src: "/logo/anarcade.jpg", name: "OIA Anacarde" },
  { src: "/logo/coton.jpg", name: "Conseil Coton Anacarde Karité" },
  { src: "/partenaires/care_or.jpg", name: "Groupe Carré d'Or" },
  { src: "/partenaires/lonaci.jpg", name: "LONACI" },
  { src: "/partenaires/sama.jpg", name: "SAMA" },
  { src: "/partenaires/corolay.jpg", name: "Corolay" },
  { src: "/samagroupe/lonaci.png", name: "LONACI" },
  { src: "/samagroupe/sama_group.png", name: "SAMA Group" },
  { src: "/samagroupe/sama_group_btp.png", name: "SAMA Group BTP" },
  { src: "/samagroupe/sama_transport.png", name: "SAMA Transports" },
  { src: "/samagroupe/corlay.png", name: "Corlay" },
  { src: "/partenaires/divoholding.jpg", name: "Divo Holding" },
  { src: "/partenaires/mhiGI.jpg", name: "MHI-GI" },
  { src: "/partenaires/ccip.jpg", name: "CCI-CI" },
  { src: "/partenaires/etv.jpg", name: "ETV" },
  { src: "/partenaires/bni.png", name: "BNI" },
  { src: "/partenaires/atlantic_banc.jpg", name: "Banque Atlantique" },
  { src: "/partenaires/rti.jpg", name: "RTI" },
  { src: "/partenaires/nci.jpg", name: "NCI" },
  { src: "/partenaires/life_tv.jpg", name: "Life TV" },
  { src: "/logo/hollandiva.jpeg", name: "Hollandiva" },
  { src: "/partenaires/oic-logo.jpeg", name: "Office Ivoirien des Chargeurs (OIC)" },
  { src: "/partenaires/multipack.jpeg", name: "Multipack" },
  { src: "/partenaires/imgh.jpeg", name: "IMGH" },
  { src: "/partenaires/itn-logo.jpeg", name: "ITN Smart Storage" },
  { src: "/partenaires/petroci.jpeg", name: "PETROCI" },
];

/* -------------------------------------------------------------------------- */
/* YADI GROUP — partenaire multisectoriel                                    */
/* -------------------------------------------------------------------------- */

export interface YadiGroupArea {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const YADI_GROUP = {
  eyebrow: "Un groupe. Plusieurs expertises.",
  name: "YADI GROUP",
  image: "/partenaires/yadi_goup.png",
  imageAlt: "Enseigne du siège de YADI GROUP et de ses filiales",
  tagline: "Planifier. Lancer. Développer.",
  title: "YADI GROUP, c'est l'ambition de construire, d'innover et de connecter.",
  description:
    "YADI GROUP est un groupe entrepreneurial opérant dans plusieurs secteurs stratégiques. À travers ses différentes entreprises, le groupe développe des solutions innovantes dans la construction, l'automobile, le transport et les technologies.",
  ctaLabel: "Découvrir YADI GROUP",
  website: "https://yadi.ci/",
  finalCtaText: "Découvrez l'univers et les différentes entreprises du YADI GROUP.",
  finalCtaLabel: "Visiter le site",
} as const;

export const YADI_GROUP_AREAS: YadiGroupArea[] = [
  {
    icon: Building2,
    title: "BTP & Construction",
    text: "Des solutions innovantes pour des constructions modernes et durables.",
  },
  {
    icon: Car,
    title: "Automobile",
    text: "Des solutions et services dédiés à la mobilité et à l'entretien automobile.",
  },
  {
    icon: Truck,
    title: "Transport & Logistique",
    text: "Des solutions de mobilité et de transport adaptées aux besoins des particuliers et des entreprises.",
  },
  {
    icon: Cpu,
    title: "Technologie",
    text: "Des solutions digitales et technologiques pour accompagner la transformation des entreprises.",
  },
];

/* -------------------------------------------------------------------------- */
/* MHIGI — Partenaire BTP, Immobilier & Ingénierie industrielle               */
/* -------------------------------------------------------------------------- */

export const MHIGI = {
  eyebrow: "Groupe Ivoirien · BTP & Ingénierie",
  name: "MHIGI",
  logo: "/new_part/logo.png",
  image: "/new_part/WhatsApp Image 2026-09-12 at 09.50.56 (3).jpeg",
  imageAlt: "Partenariat officiel et équipe MHIGI",
  flyerImage: "/new_part/WhatsApp Image 2026-09-12 at 09.50.56.jpeg",
  tagline: "Bâtissons ensemble un monde meilleur.",
  title: "Solutions innovantes et durables pour l'industrie et les infrastructures.",
  description:
    "MHIGI est un groupe ivoirien spécialisé dans la construction, l’immobilier et l’ingénierie industrielle. Nous proposons des solutions innovantes et durables dans plusieurs secteurs : construction, immobilier, agriculture, énergie, infrastructures et industrie. Notre ambition est d’accompagner nos clients dans la réalisation de projets performants et durables.",
  ctaLabel: "Découvrir MHIGI",
  website: "https://mhigi.com/",
  sectors: [
    { label: "Construction", description: "Ouvrages modernes, bâtiments durables et génie civil" },
    { label: "Immobilier", description: "Aménagement d'espaces de vie et projets résidentiels" },
    { label: "Agriculture", description: "Infrastructures agro-industrielles & valorisation" },
    { label: "Énergie", description: "Solutions durables et transition énergétique" },
    { label: "Infrastructures", description: "Réseaux routiers, hydrauliques et plateformes" },
    { label: "Industrie", description: "Ingénierie industrielle et entrepôts de pointe" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Région du Tchologo                                                         */
/* -------------------------------------------------------------------------- */

export const REGION_HIGHLIGHTS = [
  { icon: Sprout, title: "Région productrice d'anacarde", text: "Plus de 180 000 tonnes de noix brutes d'anacarde produites chaque année." },
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
    a: "Du 18 au 20 octobre 2026, dans la région du Tchologo, sur trois villes : Kong, Ouangolodougou et Ferkessédougou.",
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
  { label: "Dates", value: "18 → 20 oct. 2026" },
  { label: "Lieu", value: "Kong · Ouangolodougou · Ferkessédougou" },
  { label: "Participants attendus", value: "1 500+" },
  { label: "Filières", value: "Anacarde, mangue, coton, maïs, karité, igname" },
  { label: "Enjeu", value: "90 milliards FCFA de pertes évitables / an" },
];

/* -------------------------------------------------------------------------- */
/* TY COM — partenaire impression, marquage & personnalisation                */
/* -------------------------------------------------------------------------- */

export const TY_COM = {
  eyebrow: "Partenaire impression & marquage",
  name: "TY COM",
  logo: "/logo/ty_com_logo.jpeg",
  tagline: "La visibilité sur mesure",
  headline: "Voyez plus loin, nous optimisons votre visibilité",
  activities: ["Imprimerie", "Personnalisation", "Marquage"],
  ctaLabel: "Découvrir TY COM",
  ctaFinalLabel: "Découvrir toutes nos solutions",
  website: "https://www.tycomci.com",
  finalSlogan: "PRO · RAPIDE · SUR MESURE",
  finalText:
    "Donnez de la visibilité à votre marque avec des solutions professionnelles d'impression, de marquage et de personnalisation.",
  contact: {
    phone: { label: "+225 07 07 91 91 26", href: "tel:+2250707919126" },
    whatsapp: { label: "+225 05 74 74 67 14", href: "https://wa.me/2250574746714" },
    email: { label: "touramann.ishaq@gmail.com", href: "mailto:touramann.ishaq@gmail.com" },
  },
} as const;

export interface TyComVisionItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const TY_COM_VISION: TyComVisionItem[] = [
  {
    title: "On marque vos idées",
    text: "De l'imagination à l'objet.",
    icon: Lightbulb,
  },
  {
    title: "Votre marque, notre signature",
    text: "Visible. Pro. Inoubliable.",
    icon: PenTool,
  },
  {
    title: "L'expertise qui vous rend visible",
    text: "Un savoir-faire technique au service de votre image de marque.",
    icon: Eye,
  },
  {
    title: "On imprime votre puissance",
    text: "Du logo à l'objet : on s'occupe de tout.",
    icon: Package,
  },
];

/* -------------------------------------------------------------------------- */
/* Évènements & actualités — alimenté au fil de l'eau                         */
/* -------------------------------------------------------------------------- */

/**
 * Média principal d'une actualité :
 * - `video` : fichier local sous /public (ex. reportage TV) ;
 * - `image` : visuel local sous /public ;
 * - `youtube` : identifiant d'une vidéo YouTube (lecture intégrée).
 */
export type NewsMedia =
  | { type: "video"; src: string; poster?: string; /** largeur / hauteur */ ratio?: number }
  | { type: "image"; src: string; alt: string }
  | { type: "youtube"; id: string };

export interface NewsItem {
  slug: string;
  /** Date ISO (AAAA-MM-JJ) — sert au tri, du plus récent au plus ancien. */
  date: string;
  /** Rubrique courte affichée en pastille (ex. « Médias », « Terrain »). */
  category: string;
  /** Origine courte affichée dans le bandeau et les cartes (ex. « RTI 1 · JT 13H »). */
  kicker: string;
  title: string;
  excerpt: string;
  /** Corps du communiqué, un paragraphe par entrée. */
  body: string[];
  /** Crédit / source officielle. */
  source?: string;
  media: NewsMedia;
  /** Lien externe complémentaire (article, replay…). */
  link?: { href: string; label: string };
  /** Déroulé horaire d'une journée terrain (compte-rendu de mission). */
  agenda?: NewsAgendaEntry[];
  /** Photos du reportage, affichées en galerie avec visionneuse. */
  gallery?: string[];
}

export interface NewsAgendaEntry {
  /** Créneau affiché tel quel (ex. « 9H00 – 12H30 »). */
  time: string;
  title: string;
  place?: string;
  /** Personnes présentes, une par entrée. */
  participants?: string[];
  /** Points abordés, numérotés à l'affichage. */
  points?: string[];
  /** Paragraphes de synthèse. */
  notes?: string[];
}

/** `/evenement/<dossier>/01.jpeg` … `NN.jpeg` — photos numérotées d'un reportage. */
function photoSeries(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/evenement/${folder}/${String(i + 1).padStart(2, "0")}.jpeg`);
}

/**
 * Pour ajouter un évènement : ajouter une entrée ici (n'importe où, le tri
 * par date est automatique) et déposer le média dans /public/evenement/.
 */
const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "etape-finale-ferkessedougou-20-octobre-2026",
    date: "2026-10-20",
    category: "Terrain",
    kicker: "Ferkessédougou · Partie 4",
    title: "Étape finale à Ferkessédougou",
    excerpt:
      "Mardi 20 octobre 2026, les JE-TCH 2026 posent leurs valises à Ferkessédougou pour la dernière étape de cette première édition.",
    body: [
      "Après Kong le dimanche 18 octobre et Ouangolodougou le lundi 19 octobre, la première édition des Journées de l'Entreposage dans le Tchologo s'est achevée le mardi 20 octobre 2026 à Ferkessédougou.",
      "Retour en vidéo et en images sur cette étape finale.",
    ],
    media: { type: "video", src: "/evenement/ferke/etape-4/video.mp4", poster: "/evenement/ferke/etape-4/01.jpeg", ratio: 1024 / 576 },
    gallery: photoSeries("ferke/etape-4", 38),
  },
  {
    slug: "arre-ci-promotion-entreposage-tchologo-19-octobre-2026",
    date: "2026-10-19",
    category: "Partenaires",
    kicker: "ARRE-CI · Partie 3",
    title: "L'ARRE-CI au cœur de la promotion de l'entreposage dans le Tchologo",
    excerpt:
      "Conduite par son Directeur Général, le Pr KOFFI N'Goran Justin, l'ARRE-CI prend une part active aux JE-TCH 2026, de Kong à Ferkessédougou.",
    body: [
      "Du 18 au 20 octobre 2026, la région du Tchologo accueille la première édition des Journées de l'Entreposage (JE-TCH 2026), organisées successivement à Kong, Ouangolodougou et Ferkessédougou.",
      "Placée sous le signe de la modernisation du secteur agricole et de la valorisation des infrastructures de stockage, cette initiative constitue un cadre privilégié d'échanges entre les acteurs institutionnels, économiques et agricoles.",
      "Après une première journée à Kong, le dimanche 18 octobre, les activités se poursuivent ce lundi 19 octobre à Ouangolodougou, avant l'étape finale prévue demain, mardi 20 octobre, à Ferkessédougou.",
      "Prenant une part active à ces journées, l'Autorité de Régulation du Système de Récépissés d'Entreposage (ARRE-CI), conduite par son Directeur Général, le Professeur KOFFI N'Goran Justin, met en lumière les enjeux et perspectives de développement de l'entreposage en Côte d'Ivoire.",
      "À travers sa participation aux échanges et panels, l'ARRE-CI réaffirme son engagement en faveur de la sécurisation des stocks agricoles, de la réduction des pertes post-récolte et de l'amélioration de l'accès des producteurs aux financements et aux marchés.",
      "L'ARRE-CI, engagée pour un système d'entreposage moderne, fiable et performant au service du développement agricole ivoirien.",
    ],
    source: "Communiqué de l'ARRE-CI — Lundi 19 Octobre 2026. #ARRECI #JETCH2026 #Tchologo #Entreposage #SRE",
    media: { type: "image", src: "/evenement/kong/etape-3/01.jpeg", alt: "L'ARRE-CI aux JE-TCH 2026" },
    gallery: photoSeries("kong/etape-3", 59),
    agenda: [
      { time: "18 octobre", title: "Première étape", place: "Kong" },
      { time: "19 octobre", title: "Deuxième étape", place: "Ouangolodougou" },
      { time: "20 octobre", title: "Étape finale", place: "Ferkessédougou" },
    ],
  },
  {
    slug: "etape-kong-carnet-de-bord-jour-j-18-octobre-2026",
    date: "2026-10-18",
    category: "Terrain",
    kicker: "Étape de Kong · Partie 2",
    title: "Carnet de bord officiel — Jour J",
    excerpt:
      "Plus de costume, le Commissaire Général a enfilé ses baskets : dernière ligne droite à Kong, de la Place Ancien Marché au Parrain de l'événement.",
    body: [
      "Plus de costume, le Commissaire Général a enfilé ses baskets. Retour sur les dernières 24 heures de préparation, entre Ferkessédougou, Kong et Ouangolodougou, jusqu'au matin du Jour J.",
      "En images : le camion Multipack en installation, l'équipe à pied d'œuvre, la Mairie de Kong et le Point Focal.",
    ],
    source: "Carnet de bord officiel du Commissariat Général JE-TCH 2026 — Dimanche 18 Octobre 2026.",
    media: { type: "image", src: "/evenement/kong/etape-2/01.jpeg", alt: "L'équipe JE-TCH à pied d'œuvre à Kong" },
    gallery: photoSeries("kong/etape-2", 23),
    agenda: [
      { time: "Sam. 17 · 09H00", title: "Départ de Ferkessédougou" },
      {
        time: "Sam. 17 · 10H30",
        title: "Arrivée à Kong",
        place: "Kong",
        points: [
          "Direction Mairie : réunion stratégique",
          "Cap Place Ancien Marché : lieu de l'événement, négociation acquisition des stands",
          "Séance de travail avec l'équipe du Point Focal",
          "Dernière feuille de route : mobilisation, déplacement et repas des producteurs",
        ],
      },
      { time: "Sam. 17 · 15H00", title: "Départ de Kong" },
      {
        time: "Sam. 17 · 16H30",
        title: "Séance de travail avec l'ARRE-CI",
        participants: ["Pr KOFFI, DG ARRE-CI, et son équipe"],
      },
      {
        time: "Sam. 17 · 17H00",
        title: "Accueil au QG",
        place: "Hôtel Château, Ferkessédougou",
        participants: ["M. Mikel HEIN", "Mme Olga DIBI et son équipe"],
      },
      { time: "Sam. 17 · 18H00 – 19H00", title: "Séance de travail avec Mme Olga DIBI et son équipe" },
      {
        time: "Sam. 17 · 20H00 – 22H00",
        title: "Gestion téléphonique",
        points: [
          "Équipe RTI",
          "Équipe du Maire de Kong",
          "Points Focaux Ouangolodougou et Ferké",
          "Président du Comité Scientifique, sur le terrain à Ferké",
        ],
      },
      { time: "Sam. 17 · 22H00 – Minuit", title: "Aller-retour Ferkessédougou / Ouangolodougou" },
      { time: "Dim. 18 · 05H00", title: "Départ pour Kong", notes: ["Arrivée prévue à 06H30."] },
      {
        time: "Dim. 18 · 07H00",
        title: "Séance de travail avec le Parrain",
        place: "Kong",
        participants: ["M. Abdrahamane Tiémoko BERTÉ, Maire de Kong, DG de l'IPS-CGRAE"],
      },
    ],
  },
  {
    slug: "etape-kong-reconnaissance-16-octobre-2026",
    date: "2026-10-16",
    category: "Terrain",
    kicker: "Étape de Kong · Partie 1",
    title: "Reconnaissance de sites et séances de travail à Kong",
    excerpt:
      "Mission du Commissariat Général à Ferkessédougou et Kong : séance de travail à la Mairie, point sécurité au Commissariat de Police et accueil à l'aéroport de Korhogo.",
    body: [
      "Dans le cadre des préparatifs de la 1ère Édition des Journées de l'Entreposage dans le Tchologo (JE-TCH), le Commissariat Général a effectué une mission de reconnaissance à Ferkessédougou et Kong.",
    ],
    source: "Compte-rendu d'activités du Commissariat Général JE-TCH 2026 — Vendredi 16 Octobre 2026.",
    media: { type: "image", src: "/evenement/kong/etape-1/01.jpeg", alt: "Séance de travail à la Mairie de Kong" },
    gallery: photoSeries("kong/etape-1", 18),
    agenda: [
      {
        time: "9H00 – 12H30",
        title: "Séance de travail à la Mairie de Kong",
        place: "Kong",
        participants: [
          "M. BARRO Aboubakary, Maire Résident de Kong, et son équipe",
          "M. COULIBALY Aboubakar (CGRAE-IPS Abidjan), Assistant du Parrain, et M. DIANÉ, en mission spéciale pour l'événement",
          "Le Commissaire Général, CG TRAORÉ Ishaq",
        ],
        points: [
          "Format de l'événement",
          "Cibles (producteurs, coopératives, partenaires)",
          "Organisation pratique et opérationnelle",
          "Accompagnement de la Mairie : mobilisation, information et sensibilisation des populations",
        ],
        notes: [
          "Le Commissaire Général a présenté l'ensemble du projet. M. le Maire Résident a félicité toute l'équipe d'organisation et particulièrement les points focaux de Kong, M. KONÉ Yaya et M. SYLVAIN, à la tâche depuis un trimestre.",
          "Il a tenu à saluer l'engagement du Commissaire Général, à la tâche depuis 8 mois : de la conception de l'idée du projet à la création visuelle, charte graphique, supports de communication, démarche de recherche de partenariats, coordination et gestion sur l'axe Abidjan – Kong – Ouangolodougou – Ferkessédougou.",
        ],
      },
      {
        time: "12H45 – 13H00",
        title: "Séance de travail — Sécurité",
        place: "Commissariat de Police de Kong",
        participants: ["Commissaire N'ZI"],
        points: [
          "Informations sécuritaires",
          "Format de l'événement",
          "Lieu, heures de début et de fin de l'événement",
        ],
      },
      {
        time: "15H00",
        title: "Accueil de M. EZZEDINE",
        place: "Aéroport de Korhogo",
        notes: [
          "Hébergement prévu au QG de Ferkessédougou, Hôtel Château. Itinéraire : Kong – Ferkessédougou – Korhogo.",
        ],
      },
      {
        time: "16H15",
        title: "Arrivée au QG",
        place: "Hôtel Château, Ferkessédougou",
      },
    ],
  },
  {
    slug: "rti1-jt-13h-08-octobre-2026",
    date: "2026-10-08",
    category: "Médias",
    kicker: "RTI 1 · Journal de 13H",
    title: "Les acteurs sensibilisent au système de l'entreposage",
    excerpt:
      "Diffusion nationale : le Journal de 13 Heures de RTI 1 consacre un reportage aux JE-TCH 2026, entre potentiel agricole du Tchologo et enjeu de la conservation post-récolte.",
    body: [
      "Le Commissariat Général a l'honneur de porter à la connaissance de l'ensemble des partenaires, institutions et populations du Tchologo que l'élément de reportage consacré aux Journées de l'Entreposage dans le Tchologo – JE-TCH 2026 a été diffusé ce jour, Mercredi 08 Octobre 2026, au Journal de 13 Heures de RTI 1, avec une rediffusion prévue au Journal de 20 Heures.",
      "Le reportage, intitulé « Les acteurs sensibilisent au système de l'entreposage », met en exergue le potentiel agricole du Tchologo et l'enjeu majeur de la conservation post-récolte.",
    ],
    source: "Le 13 Heures de RTI 1 du 08 Octobre 2026 par Saria BAMBA et Jean-Marc DACHI.",
    media: { type: "video", src: "/evenement/video/rti1-jt13h-2026-10-08.mp4", ratio: 576 / 464 },
  },
];

export const NEWS: NewsItem[] = [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((item) => item.slug === slug);
}

/** « 08 oct. 2026 » — format court, fuseau UTC pour éviter tout décalage SSR/CSR. */
export function formatNewsDate(iso: string, style: "short" | "long" = "short"): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: style === "short" ? "short" : "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
