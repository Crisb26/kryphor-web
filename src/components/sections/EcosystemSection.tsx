"use client";
import { motion } from "framer-motion";
import { Gamepad2, BookOpen, Wrench, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    label: "Próximamente",
    title: "Nuestro",
    highlight: "Ecosistema",
    sub: "Estamos construyendo un conjunto de aplicaciones para mejorar tu vida diaria — juegos, devocionales, herramientas educativas y mucho más.",
    cta: "Ver todas las apps",
    categories: [
      { icon: Gamepad2, label: "Videojuegos",     desc: "Experiencias inmersivas de acción y aventura.",       color: "#E74C3C" },
      { icon: BookOpen, label: "Espiritual",       desc: "Apps de oración, devocionales y reflexión diaria.",   color: "#27AE60" },
      { icon: Wrench,   label: "Herramientas",     desc: "Educación, productividad y creatividad táctil.",      color: "#2E86AB" },
    ],
  },
  en: {
    label: "Coming Soon",
    title: "Our",
    highlight: "Ecosystem",
    sub: "We are building a suite of apps to improve your daily life — games, devotionals, educational tools and much more.",
    cta: "See all apps",
    categories: [
      { icon: Gamepad2, label: "Video Games",    desc: "Immersive action and adventure experiences.",         color: "#E74C3C" },
      { icon: BookOpen, label: "Spiritual",       desc: "Prayer apps, devotionals and daily reflection.",      color: "#27AE60" },
      { icon: Wrench,   label: "Tools",           desc: "Education, productivity and tactile creativity.",     color: "#2E86AB" },
    ],
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-block text-xs font-poppins font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ color: "#7C3AED", background: "rgba(124,58,237,0.12)" }}>
            {c.label}
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-5" style={{ color: "var(--foreground)" }}>
            {c.title}{" "}
            <span className="gradient-text">{c.highlight}</span>
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted-clr)" }}>
            {c.sub}
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
        >
          {c.categories.map(({ icon: Icon, label, desc, color }) => (
            <motion.a
              key={label}
              href="/apps"
              variants={item}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8 group cursor-pointer no-underline block"
              style={{ border: `1px solid ${color}20` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}18` }}>
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                {label}
              </h3>
              <p className="font-inter text-sm leading-relaxed mb-4" style={{ color: "var(--muted-clr)" }}>
                {desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wide"
                style={{ color }}>
                {c.cta} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/apps"
            className="inline-flex items-center gap-2 font-poppins font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)", color: "#fff" }}
          >
            {c.cta}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
