"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface NewsGalleryProps {
  photos: string[];
  /** Préfixe du texte alternatif (« <titre> — photo 3 »). */
  title: string;
}

/**
 * Galerie photo d'un reportage : grille de vignettes + visionneuse plein écran
 * (flèches ←/→, Échap pour fermer, défilement de la page bloqué).
 */
export function NewsGallery({ photos, title }: NewsGalleryProps) {
  const [index, setIndex] = React.useState<number | null>(null);
  const open = index !== null;

  const step = React.useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, i) => (
          <li key={src} className={i === 0 ? "col-span-2 row-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-surface shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              aria-label={`Agrandir la photo ${i + 1} sur ${photos.length}`}
            >
              <Image
                src={src}
                alt={`${title} — photo ${i + 1}`}
                fill
                sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — photo ${index + 1} sur ${photos.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setIndex(null)}
        >
          <div className="relative h-full max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[index]!}
              alt={`${title} — photo ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
            {index + 1} / {photos.length}
          </p>
          <button
            type="button"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
          {[
            { delta: -1, Icon: ChevronLeft, label: "Photo précédente", side: "left-3 sm:left-6" },
            { delta: 1, Icon: ChevronRight, label: "Photo suivante", side: "right-3 sm:right-6" },
          ].map(({ delta, Icon, label, side }) => (
            <button
              key={delta}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(delta);
              }}
              className={`absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 ${side}`}
              aria-label={label}
            >
              <Icon className="size-6" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
