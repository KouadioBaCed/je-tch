import Link from "next/link";
import { ArrowRight, CalendarDays, Radio } from "lucide-react";
import { formatNewsDate, type NewsItem } from "@/lib/data";
import { NewsMedia } from "@/components/news/NewsMedia";
import { Button } from "@/components/ui/button";

/**
 * Actualité « à la une » : lecteur à gauche, éditorial à droite.
 * Le média reste jouable sur place ; le texte complet est sur la page dédiée.
 */
export function NewsFeatured({ item }: { item: NewsItem }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-soft-lg lg:grid-cols-12">
      <div className="relative bg-ink lg:col-span-7">
        <div className="flex h-full items-center">
          <NewsMedia media={item.media} title={item.title} sizes="(max-width: 1024px) 100vw, 58vw" />
        </div>
      </div>

      <div className="relative flex flex-col justify-center gap-5 p-7 sm:p-10 lg:col-span-5">
        <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green via-gold to-orange lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1 lg:bg-gradient-to-b" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-orange-hover">
            <Radio className="size-3.5" aria-hidden />
            {item.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green">
            <CalendarDays className="size-3.5" aria-hidden />
            <time dateTime={item.date}>{formatNewsDate(item.date, "long")}</time>
          </span>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{item.kicker}</p>

        <h3 className="-mt-2 text-balance text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          {item.title}
        </h3>

        <p className="text-pretty leading-relaxed text-muted">{item.excerpt}</p>

        {item.source && (
          <p className="border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-muted">
            Source : {item.source}
          </p>
        )}

        <div className="pt-1">
          <Button asChild variant="green">
            <Link href={`/evenements/${item.slug}`}>
              Lire le communiqué
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
