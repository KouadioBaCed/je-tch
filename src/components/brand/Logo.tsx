import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "color" for light backgrounds, "white" (reverse) for dark backgrounds. */
  variant?: "color" | "white";
  /** Eager-load (use in the header / above the fold). */
  priority?: boolean;
  /** Size via Tailwind height class, e.g. "h-12". Defaults to h-10. */
  className?: string;
}

/**
 * Logo officiel JE-TCH (PNG transparent, sans fond blanc).
 * Sur fond sombre on applique un filtre pour obtenir une version blanche
 * (logo « reverse ») : contraste garanti, toujours zéro arrière-plan blanc.
 * Rendu via next/image → WebP/AVIF, taille servie minimale, aucun layout shift.
 */
export function Logo({ variant = "color", priority = false, className }: LogoProps) {
  return (
    <Image
      src="/logo/transparent.png"
      alt="JE-TCH 2026 — Les Journées de l'Entreposage Tchologo"
      width={1090}
      height={727}
      priority={priority}
      sizes="240px"
      className={cn(
        "h-10 w-auto select-none object-contain",
        variant === "white" && "[filter:brightness(0)_saturate(0)_invert(1)]",
        className
      )}
    />
  );
}
