"use client";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const techStack = [
  "React Native", "Next.js", "Spring Boot", "Phaser.js",
  "Anthropic AI", "PostgreSQL", "Android", "Play Store",
  "TypeScript", "Docker", "Tailwind CSS", "SQLite",
];

const copy = {
  es: {
    tag: "Kryphor Labs",
    title: "Sobre", highlight: "Nosotros",
    sub: "Un laboratorio de software independiente nacido en Colombia.",
    story: {
      title: "Nuestra Historia",
      p1: "Kryphor Labs nació en 2026 con una visión clara: crear tecnología que realmente importe. Fundada en Colombia, surgió de la necesidad de un ecosistema de software independiente que combinara calidad profesional con accesibilidad real para los usuarios latinoamericanos.",
      p2: "Desde apps espirituales hasta videojuegos de acción, herramientas educativas e inteligencia artificial — construimos con pasión y propósito. Cada producto es una declaración de que el talento latinoamericano puede competir a nivel global.",
    },
    mision: { title: "Misión", text: "Crear tecnología que mejore la vida de las personas — desde apps móviles hasta IA — con calidad, propósito e impacto real." },
    vision: { title: "Visión", text: "Ser referencia latinoamericana en software independiente, accesible e innovador. Que Kryphor Labs sea sinónimo de excelencia tecnológica desde Colombia para el mundo." },
    values: "Valores",
    valuesArr: [
      { emoji: "💡", name: "Innovación", desc: "Siempre la solución más creativa" },
      { emoji: "⭐", name: "Calidad",    desc: "Cada línea de código importa" },
      { emoji: "🌍", name: "Accesibilidad", desc: "Tecnología para todos" },
      { emoji: "❤️", name: "Pasión",     desc: "Construimos lo que amamos" },
    ],
    tech: "Tecnologías",
    trademark: "Kryphor Labs es una marca en proceso de registro. Todos los productos, servicios, logotipos y materiales de marca están protegidos por derechos de autor. Queda prohibida su reproducción sin autorización expresa.",
  },
  en: {
    tag: "Kryphor Labs",
    title: "About", highlight: "Us",
    sub: "An independent software studio born in Colombia.",
    story: {
      title: "Our Story",
      p1: "Kryphor Labs was born in 2026 with a clear vision: create technology that truly matters. Founded in Colombia, it arose from the need for an independent software ecosystem combining professional quality with real accessibility for Latin American users.",
      p2: "From spiritual apps to action video games, educational tools and artificial intelligence — we build with passion and purpose. Every product is a statement that Latin American talent can compete at a global level.",
    },
    mision: { title: "Mission", text: "Build technology that improves people's lives — from mobile apps to AI — with quality, purpose and real impact." },
    vision: { title: "Vision", text: "Become a Latin American reference in independent, accessible and innovative software. Let Kryphor Labs be synonymous with technological excellence from Colombia to the world." },
    values: "Values",
    valuesArr: [
      { emoji: "💡", name: "Innovation",    desc: "Always the most creative solution" },
      { emoji: "⭐", name: "Quality",       desc: "Every line of code matters" },
      { emoji: "🌍", name: "Accessibility", desc: "Technology for everyone" },
      { emoji: "❤️", name: "Passion",       desc: "We build what we love" },
    ],
    tech: "Technologies",
    trademark: "Kryphor Labs is a trademark pending registration. All products, services, logos and brand materials are protected by copyright. Reproduction without express authorization is prohibited.",
  },
};

export default function AboutPage() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--background)" }}>

      {/* Header */}
      <div className="relative py-24 border-b overflow-hidden"
        style={{ background: "var(--surface)", borderColor: "var(--border-clr)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.07), transparent 60%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-20 w-auto object-contain mx-auto mb-8"
          />
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl mb-4" style={{ color: "var(--foreground)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h1>
          <p className="font-inter text-lg max-w-2xl mx-auto" style={{ color: "var(--muted-clr)" }}>
            {c.sub}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-16 space-y-16">

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-poppins font-bold text-2xl mb-6" style={{ color: "var(--foreground)" }}>
            {c.story.title}
          </h2>
          <div className="glass rounded-3xl p-10 space-y-4">
            <p className="font-inter text-base leading-relaxed" style={{ color: "var(--muted-clr)" }}>{c.story.p1}</p>
            <p className="font-inter text-base leading-relaxed" style={{ color: "var(--muted-clr)" }}>{c.story.p2}</p>
          </div>
        </motion.section>

        {/* Mission + Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl p-8" style={{ border: "1px solid rgba(0,212,255,0.18)" }}>
            <h3 className="font-poppins font-bold text-xl mb-4 text-cyan">🎯 {c.mision.title}</h3>
            <p className="font-inter leading-relaxed" style={{ color: "var(--muted-clr)" }}>{c.mision.text}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="glass rounded-3xl p-8" style={{ border: "1px solid rgba(168,85,247,0.18)" }}>
            <h3 className="font-poppins font-bold text-xl mb-4 text-soft-purp">🚀 {c.vision.title}</h3>
            <p className="font-inter leading-relaxed" style={{ color: "var(--muted-clr)" }}>{c.vision.text}</p>
          </motion.div>
        </section>

        {/* Values */}
        <section>
          <h2 className="font-poppins font-bold text-2xl mb-6" style={{ color: "var(--foreground)" }}>
            💎 {c.values}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.valuesArr.map((v, i) => (
              <motion.div key={v.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h4 className="font-poppins font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>{v.name}</h4>
                <p className="font-inter text-xs" style={{ color: "var(--muted-clr)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="font-poppins font-bold text-2xl mb-6" style={{ color: "var(--foreground)" }}>
            🛠 {c.tech}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span key={tech}
                className="px-4 py-2 rounded-xl text-sm font-poppins font-bold transition-colors glass"
                style={{ color: "var(--muted-clr)", border: "1px solid var(--border-clr)" }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Trademark */}
        <section className="glass rounded-3xl p-8 text-center" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
          <h2 className="font-poppins font-bold text-xl mb-3 text-gold">Kryphor Labs®</h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--muted-clr)" }}>
            {c.trademark}
          </p>
        </section>
      </div>
    </div>
  );
}
