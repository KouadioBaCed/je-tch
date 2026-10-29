import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { NewsFeatured } from "@/components/news/NewsFeatured";
import { NewsCarousel } from "@/components/news/NewsCarousel";

/**
 * Rubrique « Évènements » de l'accueil :
 * actualité la plus récente en vedette →
 * carrousel des suivantes (affiché dès qu'il y en a plus d'une).
 * Contenu : `NEWS` dans lib/data.ts.
 */
export function NewsSection() {
  const [latest, ...others] = NEWS;
  if (!latest) return null;

  return (
    <section id="evenements" className="relative bg-surface" aria-labelledby="news-title">

      <div className="section container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Évènements & actualités"
            eyebrowClassName="text-green"
            eyebrowDotClassName="bg-green"
            title={<span id="news-title">JE-TCH 2026 en temps réel</span>}
            description="Reportages, temps forts et communiqués officiels : suivez la mobilisation autour de l'entreposage dans le Tchologo."
          />
          <Reveal className="shrink-0">
            <Button asChild variant="outline">
              <Link href="/evenements">
                Tous les évènements
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <NewsFeatured item={latest} />
        </Reveal>

        {others.length > 0 && (
          <Reveal className="mt-16">
            <NewsCarousel items={others} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
