"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, BookOpen, Check } from "lucide-react";
import { useApp } from "@/lib/providers";
import { apps, App } from "@/data/apps";

const copy = {
  es: {
    eyebrow: "Lo que construimos",
    title: "Nuestro ecosistema.",
    sub: "Aplicaciones y videojuegos con propósito. Cada producto existe porque resuelve algo real.",
    status: {
      disponible:     "Disponible",
      "en-desarrollo":"En desarrollo",
      proximamente:   "Próximamente",
    },
    featuresLabel: "Características",
    close: "Cerrar",
    categoryLabels: { Juego: "Videojuegos", Espiritual: "Espiritual" },
  },
  en: {
    eyebrow: "What we build",
    title: "Our ecosystem.",
    sub: "Applications and video games with purpose. Every product exists because it solves something real.",
    status: {
      disponible:     "Available",
      "en-desarrollo":"In Development",
      proximamente:   "Coming Soon",
    },
    featuresLabel: "Features",
    close: "Close",
    categoryLabels: { Juego: "Video Games", Espiritual: "Spiritual" },
  },
};

const categoryIcon = { Juego: Gamepad2, Espiritual: BookOpen };

function StatusPill({ status, label }: { status: App["status"]; label: string }) {
  const colors: Record<App["status"], string> = {
    disponible:     "#22c55e",
    "en-desarrollo":"var(--accent)",
    proximamente:   "var(--accent-b)",
  };
  return (
    <span
      className="inline-block text-xs font-poppins font-semibold px-2.5 py-0.5 rounded-full"
      style={{ color: colors[status], background: `${colors[status]}18`, border: `1px solid ${colors[status]}30` }}
    >
      {label}
    </span>
  );
}

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];
  const [selected, setSelected] = useState<App | null>(null);

  return (
    <section className="py-36" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-5 leading-tight"
            style={{ color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-xl"
            style={{ color: "var(--fg-muted)" }}>
            {c.sub}
          </p>
        </motion.div>

        {/* App grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app, i) => {
            const Icon = categoryIcon[app.category];
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(app)}
                className="text-left rounded-2xl p-6 cursor-pointer w-full transition-all duration-200"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${app.color}18` }}>
                    <Icon size={18} style={{ color: app.color }} />
                  </div>
                  <StatusPill status={app.status} label={c.status[app.status]} />
                </div>
                <h3 className="font-poppins font-semibold text-sm mb-1.5"
                  style={{ color: "var(--fg)" }}>
                  {app.name}
                </h3>
                <p className="font-inter text-xs leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}>
                  {app.tagline}
                </p>
              </motion.button>
            );
          })}
        </div>
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
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="w-full max-w-lg rounded-3xl p-8 relative"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ color: "var(--fg-muted)", background: "var(--bg-2)" }}
                  aria-label={c.close}
                >
                  <X size={15} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selected.color}18` }}>
                    {(() => { const Icon = categoryIcon[selected.category]; return <Icon size={22} style={{ color: selected.color }} />; })()}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg leading-tight"
                      style={{ color: "var(--fg)" }}>
                      {selected.name}
                    </h3>
                    <p className="font-inter text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                      {c.categoryLabels[selected.category]}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <StatusPill status={selected.status} label={c.status[selected.status]} />
                </div>

                <p className="font-inter text-sm leading-relaxed mb-7"
                  style={{ color: "var(--fg-muted)" }}>
                  {selected.description}
                </p>

                <div>
                  <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                    style={{ color: "var(--accent)" }}>
                    {c.featuresLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {selected.features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <Check size={13} style={{ color: selected.color, flexShrink: 0 }} />
                        <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
