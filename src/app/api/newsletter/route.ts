import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corps de requête invalide." }, { status: 400 });
  }

  if (!body.email || !EMAIL_RE.test(body.email.trim())) {
    return NextResponse.json({ ok: false, error: "Adresse e-mail invalide." }, { status: 422 });
  }

  // TODO(production): brancher un fournisseur d'emailing (Brevo, Mailchimp…).
  await new Promise((r) => setTimeout(r, 400));

  return NextResponse.json({ ok: true }, { status: 201 });
}
