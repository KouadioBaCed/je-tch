import { Clock, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import type { NewsAgendaEntry } from "@/lib/data";

/** Déroulé horaire d'une journée terrain — frise verticale. */
export function NewsAgenda({ entries }: { entries: NewsAgendaEntry[] }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-green/20 pl-6 sm:pl-8">
      {entries.map((entry, i) => (
        <li key={i} className="relative">
          <Reveal delay={i * 0.04}>
            <span
              className="absolute -left-[2.05rem] top-1 grid size-5 place-items-center rounded-full border-4 border-white bg-orange shadow-soft sm:-left-[2.55rem]"
              aria-hidden
            />
            <p className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-bold tracking-wide text-green">
              <Clock className="size-3.5" aria-hidden />
              {entry.time}
            </p>
            <h3 className="mt-3 font-heading text-xl font-extrabold text-ink">{entry.title}</h3>
            {entry.place && (
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-muted">
                <MapPin className="size-4 text-orange" aria-hidden />
                {entry.place}
              </p>
            )}
  
            {entry.participants && (
              <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-green">
                  <Users className="size-4" aria-hidden />
                  Participants
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/80">
                  {entry.participants.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
  
            {entry.points && (
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">Points abordés</p>
                <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                  {entry.points.map((point, j) => (
                    <li key={point} className="flex gap-3 rounded-xl border border-line bg-white p-3 text-sm text-ink/85">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange/10 text-xs font-bold text-orange-hover">
                        {j + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ol>
              </div>
            )}
  
            {entry.notes?.map((note) => (
              <p key={note} className="mt-4 text-pretty leading-[1.8] text-ink/80">
                {note}
              </p>
          ))}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
