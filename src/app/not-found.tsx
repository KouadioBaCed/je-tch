import Link from "next/link";
import { Home, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden surface-green-dark px-5 text-center text-white">
      <div className="noise-overlay absolute inset-0 -z-10 opacity-[0.05]" />
      <div className="absolute -top-20 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-green/40 blur-3xl" />
      <div className="flex flex-col items-center">
        <Logo variant="white" priority className="h-16" />
        <p className="mt-10 font-heading text-7xl font-extrabold text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 text-balance text-2xl font-extrabold sm:text-3xl">Page introuvable</h1>
        <p className="mt-3 max-w-md text-pretty text-white/70">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href="/">
              <Home className="size-5" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <Link href="/#inscription">
              <CalendarCheck className="size-5" />
              Je m'inscris
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
