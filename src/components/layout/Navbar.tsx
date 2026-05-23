"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EVENT } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change.
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        // Toujours opaque (frosted) → lisible quel que soit le fond, y compris le haut
        // clair de l'affiche du Hero. L'élévation se renforce au scroll.
        "fixed inset-x-0 top-0 z-50 glass border-b transition-all duration-300",
        scrolled ? "border-line/70 shadow-soft" : "border-line/40"
      )}
    >
      <nav className="container flex h-16 items-center justify-between lg:h-[4.5rem]" aria-label="Navigation principale">
        <Link href="/" className="block rounded-md" aria-label="JE-TCH 2026 — Accueil">
          <Logo variant="color" priority className="h-9 lg:h-10" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                    active ? "text-green" : "text-ink/80 hover:text-green"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-orange"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="primary" size="sm">
            <Link href="/#inscription">
              <CalendarCheck className="size-4" />
              Je m'inscris
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-lg border border-line bg-white text-ink transition-colors lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative mx-4 mt-3 rounded-2xl border border-line bg-white p-4 shadow-soft-lg"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                          active ? "bg-green-50 text-green" : "text-ink hover:bg-surface"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 grid gap-2 border-t border-line pt-4">
                <Button asChild variant="primary" size="lg">
                  <Link href="/#inscription">Je m'inscris gratuitement</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/exposants">Devenir partenaire</Link>
                </Button>
                <p className="pt-1 text-center text-xs text-muted">{EVENT.datesLabel}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
