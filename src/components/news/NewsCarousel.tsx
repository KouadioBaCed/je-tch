"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NewsItem } from "@/lib/data";
import { NewsCard } from "@/components/news/NewsCard";
import { cn } from "@/lib/utils";

/**
 * Carrousel horizontal (scroll-snap natif : swipe mobile, trackpad, clavier)
 * avec flèches qui se désactivent aux extrémités.
 */
export function NewsCarousel({ items }: { items: NewsItem[] }) {
  const ref = React.useRef<HTMLUListElement>(null);
  const [edges, setEdges] = React.useState({ start: true, end: false });

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  React.useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const arrow =
    "grid size-11 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition-all hover:border-green hover:text-green disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-xl font-extrabold text-ink sm:text-2xl">Plus d'actualités</h3>
        <div className="flex gap-2">
          <button type="button" className={arrow} onClick={() => scroll(-1)} disabled={edges.start} aria-label="Actualités précédentes">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" className={arrow} onClick={() => scroll(1)} disabled={edges.end} aria-label="Actualités suivantes">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <ul
        ref={ref}
        onScroll={update}
        className={cn(
          "-mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {items.map((item) => (
          <li key={item.slug} className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
