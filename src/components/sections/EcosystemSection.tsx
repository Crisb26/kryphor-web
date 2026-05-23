"use client";
import { motion } from "framer-motion";
import { Gamepad2, BookOpen, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    tag: "Próximamente",
    title: "Nuestro",
    highlight: "Ecosistema",
    sub: "Estamos construyendo un conjunto de aplicaciones para acompañarte en el día a día: videojuegos, devocionales y mucho más.",
    cta: "Ver todas las aplicaciones",
    categories: [
      {
        icon: Gamepad2,
        label: "Videojuegos",
        desc: "Experiencias de acción, aventura y aprendizaje que ponen a prueba tu habilidad y creatividad.",
        color: "#E74C3C",
        count: 4,
      },
      {
        icon: BookOpen,
        label: "Espiritual",
        desc: "Acompañamiento espiritual diario a través de devocionales, oraciones y reflexiones de vida.",
        color: "#27AE60",
        count: 1,
      },
    ],
  },
  en: {
    tag: "Coming Soon",
    title: "Our",
    highlight: "Ecosystem",
    sub: "We are building a set of applications to accompany you every day: video games, devotionals and much more.",
    cta: "See all applications",
    categories: [
      {
        icon: Gamepad2,
        label: "Video Games",
        desc: "Action, adventure and learning experiences that challenge your skill and creativity.",
        color: "#E74C3C",
        count: 4,
      },
      {
        icon: BookOpen,
        label: "Spiritual",
        desc: "Daily spiritual support through devotionals, prayers and life reflections.",
        color: "#27AE60",
        count: 1,
      },
    ],
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span
            className="inline-block text-xs font-poppins font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ color: "var(--accent-2)", background: "rgba(129,140,248,0.10)" }}
          >
            {c.tag}
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-5" style={{ color: "var(--foreground)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted-clr)" }}>
            {c.sub}
          </p>
        </motion.div>

        {/* Category cards — max-w for 2 large cards centered */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mb-14"
        >
          {c.categories.map(({ icon: Icon, label, desc, color, count }) => (
            <motion.a
              key={label}
              href="/apps"
              variants={item}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-9 group cursor-pointer block no-underline"
              style={{ border: `1px solid ${color}18` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                style={{ background: `${color}14` }}>
                <Icon size={28} style={{ color }} />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-1" style={{ color: "var(--foreground)" }}>
                {label}
              </h3>
              <p className="font-inter text-xs mb-1" style={{ color: "var(--muted-clr)" }}>
                {count} {lang === "es" ? "app" : "app"}{count !== 1 ? "s" : ""}
              </p>
              <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: "var(--muted-clr)" }}>
                {desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color }}>
                {c.cta}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <a
            href="/apps"
            className="inline-flex items-center gap-2 font-poppins font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }}
          >
            {c.cta}
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
