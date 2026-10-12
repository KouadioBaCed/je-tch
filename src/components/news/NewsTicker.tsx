import Link from "next/link";
import { formatNewsDate, type NewsItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface NewsTickerProps {
  items: NewsItem[];
  className?: string;
}

/**
 * Bandeau « À la une » façon chaîne d'info : les titres défilent en continu
 * (pause au survol / focus). La piste est dupliquée pour une boucle sans
 * couture (`animate-marquee` translate de -50 %), et répétée quand il y a
 * peu d'actualités pour toujours remplir la largeur.
 */
export function NewsTicker({ items, className }: NewsTickerProps) {
  if (items.length === 0) return null;

  const reps = Math.max(1, Math.ceil(5 / items.length));
  const track = Array.from({ length: reps }, () => items).flat();
  // ~9 s par titre : lecture confortable quel que soit le nombre d'éléments.
  const duration = `${Math.max(28, track.length * 9)}s`;

  return (
    <div
      className={cn("relative flex items-stretch overflow-hidden bg-green-dark text-white", className)}
      role="region"
      aria-label="Actualités à la une"
    >
      <div className="relative z-10 flex shrink-0 items-center gap-2.5 bg-orange px-4 font-heading text-[0.7rem] font-extrabold uppercase tracking-[0.18em] sm:px-6 sm:text-xs">
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/80" />
          <span className="relative size-2 rounded-full bg-white" />
        </span>
        À la une
        {/* biseau vers la piste */}
        <span aria-hidden className="absolute -right-3 top-0 h-full w-3 bg-orange [clip-path:polygon(0_0,100%_50%,0_100%)]" />
      </div>

      <div className="group relative min-w-0 flex-1 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_3rem,black_calc(100%-3rem),transparent)]">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
          style={{ animationDuration: duration }}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 || undefined}>
              {track.map((item, i) => (
                <li key={`${item.slug}-${i}`} className="flex items-center">
                  <Link
                    href={`/evenements/${item.slug}`}
                    tabIndex={copy === 1 || i >= items.length ? -1 : undefined}
                    className="flex items-center gap-3 whitespace-nowrap px-6 text-sm transition-colors hover:text-gold"
                  >
                    <span className="font-semibold tabular-nums text-gold">{formatNewsDate(item.date)}</span>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/60">{item.kicker}</span>
                    <span className="font-medium">{item.title}</span>
                  </Link>
                  <span aria-hidden className="size-1.5 rotate-45 bg-orange" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
