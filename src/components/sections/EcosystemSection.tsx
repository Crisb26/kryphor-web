"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, BookOpen, Check, Wifi } from "lucide-react";
import { useApp } from "@/lib/providers";
import { apps, App } from "@/data/apps";

const copy = {
  es: {
    eyebrow: "Lo que construimos",
    title:   "Nuestro ecosistema.",
    sub:     "Pasa el cursor sobre las tarjetas para pausar. Haz clic para ver detalles.",
    status: {
      disponible:      "Disponible",
      "en-desarrollo": "En desarrollo",
      proximamente:    "Próximamente",
    },
    statusColor: {
      disponible:      "#22c55e",
      "en-desarrollo": "#38BDF8",
      proximamente:    "#818CF8",
    },
    features:   "Características",
    catLabel:   { Juego: "Videojuego", Espiritual: "Espiritual", Conectividad: "Conectividad" },
    subsidiary: "Subsidiaria de Kryphor Labs",
    close:      "Cerrar",
  },
  en: {
    eyebrow: "What we build",
    title:   "Our ecosystem.",
    sub:     "Hover to pause the carousel. Click any card to see details.",
    status: {
      disponible:      "Available",
      "en-desarrollo": "In Development",
      proximamente:    "Coming Soon",
    },
    statusColor: {
      disponible:      "#22c55e",
      "en-desarrollo": "#38BDF8",
      proximamente:    "#818CF8",
    },
    features:   "Features",
    catLabel:   { Juego: "Video Game", Espiritual: "Spiritual", Conectividad: "Connectivity" },
    subsidiary: "A Kryphor Labs subsidiary",
    close:      "Close",
  },
};

const catIcon = { Juego: Gamepad2, Espiritual: BookOpen, Conectividad: Wifi };
const loopApps = [...apps, ...apps, ...apps];

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];
  const [selected, setSelected] = useState<App | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-36 overflow-hidden" style={{ background: "var(--bg)" }}>

      {/* Header */}
      <div className="kl-container mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base max-w-lg"
            style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
            {c.sub}
          </p>
        </motion.div>
      </div>

      {/* Netflix-style auto-scroll ticker */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex gap-5"
          style={{
            animation: "ticker-scroll 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {loopApps.map((app, i) => {
            const Icon = catIcon[app.category];
            const statusColor = c.statusColor[app.status];
            return (
              <button
                key={i}
                onClick={() => setSelected(app)}
                className="flex-shrink-0 rounded-2xl text-left transition-all duration-300"
                style={{
                  width: 300,
                  padding: "2rem",
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${app.color}50`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${app.color}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${app.color}18`, border: `1px solid ${app.color}28` }}>
                    <Icon size={22} style={{ color: app.color }} />
                  </div>
                  {app.subsidiary && (
                    <span className="font-inter text-[10px] px-2 py-0.5 rounded-full"
                      style={{ color: app.color, background: `${app.color}12`, border: `1px solid ${app.color}25` }}>
                      {c.subsidiary}
                    </span>
                  )}
                </div>
                <h3 className="font-poppins font-bold text-lg mb-2 text-left"
                  style={{ color: "var(--fg)" }}>
                  {app.name}
                </h3>
                <p className="font-inter text-sm mb-6 text-left"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
                  {app.tagline}
                </p>
                <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                  style={{
                    color: statusColor,
                    background: `${statusColor}15`,
                    border: `1px solid ${statusColor}28`,
                  }}>
                  {c.status[app.status]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(10px)" }}
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}>
              <motion.div key="modal"
                initial={{ opacity: 0, scale: 0.93, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 28 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-lg relative rounded-3xl"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", padding: "2.5rem" }}
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
                  style={{ color: "var(--fg-muted)", background: "var(--bg-3)" }}>
                  <X size={14} />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selected.color}18`, border: `1px solid ${selected.color}28` }}>
                    {(() => { const I = catIcon[selected.category]; return <I size={24} style={{ color: selected.color }} />; })()}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl" style={{ color: "var(--fg)" }}>
                      {selected.name}
                    </h3>
                    <p className="font-inter text-sm mt-0.5" style={{ color: "var(--fg-muted)" }}>
                      {c.catLabel[selected.category]}
                    </p>
                  </div>
                </div>

                {selected.subsidiary && (
                  <div className="mb-4">
                    <span className="font-inter text-xs px-3 py-1 rounded-full"
                      style={{ color: selected.color, background: `${selected.color}12`, border: `1px solid ${selected.color}25` }}>
                      {c.subsidiary}
                    </span>
                  </div>
                )}

                <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full mb-6"
                  style={{
                    color: c.statusColor[selected.status],
                    background: `${c.statusColor[selected.status]}15`,
                    border: `1px solid ${c.statusColor[selected.status]}28`,
                  }}>
                  {c.status[selected.status]}
                </span>

                <p className="font-inter text-base leading-relaxed mb-8"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.85 }}>
                  {selected.description}
                </p>

                <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
                  style={{ color: "var(--accent)" }}>
                  {c.features}
                </p>
                <ul className="space-y-3">
                  {selected.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={13} style={{ color: selected.color, flexShrink: 0 }} />
                      <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
