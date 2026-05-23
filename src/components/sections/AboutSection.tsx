"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Kryphor Labs",
    title: "Software construido con propósito.",
    story: "Somos un estudio de desarrollo independiente fundado en Colombia en 2026. Nuestra idea es simple: crear tecnología que la gente realmente use y disfrute. Videojuegos que entretengan, aplicaciones que acompañen, herramientas que ayuden.",
    misionTitle: "Misión",
    mision: "Crear software de calidad que mejore la vida de las personas. Cada producto que lanzamos existe porque resuelve algo real.",
    visionTitle: "Visión",
    vision: "Ser un referente latinoamericano en desarrollo de software independiente. Que Kryphor Labs sea sinónimo de excelencia desde Colombia para el mundo.",
    values: [
      { title: "Calidad sin concesiones", body: "Cada línea de código importa. No lanzamos algo hasta que estemos satisfechos con el resultado." },
      { title: "Independencia total",     body: "Sin inversores externos ni presiones de mercado. Construimos lo que creemos que vale la pena construir." },
      { title: "Accesibilidad real",      body: "Nuestras apps están diseñadas para funcionar para todos, no solo para quienes tienen el último dispositivo." },
    ],
  },
  en: {
    eyebrow: "Kryphor Labs",
    title: "Software built with purpose.",
    story: "We are an independent development studio founded in Colombia in 2026. Our idea is simple: create technology that people actually use and enjoy. Games that entertain, apps that accompany, tools that help.",
    misionTitle: "Mission",
    mision: "Create quality software that improves people's lives. Every product we launch exists because it solves something real.",
    visionTitle: "Vision",
    vision: "Be a Latin American reference in independent software development. Let Kryphor Labs be synonymous with excellence from Colombia to the world.",
    values: [
      { title: "Quality without compromise", body: "Every line of code matters. We don't ship something until we are satisfied with the result." },
      { title: "Total independence",         body: "No external investors or market pressure. We build what we believe is worth building." },
      { title: "Real accessibility",         body: "Our apps are designed to work for everyone, not just those with the latest device." },
    ],
  },
};

export default function AboutSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-40" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28 items-start">

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </p>
            <h2 className="font-poppins font-bold leading-tight mb-8"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", color: "var(--fg)" }}>
              {c.title}
            </h2>
            <p className="font-inter text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
              {c.story}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-2xl p-8" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}>
                {c.misionTitle}
              </p>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                {c.mision}
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent-b)" }}>
                {c.visionTitle}
              </p>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                {c.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {c.values.map(({ title, body }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-8 card-hover"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
            >
              <div className="w-10 h-0.5 mb-6 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-b))" }} />
              <h4 className="font-poppins font-semibold text-sm mb-4" style={{ color: "var(--fg)" }}>
                {title}
              </h4>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
