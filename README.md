# JE-TCH 2026 — Site officiel

Site vitrine premium des **Journées de l'Entreposage Tchologo 2026** : un événement
institutionnel et agricole majeur de Côte d'Ivoire dédié à l'entreposage, au warrantage
et à la réduction des pertes post-récolte.

> **Stocker mieux · Gagner plus · Bâtir l'avenir**
> 30 sept → 2 oct 2026 · Kong · Ouangolodougou · Ferkessédougou

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (mode strict)
- **TailwindCSS 3** avec design system sur mesure
- **Framer Motion** (animations subtiles, scroll-reveal, micro-interactions)
- **Composants shadcn-style** (copiés dans le repo, sans dépendance Radix)
- **lucide-react** (icônes)
- SEO ready (metadata, Open Graph dynamique, JSON-LD, sitemap, robots, manifest PWA)

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

Autres scripts :

```bash
npm run build      # build de production
npm run start      # serveur de production
npm run lint       # ESLint
npm run typecheck  # vérification TypeScript
```

## Architecture

```
src/
├─ app/                      # Routes App Router
│  ├─ layout.tsx             # Layout racine : fonts, SEO, navbar, footer, JSON-LD
│  ├─ page.tsx               # Page d'accueil (assemble les sections)
│  ├─ globals.css            # Design system (tokens, utilitaires)
│  ├─ programme/             # /programme
│  ├─ exposants/             # /exposants (+ formulaire sponsors)
│  ├─ presse/                # /presse (dossier de presse + visuels)
│  ├─ faq/                   # /faq (accordéon + JSON-LD FAQPage)
│  ├─ api/                   # Route handlers (register, newsletter)
│  ├─ opengraph-image.tsx    # OG image générée dynamiquement
│  ├─ icon.tsx               # Favicon généré
│  ├─ sitemap.ts | robots.ts | manifest.ts
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                    # Primitives (button, card, input, select, accordion…)
│  ├─ brand/Logo.tsx         # Logo JE-TCH vectoriel
│  ├─ layout/                # Navbar (sticky glass), Footer institutionnel
│  ├─ shared/                # Reveal, SectionHeading, AnimatedCounter, Countdown, PageHeader
│  ├─ sections/              # Sections de la home (Hero, Stats, Region, Products…)
│  └─ forms/                 # ProducerForm, ExhibitorForm, NewsletterForm
└─ lib/
   ├─ data.ts                # Source de vérité du contenu (chiffres, programme, FAQ…)
   ├─ motion.ts              # Variants Framer Motion réutilisables
   └─ utils.ts               # cn(), formatFr()
```

## Personnalisation

- **Contenu** : tout est centralisé dans `src/lib/data.ts` (dates, WhatsApp, e-mail,
  statistiques, programme, FAQ, partenaires…). Mettez à jour le numéro WhatsApp et
  l'e-mail (`EVENT.whatsapp`, `EVENT.email`) ainsi que l'URL (`EVENT.url`).
- **Couleurs / typo** : `tailwind.config.ts` (charte officielle) et `src/app/globals.css`.
- **Images** : les photos sont auto-hébergées dans `public/images/` (champ agricole pour le
  Hero, filières dans `data.ts`) et optimisées à la volée via `next/image` (WebP/AVIF,
  lazy-load, `sizes` responsives) — idéal sur faible connexion et sans dépendance externe.
  Pour vos propres photos (drone, terrain), remplacez simplement les fichiers dans
  `public/images/` en conservant les mêmes noms, ou mettez à jour les chemins dans
  `src/lib/data.ts`, `Hero.tsx` et `Region.tsx`. Le `next.config.mjs` autorise aussi
  `images.unsplash.com` si vous préférez des URLs distantes.
- **Affiches officielles** : disponibles dans `public/presse/`.

## Formulaires

Les formulaires (`ProducerForm`, `ExhibitorForm`, `NewsletterForm`) postent vers
`/api/register` et `/api/newsletter`, qui valident les données côté serveur et confirment
la réception. **En production**, branchez la persistance (Supabase, CRM, e-mail
transactionnel) à l'emplacement `TODO(production)` dans `src/app/api/*/route.ts`.

## Accessibilité & performance

- Mobile-first, navigation clavier, focus visibles, lien d'évitement.
- `prefers-reduced-motion` respecté globalement.
- Images optimisées, polices auto-hébergées (`next/font`), `text-wrap: balance/pretty`.
