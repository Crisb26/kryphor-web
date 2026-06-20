"use client";
import { motion } from "framer-motion";
import { Wifi, Tv, BarChart2, Calendar, Layout, Bell, Download, Check, ArrowRight, ExternalLink, Play, Monitor } from "lucide-react";
import { useApp } from "@/lib/providers";

const PANEL_URL = "https://connect.kryphorlabs.com";
const APK_URL   = "https://github.com/Crisb26/kryphorconnect-tv/releases/download/v1.0.0/kryphorconnect-tv.apk";

// Paleta exclusiva de KryphorConnect — independiente del tema de Kryphor Labs
const K = {
  bg:     "#060918",
  bg2:    "#080D20",
  bg3:    "#0B1128",
  cyan:   "#00CFFD",
  purple: "#A855F7",
  pink:   "#FF3B83",
  card:   "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.08)",
  text:   "#FFFFFF",
  muted:  "rgba(255,255,255,0.6)",
  dim:    "rgba(255,255,255,0.3)",
};

const copy = {
  es: {
    badge:    "Subsidiaria de Kryphor Labs",
    avail:    "Disponible",
    title:    "Publicidad digital que vende.",
    sub:      "KryphorConnect convierte cualquier televisor Android en una pantalla de publicidad profesional. Gestiona campañas, programa contenido y monitorea resultados desde un panel web centralizado.",
    cta1:     "Abrir panel",
    cta2:     "Descargar APK",
    howTitle: "¿Cómo funciona?",
    howSub:   "Tres pasos para que tu negocio tenga publicidad digital profesional en sus pantallas.",
    steps: [
      { num: "01", title: "Conecta tu pantalla",   desc: "Instala KryphorConnect TV en cualquier televisor Android. Si no tiene Play Store, descarga el APK directamente.",                            icon: Tv },
      { num: "02", title: "Crea tus campañas",      desc: "Sube imágenes, videos y contenido desde el panel web. Programa horarios, días y prioridades para cada campaña.",                          icon: Layout },
      { num: "03", title: "Publica y monitorea",    desc: "Tu contenido aparece en las pantallas en tiempo real. Revisa estadísticas de reproducciones e impresiones.",                              icon: BarChart2 },
    ],
    modTitle: "Todo lo que necesitas",
    tvTitle:  "KryphorConnect TV",
    tvSub:    "La app para tus pantallas Android TV, Google TV o Fire TV. Compatible con Raspberry Pi. Instala desde Play Store o descarga el APK para televisores sin tienda.",
    play:     "Ver en Play Store",
    apk:      "Descargar APK",
    apkNote:  "APK universal · Android TV · Google TV · Fire TV · Raspberry Pi",
    inc:      "Incluye",
    features: [
      "Panel web de administración completo",
      "App nativa Android TV y Google TV",
      "APK descargable para TVs sin Play Store",
      "Instalación por USB o descarga directa",
      "Compatible con Raspberry Pi",
      "Reproductor de imágenes y videos",
      "Programación por horarios y días",
      "Estadísticas de reproducciones en tiempo real",
    ],
    planTitle: "Planes",
    planSub:   "Comienza con el plan que se ajuste a tu negocio.",
    plans: [
      { name: "Básico",       price: "$49.000",  period: "COP / mes", screens: "1 pantalla",   campaigns: "3 campañas",    storage: "500 MB", hot: false },
      { name: "Profesional",  price: "$119.000", period: "COP / mes", screens: "5 pantallas",  campaigns: "Ilimitadas",    storage: "5 GB",   hot: true  },
      { name: "Empresarial",  price: "$299.000", period: "COP / mes", screens: "Ilimitadas",   campaigns: "Ilimitadas",    storage: "50 GB",  hot: false },
    ],
    pf:      ["pantallas", "campañas", "almacenamiento"],
    start:   "Comenzar",
    sales:   "Contactar ventas",
    endT:    "¿Listo para digitalizar tu publicidad?",
    endS:    "Únete a los negocios que ya usan KryphorConnect para llegar a más clientes.",
  },
  en: {
    badge:    "A Kryphor Labs subsidiary",
    avail:    "Available",
    title:    "Digital advertising that sells.",
    sub:      "KryphorConnect turns any Android TV into a professional digital advertising screen. Manage campaigns, schedule content and monitor results from a centralized web panel.",
    cta1:     "Open panel",
    cta2:     "Download APK",
    howTitle: "How does it work?",
    howSub:   "Three steps to give your business professional digital advertising on your screens.",
    steps: [
      { num: "01", title: "Connect your screen",   desc: "Install KryphorConnect TV on any Android TV. If it doesn't have Play Store, download the APK directly.",                                  icon: Tv },
      { num: "02", title: "Create your campaigns", desc: "Upload images, videos and content from the web panel. Schedule times, days and priorities for each campaign.",                            icon: Layout },
      { num: "03", title: "Publish and monitor",   desc: "Your content appears on screens in real time. Review playback and impression statistics.",                                               icon: BarChart2 },
    ],
    modTitle: "Everything you need",
    tvTitle:  "KryphorConnect TV",
    tvSub:    "The app for your Android TV, Google TV or Fire TV screens. Compatible with Raspberry Pi. Install from Play Store or download the APK for TVs without a store.",
    play:     "View on Play Store",
    apk:      "Download APK",
    apkNote:  "Universal APK · Android TV · Google TV · Fire TV · Raspberry Pi",
    inc:      "Includes",
    features: [
      "Full web administration panel",
      "Native Android TV and Google TV app",
      "Downloadable APK for TVs without Play Store",
      "Installation via USB or direct download",
      "Compatible with Raspberry Pi",
      "Image and video player",
      "Scheduling by time and day of the week",
      "Real-time playback statistics",
    ],
    planTitle: "Plans",
    planSub:   "Start with the plan that fits your business.",
    plans: [
      { name: "Basic",        price: "$49,000",  period: "COP / month", screens: "1 screen",    campaigns: "3 campaigns",  storage: "500 MB", hot: false },
      { name: "Professional", price: "$119,000", period: "COP / month", screens: "5 screens",   campaigns: "Unlimited",    storage: "5 GB",   hot: true  },
      { name: "Enterprise",   price: "$299,000", period: "COP / month", screens: "Unlimited",   campaigns: "Unlimited",    storage: "50 GB",  hot: false },
    ],
    pf:      ["screens", "campaigns", "storage"],
    start:   "Get started",
    sales:   "Contact sales",
    endT:    "Ready to digitalize your advertising?",
    endS:    "Join the businesses already using KryphorConnect to reach more customers.",
  },
};

const modules = [
  { icon: Layout,    c: "#00CFFD", bg: "rgba(0,207,253,0.12)",   es: "Campañas",           en: "Campaigns"    },
  { icon: Monitor,   c: "#A855F7", bg: "rgba(168,85,247,0.12)",  es: "Pantallas",           en: "Screens"      },
  { icon: Play,      c: "#FF3B83", bg: "rgba(255,59,131,0.12)",  es: "Contenido multimedia",en: "Media content"},
  { icon: Calendar,  c: "#F59E0B", bg: "rgba(245,158,11,0.12)",  es: "Programación",        en: "Scheduling"   },
  { icon: BarChart2, c: "#34D399", bg: "rgba(52,211,153,0.12)",  es: "Estadísticas",        en: "Statistics"   },
  { icon: Bell,      c: "#00CFFD", bg: "rgba(0,207,253,0.12)",   es: "Notificaciones",      en: "Notifications"},
  { icon: Tv,        c: "#A855F7", bg: "rgba(168,85,247,0.12)",  es: "App Android TV",      en: "Android TV App"},
  { icon: Wifi,      c: "#FF3B83", bg: "rgba(255,59,131,0.12)",  es: "Sync en tiempo real", en: "Real-time sync"},
];

const STEP_COLORS = ["#00CFFD", "#A855F7", "#FF3B83"];

export default function ConnectPage() {
  const { lang } = useApp();
  const t = copy[lang];

  return (
    <div style={{ background: K.bg, color: K.text, minHeight: "100vh" }}>

      {/* ──────────── HERO ──────────── */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: "clamp(6rem,10vw,10rem)", paddingBottom: "clamp(4rem,7vw,7rem)" }}>
        {/* Glow orbs */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,207,253,0.13) 0%, rgba(168,85,247,0.09) 45%, transparent 70%)", filter: "blur(70px)" }} />
          <div style={{ position: "absolute", top: "5%", right: "-8%",  width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,59,131,0.09), transparent 70%)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "0",  left: "-4%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(168,85,247,0.1), transparent 70%)",  filter: "blur(60px)" }} />
        </div>
        {/* Grid */}
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />

        <div className="kl-container" style={{ position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            {/* Pill badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, background: "rgba(0,207,253,0.09)", border: "1px solid rgba(0,207,253,0.22)", color: K.cyan, fontSize: 12, fontFamily: "var(--font-inter)", marginBottom: 36, fontWeight: 500 }}>
              <Wifi size={11} /> {t.badge}
            </div>

            {/* Logo + status */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              <img src="/connect/logo_claro.png" alt="KryphorConnect" style={{ height: 52, width: "auto", objectFit: "contain", objectPosition: "left" }} />
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.22)", fontSize: 12, fontFamily: "var(--font-poppins)", fontWeight: 600, width: "fit-content" }}>
                ● {t.avail}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-black"
              style={{ fontSize: "clamp(40px,6.5vw,84px)", lineHeight: 1.08, marginBottom: 24, background: "linear-gradient(135deg,#fff 0%,#00CFFD 50%,#A855F7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", maxWidth: 820 }}>
              {t.title}
            </h1>

            <p className="font-inter"
              style={{ fontSize: "clamp(16px,1.8vw,20px)", color: K.muted, lineHeight: 1.85, maxWidth: 560, marginBottom: 48 }}>
              {t.sub}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <motion.a href={PANEL_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="font-poppins font-bold"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 36px", borderRadius: 999, background: "linear-gradient(135deg,#00CFFD,#A855F7)", color: "#fff", fontSize: 15, textDecoration: "none", boxShadow: "0 0 48px rgba(0,207,253,0.32),0 10px 28px rgba(0,0,0,0.45)" }}>
                {t.cta1} <ExternalLink size={15} />
              </motion.a>
              <motion.a href={APK_URL} download whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="font-poppins font-bold"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 36px", borderRadius: 999, background: "rgba(0,207,253,0.06)", color: K.cyan, border: "1px solid rgba(0,207,253,0.28)", fontSize: 15, textDecoration: "none" }}>
                <Download size={15} /> {t.cta2}
              </motion.a>
            </div>
          </motion.div>

          {/* TV feature image */}
          <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            style={{ marginTop: 72, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 28, background: "linear-gradient(135deg,rgba(0,207,253,0.22),rgba(168,85,247,0.18))", filter: "blur(48px)", transform: "scale(0.93) translateY(14px)" }} />
            <img src="/connect/tv_feature.png" alt="KryphorConnect TV en acción"
              style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 22, border: "1px solid rgba(255,255,255,0.09)", position: "relative", zIndex: 1, display: "block", margin: "0 auto" }} />
          </motion.div>
        </div>
      </section>

      {/* ──────────── CÓMO FUNCIONA ──────────── */}
      <section style={{ padding: "clamp(5rem,8vw,8rem) 0", background: K.bg2, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 2, background: "linear-gradient(90deg,transparent,rgba(0,207,253,0.45),transparent)" }} />

        <div className="kl-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 56 }}>
            <p className="font-poppins font-bold"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: K.cyan, marginBottom: 14 }}>
              {t.howTitle}
            </p>
            <p className="font-inter"
              style={{ fontSize: "clamp(16px,1.8vw,20px)", color: K.muted, lineHeight: 1.7, maxWidth: 520 }}>
              {t.howSub}
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {t.steps.map((step, i) => {
              const StepIcon = step.icon;
              const col = STEP_COLORS[i];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  style={{ padding: "clamp(1.5rem,3vw,2.5rem)", borderRadius: 22, background: K.card, border: `1px solid ${col}22`, position: "relative", overflow: "hidden" }}>
                  <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(ellipse at top right,${col}14,transparent 70%)`, pointerEvents: "none" }} />
                  <span className="font-poppins font-black"
                    style={{ fontSize: "3.8rem", color: `${col}28`, lineHeight: 1, display: "block", marginBottom: 22 }}>
                    {step.num}
                  </span>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: `${col}14`, border: `1px solid ${col}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <StepIcon size={20} style={{ color: col }} />
                  </div>
                  <h3 className="font-poppins font-bold" style={{ fontSize: 18, color: K.text, marginBottom: 12 }}>{step.title}</h3>
                  <p className="font-inter" style={{ fontSize: 14, color: K.muted, lineHeight: 1.85 }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── MÓDULOS ──────────── */}
      <section style={{ padding: "clamp(5rem,8vw,8rem) 0", background: K.bg }}>
        <div className="kl-container">
          <motion.p className="font-poppins font-bold"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: K.cyan, marginBottom: 36 }}>
            {t.modTitle}
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "clamp(1rem,2vw,1.4rem)", borderRadius: 16, background: K.card, border: `1px solid ${K.border}`, cursor: "default", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${m.c}35`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = K.border}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: m.bg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={17} style={{ color: m.c }} />
                  </div>
                  <span className="font-inter" style={{ fontSize: 13, fontWeight: 500, color: K.text }}>
                    {lang === "es" ? m.es : m.en}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── TV APP ──────────── */}
      <section style={{ padding: "clamp(5rem,8vw,8rem) 0", background: K.bg2, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(168,85,247,0.1),transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div className="kl-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "clamp(3rem,6vw,6rem)", alignItems: "start" }}>

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(0,207,253,0.1)", border: "1px solid rgba(0,207,253,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Tv size={22} style={{ color: K.cyan }} />
                </div>
                <h2 className="font-poppins font-bold" style={{ fontSize: "clamp(22px,3vw,36px)", color: K.text }}>{t.tvTitle}</h2>
              </div>
              <p className="font-inter" style={{ fontSize: "clamp(14px,1.4vw,16px)", color: K.muted, lineHeight: 2, marginBottom: 36 }}>{t.tvSub}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
                <motion.a href={APK_URL} download whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-poppins font-bold"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 14, background: "linear-gradient(135deg,#00CFFD,#A855F7)", color: "#fff", fontSize: 14, textDecoration: "none", boxShadow: "0 0 28px rgba(0,207,253,0.22)" }}>
                  <Download size={15} /> {t.apk}
                </motion.a>
                <motion.a href="https://play.google.com/store/apps/details?id=com.kryphorlabs.connect_tv" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-poppins font-bold"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 14, background: K.card, color: K.cyan, border: "1px solid rgba(0,207,253,0.25)", fontSize: 14, textDecoration: "none" }}>
                  <ExternalLink size={15} /> {t.play}
                </motion.a>
              </div>
              <p className="font-inter" style={{ fontSize: 12, color: K.dim }}>{t.apkNote}</p>
            </motion.div>

            {/* Right: feature list */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p className="font-poppins font-bold"
                style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: K.cyan, marginBottom: 8 }}>
                {t.inc}
              </p>
              {t.features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "clamp(0.7rem,1.4vw,1rem) clamp(1rem,2vw,1.5rem)", borderRadius: 12, background: K.card, border: `1px solid ${K.border}` }}>
                  <Check size={13} style={{ color: K.cyan, flexShrink: 0 }} />
                  <span className="font-inter" style={{ fontSize: 13, color: K.muted }}>{f}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────── PLANES ──────────── */}
      <section style={{ padding: "clamp(5rem,8vw,8rem) 0", background: K.bg3, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(168,85,247,0.05),transparent 70%)", pointerEvents: "none" }} />

        <div className="kl-container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="font-poppins font-bold"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: K.cyan, marginBottom: 14 }}>
              {t.planTitle}
            </p>
            <p className="font-inter" style={{ fontSize: "clamp(15px,1.5vw,18px)", color: K.muted }}>{t.planSub}</p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, maxWidth: 980, margin: "0 auto" }}>
            {t.plans.map((plan, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{ padding: "clamp(1.5rem,3vw,2.5rem)", borderRadius: 24, background: plan.hot ? "linear-gradient(145deg,rgba(0,207,253,0.07),rgba(168,85,247,0.07))" : K.card, border: plan.hot ? "1px solid rgba(0,207,253,0.28)" : `1px solid ${K.border}`, position: "relative", overflow: "hidden" }}>
                {plan.hot && (
                  <>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#00CFFD,#A855F7)" }} />
                    <div className="font-poppins font-bold"
                      style={{ position: "absolute", top: 18, right: 18, padding: "4px 12px", borderRadius: 999, background: "linear-gradient(135deg,#00CFFD,#A855F7)", color: "#fff", fontSize: 10, letterSpacing: "0.1em" }}>
                      POPULAR
                    </div>
                  </>
                )}
                <p className="font-poppins font-bold"
                  style={{ fontSize: 16, color: plan.hot ? K.cyan : K.muted, marginBottom: 20 }}>
                  {plan.name}
                </p>
                <div style={{ marginBottom: 28 }}>
                  <span className="font-poppins font-black" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: K.text }}>{plan.price}</span>
                  <span className="font-inter" style={{ fontSize: 13, color: K.dim, marginLeft: 8 }}>{plan.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {[plan.screens, plan.campaigns, plan.storage].map((val, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Check size={13} style={{ color: plan.hot ? K.cyan : K.purple, flexShrink: 0 }} />
                      <span className="font-inter" style={{ fontSize: 13, color: K.muted }}>{val} de {t.pf[j]}</span>
                    </div>
                  ))}
                </div>
                <motion.a href={PANEL_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-poppins font-bold"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 14, background: plan.hot ? "linear-gradient(135deg,#00CFFD,#A855F7)" : K.card, border: plan.hot ? "none" : `1px solid ${K.border}`, color: plan.hot ? "#fff" : K.muted, fontSize: 14, textDecoration: "none", boxShadow: plan.hot ? "0 0 28px rgba(0,207,253,0.2)" : "none" }}>
                  {t.start} <ArrowRight size={14} />
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ textAlign: "center", marginTop: 36 }}>
            <a href="/contact" className="font-inter" style={{ fontSize: 14, color: K.dim, textDecoration: "underline" }}>
              {t.sales}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────── CTA FINAL ──────────── */}
      <section style={{ padding: "clamp(5rem,8vw,8rem) 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,207,253,0.05) 0%,rgba(168,85,247,0.07) 50%,rgba(255,59,131,0.04) 100%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,207,253,0.35),rgba(168,85,247,0.35),transparent)" }} />

        <div className="kl-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
              {[K.cyan, K.purple, K.pink].map((dot, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: dot }} />
              ))}
            </div>
            <h2 className="font-poppins font-black"
              style={{ fontSize: "clamp(28px,5vw,60px)", lineHeight: 1.15, marginBottom: 20, background: "linear-gradient(135deg,#fff 25%,#00CFFD 65%,#A855F7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t.endT}
            </h2>
            <p className="font-inter"
              style={{ fontSize: "clamp(15px,1.5vw,18px)", color: K.muted, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
              {t.endS}
            </p>
            <motion.a href={PANEL_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="font-poppins font-black"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "18px 44px", borderRadius: 999, background: "linear-gradient(135deg,#00CFFD,#A855F7,#FF3B83)", color: "#fff", fontSize: 16, textDecoration: "none", boxShadow: "0 0 64px rgba(0,207,253,0.3),0 18px 44px rgba(0,0,0,0.55)" }}>
              {t.cta1} <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
