import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EVENT } from "@/lib/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(EVENT.url),
  title: {
    default: `${EVENT.fullTitle} | ${EVENT.datesLabel}`,
    template: `%s | ${EVENT.shortName}`,
  },
  description:
    "Salon institutionnel et agricole majeur de Côte d'Ivoire dédié à l'entreposage, au warrantage et à la réduction des pertes post-récolte. 15 → 17 oct 2026, région du Tchologo. Entrée gratuite pour les producteurs.",
  keywords: [
    "entreposage agricole",
    "warrantage",
    "Tchologo",
    "Côte d'Ivoire",
    "anacarde",
    "pertes post-récolte",
    "stockage",
    "coopératives agricoles",
    "JE-TCH 2026",
  ],
  authors: [{ name: "Comité d'organisation JE-TCH 2026" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: EVENT.url,
    siteName: EVENT.fullTitle,
    title: `${EVENT.fullTitle} | ${EVENT.datesLabel}`,
    description:
      "Stocker mieux, gagner plus. Le rendez-vous de l'entreposage agricole du Tchologo : warrantage, marché, innovation. Entrée gratuite pour les producteurs.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT.fullTitle} | ${EVENT.datesLabel}`,
    description: "Stocker mieux, gagner plus — Région du Tchologo, 15 → 17 oct 2026.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: EVENT.url },
  category: "events",
};

export const viewport: Viewport = {
  themeColor: "#1F6F4A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT.fullTitle,
  description:
    "Salon institutionnel et agricole dédié à l'entreposage, au warrantage et à la réduction des pertes post-récolte dans la région du Tchologo.",
  startDate: "2026-09-30",
  endDate: "2026-10-02",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Région du Tchologo — Kong, Ouangolodougou, Ferkessédougou",
    address: { "@type": "PostalAddress", addressRegion: "Tchologo", addressCountry: "CI" },
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "XOF",
    availability: "https://schema.org/InStock",
    url: `${EVENT.url}/#inscription`,
  },
  organizer: { "@type": "Organization", name: "Comité d'organisation JE-TCH 2026", url: EVENT.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-background">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
