"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink,
  Eye,
} from "lucide-react";

export interface BrochureDocument {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  tags: string[];
}

export const ARRE_BROCHURES: BrochureDocument[] = [
  {
    id: "volet-1",
    title: "Volet 1 · Fonctionnement, Schéma & Registre Central",
    shortTitle: "Volet 1 · Schéma & Registre",
    description:
      "Objectifs du Système de Récépissés d'Entreposage (SRE), schéma opérationnel des flux (déposants, gestionnaires, contrôleurs, banques), accès au Registre Central (www.arre.ci) et garantie des revenus des producteurs.",
    image: "/picture_maire/arre_brochure_volet_1.jpeg",
    tags: [
      "Schéma fonctionnel SRE",
      "Registre Central Électronique",
      "Garantie des revenus",
      "Plateforme www.arre.ci",
    ],
  },
  {
    id: "volet-2",
    title: "Volet 2 · Missions, Cadre Légal & Agrément des Acteurs",
    shortTitle: "Volet 2 · Missions & Agréments",
    description:
      "Missions et organisation de l'ARRE, cadre juridique (lois et décrets d'application), rôles des acteurs & parties prenantes, et guide d'agrément officiel des entrepôts.",
    image: "/picture_maire/arre_brochure_volet_2.jpeg",
    tags: [
      "Missions de l'ARRE",
      "Cadre juridique & Décrets",
      "Acteurs & Parties prenantes",
      "Procédure d'agrément",
    ],
  },
];

/**
 * Composant de présentation haut de gamme des dépliants officiels ARRE-CI.
 * Conçu selon les standards Senior UI/UX :
 * - Sélecteur d'onglets ergonomique et responsive
 * - Aperçu panoramique haute fidélité avec indicateurs contextuels
 * - Visionneuse Lightbox plein écran immersive avec zoom et navigation au clavier
 * - Accès direct aux fichiers originaux haute définition
 */
export function ArreBrochureViewer() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fallbackDoc: BrochureDocument = ARRE_BROCHURES[0] as BrochureDocument;
  const currentDoc: BrochureDocument = ARRE_BROCHURES[activeTab] ?? fallbackDoc;
  const lightboxDoc: BrochureDocument | null =
    lightboxIndex !== null ? (ARRE_BROCHURES[lightboxIndex] ?? null) : null;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + ARRE_BROCHURES.length) % ARRE_BROCHURES.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % ARRE_BROCHURES.length
    );
  }, []);

  // Gestion des touches du clavier pour la lightbox (Échap, Flèche Gauche, Flèche Droite)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <div className="w-full">
      {/* En-tête de la sous-rubrique Documentation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold">
            <FileText className="size-3.5" aria-hidden="true" />
            Documentation Officielle ARRE-CI
          </div>
          <h4 className="mt-2.5 font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
            Dépliant & Schéma Directeur du SRE
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-white/75 max-w-xl">
            Consultez les deux volets du dépliant officiel édité par l&apos;A.R.R.E-CI pour comprendre le mécanisme, le registre central et les agréments.
          </p>
        </div>

        {/* Sélecteur d'onglets (Volet 1 / Volet 2) */}
        <div className="inline-flex shrink-0 items-center rounded-2xl border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
          {ARRE_BROCHURES.map((doc, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-ink shadow-soft"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {doc.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cadre de visualisation interactif du volet sélectionné */}
      <div className="mt-5 relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-3 sm:p-5 backdrop-blur-sm">
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleOpenLightbox(activeTab)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpenLightbox(activeTab);
            }
          }}
          className="group relative block w-full aspect-[2.75/1] min-h-[180px] sm:min-h-[220px] lg:min-h-[260px] overflow-hidden rounded-xl border border-white/10 bg-black/30 cursor-zoom-in transition-all duration-300 hover:border-gold/50"
          aria-label={`Agrandir ${currentDoc.title} en plein écran`}
        >
          <Image
            src={currentDoc.image}
            alt={currentDoc.title}
            fill
            sizes="(max-width: 1024px) 100vw, 85vw"
            quality={95}
            className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority
          />

          {/* Overlay d'aide au survol */}
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-bold text-white shadow-soft backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              <ZoomIn className="size-4 text-gold" aria-hidden="true" />
              Cliquer pour agrandir et lire en plein écran
            </span>
          </div>

          {/* Badge flottant en haut à droite du document */}
          <div className="absolute top-2.5 right-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/60 px-2.5 py-1 text-[0.68rem] font-semibold text-white/90 backdrop-blur-md">
              <Eye className="size-3 text-gold" aria-hidden="true" />
              Document officiel · Volet {activeTab + 1}/2
            </span>
          </div>
        </div>

        {/* Informations détaillées & actions sous le document */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-3 border-t border-white/10">
          <div className="min-w-0">
            <h5 className="font-heading text-sm sm:text-base font-bold text-white">
              {currentDoc.title}
            </h5>
            <p className="mt-1 text-xs text-white/70 leading-relaxed max-w-2xl">
              {currentDoc.description}
            </p>
            {/* Tags thématiques */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {currentDoc.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.68rem] font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions : Plein écran & Téléchargement direct */}
          <div className="flex shrink-0 items-center gap-2.5 self-start md:self-center">
            <button
              type="button"
              onClick={() => handleOpenLightbox(activeTab)}
              className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/15 px-3.5 py-2 text-xs font-bold text-gold transition-all duration-200 hover:bg-gold hover:text-ink shadow-sm"
            >
              <ZoomIn className="size-3.5" aria-hidden="true" />
              Agrandir
            </button>
            <a
              href={currentDoc.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Original HD
            </a>
          </div>
        </div>

        {/* Miniatures d'accès rapide aux 2 volets */}
        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
          {ARRE_BROCHURES.map((doc, idx) => {
            const isCurrent = activeTab === idx;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`group flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? "border-gold/60 bg-gold/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <div className="relative aspect-[3/1] w-20 sm:w-28 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/20">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-bold truncate ${isCurrent ? "text-gold" : "text-white"}`}>
                    {doc.shortTitle}
                  </p>
                  <p className="text-[0.7rem] text-white/60 line-clamp-1">
                    {idx === 0 ? "Schéma SRE & Registre" : "Missions & Agréments"}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Visionneuse plein écran haute fidélité */}
      <AnimatePresence>
        {lightboxDoc && (
          <div
            className="fixed inset-0 z-[150] flex flex-col justify-between p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Visionneuse de document plein écran"
          >
            {/* Arrière-plan sombre avec flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="fixed inset-0 bg-ink/90 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Barre d'outils supérieure */}
            <div className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white backdrop-blur-md">
              <div className="min-w-0">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
                  A.R.R.E-CI · Document Officiel
                </span>
                <p className="truncate font-heading text-sm sm:text-base font-bold">
                  {lightboxDoc.title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={lightboxDoc.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Plein écran navigateur</span>
                </a>
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="grid size-9 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-all hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Fermer la visionneuse"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Conteneur principal de l'image agrandie */}
            <div className="relative z-10 my-auto flex items-center justify-center overflow-auto max-h-[80vh] w-full py-4">
              <motion.div
                key={lightboxDoc.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-6xl w-full aspect-[2.75/1] overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-2xl"
              >
                <Image
                  src={lightboxDoc.image}
                  alt={lightboxDoc.title}
                  fill
                  sizes="1200px"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Bouton Précédent */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white shadow-soft backdrop-blur-md transition-transform hover:scale-110 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Volet précédent"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Bouton Suivant */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white shadow-soft backdrop-blur-md transition-transform hover:scale-110 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Volet suivant"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Barre d'état inférieure */}
            <div className="relative z-10 flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
              <span>
                Volet {(lightboxIndex ?? 0) + 1} sur {ARRE_BROCHURES.length} · Navigation : Flèches Clavier ← →
              </span>
              <span className="hidden sm:inline">
                Appuyez sur <kbd className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-[0.65rem] text-white">Échap</kbd> pour fermer
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
