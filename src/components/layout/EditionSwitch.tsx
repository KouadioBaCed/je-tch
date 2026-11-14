"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Bascule entre la nouvelle édition (JET-PO 2027) et l'archive (JE-TCH 2026). */
export function EditionSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const isArchive = pathname.startsWith("/edition-2026");
  const items = [
    { href: "/", label: "2027", active: !isArchive && pathname === "/" },
    { href: "/edition-2026", label: "2026", active: isArchive },
  ];
  return (
    <div className={cn("inline-flex rounded-full border border-line bg-white p-0.5 text-xs font-bold", className)} role="group" aria-label="Choisir l'édition">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          aria-current={i.active ? "page" : undefined}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors",
            i.active ? "bg-green text-white" : "text-ink/70 hover:text-green"
          )}
        >
          {i.label}
        </Link>
      ))}
    </div>
  );
}
