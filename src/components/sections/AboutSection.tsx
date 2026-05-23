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
    <section className="py-36" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl leading-tight mb-6"
              style={{ color: "var(--fg)" }}>
              {c.title}
            </h2>
            <p className="font-inter text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              {c.story}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-2xl p-7" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--accent)" }}>
                {c.misionTitle}
              </p>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {c.mision}
              </p>
            </div>
            <div className="rounded-2xl p-7" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--accent-b)" }}>
                {c.visionTitle}
              </p>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {c.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.values.map(({ title, body }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-7"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <div className="w-8 h-0.5 mb-5 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-b))" }} />
              <h4 className="font-poppins font-semibold text-sm mb-3" style={{ color: "var(--fg)" }}>
                {title}
              </h4>
              <p className="font-inter text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
