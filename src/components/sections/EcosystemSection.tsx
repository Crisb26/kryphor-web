"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, BookOpen, Check, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";
import { apps, App } from "@/data/apps";

const copy = {
  es: {
    eyebrow: "Lo que construimos",
    title: "Nuestro ecosistema.",
    sub: "Aplicaciones y videojuegos en desarrollo. Cada producto existe porque resuelve algo real. Haz clic en cualquier tarjeta para saber más.",
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
    features:    "Características",
    category:    "Categoría",
    close:       "Cerrar",
    categoryLabel: { Juego: "Videojuego", Espiritual: "Espiritual" },
    seeAll:      "Ver todas las apps",
  },
  en: {
    eyebrow: "What we build",
    title: "Our ecosystem.",
    sub: "Applications and video games in development. Every product exists because it solves something real. Click any card to learn more.",
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
    features:    "Features",
    category:    "Category",
    close:       "Close",
    categoryLabel: { Juego: "Video Game", Espiritual: "Spiritual" },
    seeAll:      "See all apps",
  },
};

const catIcon = { Juego: Gamepad2, Espiritual: BookOpen };

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];
  const [selected, setSelected] = useState<App | null>(null);

  return (
    <section className="py-40" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
            {c.sub}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apps.map((app, i) => {
            const Icon = catIcon[app.category];
            const statusColor = c.statusColor[app.status];
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(app)}
                className="group text-left rounded-2xl p-8 cursor-pointer w-full transition-all duration-300 card-hover"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${app.color}15` }}>
                  <Icon size={20} style={{ color: app.color }} />
                </div>

                {/* Name */}
                <h3 className="font-poppins font-semibold text-base mb-2"
                  style={{ color: "var(--fg)" }}>
                  {app.name}
                </h3>

                {/* Tagline */}
                <p className="font-inter text-sm leading-relaxed mb-6"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
                  {app.tagline}
                </p>

                {/* Status */}
                <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                  style={{
                    color: statusColor,
                    background: `${statusColor}15`,
                    border: `1px solid ${statusColor}30`,
                  }}>
                  {c.status[app.status]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Link to full page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="/apps"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
          >
            {c.seeAll}
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 24 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md rounded-3xl p-10 relative"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
                  style={{ color: "var(--fg-muted)", background: "var(--bg-2)" }}
                  aria-label={c.close}
                >
                  <X size={14} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selected.color}15` }}>
                    {(() => { const Icon = catIcon[selected.category]; return <Icon size={22} style={{ color: selected.color }} />; })()}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl" style={{ color: "var(--fg)" }}>
                      {selected.name}
                    </h3>
                    <p className="font-inter text-xs mt-1" style={{ color: "var(--fg-muted)" }}>
                      {c.categoryLabel[selected.category]}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="mb-6">
                  <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                    style={{
                      color: c.statusColor[selected.status],
                      background: `${c.statusColor[selected.status]}15`,
                      border: `1px solid ${c.statusColor[selected.status]}30`,
                    }}>
                    {c.status[selected.status]}
                  </span>
                </div>

                {/* Description */}
                <p className="font-inter text-sm leading-relaxed mb-8"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                  {selected.description}
                </p>

                {/* Features */}
                <div>
                  <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                    style={{ color: "var(--accent)" }}>
                    {c.features}
                  </p>
                  <ul className="space-y-3">
                    {selected.features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <Check size={12} style={{ color: selected.color, flexShrink: 0 }} />
                        <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
