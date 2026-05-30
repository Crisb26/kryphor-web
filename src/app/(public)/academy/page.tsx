"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, FlaskConical, ArrowLeft } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    badge: "Próximamente",
    title: "Kryphor Academy",
    sub: "El centro educativo de tecnología de Kryphor Labs. Aprende programación, inteligencia artificial, diseño y más con cursos prácticos y certificaciones reconocidas.",
    features: [
      { icon: BookOpen,    color: "#34D399", title: "Cursos en Video", desc: "Contenido de calidad sobre programación, IA, diseño y más." },
      { icon: Award,       color: "#38BDF8", title: "Certificaciones",  desc: "Obtén certificados verificables que acrediten tus habilidades." },
      { icon: FlaskConical,color: "#818CF8", title: "Labs Prácticos",   desc: "Practica en entornos reales con proyectos guiados." },
      { icon: GraduationCap,color: "#F59E0B",title: "Rutas de Aprendizaje", desc: "Caminos estructurados para alcanzar tus metas profesionales." },
    ],
    notifyLabel: "Notifícame cuando lance",
    notifyPh: "tu@email.com",
    notifyBtn: "Avisar cuando esté listo",
    back: "Volver",
  },
  en: {
    badge: "Coming Soon",
    title: "Kryphor Academy",
    sub: "Kryphor Labs' technology education center. Learn programming, artificial intelligence, design and more with practical courses and recognized certifications.",
    features: [
      { icon: BookOpen,    color: "#34D399", title: "Video Courses",       desc: "Quality content on programming, AI, design and more." },
      { icon: Award,       color: "#38BDF8", title: "Certifications",       desc: "Get verifiable certificates that accredit your skills." },
      { icon: FlaskConical,color: "#818CF8", title: "Practical Labs",       desc: "Practice in real environments with guided projects." },
      { icon: GraduationCap,color: "#F59E0B",title: "Learning Paths",      desc: "Structured paths to reach your professional goals." },
    ],
    notifyLabel: "Notify me when it launches",
    notifyPh: "your@email.com",
    notifyBtn: "Notify me",
    back: "Back",
  },
};

export default function AcademyPage() {
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
            style={{ color: "#34D399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)" }}>
            {c.badge}
          </span>

          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)" }}>
              <GraduationCap size={28} style={{ color: "#34D399" }} />
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

          <div className="rounded-3xl p-10 max-w-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderLeft: "3px solid #34D399" }}>
            <p className="font-poppins font-semibold text-sm mb-4" style={{ color: "var(--fg)" }}>{c.notifyLabel}</p>
            <div className="flex gap-3">
              <input type="email" placeholder={c.notifyPh}
                className="flex-1 rounded-xl px-4 py-3 font-inter text-sm outline-none transition-all"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}
                onFocus={e => (e.currentTarget.style.borderColor = "#34D399")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <button className="px-5 py-3 rounded-xl font-poppins font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #34D399, #38BDF8)" }}>
                {c.notifyBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
