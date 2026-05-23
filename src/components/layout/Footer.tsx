import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { NAV_LINKS, EVENT, PARTNER_CATEGORIES } from "@/lib/data";

const SOCIALS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "WhatsApp", icon: Send, href: EVENT.whatsappHref },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green-dark text-white">
      {/* subtle top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-green-light via-gold to-orange" />

      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <Logo variant="white" className="h-14" />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/70">
              {EVENT.fullTitle}. Un événement institutionnel et agricole majeur pour faire de
              l'entreposage un levier de richesse et de compétitivité dans la région du Tchologo.
            </p>

            <div className="mt-7 max-w-md">
              <p className="mb-2 text-sm font-semibold text-white">Recevez le programme & les actualités</p>
              <NewsletterForm tone="dark" />
            </div>

            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/15 hover:text-white"
                >
                  <s.icon className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#inscription" className="text-sm text-white/70 transition-colors hover:text-gold">
                  Inscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Partenaires */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Partenaires</h3>
            <ul className="mt-4 space-y-2.5">
              {PARTNER_CATEGORIES.slice(0, 6).map((p) => (
                <li key={p.label} className="text-sm text-white/70">
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{EVENT.citiesLabel}<br />{EVENT.region}, {EVENT.country}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={EVENT.whatsappHref} className="transition-colors hover:text-white">
                  {EVENT.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${EVENT.email}`} className="transition-colors hover:text-white">
                  {EVENT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/55">
            © {EVENT.year} {EVENT.fullTitle}. Tous droits réservés.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {EVENT.baseline}
          </p>
        </div>
      </div>
    </footer>
  );
}
