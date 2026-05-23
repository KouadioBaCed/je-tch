import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: string;
  align?: "left" | "center";
}

/** Compact institutional banner used at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  align = "left",
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden surface-green-dark pb-14 pt-28 text-white lg:pb-20 lg:pt-36">
      <div className="noise-overlay absolute inset-0 -z-10 opacity-[0.04]" />
      <div className="absolute -left-24 top-10 -z-10 size-80 rounded-full bg-green/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 -z-10 size-72 rounded-full bg-green/30 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-grid-soft bg-[size:40px_40px] opacity-[0.5] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />

      <div className={cn("container", align === "center" && "text-center")}>
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className={cn("flex items-center gap-1.5 text-xs font-medium text-white/60", align === "center" && "justify-center")}>
          <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-gold">{breadcrumb}</span>
        </nav>

        {eyebrow && (
          <span className={cn("mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white")}>
            <span className="size-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
        )}

        <h1 className={cn("mt-4 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl", align === "center" && "mx-auto max-w-3xl")}>
          {title}
        </h1>

        {description && (
          <p className={cn("mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg", align === "center" && "mx-auto")}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
