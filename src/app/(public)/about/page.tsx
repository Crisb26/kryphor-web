"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const techStack = [
  "React Native", "Next.js", "Spring Boot", "Phaser.js",
  "PostgreSQL", "Android", "Play Store",
  "TypeScript", "Docker", "Tailwind CSS", "SQLite",
];

const copy = {
  es: {
    title: "Sobre", highlight: "Nosotros",
    sub: "Un estudio de software independiente nacido en Colombia.",
    story: {
      title: "Nuestra historia",
      p1: "Kryphor Labs nació en 2026 con una visión clara: crear tecnología que realmente importe. Fundada en Colombia, surgió de la necesidad de un ecosistema de software independiente que combinara calidad profesional con accesibilidad real para los usuarios latinoamericanos.",
      p2: "Desde plataformas de publicidad digital hasta videojuegos y herramientas educativas, construimos con pasión y propósito. Cada producto es una declaración de que el talento latinoamericano puede competir a nivel global.",
    },
    mision: { title: "Misión", text: "Crear tecnología que mejore la vida de las personas, con calidad, propósito e impacto real." },
    vision: { title: "Visión", text: "Ser una referencia latinoamericana en desarrollo de software independiente, accesible e innovador." },
    tech: "Tecnologías",
    trademark: "Kryphor Labs® — Marca registrada. Todos los productos, logotipos y materiales están protegidos por derechos de autor.",
  },
  en: {
    title: "About", highlight: "Us",
    sub: "An independent software studio born in Colombia.",
    story: {
      title: "Our story",
      p1: "Kryphor Labs was born in 2026 with a clear vision: create technology that truly matters. Founded in Colombia, it arose from the need for an independent software ecosystem combining professional quality with real accessibility for Latin American users.",
      p2: "From digital advertising platforms to video games and educational tools, we build with passion and purpose. Every product is a statement that Latin American talent can compete at a global level.",
    },
    mision: { title: "Mission", text: "Build technology that improves people's lives, with quality, purpose and real impact." },
    vision: { title: "Vision", text: "Become a Latin American reference in independent, accessible and innovative software." },
    tech: "Technologies",
    trademark: "Kryphor Labs® — Registered trademark. All products, logos and materials are protected by copyright.",
  },
};

export default function AboutPage() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--bg)" }}>

      {/* Header */}
      <div className="relative py-28 border-b overflow-hidden"
        style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, var(--glow-a), transparent 60%)" }} />
        <div className="relative z-10 kl-container text-center">
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-16 sm:h-20 w-auto object-contain mx-auto mb-10"
          />
          <h1 className="font-poppins font-bold mb-5"
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", color: "var(--fg)" }}>
            {c.title} <span className="gradient-text">{c.highlight}</span>
          </h1>
          <p className="font-inter text-lg max-w-xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            {c.sub}
          </p>
        </div>
      </div>

      <div className="kl-container py-24 space-y-20">

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl">
          <h2 className="font-poppins font-bold text-2xl mb-8" style={{ color: "var(--fg)" }}>
            {c.story.title}
          </h2>
          <div className="space-y-6">
            <p className="font-inter leading-relaxed" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>{c.story.p1}</p>
            <p className="font-inter leading-relaxed" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>{c.story.p2}</p>
          </div>
        </motion.section>

        {/* Mission + Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", padding: "clamp(2rem, 3.5vw, 3.25rem)" }}>
            <h3 className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>{c.mision.title}</h3>
            <p className="font-inter leading-relaxed" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>{c.mision.text}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.08 }} className="rounded-3xl"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent-b)", padding: "clamp(2rem, 3.5vw, 3.25rem)" }}>
            <h3 className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: "var(--accent-b)" }}>{c.vision.title}</h3>
            <p className="font-inter leading-relaxed" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>{c.vision.text}</p>
          </motion.div>
        </section>

        {/* Tech */}
        <section>
          <h2 className="font-poppins font-bold text-2xl mb-8" style={{ color: "var(--fg)" }}>
            {c.tech}
          </h2>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span key={tech}
                className="px-7 py-3.5 rounded-xl text-sm font-poppins font-medium whitespace-nowrap"
                style={{ color: "var(--fg-muted)", background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Trademark */}
        <section className="rounded-3xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
          <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)", lineHeight: 1.9 }}>
            {c.trademark}
          </p>
        </section>
      </div>
    </div>
  );
}
