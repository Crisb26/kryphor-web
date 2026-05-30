"use client";
import { motion } from "framer-motion";
import { Wifi, Users, Calendar, FileText, Bell, BarChart2, Shield, Smartphone, Download, Check, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    badge: "Subsidiaria de Kryphor Labs",
    title: "KryphorConnect",
    sub: "La plataforma de gestión todo-en-uno para organizaciones, fundaciones y empresas. Gestiona usuarios, eventos, inventario, documentos y más desde un solo lugar.",
    modules: "Módulos",
    downloadTitle: "Disponible en tu pantalla",
    downloadSub: "Instala KryphorConnect TV en cualquier Android TV o Google TV. También disponible como APK descargable para dispositivos sin Play Store.",
    downloadApk: "Descargar APK",
    downloadNote: "Compatible con Android TV · Google TV · Fire TV · APK vía USB",
    ctaTitle: "Empieza hoy",
    ctaSub: "Accede al panel de administración de KryphorConnect.",
    ctaBtn: "Ir al panel",
    available: "Disponible",
  },
  en: {
    badge: "A Kryphor Labs subsidiary",
    title: "KryphorConnect",
    sub: "The all-in-one management platform for organizations, foundations and companies. Manage users, events, inventory, documents and more from one place.",
    modules: "Modules",
    downloadTitle: "Available on your screen",
    downloadSub: "Install KryphorConnect TV on any Android TV or Google TV. Also available as a downloadable APK for devices without Play Store.",
    downloadApk: "Download APK",
    downloadNote: "Compatible with Android TV · Google TV · Fire TV · APK via USB",
    ctaTitle: "Start today",
    ctaSub: "Access the KryphorConnect administration panel.",
    ctaBtn: "Go to panel",
    available: "Available",
  },
};

const modules = [
  { icon: Users,     color: "#38BDF8", labelEs: "Usuarios y Roles",   labelEn: "Users & Roles" },
  { icon: Calendar,  color: "#34D399", labelEs: "Eventos",             labelEn: "Events" },
  { icon: FileText,  color: "#818CF8", labelEs: "Documentos",          labelEn: "Documents" },
  { icon: Shield,    color: "#F59E0B", labelEs: "Certificados",        labelEn: "Certificates" },
  { icon: BarChart2, color: "#F472B6", labelEs: "Reportes",            labelEn: "Reports" },
  { icon: Bell,      color: "#38BDF8", labelEs: "Notificaciones",      labelEn: "Notifications" },
  { icon: Smartphone,color: "#34D399", labelEs: "App Android TV",      labelEn: "Android TV App" },
  { icon: FileText,  color: "#818CF8", labelEs: "Comunicados",         labelEn: "Announcements" },
];

const features = [
  { es: "Panel de administración web completo",       en: "Full web administration panel" },
  { es: "App nativa para Android TV y Google TV",    en: "Native app for Android TV and Google TV" },
  { es: "APK descargable para TVs sin Play Store",   en: "Downloadable APK for TVs without Play Store" },
  { es: "Gestión de usuarios con roles y permisos",  en: "User management with roles and permissions" },
  { es: "Calendario y gestión de eventos",           en: "Calendar and event management" },
  { es: "Generación de certificados digitales",      en: "Digital certificate generation" },
];

export default function ConnectPage() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <div className="min-h-screen pt-20" style={{ background: "var(--bg)" }}>

      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56,189,248,0.1), transparent 70%)" }} />
        <div className="kl-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-inter text-xs"
              style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#38BDF8" }}>
              <Wifi size={12} /> {c.badge}
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
                <Wifi size={28} style={{ color: "#38BDF8" }} />
              </div>
              <h1 className="font-poppins font-bold" style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--fg)" }}>
                {c.title}
              </h1>
            </div>
            <p className="font-inter text-xl mb-10" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>
              {c.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                {c.ctaBtn} <ArrowRight size={15} />
              </a>
              <a href="/downloads/kryphorconnect-tv.apk" download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-sm transition-all hover:scale-[1.03]"
                style={{ color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.06)" }}>
                <Download size={15} /> {c.downloadApk}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24" style={{ background: "var(--bg-2)" }}>
        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-12"
              style={{ color: "#38BDF8" }}>
              {c.modules}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="rounded-2xl p-5 flex items-center gap-3 transition-all duration-200"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
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

      {/* Features */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="kl-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div className="rounded-3xl p-10" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderLeft: "3px solid #38BDF8" }}>
                <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-6" style={{ color: "#38BDF8" }}>
                  {c.downloadTitle}
                </p>
                <p className="font-inter text-base mb-8" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                  {c.downloadSub}
                </p>
                <a href="/downloads/kryphorconnect-tv.apk" download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-semibold text-sm text-white mb-4 transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                  <Download size={15} /> {c.downloadApk}
                </a>
                <p className="font-inter text-xs" style={{ color: "var(--fg-muted)" }}>{c.downloadNote}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
              className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3.5 py-4 px-5 rounded-2xl"
                  style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
                >
                  <Check size={14} style={{ color: "#38BDF8", flexShrink: 0 }} />
                  <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
                    {lang === "es" ? f.es : f.en}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
