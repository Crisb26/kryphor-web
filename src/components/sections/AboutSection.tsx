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
      text: "Crear tecnología que mejore la vida de las personas, desde aplicaciones móviles hasta videojuegos, con calidad, propósito e impacto real. Cada producto que construimos existe para resolver algo que importa.",
    },
    vision: {
      label: "Visión",
      text: "Ser una referencia latinoamericana en desarrollo de software independiente, accesible e innovador. Que Kryphor Labs sea sinónimo de excelencia tecnológica nacida en Colombia para el mundo.",
    },
    values: [
      { label: "Innovación",    desc: "Siempre buscamos la solución más creativa." },
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
      text: "Build technology that improves people's lives, from mobile apps to video games, with quality, purpose and real impact. Every product we build exists to solve something that matters.",
    },
    vision: {
      label: "Vision",
      text: "Become a Latin American reference in independent, accessible and innovative software development. Let Kryphor Labs be synonymous with technological excellence born in Colombia for the world.",
    },
    values: [
      { label: "Innovation",    desc: "We always seek the most creative solution." },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl" style={{ color: "var(--foreground)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h2>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(56,189,248,0.10)" }}>
                <Target size={20} style={{ color: "var(--accent)" }} />
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(129,140,248,0.10)" }}>
                <Eye size={20} style={{ color: "var(--accent-2)" }} />
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 text-center"
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(56,189,248,0.08)" }}>
                  <Icon size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h4 className="font-poppins font-bold text-sm mb-2" style={{ color: "var(--foreground)" }}>
                  {label}
                </h4>
                <p className="font-inter text-xs leading-relaxed" style={{ color: "var(--muted-clr)" }}>
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
