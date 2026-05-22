"use client";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Star, Globe, Heart } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    title: "Sobre",
    highlight: "Kryphor Labs",
    mision: {
      label: "Misión",
      text: "Crear tecnología que mejore la vida de las personas — desde aplicaciones móviles hasta inteligencia artificial — con calidad, propósito e impacto real. Cada producto que construimos existe para resolver algo que importa.",
    },
    vision: {
      label: "Visión",
      text: "Ser una referencia latinoamericana en desarrollo de software independiente, accesible e innovador. Que Kryphor Labs sea sinónimo de excelencia tecnológica nacida en Colombia para el mundo.",
    },
    values: [
      { label: "Innovación",    desc: "Siempre la solución más creativa." },
      { label: "Calidad",       desc: "Cada línea de código importa." },
      { label: "Accesibilidad", desc: "Tecnología para todos, sin excepción." },
      { label: "Pasión",        desc: "Construimos con amor lo que usamos con orgullo." },
    ],
  },
  en: {
    title: "About",
    highlight: "Kryphor Labs",
    mision: {
      label: "Mission",
      text: "Build technology that improves people's lives — from mobile apps to artificial intelligence — with quality, purpose and real impact. Every product we build exists to solve something that matters.",
    },
    vision: {
      label: "Vision",
      text: "Become a Latin American reference in independent, accessible and innovative software development. Let Kryphor Labs be synonymous with technological excellence born in Colombia for the world.",
    },
    values: [
      { label: "Innovation",    desc: "Always the most creative solution." },
      { label: "Quality",       desc: "Every line of code matters." },
      { label: "Accessibility", desc: "Technology for everyone, without exception." },
      { label: "Passion",       desc: "We build with love what we use with pride." },
    ],
  },
};

const valueIcons = [Lightbulb, Star, Globe, Heart];

export default function AboutSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-28" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-4" style={{ color: "var(--foreground)" }}>
            {c.title}{" "}
            <span className="gradient-text">{c.highlight}</span>
          </h2>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(0,212,255,0.12)" }}>
                <Target size={20} className="text-cyan" />
              </div>
              <h3 className="font-poppins font-bold text-lg" style={{ color: "var(--foreground)" }}>
                {c.mision.label}
              </h3>
            </div>
            <p className="font-inter text-base leading-relaxed" style={{ color: "var(--muted-clr)" }}>
              {c.mision.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(168,85,247,0.12)" }}>
                <Eye size={20} className="text-soft-purp" />
              </div>
              <h3 className="font-poppins font-bold text-lg" style={{ color: "var(--foreground)" }}>
                {c.vision.label}
              </h3>
            </div>
            <p className="font-inter text-base leading-relaxed" style={{ color: "var(--muted-clr)" }}>
              {c.vision.text}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {c.values.map(({ label, desc }, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))" }}>
                  <Icon size={22} className="text-cyan" />
                </div>
                <h4 className="font-poppins font-bold text-sm mb-2" style={{ color: "var(--foreground)" }}>{label}</h4>
                <p className="font-inter text-xs leading-relaxed" style={{ color: "var(--muted-clr)" }}>{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
