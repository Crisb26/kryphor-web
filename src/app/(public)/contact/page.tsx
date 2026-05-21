"use client";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
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
      <div className="min-h-screen bg-bg-deep flex items-center justify-center pt-20 pb-16">
        <div className="text-center glass rounded-3xl p-16 max-w-md mx-4">
          <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
          <h2 className="font-poppins font-bold text-kryphor-white text-2xl mb-3">
            ¡Mensaje enviado!
          </h2>
          <p className="text-muted mb-8">Te responderemos lo antes posible. Gracias por contactarnos.</p>
          <Button href="/" variant="outline">Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-deep pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h1>
          <p className="text-muted font-inter max-w-xl mx-auto">
            ¿Tienes un proyecto, una pregunta o simplemente quieres saludar? Estamos aquí.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <Mail size={20} className="text-cyan mb-3" />
              <h3 className="font-poppins font-bold text-kryphor-white text-sm mb-1">Email</h3>
              <p className="text-muted text-sm">kryphorlabs@gmail.com</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <MapPin size={20} className="text-soft-purp mb-3" />
              <h3 className="font-poppins font-bold text-kryphor-white text-sm mb-1">Ubicación</h3>
              <p className="text-muted text-sm">Colombia 🇨🇴</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-2 glass rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-kryphor-white text-xs font-poppins font-bold mb-2">Nombre</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-kryphor-white text-xs font-poppins font-bold mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-kryphor-white text-xs font-poppins font-bold mb-2">Asunto</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors"
                placeholder="¿De qué se trata?"
              />
            </div>

            <div>
              <label className="block text-kryphor-white text-xs font-poppins font-bold mb-2">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors resize-none"
                placeholder="Cuéntanos tu idea o pregunta..."
              />
            </div>

            {state === "error" && (
              <p className="text-red-400 text-sm">Hubo un error. Intenta de nuevo o escríbenos directamente.</p>
            )}

            <Button type="submit" size="lg" disabled={state === "loading"}>
              <Send size={18} />
              {state === "loading" ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
