"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Kryphor Labs",
    title: "Software construido con propósito.",
    story: "Somos un estudio de desarrollo independiente fundado en Colombia en 2026. Nuestra idea es simple: crear tecnología que la gente realmente use y disfrute.",
    misionTitle: "Misión",
    mision: "Crear software de calidad que mejore la vida de las personas. Cada producto que lanzamos existe porque resuelve algo real.",
    visionTitle: "Visión",
    vision: "Ser un referente latinoamericano en desarrollo de software independiente, desde Colombia para el mundo.",
  },
  en: {
    eyebrow: "Kryphor Labs",
    title: "Software built with purpose.",
    story: "We are an independent development studio founded in Colombia in 2026. Our idea is simple: create technology that people actually use and enjoy.",
    misionTitle: "Mission",
    mision: "Create quality software that improves people's lives. Every product we launch exists because it solves something real.",
    visionTitle: "Vision",
    vision: "Be a Latin American reference in independent software development, from Colombia to the world.",
  },
};

const cardStyle: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
};

export default function AboutSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section id="about" style={{ background: "var(--bg-2)", padding: "clamp(6rem, 11vw, 11rem) 0" }}>
      <div className="kl-container">

        {/* Story + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-7"
              style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </p>
            <h2 className="font-poppins font-bold leading-tight mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--fg)" }}>
              {c.title}
            </h2>
            <p className="font-inter leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.6vw, 19px)", color: "var(--fg-muted)", lineHeight: 2 }}>
              {c.story}
            </p>
          </motion.div>

          {/* Mission / Vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex flex-col gap-8"
          >
            {[
              { title: c.misionTitle, body: c.mision, accent: "var(--accent)" },
              { title: c.visionTitle, body: c.vision,  accent: "var(--accent-b)" },
            ].map(({ title, body, accent }) => (
              <div key={title}
                style={{
                  ...cardStyle,
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: "1.5rem",
                  padding: "clamp(2rem, 3.5vw, 3.25rem)",
                }}>
                <p className="font-poppins font-semibold tracking-widest uppercase mb-5"
                  style={{ fontSize: "clamp(10px, 0.9vw, 12px)", color: accent }}>
                  {title}
                </p>
                <p className="font-inter leading-relaxed"
                  style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 2 }}>
                  {body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
