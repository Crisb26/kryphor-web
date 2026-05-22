"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, BookOpen, Wrench, Bot, Clock } from "lucide-react";
import { apps, type App } from "@/data/apps";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    tag: "Próximamente",
    title: "Nuestro",
    highlight: "Ecosistema",
    sub: "Aplicaciones en desarrollo, construidas con pasión para mejorar tu vida diaria.",
    filters: {
      Todos: "Todos",
      Religioso: "Espiritual",
      Juego: "Videojuegos",
      Herramienta: "Herramientas",
      IA: "Inteligencia Artificial",
    },
    status: "En desarrollo",
    notif: "Notifícame cuando esté lista",
    soon: "Próximamente disponible",
  },
  en: {
    tag: "Coming Soon",
    title: "Our",
    highlight: "Ecosystem",
    sub: "Applications in development, built with passion to improve your daily life.",
    filters: {
      Todos: "All",
      Religioso: "Spiritual",
      Juego: "Video Games",
      Herramienta: "Tools",
      IA: "Artificial Intelligence",
    },
    status: "In development",
    notif: "Notify me when it's ready",
    soon: "Coming soon",
  },
};

const categoryIcons: Record<App["category"], typeof Gamepad2> = {
  Religioso: BookOpen,
  Juego: Gamepad2,
  Herramienta: Wrench,
  IA: Bot,
};

const categoryColors: Record<App["category"], string> = {
  Religioso: "#27AE60",
  Juego: "#E74C3C",
  Herramienta: "#2E86AB",
  IA: "#7C3AED",
};

const filterKeys = ["Todos", "Religioso", "Juego", "Herramienta", "IA"] as const;

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.97 },
};

export default function AppsPage() {
  const { lang } = useApp();
  const c = copy[lang];
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? apps : apps.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--background)" }}>

      {/* Header */}
      <div className="py-24 text-center border-b" style={{ borderColor: "var(--border-clr)", background: "var(--surface)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-poppins font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ color: "#7C3AED", background: "rgba(124,58,237,0.12)" }}>
            {c.tag}
          </span>
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl mb-4" style={{ color: "var(--foreground)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h1>
          <p className="font-inter max-w-xl mx-auto" style={{ color: "var(--muted-clr)" }}>
            {c.sub}
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {filterKeys.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-poppins font-bold transition-all duration-200"
              style={
                filter === f
                  ? { background: "linear-gradient(135deg, #00D4FF, #7C3AED)", color: "#fff" }
                  : { background: "var(--glass-bg)", color: "var(--muted-clr)", border: "1px solid var(--border-clr)" }
              }
            >
              {c.filters[f as keyof typeof c.filters]}
            </button>
          ))}
        </div>

        {/* App grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((app) => {
              const CatIcon = categoryIcons[app.category];
              const color = app.color || categoryColors[app.category];

              return (
                <motion.div
                  key={app.id}
                  variants={item}
                  layout
                  className="glass rounded-3xl overflow-hidden"
                  style={{ border: `1px solid ${color}20` }}
                >
                  {/* Top accent bar */}
                  <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

                  <div className="p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                          style={{ background: `${color}18` }}>
                          {app.icon}
                        </div>
                        <div>
                          <h3 className="font-poppins font-bold text-base" style={{ color: "var(--foreground)" }}>
                            {app.name}
                          </h3>
                          <p className="font-inter text-sm mt-0.5" style={{ color: "var(--muted-clr)" }}>
                            {app.tagline}
                          </p>
                        </div>
                      </div>
                      {/* Category chip */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-poppins font-bold flex-shrink-0"
                        style={{ background: `${categoryColors[app.category]}15`, color: categoryColors[app.category] }}>
                        <CatIcon size={10} />
                        {c.filters[app.category as keyof typeof c.filters]}
                      </div>
                    </div>

                    <p className="font-inter text-sm leading-relaxed mb-5" style={{ color: "var(--muted-clr)" }}>
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.features.map((f) => (
                        <span key={f} className="text-xs px-3 py-1 rounded-lg font-inter"
                          style={{ background: `${color}12`, color: color }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: "var(--border-clr)" }}>
                      <Clock size={12} style={{ color: "var(--muted-clr)" }} />
                      <span className="text-xs font-inter" style={{ color: "var(--muted-clr)" }}>
                        {c.soon}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
