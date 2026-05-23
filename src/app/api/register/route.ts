import { NextResponse } from "next/server";

/**
 * Endpoint d'inscription (producteurs & exposants).
 *
 * En production : connecter ici un service de persistance (Supabase, base de
 * données, CRM, email transactionnel…). Pour l'instant on valide la charge utile
 * côté serveur et on confirme la réception.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corps de requête invalide." }, { status: 400 });
  }

  const type = body.type;

  if (type === "producteur") {
    const { fullName, phone, locality, profile, filiere } = body as Record<string, string>;
    if (
      !fullName || fullName.trim().length < 2 ||
      !phone || !PHONE_RE.test(phone.trim()) ||
      !locality || locality.trim().length < 2 ||
      !profile || !filiere
    ) {
      return NextResponse.json({ ok: false, error: "Champs obligatoires manquants ou invalides." }, { status: 422 });
    }
  } else if (type === "exposant") {
    const { organization, contact, email, phone, category, formula } = body as Record<string, string>;
    if (
      !organization || organization.trim().length < 2 ||
      !contact || contact.trim().length < 2 ||
      !email || !EMAIL_RE.test(email.trim()) ||
      !phone || !PHONE_RE.test(phone.trim()) ||
      !category || !formula
    ) {
      return NextResponse.json({ ok: false, error: "Champs obligatoires manquants ou invalides." }, { status: 422 });
    }
  } else {
    return NextResponse.json({ ok: false, error: "Type d'inscription inconnu." }, { status: 400 });
  }

  // TODO(production): persister la demande / notifier l'équipe.
  // Latence simulée pour une UX de chargement réaliste en démo.
  await new Promise((r) => setTimeout(r, 600));

  return NextResponse.json(
    { ok: true, message: "Inscription bien reçue.", ref: `JE-TCH-${Date.now().toString(36).toUpperCase()}` },
    { status: 201 }
  );
}
