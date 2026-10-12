import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatNewsDate, type NewsItem } from "@/lib/data";
import { NewsMedia } from "@/components/news/NewsMedia";
import { cn } from "@/lib/utils";

/** Carte compacte d'actualité — carrousel d'accueil et grille /evenements. */
export function NewsCard({ item, className }: { item: NewsItem; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-soft-lg",
        className
      )}
    >
      <div className="relative">
        <NewsMedia
          media={item.media}
          title={item.title}
          interactive={false}
          ratio={16 / 10}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-green shadow-soft">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs font-semibold text-muted">
          <time dateTime={item.date} className="tabular-nums text-orange">
            {formatNewsDate(item.date)}
          </time>
          <span aria-hidden className="size-1 rounded-full bg-line" />
          <span className="uppercase tracking-[0.12em]">{item.kicker}</span>
        </p>
        <h3 className="mt-3 text-lg font-extrabold leading-snug text-ink transition-colors group-hover:text-green">
          <Link href={`/evenements/${item.slug}`} className="after:absolute after:inset-0">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-green">
          Lire la suite
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
