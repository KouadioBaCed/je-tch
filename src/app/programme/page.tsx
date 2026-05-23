import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProgramFull } from "@/components/sections/ProgramFull";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Le programme complet des Journées de l'Entreposage Tchologo 2026 : 3 jours, 3 villes — Kong, Ouangolodougou, Ferkessédougou. Panels, ateliers, rencontres B2B et terrain.",
  alternates: { canonical: `${EVENT.url}/programme` },
};

export default function ProgrammePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Programme"
        eyebrow={EVENT.datesLabel}
        title="Programme des 3 journées"
        description="Du constat à la signature des engagements : un parcours structuré sur trois villes du Tchologo."
      />

      <section className="section bg-surface">
        <div className="container max-w-5xl">
          <ProgramFull />

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-heading text-xl font-extrabold text-orange">Réservez vos journées</h2>
              <p className="mt-1 text-muted">Inscription gratuite pour les producteurs et coopératives.</p>
            </div>
            <Button asChild variant="primary" size="lg" className="shrink-0">
              <Link href="/#inscription">
                <CalendarCheck className="size-5" />
                Je m'inscris
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
