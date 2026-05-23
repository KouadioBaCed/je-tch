import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Accordion, type AccordionItemData } from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { FAQ, EVENT } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur les Journées de l'Entreposage Tchologo 2026 : inscription gratuite, dates, warrantage, participation des coopératives, exposants.",
  alternates: { canonical: `${EVENT.url}/faq` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  const items: AccordionItemData[] = FAQ.map((item, i) => ({
    id: `faq-${i}`,
    trigger: item.q,
    content: item.a,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        breadcrumb="FAQ"
        eyebrow="Questions fréquentes"
        title="Tout ce qu'il faut savoir"
        description="Les réponses aux questions les plus posées par les producteurs, coopératives, acheteurs et partenaires."
        align="center"
      />

      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <Reveal>
            <Accordion items={items} />
          </Reveal>

          <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-2xl border border-line bg-green p-8 text-center text-white shadow-soft-green sm:p-10">
            <h2 className="text-balance font-heading text-2xl font-extrabold">Vous avez une autre question ?</h2>
            <p className="mx-auto mt-2 max-w-md text-pretty text-white/85">
              Notre équipe est disponible sur WhatsApp pour vous accompagner dans votre inscription.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href={EVENT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Écrire sur WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link href="/#inscription">
                  <CalendarCheck className="size-5" />
                  Je m'inscris
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
