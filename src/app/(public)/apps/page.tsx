"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, BookOpen, ChevronDown, Check, Wifi } from "lucide-react";
import { apps, type App } from "@/data/apps";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Próximamente",
    title: "Nuestro ecosistema.",
    sub: "Aplicaciones en desarrollo, construidas para acompañarte cada día.",
    filters: { Todos: "Todos", Conectividad: "Conectividad", Espiritual: "Espiritual", Juego: "Videojuegos" },
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
    features: "Características",
    catLabel: { Juego: "Videojuego", Espiritual: "Espiritual", Conectividad: "Conectividad" },
    expand:   "Ver detalles",
    collapse: "Cerrar",
  },
  en: {
    eyebrow: "Coming Soon",
    title: "Our ecosystem.",
    sub: "Applications in development, built to accompany you every day.",
    filters: { Todos: "All", Conectividad: "Connectivity", Espiritual: "Spiritual", Juego: "Video Games" },
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
    features: "Features",
    catLabel: { Juego: "Video Game", Espiritual: "Spiritual", Conectividad: "Connectivity" },
    expand:   "Details",
    collapse: "Close",
  },
};

const categoryIcons: Record<App["category"], typeof Gamepad2> = {
  Espiritual: BookOpen,
  Juego: Gamepad2,
  Conectividad: Wifi,
};

const filterKeys = ["Todos", "Conectividad", "Juego", "Espiritual"] as const;

export default function AppsPage() {
  const { lang } = useApp();
  const c = copy[lang];
  const [filter, setFilter] = useState<string>("Todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "Todos" ? apps : apps.filter(a => a.category === filter);
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--bg)" }}>

      {/* Page header */}
      <div className="py-32 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl mx-auto px-8 sm:px-12"
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h1 className="font-poppins font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--fg)" }}>
            {c.title}
          </h1>
          <p className="font-inter text-base sm:text-lg max-w-lg"
            style={{ color: "var(--fg-muted)" }}>
            {c.sub}
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-8 sm:px-12 py-20">

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filterKeys.map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setExpanded(null); }}
              className="px-5 py-2.5 rounded-full text-sm font-poppins font-semibold transition-all duration-200"
              style={
                filter === f
                  ? { background: "linear-gradient(135deg, var(--accent), var(--accent-b))", color: "#fff" }
                  : { background: "var(--bg-2)", color: "var(--fg-muted)", border: "1px solid var(--border)" }
              }
            >
              {c.filters[f as keyof typeof c.filters]}
            </button>
          ))}
        </div>

        {/* App cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(app => {
            const CatIcon = categoryIcons[app.category];
            const isOpen = expanded === app.id;
            const statusColor = c.statusColor[app.status];

            return (
              <motion.div
                key={app.id}
                layout
                className="rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300"
                style={{
                  background: "var(--bg-2)",
                  border: `1px solid ${isOpen ? `${app.color}30` : "var(--border)"}`,
                }}
                onClick={() => toggle(app.id)}
                whileHover={{ y: isOpen ? 0 : -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Card header */}
                <div className="flex items-center gap-5 px-8 py-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${app.color}15` }}>
                    <CatIcon size={20} style={{ color: app.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-poppins font-semibold text-base" style={{ color: "var(--fg)" }}>
                      {app.name}
                    </h3>
                    <p className="font-inter text-sm mt-1" style={{ color: "var(--fg-muted)" }}>
                      {app.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:inline-block font-poppins font-semibold text-xs px-2.5 py-1 rounded-full"
                      style={{ color: statusColor, background: `${statusColor}15`, border: `1px solid ${statusColor}25` }}>
                      {c.status[app.status]}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={17} style={{ color: "var(--fg-muted)" }} />
                    </motion.div>
                  </div>
                </div>

                {/* Expandable */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t" style={{ borderColor: "var(--border)" }}>
                        <p className="font-inter text-sm leading-relaxed mt-6 mb-6"
                          style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                          {app.description}
                        </p>
                        <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                          style={{ color: "var(--accent)" }}>
                          {c.features}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {app.features.map(f => (
                            <span key={f}
                              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-inter"
                              style={{ background: `${app.color}12`, color: app.color }}>
                              <Check size={10} />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
