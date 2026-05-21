"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Gamepad2, BookOpen, Wrench, Bot } from "lucide-react";
import { apps, type App } from "@/data/apps";
import Badge from "@/components/ui/Badge";

const categoryIcons = {
  Religioso: BookOpen,
  Juego: Gamepad2,
  Herramienta: Wrench,
  IA: Bot,
};

const filters = ["Todos", "Religioso", "Juego", "Herramienta", "IA"] as const;

const statusConfig = {
  disponible: { label: "Disponible", variant: "green" as const },
  "en-desarrollo": { label: "En Desarrollo", variant: "gray" as const },
  proximamente: { label: "Próximamente", variant: "purple" as const },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10 },
};

export default function AppsPage() {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? apps : apps.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen bg-bg-deep pt-24 pb-16">
      {/* Header */}
      <div className="py-16 text-center border-b border-white/5 bg-bg-card mb-12">
        <h1 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-6xl mb-4">
          Nuestras <span className="gradient-text">Apps</span>
        </h1>
        <p className="text-muted font-inter max-w-xl mx-auto">
          Cada aplicación es una historia de innovación, pasión y propósito.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-poppins font-bold transition-all duration-200 ${
                filter === f
                  ? "bg-gradient-to-r from-cyan to-purple text-white shadow-lg"
                  : "glass text-muted hover:text-kryphor-white border border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((app) => {
              const CatIcon = categoryIcons[app.category];
              const status = statusConfig[app.status];

              return (
                <motion.div
                  key={app.id}
                  variants={item}
                  layout
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl overflow-hidden group"
                  style={{ border: `1px solid ${app.color}25` }}
                >
                  {/* Color bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${app.color}, transparent)` }} />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                          style={{ background: `${app.color}20` }}
                        >
                          {app.icon}
                        </div>
                        <div>
                          <h3 className="font-poppins font-bold text-kryphor-white text-lg">{app.name}</h3>
                          <p className="text-muted text-sm">{app.tagline}</p>
                        </div>
                      </div>
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </div>

                    <p className="text-muted font-inter text-sm leading-relaxed mb-5">{app.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {app.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 rounded-lg font-inter"
                          style={{ background: `${app.color}15`, color: app.color }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CatIcon size={14} className="text-muted" />
                        <span className="text-muted text-xs">{app.category}</span>
                      </div>
                      {app.playStoreUrl && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-cyan hover:text-kryphor-white transition-colors"
                        >
                          <ExternalLink size={12} />
                          Play Store
                        </a>
                      )}
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
