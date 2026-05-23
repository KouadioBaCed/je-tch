import { NextResponse } from "next/server";

/**
 * Endpoint d'inscription (producteurs & exposants).
 *
 * Après validation, la demande est relayée vers un Google Apps Script déployé
 * en « application web », qui écrit une ligne dans Google Sheets.
 * Configurez `GOOGLE_SHEETS_WEBHOOK_URL` (et, optionnel, `GOOGLE_SHEETS_SECRET`)
 * dans `.env.local`. Le script à coller est dans `docs/google-sheets-apps-script.gs`.
 *
 * Sans webhook configuré, l'endpoint reste en « mode démo » : il valide et
 * confirme la réception sans rien persister (utile en local).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,}$/;

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.GOOGLE_SHEETS_SECRET ?? "";

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

  const ref = `JE-TCH-${Date.now().toString(36).toUpperCase()}`;
  const submittedAt = new Date().toISOString();

  // Persistance : relais vers Google Apps Script → Google Sheets.
  if (WEBHOOK_URL) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, ref, submittedAt, secret: WEBHOOK_SECRET }),
        signal: controller.signal,
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || (data && data.ok === false)) {
        console.error("[register] webhook Google a échoué", res.status, data);
        return NextResponse.json(
          { ok: false, error: "Enregistrement impossible pour le moment. Réessayez." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[register] erreur réseau vers le webhook Google", err);
      return NextResponse.json(
        { ok: false, error: "Service momentanément indisponible. Réessayez." },
        { status: 502 }
      );
    } finally {
      clearTimeout(timeout);
    }
  } else {
    console.warn(
      "[register] GOOGLE_SHEETS_WEBHOOK_URL absent : inscription validée mais NON persistée (mode démo)."
    );
  }

  return NextResponse.json({ ok: true, message: "Inscription bien reçue.", ref }, { status: 201 });
}
