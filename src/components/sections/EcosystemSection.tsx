"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Wifi, GraduationCap, Shield, Heart, Gamepad2, BookOpen, Check } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Ecosistema",
    title: "Una plataforma. Múltiples productos.",
    sub: "Kryphor Labs es el núcleo desde donde nacen todos los productos. Cada uno diseñado para resolver un problema real.",
    available: "Disponible",
    inDev: "En desarrollo",
    soon: "Próximamente",
    explore: "Explorar",
    learnMore: "Ver todos los productos",
    games: "Videojuegos",
    inDevShort: "En desarrollo",
  },
  en: {
    eyebrow: "Ecosystem",
    title: "One platform. Multiple products.",
    sub: "Kryphor Labs is the core from which all products are born. Each one designed to solve a real problem.",
    available: "Available",
    inDev: "In Development",
    soon: "Coming Soon",
    explore: "Explore",
    learnMore: "View all products",
    games: "Video Games",
    inDevShort: "In development",
  },
};

const mainProducts = [
  {
    id: "betho",
    icon: Bot,
    color: "#818CF8",
    href: "/betho",
    nameEs: "Betho AI",
    nameEn: "Betho AI",
    descEs: "El asistente de inteligencia artificial de Kryphor Labs. Chat, redacción, automatizaciones y más.",
    descEn: "Kryphor Labs' artificial intelligence assistant. Chat, writing, automations and more.",
    status: "available",
    features: { es: ["Chat en tiempo real", "Redacción inteligente", "API abierta"], en: ["Real-time chat", "Smart writing", "Open API"] },
  },
  {
    id: "connect",
    icon: Wifi,
    color: "#38BDF8",
    href: "/connect",
    nameEs: "KryphorConnect",
    nameEn: "KryphorConnect",
    descEs: "Plataforma de gestión para organizaciones, fundaciones y empresas. Android TV incluida.",
    descEn: "Management platform for organizations, foundations and companies. Android TV included.",
    status: "available",
    features: { es: ["App Android TV", "APK descargable", "Panel web"], en: ["Android TV app", "Downloadable APK", "Web panel"] },
  },
  {
    id: "academy",
    icon: GraduationCap,
    color: "#34D399",
    href: "/academy",
    nameEs: "Kryphor Academy",
    nameEn: "Kryphor Academy",
    descEs: "Centro educativo de tecnología. Cursos, certificaciones y rutas de aprendizaje.",
    descEn: "Technology education center. Courses, certifications and learning paths.",
    status: "soon",
    features: { es: ["Cursos en video", "Certificaciones", "Labs prácticos"], en: ["Video courses", "Certifications", "Practical labs"] },
  },
  {
    id: "security",
    icon: Shield,
    color: "#F59E0B",
    href: "/security",
    nameEs: "Kryphor Security",
    nameEn: "Kryphor Security",
    descEs: "Centro de seguridad digital. Auditorías, escaneo, monitoreo y buenas prácticas.",
    descEn: "Digital security center. Audits, scanning, monitoring and best practices.",
    status: "soon",
    features: { es: ["Auditorías web", "Escaneo de vulnerabilidades", "Capacitación"], en: ["Web audits", "Vulnerability scanning", "Training"] },
  },
  {
    id: "health",
    icon: Heart,
    color: "#F472B6",
    href: "/health",
    nameEs: "Kryphor Health",
    nameEn: "Kryphor Health",
    descEs: "Bienestar digital y productividad. Hábitos, seguimiento y salud preventiva.",
    descEn: "Digital wellness and productivity. Habits, tracking and preventive health.",
    status: "soon",
    features: { es: ["Hábitos digitales", "Productividad", "Salud preventiva"], en: ["Digital habits", "Productivity", "Preventive health"] },
  },
];

const gamesPreview = [
  { name: "Vórtex",   color: "#E74C3C", icon: Gamepad2 },
  { name: "PicaOro",  color: "#F39C12", icon: Gamepad2 },
  { name: "Toca & Ve", color: "#2E86AB", icon: Gamepad2 },
  { name: "ColoLetras", color: "#8E44AD", icon: Gamepad2 },
  { name: "Mi Devocionario", color: "#27AE60", icon: BookOpen },
];

const statusConfig = {
  available: { color: "#22c55e", labelEs: "Disponible",   labelEn: "Available" },
  soon:      { color: "#818CF8", labelEs: "Próximamente", labelEn: "Coming Soon" },
  inDev:     { color: "#38BDF8", labelEs: "En desarrollo", labelEn: "In Development" },
};

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-36" style={{ background: "var(--bg)" }}>
      <div className="kl-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-20"
        >
          <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-lg" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
            {c.sub}
          </p>
        </motion.div>

        {/* Main products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {mainProducts.map((p, i) => {
            const Icon = p.icon;
            const status = statusConfig[p.status as keyof typeof statusConfig];
            const features = p.features[lang];
            const name = lang === "es" ? p.nameEs : p.nameEn;
            const desc = lang === "es" ? p.descEs : p.descEn;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-3xl p-8 flex flex-col group"
                style={{
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}45`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${p.color}14`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}28` }}>
                    <Icon size={22} style={{ color: p.color }} />
                  </div>
                  <span className="font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                    style={{ color: status.color, background: `${status.color}15`, border: `1px solid ${status.color}28` }}>
                    {lang === "es" ? status.labelEs : status.labelEn}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--fg)" }}>
                  {name}
                </h3>
                <p className="font-inter text-sm mb-6 flex-1" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
                  {desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-7">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check size={12} style={{ color: p.color, flexShrink: 0 }} />
                      <span className="font-inter text-xs" style={{ color: "var(--fg-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={p.href}
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-sm transition-all duration-200 w-fit"
                  style={{ color: p.color }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "10px"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "8px"}
                >
                  {c.explore} <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}

          {/* Games card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="rounded-3xl p-8 flex flex-col"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)" }}>
                <Gamepad2 size={22} style={{ color: "#818CF8" }} />
              </div>
              <span className="font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                style={{ color: "#38BDF8", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                {c.inDevShort}
              </span>
            </div>

            <h3 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--fg)" }}>
              {c.games}
            </h3>
            <p className="font-inter text-sm mb-6 flex-1" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
              {lang === "es"
                ? "Videojuegos y apps independientes construidos con pasión. Entretenimiento con propósito."
                : "Independent video games and apps built with passion. Entertainment with purpose."}
            </p>

            <div className="flex flex-wrap gap-2">
              {gamesPreview.map(g => {
                const G = g.icon;
                return (
                  <div key={g.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-inter text-xs"
                    style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}20` }}>
                    <G size={10} />
                    {g.name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center pt-8"
        >
          <a href="/apps"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm transition-all duration-200 hover:gap-3"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"}
          >
            {c.learnMore} <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
