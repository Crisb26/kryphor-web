"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, BookOpen, ChevronDown, Clock } from "lucide-react";
import { apps, type App } from "@/data/apps";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    tag: "Próximamente",
    title: "Nuestro",
    highlight: "Ecosistema",
    sub: "Aplicaciones en desarrollo, construidas para acompañarte cada día.",
    filters: { Todos: "Todos", Espiritual: "Espiritual", Juego: "Videojuegos" },
    soon: "En desarrollo",
    expand: "Ver detalles",
    collapse: "Cerrar",
    features: "Características",
  },
  en: {
    tag: "Coming Soon",
    title: "Our",
    highlight: "Ecosystem",
    sub: "Applications in development, built to accompany you every day.",
    filters: { Todos: "All", Espiritual: "Spiritual", Juego: "Video Games" },
    soon: "In development",
    expand: "Details",
    collapse: "Close",
    features: "Features",
  },
};

const categoryIcons: Record<App["category"], typeof Gamepad2> = {
  Espiritual: BookOpen,
  Juego: Gamepad2,
};

const categoryColors: Record<App["category"], string> = {
  Espiritual: "#27AE60",
  Juego: "#E74C3C",
};

const filterKeys = ["Todos", "Juego", "Espiritual"] as const;

export default function AppsPage() {
  const { lang } = useApp();
  const c = copy[lang];
  const [filter, setFilter] = useState<string>("Todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "Todos" ? apps : apps.filter((a) => a.category === filter);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--background)" }}>

      {/* Page header */}
      <div className="py-24 border-b" style={{ borderColor: "var(--border-clr)", background: "var(--surface)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14"
        >
          <span className="inline-block text-xs font-poppins font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ color: "var(--accent-2)", background: "rgba(129,140,248,0.10)" }}>
            {c.tag}
          </span>
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl mb-4" style={{ color: "var(--foreground)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h1>
          <p className="font-inter max-w-lg" style={{ color: "var(--muted-clr)" }}>{c.sub}</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-16">

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-14">
          {filterKeys.map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setExpanded(null); }}
              className="px-5 py-2.5 rounded-full text-sm font-poppins font-bold transition-all duration-200"
              style={
                filter === f
                  ? { background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }
                  : { background: "var(--glass-bg)", color: "var(--muted-clr)", border: "1px solid var(--border-clr)" }
              }
            >
              {c.filters[f as keyof typeof c.filters]}
            </button>
          ))}
        </div>

        {/* App cards — expandable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((app) => {
            const CatIcon = categoryIcons[app.category];
            const color = categoryColors[app.category];
            const isOpen = expanded === app.id;

            return (
              <motion.div
                key={app.id}
                layout
                className="glass rounded-3xl overflow-hidden cursor-pointer select-none"
                style={{ border: `1px solid ${isOpen ? color + "30" : "var(--border-clr)"}` }}
                onClick={() => toggle(app.id)}
                whileHover={{ y: isOpen ? 0 : -3 }}
                transition={{ duration: 0.2 }}
              >
                {/* Always visible: header row */}
                <div className="flex items-center gap-5 px-7 py-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `${color}12` }}>
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-poppins font-bold text-base" style={{ color: "var(--foreground)" }}>
                      {app.name}
                    </h3>
                    <p className="font-inter text-sm mt-0.5" style={{ color: "var(--muted-clr)" }}>
                      {app.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-poppins font-bold"
                      style={{ background: `${color}12`, color }}>
                      <CatIcon size={10} />
                      {c.filters[app.category as keyof typeof c.filters]}
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={18} style={{ color: "var(--muted-clr)" }} />
                    </motion.div>
                  </div>
                </div>

                {/* Expandable content */}
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
                      <div className="px-7 pb-7 border-t" style={{ borderColor: "var(--border-clr)" }}>
                        <p className="font-inter text-sm leading-relaxed mt-5 mb-5" style={{ color: "var(--muted-clr)" }}>
                          {app.description}
                        </p>

                        <p className="font-poppins font-bold text-xs mb-3 tracking-wide" style={{ color: "var(--foreground)" }}>
                          {c.features}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {app.features.map((f) => (
                            <span key={f} className="text-xs px-3 py-1 rounded-lg font-inter"
                              style={{ background: `${color}10`, color }}>
                              {f}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock size={12} style={{ color: "var(--muted-clr)" }} />
                          <span className="text-xs font-inter" style={{ color: "var(--muted-clr)" }}>
                            {c.soon}
                          </span>
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
