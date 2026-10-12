import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { NewsTicker } from "@/components/news/NewsTicker";
import { NewsFeatured } from "@/components/news/NewsFeatured";
import { NewsCard } from "@/components/news/NewsCard";
import { EVENT, NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Évènements & actualités",
  description:
    "Reportages, temps forts et communiqués officiels des Journées de l'Entreposage Tchologo 2026 (JE-TCH 2026).",
  alternates: { canonical: `${EVENT.url}/evenements` },
};

export default function EvenementsPage() {
  const [latest, ...others] = NEWS;

  return (
    <>
      <PageHeader
        breadcrumb="Évènements"
        eyebrow="Évènements & actualités"
        title="JE-TCH 2026 en temps réel"
        description="Reportages, temps forts et communiqués officiels autour des Journées de l'Entreposage Tchologo."
      />

      <NewsTicker items={NEWS} />

      <section className="section bg-surface">
        <div className="container">
          {latest && (
            <Reveal>
              <NewsFeatured item={latest} />
            </Reveal>
          )}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 0.06}>
                <NewsCard item={item} />
              </Reveal>
            ))}

            {/* Emplacement « à venir » : la rubrique s'enrichit au fil de l'évènement */}
            <Reveal delay={(others.length % 3) * 0.06}>
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line bg-white/60 p-8 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-gold/15 text-[#8a6d12]">
                  <Sparkles className="size-5" aria-hidden />
                </span>
                <p className="font-heading text-lg font-extrabold text-ink">D&apos;autres temps forts arrivent</p>
                <p className="max-w-xs text-sm leading-relaxed text-muted">
                  Reportages, photos et communiqués seront publiés ici avant, pendant et après les JE-TCH 2026.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
