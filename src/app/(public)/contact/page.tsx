"use client";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    back: "Volver",
    eyebrow: "Contacto",
    title: "Hablemos.",
    sub: "¿Tienes un proyecto, una pregunta o simplemente quieres saludar? Estamos aquí para escucharte.",
    emailLabel: "Email", locationLabel: "Ubicación", location: "Colombia",
    name: "Nombre", namePh: "Tu nombre completo",
    email: "Email", emailPh: "tu@email.com",
    subject: "Asunto", subjectPh: "¿De qué se trata?",
    message: "Mensaje", messagePh: "Cuéntanos tu idea, proyecto o pregunta...",
    send: "Enviar mensaje", sending: "Enviando...",
    error: "Hubo un error. Intenta de nuevo o escríbenos directamente.",
    successTitle: "Mensaje enviado.",
    successSub: "Te responderemos lo antes posible. Gracias por contactarnos.",
    backHome: "Volver al inicio",
  },
  en: {
    back: "Back",
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "Have a project, a question or just want to say hi? We're here to listen.",
    emailLabel: "Email", locationLabel: "Location", location: "Colombia",
    name: "Name", namePh: "Your full name",
    email: "Email", emailPh: "your@email.com",
    subject: "Subject", subjectPh: "What's this about?",
    message: "Message", messagePh: "Tell us about your idea, project or question...",
    send: "Send message", sending: "Sending...",
    error: "Something went wrong. Try again or write to us directly.",
    successTitle: "Message sent.",
    successSub: "We'll get back to you as soon as possible. Thank you for reaching out.",
    backHome: "Back to home",
  },
};

const inputStyle = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
  color: "var(--fg)",
};

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
        style={{ background: "var(--bg)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center rounded-3xl p-16 max-w-md mx-4"
          style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <CheckCircle size={32} style={{ color: "#22c55e" }} />
          </div>
          <h2 className="font-poppins font-bold text-2xl mb-3" style={{ color: "var(--fg)" }}>
            {c.successTitle}
          </h2>
          <p className="font-inter text-base mb-8" style={{ color: "var(--fg-muted)" }}>{c.successSub}</p>
          <a href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-semibold text-white text-sm"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}>
            <ArrowLeft size={15} /> {c.backHome}
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg)" }}>
      <div className="kl-container py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h1 className="font-poppins font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--fg)" }}>
            {c.title}
          </h1>
          <p className="font-inter text-lg max-w-xl" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
            {c.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: c.emailLabel, value: "kryphorlabs@gmail.com", color: "var(--accent)" },
              { icon: MapPin, label: c.locationLabel, value: c.location, color: "var(--accent-b)" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="rounded-2xl p-6"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}>
                  <Icon size={17} style={{ color }} />
                </div>
                <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-1.5"
                  style={{ color: "var(--fg-muted)" }}>
                  {label}
                </p>
                <p className="font-inter text-sm font-medium" style={{ color: "var(--fg)" }}>{value}</p>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={submit}
            className="lg:col-span-2 rounded-3xl p-8 sm:p-10 space-y-6"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { key: "name", label: c.name, ph: c.namePh, type: "text" },
                { key: "email", label: c.email, ph: c.emailPh, type: "email" },
              ].map(({ key, label, ph, type }) => (
                <div key={key}>
                  <label className="block font-poppins font-semibold text-xs tracking-widest uppercase mb-2.5"
                    style={{ color: "var(--fg-muted)" }}>
                    {label}
                  </label>
                  <input required type={type} value={form[key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    placeholder={ph}
                    className="w-full rounded-xl px-4 py-3.5 font-inter text-sm outline-none transition-all duration-200"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block font-poppins font-semibold text-xs tracking-widest uppercase mb-2.5"
                style={{ color: "var(--fg-muted)" }}>
                {c.subject}
              </label>
              <input required value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                placeholder={c.subjectPh}
                className="w-full rounded-xl px-4 py-3.5 font-inter text-sm outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>

            <div>
              <label className="block font-poppins font-semibold text-xs tracking-widest uppercase mb-2.5"
                style={{ color: "var(--fg-muted)" }}>
                {c.message}
              </label>
              <textarea required rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder={c.messagePh}
                className="w-full rounded-xl px-4 py-3.5 font-inter text-sm outline-none transition-all duration-200 resize-none"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>

            <AnimatePresence>
              {state === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="font-inter text-sm py-3 px-4 rounded-xl"
                  style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}>
                  {c.error}
                </motion.p>
              )}
            </AnimatePresence>

            <button type="submit" disabled={state === "loading"}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-poppins font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}>
              <Send size={16} />
              {state === "loading" ? c.sending : c.send}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
