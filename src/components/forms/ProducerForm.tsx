"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Send, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PRODUCTS, EVENT } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<string, string>>;

interface FormState {
  fullName: string;
  phone: string;
  locality: string;
  profile: string;
  filiere: string;
  tonnage: string;
  message: string;
}

const INITIAL: FormState = {
  fullName: "",
  phone: "",
  locality: "",
  profile: "",
  filiere: "",
  tonnage: "",
  message: "",
};

export function ProducerForm() {
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (form.fullName.trim().length < 2) next.fullName = "Nom requis (min. 2 caractères).";
    if (!/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim())) next.phone = "Numéro de téléphone valide requis.";
    if (form.locality.trim().length < 2) next.locality = "Localité requise.";
    if (!form.profile) next.profile = "Sélectionnez un profil.";
    if (!form.filiere) next.filiere = "Sélectionnez une filière.";
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
        body: JSON.stringify({ type: "producteur", ...form }),
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
        <h3 className="mt-5 font-heading text-2xl font-extrabold text-ink">Inscription enregistrée !</h3>
        <p className="mt-2 max-w-md text-pretty text-muted">
          Merci {form.fullName.split(" ")[0]}. Notre équipe vous recontactera. Vous pouvez aussi nous
          écrire sur WhatsApp pour accélérer votre prise en charge.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="green">
            <a href={EVENT.whatsappHref} target="_blank" rel="noopener noreferrer">
              <Send className="size-4" />
              Confirmer sur WhatsApp
            </a>
          </Button>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="size-4" />
            Nouvelle inscription
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="p-name" required>Nom du producteur / de la coopérative</Label>
          <Input
            id="p-name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Ex. Coopérative AGRI-KONG"
            aria-invalid={!!errors.fullName}
            autoComplete="organization"
          />
          {errors.fullName && <FieldError msg={errors.fullName} />}
        </div>

        <div>
          <Label htmlFor="p-phone" required>Téléphone (WhatsApp)</Label>
          <Input
            id="p-phone"
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
          <Label htmlFor="p-locality" required>Village / Localité</Label>
          <Input
            id="p-locality"
            value={form.locality}
            onChange={(e) => update("locality", e.target.value)}
            placeholder="Ex. Ouangolodougou"
            aria-invalid={!!errors.locality}
          />
          {errors.locality && <FieldError msg={errors.locality} />}
        </div>

        <div>
          <Label htmlFor="p-profile" required>Vous êtes</Label>
          <Select
            id="p-profile"
            value={form.profile}
            onChange={(e) => update("profile", e.target.value)}
            aria-invalid={!!errors.profile}
          >
            <option value="" disabled>Sélectionnez…</option>
            <option value="producteur">Producteur individuel</option>
            <option value="cooperative">Coopérative</option>
            <option value="union">Union de coopératives</option>
          </Select>
          {errors.profile && <FieldError msg={errors.profile} />}
        </div>

        <div>
          <Label htmlFor="p-filiere" required>Filière principale</Label>
          <Select
            id="p-filiere"
            value={form.filiere}
            onChange={(e) => update("filiere", e.target.value)}
            aria-invalid={!!errors.filiere}
          >
            <option value="" disabled>Sélectionnez…</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </Select>
          {errors.filiere && <FieldError msg={errors.filiere} />}
        </div>

        <div>
          <Label htmlFor="p-tonnage">Tonnage estimé / an (optionnel)</Label>
          <Input
            id="p-tonnage"
            value={form.tonnage}
            onChange={(e) => update("tonnage", e.target.value)}
            placeholder="Ex. 120 tonnes"
            inputMode="numeric"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="p-message">Message (optionnel)</Label>
        <Textarea
          id="p-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Vos besoins, vos questions…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp ({EVENT.whatsapp}).
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Inscription 100 % gratuite. Vos données restent confidentielles.</p>
        <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
          M'inscrire gratuitement
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
