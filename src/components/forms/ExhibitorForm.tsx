"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Send, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<string, string>>;

interface FormState {
  organization: string;
  contact: string;
  email: string;
  phone: string;
  category: string;
  formula: string;
  message: string;
}

const INITIAL: FormState = {
  organization: "",
  contact: "",
  email: "",
  phone: "",
  category: "",
  formula: "",
  message: "",
};

export function ExhibitorForm() {
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (form.organization.trim().length < 2) next.organization = "Nom de l'organisation requis.";
    if (form.contact.trim().length < 2) next.contact = "Personne à contacter requise.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Adresse e-mail valide requise.";
    if (!/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim())) next.phone = "Téléphone valide requis.";
    if (!form.category) next.category = "Sélectionnez un profil.";
    if (!form.formula) next.formula = "Sélectionnez une formule.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "exposant", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setForm(INITIAL);
    setErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="grid size-16 place-items-center rounded-full bg-green-50 text-green">
          <CheckCircle2 className="size-9" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-extrabold text-ink">Demande envoyée !</h3>
        <p className="mt-2 max-w-md text-pretty text-muted">
          Merci. Notre équipe partenariats vous recontactera avec les formules de stand et de sponsoring
          adaptées à {form.organization}.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="green">
            <a href={`mailto:${EVENT.email}`}>
              <Send className="size-4" />
              Nous écrire
            </a>
          </Button>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="size-4" />
            Nouvelle demande
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="e-org" required>Organisation</Label>
          <Input
            id="e-org"
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            placeholder="Nom de l'entreprise / institution"
            aria-invalid={!!errors.organization}
            autoComplete="organization"
          />
          {errors.organization && <FieldError msg={errors.organization} />}
        </div>

        <div>
          <Label htmlFor="e-contact" required>Personne à contacter</Label>
          <Input
            id="e-contact"
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            placeholder="Nom & prénom"
            aria-invalid={!!errors.contact}
            autoComplete="name"
          />
          {errors.contact && <FieldError msg={errors.contact} />}
        </div>

        <div>
          <Label htmlFor="e-email" required>E-mail</Label>
          <Input
            id="e-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="contact@organisation.com"
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <FieldError msg={errors.email} />}
        </div>

        <div>
          <Label htmlFor="e-phone" required>Téléphone</Label>
          <Input
            id="e-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+225 ..."
            aria-invalid={!!errors.phone}
            autoComplete="tel"
          />
          {errors.phone && <FieldError msg={errors.phone} />}
        </div>

        <div>
          <Label htmlFor="e-category" required>Vous êtes</Label>
          <Select
            id="e-category"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            aria-invalid={!!errors.category}
          >
            <option value="" disabled>Sélectionnez…</option>
            <option value="acheteur">Acheteur / Transformateur</option>
            <option value="banque">Banque</option>
            <option value="assureur">Assureur</option>
            <option value="fournisseur">Fournisseur de matériel</option>
            <option value="institution">Institution / Élu</option>
            <option value="autre">Autre</option>
          </Select>
          {errors.category && <FieldError msg={errors.category} />}
        </div>

        <div>
          <Label htmlFor="e-formula" required>Formule souhaitée</Label>
          <Select
            id="e-formula"
            value={form.formula}
            onChange={(e) => update("formula", e.target.value)}
            aria-invalid={!!errors.formula}
          >
            <option value="" disabled>Sélectionnez…</option>
            <option value="stand">Stand exposant</option>
            <option value="sponsor">Sponsor (Or / Argent / Bronze)</option>
            <option value="institutionnel">Partenaire institutionnel</option>
            <option value="b2b">Rencontres B2B uniquement</option>
          </Select>
          {errors.formula && <FieldError msg={errors.formula} />}
        </div>
      </div>

      <div>
        <Label htmlFor="e-message">Votre projet (optionnel)</Label>
        <Textarea
          id="e-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Décrivez vos objectifs de participation…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          Une erreur est survenue. Réessayez ou écrivez-nous à {EVENT.email}.
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Notre équipe vous répond sous 48 h ouvrées.</p>
        <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
          Envoyer ma demande
        </Button>
      </div>
    </form>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
      {msg}
    </p>
  );
}
