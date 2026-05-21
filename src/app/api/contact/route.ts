export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const body: ContactForm = await req.json();

  if (!body.name || !body.email || !body.subject || !body.message) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  // Aquí se puede integrar con email (Resend, Nodemailer, etc.)
  // Por ahora logueamos el mensaje
  console.log("[Contact Form]", {
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message.slice(0, 100),
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
