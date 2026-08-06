"use client";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Monitor, Layout, BarChart2, Check } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Lo que estamos construyendo",
    title: "Un acceso a la vez.",
    sub: "Cada producto se publica aquí solo cuando está terminado y funcionando de verdad.",
    available: "Disponible",
    open: "Abrir KryphorConnect",
    name: "KryphorConnect",
    desc: "Plataforma de publicidad digital para pantallas Android TV. Gestiona campañas, contenido y estadísticas desde un panel web centralizado.",
    features: ["App nativa para Android TV", "Panel web de campañas", "Estadísticas en tiempo real"],
  },
  en: {
    eyebrow: "What we're building",
    title: "One access at a time.",
    sub: "Each product is published here only once it's finished and truly working.",
    available: "Available",
    open: "Open KryphorConnect",
    name: "KryphorConnect",
    desc: "Digital advertising platform for Android TV screens. Manage campaigns, content and stats from a centralized web panel.",
    features: ["Native Android TV app", "Campaign web panel", "Real-time statistics"],
  },
};

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-32" style={{ background: "var(--bg)" }}>
      <div className="kl-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-16"
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

        {/* Connect access window */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
          style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left: info */}
            <div className="lg:col-span-3 p-12 sm:p-16 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(79,168,216,0.12)", border: "1px solid rgba(79,168,216,0.25)" }}>
                  <Wifi size={24} style={{ color: "#4FA8D8" }} />
                </div>
                <span className="font-poppins font-semibold text-xs px-3 py-1.5 rounded-full"
                  style={{ color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
                  {c.available}
                </span>
              </div>

              <h3 className="font-poppins font-bold mb-4"
                style={{ fontSize: "clamp(24px, 2.6vw, 34px)", color: "var(--fg)" }}>
                {c.name}
              </h3>
              <p className="font-inter text-base mb-8" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                {c.desc}
              </p>

              <ul className="space-y-4 mb-12">
                {c.features.map(f => (
                  <li key={f} className="flex items-center gap-3.5">
                    <Check size={14} style={{ color: "#4FA8D8", flexShrink: 0 }} />
                    <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="https://connect.kryphorlabs.com"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-poppins font-semibold text-sm text-white w-fit transition-all duration-200 hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #4FA8D8, #7C7FE0)", boxShadow: "0 8px 32px rgba(79,168,216,0.18)" }}>
                {c.open} <ArrowRight size={15} />
              </a>
            </div>

            {/* Right: visual */}
            <div className="lg:col-span-2 relative flex items-center justify-center p-12 sm:p-16"
              style={{ background: "var(--bg-3)", borderTop: "1px solid var(--border)" }}>
              <div className="grid grid-cols-2 gap-5 w-full max-w-[280px]">
                <FeatureIcon icon={Monitor} color="#4FA8D8" />
                <FeatureIcon icon={Layout} color="#7C7FE0" />
                <FeatureIcon icon={BarChart2} color="#4FA8D8" />
                <FeatureIcon icon={Wifi} color="#7C7FE0" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureIcon({ icon: Icon, color }: { icon: typeof Wifi; color: string }) {
  return (
    <div className="aspect-square rounded-2xl flex items-center justify-center"
      style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
      <Icon size={26} style={{ color }} />
    </div>
  );
}
