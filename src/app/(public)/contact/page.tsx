"use client";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { useApp } from "@/lib/providers";
import Button from "@/components/ui/Button";

const copy = {
  es: {
    title: "Contáctanos",
    sub: "¿Tienes un proyecto, una pregunta o simplemente quieres saludar? Estamos aquí.",
    emailLabel: "Email", locationLabel: "Ubicación", location: "Colombia 🇨🇴",
    name: "Nombre", namePh: "Tu nombre",
    email: "Email",
    subject: "Asunto", subjectPh: "¿De qué se trata?",
    message: "Mensaje", messagePh: "Cuéntanos tu idea o pregunta...",
    send: "Enviar mensaje", sending: "Enviando...",
    error: "Hubo un error. Intenta de nuevo o escríbenos directamente.",
    successTitle: "¡Mensaje enviado!",
    successSub: "Te responderemos lo antes posible. Gracias por contactarnos.",
    back: "Volver al inicio",
  },
  en: {
    title: "Contact Us",
    sub: "Have a project, a question or just want to say hi? We're here.",
    emailLabel: "Email", locationLabel: "Location", location: "Colombia 🇨🇴",
    name: "Name", namePh: "Your name",
    email: "Email",
    subject: "Subject", subjectPh: "What's this about?",
    message: "Message", messagePh: "Tell us your idea or question...",
    send: "Send message", sending: "Sending...",
    error: "Something went wrong. Try again or write to us directly.",
    successTitle: "Message sent!",
    successSub: "We'll get back to you as soon as possible. Thank you for reaching out.",
    back: "Back to home",
  },
};

const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors font-inter`;

export default function ContactPage() {
  const { lang } = useApp();
  const c = copy[lang];
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16"
        style={{ background: "var(--background)" }}>
        <div className="text-center glass rounded-3xl p-16 max-w-md mx-4">
          <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
          <h2 className="font-poppins font-bold text-2xl mb-3" style={{ color: "var(--foreground)" }}>
            {c.successTitle}
          </h2>
          <p className="font-inter mb-8" style={{ color: "var(--muted-clr)" }}>{c.successSub}</p>
          <Button href="/" variant="outline">{c.back}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

        {/* Header */}
        <div className="mb-14">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4" style={{ color: "var(--foreground)" }}>
            <span className="gradient-text">{c.title}</span>
          </h1>
          <p className="font-inter text-base max-w-xl" style={{ color: "var(--muted-clr)" }}>{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Info cards */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <Mail size={20} className="text-cyan mb-3" />
              <h3 className="font-poppins font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                {c.emailLabel}
              </h3>
              <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>kryphorlabs@gmail.com</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <MapPin size={20} className="text-soft-purp mb-3" />
              <h3 className="font-poppins font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                {c.locationLabel}
              </h3>
              <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>{c.location}</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-2 glass rounded-3xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-poppins font-bold mb-2" style={{ color: "var(--foreground)" }}>
                  {c.name}
                </label>
                <input required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass} placeholder={c.namePh}
                  style={{ background: "var(--surface-2)", color: "var(--foreground)", border: "1px solid var(--border-clr)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-poppins font-bold mb-2" style={{ color: "var(--foreground)" }}>
                  {c.email}
                </label>
                <input required type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass} placeholder="tu@email.com"
                  style={{ background: "var(--surface-2)", color: "var(--foreground)", border: "1px solid var(--border-clr)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-poppins font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {c.subject}
              </label>
              <input required value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClass} placeholder={c.subjectPh}
                style={{ background: "var(--surface-2)", color: "var(--foreground)", border: "1px solid var(--border-clr)" }}
              />
            </div>

            <div>
              <label className="block text-xs font-poppins font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {c.message}
              </label>
              <textarea required rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`} placeholder={c.messagePh}
                style={{ background: "var(--surface-2)", color: "var(--foreground)", border: "1px solid var(--border-clr)" }}
              />
            </div>

            {state === "error" && (
              <p className="text-red-400 text-sm font-inter">{c.error}</p>
            )}

            <Button type="submit" size="lg" disabled={state === "loading"}>
              <Send size={18} />
              {state === "loading" ? c.sending : c.send}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
