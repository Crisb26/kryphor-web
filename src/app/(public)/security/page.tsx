"use client";
import { motion } from "framer-motion";
import { Shield, Search, Eye, BookOpen, AlertTriangle, ArrowLeft } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    badge: "Próximamente",
    title: "Kryphor Security",
    sub: "El centro de seguridad digital de Kryphor Labs. Auditorías, escaneo de vulnerabilidades, monitoreo continuo y capacitación en buenas prácticas de seguridad.",
    features: [
      { icon: Search,       color: "#F59E0B", title: "Auditorías Web",              desc: "Análisis completo de seguridad de sitios y aplicaciones." },
      { icon: AlertTriangle,color: "#E74C3C", title: "Escaneo de Vulnerabilidades", desc: "Detección automática de puntos débiles en tu infraestructura." },
      { icon: Eye,          color: "#38BDF8", title: "Monitoreo Continuo",          desc: "Vigilancia 24/7 de tu entorno digital." },
      { icon: BookOpen,     color: "#818CF8", title: "Capacitación",                desc: "Forma a tu equipo en las mejores prácticas de seguridad." },
    ],
    notifyLabel: "Sé el primero en saberlo",
    notifyPh: "tu@email.com",
    notifyBtn: "Notificarme",
    back: "Volver",
  },
  en: {
    badge: "Coming Soon",
    title: "Kryphor Security",
    sub: "Kryphor Labs' digital security center. Audits, vulnerability scanning, continuous monitoring and security best practices training.",
    features: [
      { icon: Search,       color: "#F59E0B", title: "Web Audits",            desc: "Complete security analysis of sites and applications." },
      { icon: AlertTriangle,color: "#E74C3C", title: "Vulnerability Scanning", desc: "Automatic detection of weak points in your infrastructure." },
      { icon: Eye,          color: "#38BDF8", title: "Continuous Monitoring",  desc: "24/7 surveillance of your digital environment." },
      { icon: BookOpen,     color: "#818CF8", title: "Training",               desc: "Train your team in security best practices." },
    ],
    notifyLabel: "Be the first to know",
    notifyPh: "your@email.com",
    notifyBtn: "Notify me",
    back: "Back",
  },
};

export default function SecurityPage() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg)" }}>
      <div className="kl-container py-24">
        <a href="/" className="inline-flex items-center gap-2 font-inter text-sm mb-16 transition-colors"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"}>
          <ArrowLeft size={15} /> {c.back}
        </a>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block font-poppins font-semibold text-xs px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase"
            style={{ color: "#F59E0B", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)" }}>
            {c.badge}
          </span>

          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <Shield size={28} style={{ color: "#F59E0B" }} />
            </div>
            <h1 className="font-poppins font-bold" style={{ fontSize: "clamp(36px, 5.5vw, 64px)", color: "var(--fg)" }}>
              {c.title}
            </h1>
          </div>

          <p className="font-inter text-xl max-w-2xl mb-16" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
            {c.sub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {c.features.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-7"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-poppins font-semibold text-base mb-2" style={{ color: "var(--fg)" }}>{title}</h3>
                <p className="font-inter text-sm" style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl p-10 max-w-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderLeft: "3px solid #F59E0B" }}>
            <p className="font-poppins font-semibold text-sm mb-4" style={{ color: "var(--fg)" }}>{c.notifyLabel}</p>
            <div className="flex gap-3">
              <input type="email" placeholder={c.notifyPh}
                className="flex-1 rounded-xl px-4 py-3 font-inter text-sm outline-none transition-all"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}
                onFocus={e => (e.currentTarget.style.borderColor = "#F59E0B")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <button className="px-5 py-3 rounded-xl font-poppins font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #F59E0B, #E74C3C)" }}>
                {c.notifyBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
