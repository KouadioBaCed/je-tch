import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink, Quote, Radio } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { NewsMedia } from "@/components/news/NewsMedia";
import { NewsCard } from "@/components/news/NewsCard";
import { EVENT, NEWS, formatNewsDate, getNewsBySlug } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const item = getNewsBySlug((await params).slug);
  if (!item) return {};
  const url = `${EVENT.url}/evenements/${item.slug}`;
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: item.title,
      description: item.excerpt,
      publishedTime: item.date,
      ...(item.media.type === "image" && { images: [{ url: item.media.src, alt: item.media.alt }] }),
      ...(item.media.type === "video" && { videos: [{ url: item.media.src }] }),
    },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const item = getNewsBySlug((await params).slug);
  if (!item) notFound();

  const related = NEWS.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHeader breadcrumb="Évènements" eyebrow={item.kicker} title={item.title} description={item.excerpt} />

      <article className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <Link
                href="/evenements"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green-dark"
              >
                <ArrowLeft className="size-4" />
                Tous les évènements
              </Link>
            </Reveal>

            <Reveal className="mt-6 overflow-hidden rounded-3xl border border-line bg-ink shadow-soft-lg">
              <NewsMedia media={item.media} title={item.title} priority sizes="(max-width: 1024px) 100vw, 896px" />
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-orange-hover">
                <Radio className="size-3.5" aria-hidden />
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green">
                <CalendarDays className="size-3.5" aria-hidden />
                <time dateTime={item.date}>{formatNewsDate(item.date, "long")}</time>
              </span>
            </Reveal>

            <div className="mx-auto mt-8 max-w-prose space-y-5 text-pretty text-[1.05rem] leading-[1.8] text-ink/85">
              {item.body.map((paragraph, i) => (
                <Reveal key={i}>
                  <p className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:font-extrabold first-letter:leading-[0.9] first-letter:text-orange" : undefined}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              {item.source && (
                <Reveal className="!mt-10 flex gap-4 rounded-2xl border border-line bg-surface p-6">
                  <Quote className="size-6 shrink-0 text-gold" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-green">Source</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.source}</p>
                  </div>
                </Reveal>
              )}

              {item.link && (
                <Reveal>
                  <Button asChild variant="green">
                    <a href={item.link.href} target="_blank" rel="noopener noreferrer">
                      {item.link.label}
                      <ExternalLink />
                    </a>
                  </Button>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-tight bg-surface">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">À lire aussi</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
