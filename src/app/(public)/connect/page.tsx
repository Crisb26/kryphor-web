"use client";
import { motion } from "framer-motion";
import { Wifi, Tv, BarChart2, Calendar, Layout, Bell, Download, Check, ArrowRight, ExternalLink, Play, Monitor } from "lucide-react";
import { useApp } from "@/lib/providers";

const PANEL_URL = "https://connect.kryphorlabs.com";
const APK_URL   = "/downloads/kryphorconnect-tv.apk";

const copy = {
  es: {
    badge:        "Subsidiaria de Kryphor Labs",
    available:    "Disponible",
    title:        "KryphorConnect",
    sub:          "La plataforma de publicidad digital inteligente para negocios y empresas. Gestiona campañas, programa contenido y monitorea estadísticas en tus pantallas desde un panel web centralizado.",
    ctaPanel:     "Abrir panel de administración",
    ctaApk:       "Descargar APK Android TV",
    howTitle:     "¿Cómo funciona?",
    howSub:       "Tres pasos para que tu negocio tenga publicidad digital profesional.",
    steps: [
      { num: "01", title: "Conecta tu pantalla", desc: "Instala KryphorConnect TV en cualquier televisor Android. Si no tiene Play Store, descarga el APK directamente." },
      { num: "02", title: "Crea tus campañas", desc: "Sube imágenes, videos y contenido desde el panel web. Programa horarios, días y prioridades para cada campaña." },
      { num: "03", title: "Publica y monitorea", desc: "Tu contenido aparece en las pantallas en tiempo real. Revisa estadísticas de reproducciones e impresiones." },
    ],
    modulesTitle: "Todo lo que necesitas",
    tvTitle:      "KryphorConnect TV",
    tvSub:        "La app para tus pantallas Android TV, Google TV o Fire TV. También compatible con Raspberry Pi. Instala desde Play Store o descarga el APK para televisores sin tienda.",
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
      "Reproductor de imágenes y videos",
      "Programación por horarios y días de la semana",
      "Estadísticas de reproducciones en tiempo real",
    ],
    plansTitle:   "Planes",
    plansSub:     "Comienza con el plan que se ajuste a tu negocio.",
    plans: [
      {
        name: "Básico",
        price: "$49.000",
        period: "COP / mes",
        screens: "1 pantalla",
        campaigns: "3 campañas",
        storage: "500 MB",
        highlight: false,
      },
      {
        name: "Profesional",
        price: "$119.000",
        period: "COP / mes",
        screens: "5 pantallas",
        campaigns: "Ilimitadas",
        storage: "5 GB",
        highlight: true,
      },
      {
        name: "Empresarial",
        price: "$299.000",
        period: "COP / mes",
        screens: "Ilimitadas",
        campaigns: "Ilimitadas",
        storage: "50 GB",
        highlight: false,
      },
    ],
    planFeatures: ["pantallas", "campañas", "almacenamiento"],
    ctaPlan:      "Comenzar",
    contact:      "Contactar ventas",
  },
  en: {
    badge:        "A Kryphor Labs subsidiary",
    available:    "Available",
    title:        "KryphorConnect",
    sub:          "The intelligent digital advertising platform for businesses. Manage campaigns, schedule content and monitor statistics on your screens from a centralized web panel.",
    ctaPanel:     "Open administration panel",
    ctaApk:       "Download Android TV APK",
    howTitle:     "How does it work?",
    howSub:       "Three steps to give your business professional digital advertising.",
    steps: [
      { num: "01", title: "Connect your screen", desc: "Install KryphorConnect TV on any Android TV. If it doesn't have Play Store, download the APK directly." },
      { num: "02", title: "Create your campaigns", desc: "Upload images, videos and content from the web panel. Schedule times, days and priorities for each campaign." },
      { num: "03", title: "Publish and monitor", desc: "Your content appears on screens in real time. Review playback and impression statistics." },
    ],
    modulesTitle: "Everything you need",
    tvTitle:      "KryphorConnect TV",
    tvSub:        "The app for your Android TV, Google TV or Fire TV screens. Also compatible with Raspberry Pi. Install from the Play Store or download the APK for TVs without a store.",
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
      "Image and video player",
      "Scheduling by time and day of the week",
      "Real-time playback statistics",
    ],
    plansTitle:   "Plans",
    plansSub:     "Start with the plan that fits your business.",
    plans: [
      {
        name: "Basic",
        price: "$49,000",
        period: "COP / month",
        screens: "1 screen",
        campaigns: "3 campaigns",
        storage: "500 MB",
        highlight: false,
      },
      {
        name: "Professional",
        price: "$119,000",
        period: "COP / month",
        screens: "5 screens",
        campaigns: "Unlimited",
        storage: "5 GB",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "$299,000",
        period: "COP / month",
        screens: "Unlimited",
        campaigns: "Unlimited",
        storage: "50 GB",
        highlight: false,
      },
    ],
    planFeatures: ["screens", "campaigns", "storage"],
    ctaPlan:      "Get started",
    contact:      "Contact sales",
  },
};

const modules = [
  { icon: Layout,    color: "#38BDF8", labelEs: "Campañas",          labelEn: "Campaigns" },
  { icon: Monitor,   color: "#34D399", labelEs: "Pantallas",          labelEn: "Screens" },
  { icon: Play,      color: "#818CF8", labelEs: "Contenido multimedia", labelEn: "Media content" },
  { icon: Calendar,  color: "#F59E0B", labelEs: "Programación",       labelEn: "Scheduling" },
  { icon: BarChart2, color: "#F472B6", labelEs: "Estadísticas",       labelEn: "Statistics" },
  { icon: Bell,      color: "#38BDF8", labelEs: "Notificaciones",     labelEn: "Notifications" },
  { icon: Tv,        color: "#34D399", labelEs: "App Android TV",     labelEn: "Android TV App" },
  { icon: Wifi,      color: "#818CF8", labelEs: "Sync en tiempo real", labelEn: "Real-time sync" },
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
                <Tv size={28} style={{ color: "#38BDF8" }} />
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

      {/* Cómo funciona */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg-2)" }}>
        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-xl mb-14">
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: "#38BDF8" }}>
              {c.howTitle}
            </p>
            <p className="font-inter text-lg" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>{c.howSub}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{ padding: "clamp(1.5rem, 2.5vw, 2.5rem)", borderRadius: "1.5rem", background: "var(--bg)", border: "1px solid var(--border)" }}>
                <span className="font-poppins font-bold block mb-5" style={{ fontSize: "2.5rem", color: "rgba(56,189,248,0.2)", lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 className="font-poppins font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>{step.title}</h3>
                <p className="font-inter text-sm" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg)" }}>
        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-12" style={{ color: "#38BDF8" }}>
              {c.modulesTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex items-center gap-3 transition-all duration-200"
                    style={{ padding: "clamp(1rem, 2vw, 1.5rem)", borderRadius: "1rem", background: "var(--bg-2)", border: "1px solid var(--border)" }}
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

      {/* TV App — Play Store + APK */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg-2)" }}>
        <div className="kl-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

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
                <a href="https://play.google.com/store/apps/details?id=com.kryphorlabs.connect" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-sm transition-all hover:opacity-80"
                  style={{ padding: "0.9rem 1.75rem", borderRadius: "0.875rem", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.06)" }}>
                  <ExternalLink size={15} /> {c.playStore}
                </a>
              </div>

              <p className="font-inter text-xs mt-5" style={{ color: "var(--fg-muted)" }}>
                {c.apkNote}
              </p>
            </motion.div>

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
                  style={{ padding: "clamp(0.9rem, 1.5vw, 1.25rem) clamp(1.25rem, 2vw, 1.75rem)", borderRadius: "1rem", background: "var(--bg)", border: "1px solid var(--border)" }}>
                  <Check size={14} style={{ color: "#38BDF8", flexShrink: 0 }} />
                  <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section style={{ padding: "clamp(4rem, 7vw, 7rem) 0", background: "var(--bg)" }}>
        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-xl mb-14">
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: "#38BDF8" }}>
              {c.plansTitle}
            </p>
            <p className="font-inter text-lg" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>{c.plansSub}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.plans.map((plan, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{
                  padding: "clamp(1.75rem, 2.5vw, 2.5rem)",
                  borderRadius: "1.5rem",
                  background: plan.highlight ? "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(129,140,248,0.08))" : "var(--bg-2)",
                  border: plan.highlight ? "1px solid rgba(56,189,248,0.35)" : "1px solid var(--border)",
                  position: "relative" as const,
                }}>
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-poppins font-semibold text-xs px-4 py-1 rounded-full"
                    style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)", color: "#fff" }}>
                    Popular
                  </span>
                )}
                <h3 className="font-poppins font-bold text-xl mb-2" style={{ color: "var(--fg)" }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-poppins font-bold" style={{ fontSize: "2rem", color: plan.highlight ? "#38BDF8" : "var(--fg)" }}>
                    {plan.price}
                  </span>
                  <span className="font-inter text-sm ml-2" style={{ color: "var(--fg-muted)" }}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[plan.screens, plan.campaigns, plan.storage].map((v, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={13} style={{ color: "#38BDF8", flexShrink: 0 }} />
                      <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{v}</span>
                    </li>
                  ))}
                </ul>
                <a href={`/contact?plan=connect-${plan.name.toLowerCase()}`}
                  className="block text-center font-poppins font-semibold text-sm py-3 rounded-xl transition-all hover:opacity-90"
                  style={plan.highlight
                    ? { background: "linear-gradient(135deg, #38BDF8, #818CF8)", color: "#fff" }
                    : { background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}>
                  {c.ctaPlan} <ArrowRight size={13} className="inline ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
