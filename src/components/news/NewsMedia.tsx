"use client";

import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { NewsMedia as NewsMediaData } from "@/lib/data";
import { cn } from "@/lib/utils";

interface NewsMediaProps {
  media: NewsMediaData;
  title: string;
  /**
   * `true` : lecteur complet (clic → lecture avec contrôles).
   * `false` : simple vignette (la carte parente porte le lien).
   */
  interactive?: boolean;
  /** Force un ratio (largeur / hauteur) ; sinon celui du média, ou 16/9. */
  ratio?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Média d'une actualité — vidéo locale, image ou YouTube.
 * Les vidéos ne chargent que leurs métadonnées (première image affichée
 * comme affiche) tant que l'utilisateur n'a pas cliqué sur « Lire ».
 */
export function NewsMedia({
  media,
  title,
  interactive = true,
  ratio,
  className,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  priority,
}: NewsMediaProps) {
  const aspect = ratio ?? (media.type === "video" && media.ratio ? media.ratio : 16 / 9);

  return (
    <div
      className={cn("relative isolate w-full overflow-hidden bg-ink", className)}
      style={{ aspectRatio: aspect }}
    >
      {media.type === "image" && (
        <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      )}
      {media.type === "video" && (
        <VideoMedia src={media.src} poster={media.poster} title={title} interactive={interactive} />
      )}
      {media.type === "youtube" && <YouTubeMedia id={media.id} title={title} interactive={interactive} />}
    </div>
  );
}

function PlayBadge({ large }: { large?: boolean }) {
  return (
    <span
      className={cn(
        "relative grid place-items-center rounded-full bg-orange text-white shadow-[0_10px_30px_rgba(245,130,32,0.45)] transition-transform duration-300 group-hover:scale-110",
        large ? "size-16 sm:size-20" : "size-12"
      )}
    >
      {large && <span className="absolute inset-0 animate-ping rounded-full bg-orange/40 [animation-duration:2.2s]" />}
      <Play className={cn("relative translate-x-[2px] fill-current", large ? "size-6 sm:size-7" : "size-5")} aria-hidden />
    </span>
  );
}

function VideoMedia({
  src,
  poster,
  title,
  interactive,
}: {
  src: string;
  poster?: string;
  title: string;
  interactive: boolean;
}) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  const start = () => {
    setPlaying(true);
    void ref.current?.play();
  };

  return (
    <>
      <video
        ref={ref}
        // `#t=0.1` : affiche la première image comme vignette quand aucun poster n'est fourni.
        src={poster ? src : `${src}#t=0.1`}
        poster={poster}
        preload="metadata"
        playsInline
        controls={playing}
        muted={!interactive}
        tabIndex={interactive ? undefined : -1}
        aria-label={title}
        className="absolute inset-0 size-full object-contain"
      />
      {!playing && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
          {interactive ? (
            <button
              type="button"
              onClick={start}
              aria-label={`Lire la vidéo : ${title}`}
              className="group absolute inset-0 grid place-items-center"
            >
              <PlayBadge large />
            </button>
          ) : (
            <span className="absolute inset-0 grid place-items-center">
              <PlayBadge />
            </span>
          )}
        </>
      )}
    </>
  );
}

function YouTubeMedia({ id, title, interactive }: { id: string; title: string; interactive: boolean }) {
  const [playing, setPlaying] = React.useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- vignette YouTube externe, non optimisée volontairement */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
      {interactive ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Lire la vidéo : ${title}`}
          className="group absolute inset-0 grid place-items-center"
        >
          <PlayBadge large />
        </button>
      ) : (
        <span className="absolute inset-0 grid place-items-center">
          <PlayBadge />
        </span>
      )}
    </>
  );
}
