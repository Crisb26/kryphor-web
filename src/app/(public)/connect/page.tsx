"use client";
import { motion } from "framer-motion";
import { Wifi, Users, Calendar, FileText, Bell, BarChart2, Shield, Smartphone, Download, Check, ArrowRight, Tv, ExternalLink } from "lucide-react";
import { useApp } from "@/lib/providers";

const PANEL_URL = "https://connect.kryphorlabs.com";
const APK_URL   = "/downloads/kryphorconnect-tv.apk";

const copy = {
  es: {
    badge:        "Subsidiaria de Kryphor Labs",
    available:    "Disponible",
    title:        "KryphorConnect",
    sub:          "La plataforma de gestión todo-en-uno para organizaciones, fundaciones y empresas. Gestiona usuarios, eventos, inventario, documentos y más desde un solo lugar.",
    ctaPanel:     "Abrir panel de administración",
    ctaApk:       "Descargar APK Android TV",
    modules:      "Módulos",
    tvTitle:      "KryphorConnect TV",
    tvSub:        "Gestiona el contenido en tus pantallas Android TV, Google TV o Fire TV. También funciona con Raspberry Pi. Instala la app directamente desde Play Store o descarga el APK para TVs sin tienda.",
    playStore:    "Ver en Play Store",
    apkDirect:    "Descargar APK directo",
    apkNote:      "APK universal · Android TV · Google TV · Fire TV · Raspberry Pi",
    features:     "Incluye",
    featuresList: [
      "Panel web de administración completo",
      "App nativa Android TV y Google TV",
      "APK descargable para TVs sin Play Store",
      "Instalación por USB o descarga directa",
      "Compatible con Raspberry Pi",
      "Gestión de usuarios con roles y permisos",
      "Calendario y eventos",
      "Generación de certificados digitales",
    ],
  },
  en: {
    badge:        "A Kryphor Labs subsidiary",
    available:    "Available",
    title:        "KryphorConnect",
    sub:          "The all-in-one management platform for organizations, foundations and companies. Manage users, events, inventory, documents and more from one place.",
    ctaPanel:     "Open administration panel",
    ctaApk:       "Download Android TV APK",
    modules:      "Modules",
    tvTitle:      "KryphorConnect TV",
    tvSub:        "Manage content on your Android TV, Google TV or Fire TV screens. Also works with Raspberry Pi. Install from the Play Store or download the APK for TVs without a store.",
    playStore:    "View on Play Store",
    apkDirect:    "Download APK directly",
    apkNote:      "Universal APK · Android TV · Google TV · Fire TV · Raspberry Pi",
    features:     "Includes",
    featuresList: [
      "Full web administration panel",
      "Native Android TV and Google TV app",
      "Downloadable APK for TVs without Play Store",
      "Installation via USB or direct download",
      "Compatible with Raspberry Pi",
      "User management with roles and permissions",
      "Calendar and events",
      "Digital certificate generation",
    ],
  },
};

const modules = [
  { icon: Users,      color: "#38BDF8", labelEs: "Usuarios y Roles",  labelEn: "Users & Roles" },
  { icon: Calendar,   color: "#34D399", labelEs: "Eventos",            labelEn: "Events" },
  { icon: FileText,   color: "#818CF8", labelEs: "Documentos",         labelEn: "Documents" },
  { icon: Shield,     color: "#F59E0B", labelEs: "Certificados",       labelEn: "Certificates" },
  { icon: BarChart2,  color: "#F472B6", labelEs: "Reportes",           labelEn: "Reports" },
  { icon: Bell,       color: "#38BDF8", labelEs: "Notificaciones",     labelEn: "Notifications" },
  { icon: Smartphone, color: "#34D399", labelEs: "App Android TV",     labelEn: "Android TV App" },
  { icon: FileText,   color: "#818CF8", labelEs: "Comunicados",        labelEn: "Announcements" },
];

export default function ConnectPage() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg)" }}>

      {/* Hero */}
      <section style={{ padding: "clamp(4rem, 8vw, 8rem) 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56,189,248,0.1), transparent 70%)" }} />

        <div className="kl-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>

            <div className="inline-flex items-center gap-2 rounded-full mb-8 font-inter"
              style={{ padding: "0.5rem 1.25rem", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#38BDF8", fontSize: "0.75rem" }}>
              <Wifi size={12} /> {c.badge}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
                <Wifi size={28} style={{ color: "#38BDF8" }} />
              </div>
              <div>
                <h1 className="font-poppins font-bold" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--fg)" }}>
                  {c.title}
                </h1>
                <span className="font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                  style={{ color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
                  {c.available}
                </span>
              </div>
            </div>

            <p className="font-inter mb-12 max-w-2xl"
              style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--fg-muted)", lineHeight: 1.85 }}>
              {c.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PANEL_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-poppins font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.03]"
                style={{ padding: "1rem 2rem", borderRadius: "3rem", background: "linear-gradient(135deg, #38BDF8, #818CF8)", boxShadow: "0 8px 32px rgba(56,189,248,0.25)" }}>
                {c.ctaPanel} <ExternalLink size={15} />
              </a>
              <a href={APK_URL} download
                className="inline-flex items-center gap-2.5 font-poppins font-semibold text-sm transition-all hover:scale-[1.03]"
                style={{ padding: "1rem 2rem", borderRadius: "3rem", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.06)" }}>
                <Download size={15} /> {c.ctaApk}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Módulos */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg-2)" }}>
        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-12"
              style={{ color: "#38BDF8" }}>
              {c.modules}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex items-center gap-3 transition-all duration-200"
                    style={{ padding: "clamp(1rem, 2vw, 1.5rem)", borderRadius: "1rem", background: "var(--bg)", border: "1px solid var(--border)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${m.color}40`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${m.color}18` }}>
                      <Icon size={16} style={{ color: m.color }} />
                    </div>
                    <span className="font-inter text-sm font-medium" style={{ color: "var(--fg)" }}>
                      {lang === "es" ? m.labelEs : m.labelEn}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TV App — Play Store + APK + Raspberry Pi */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg)" }}>
        <div className="kl-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — description */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
                  <Tv size={24} style={{ color: "#38BDF8" }} />
                </div>
                <h2 className="font-poppins font-bold" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--fg)" }}>
                  {c.tvTitle}
                </h2>
              </div>

              <p className="font-inter mb-10"
                style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>
                {c.tvSub}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={APK_URL} download
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ padding: "0.9rem 1.75rem", borderRadius: "0.875rem", background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                  <Download size={15} /> {c.apkDirect}
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-sm transition-all hover:opacity-80"
                  style={{ padding: "0.9rem 1.75rem", borderRadius: "0.875rem", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.06)" }}>
                  <ExternalLink size={15} /> {c.playStore}
                </a>
              </div>

              <p className="font-inter text-xs mt-5" style={{ color: "var(--fg-muted)" }}>
                {c.apkNote}
              </p>
            </motion.div>

            {/* Right — features list */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
              className="flex flex-col gap-3">
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}>
                {c.features}
              </p>
              {c.featuresList.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-4"
                  style={{ padding: "clamp(0.9rem, 1.5vw, 1.25rem) clamp(1.25rem, 2vw, 1.75rem)", borderRadius: "1rem", background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                  <Check size={14} style={{ color: "#38BDF8", flexShrink: 0 }} />
                  <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
