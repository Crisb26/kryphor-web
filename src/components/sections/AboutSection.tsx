"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import { Shield, Zap, Users } from "lucide-react";

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
      { icon: Shield, title: "Calidad sin concesiones", body: "Cada línea de código importa. No lanzamos algo hasta que estemos completamente satisfechos con el resultado.", color: "#38BDF8" },
      { icon: Zap,    title: "Independencia total",     body: "Sin inversores externos ni presiones de mercado. Construimos lo que creemos que vale la pena construir.", color: "#818CF8" },
      { icon: Users,  title: "Accesibilidad real",      body: "Nuestras apps están diseñadas para funcionar para todos, no solo para quienes tienen el último dispositivo.", color: "#34D399" },
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
      { icon: Shield, title: "Quality without compromise", body: "Every line of code matters. We don't ship something until we are completely satisfied with the result.", color: "#38BDF8" },
      { icon: Zap,    title: "Total independence",         body: "No external investors or market pressure. We build what we believe is worth building.", color: "#818CF8" },
      { icon: Users,  title: "Real accessibility",         body: "Our apps are designed to work for everyone, not just those with the latest device.", color: "#34D399" },
    ],
  },
};

export default function AboutSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-40" style={{ background: "var(--bg-2)" }}>
      <div className="kl-container">

        {/* Story + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 mb-28">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-6"
              style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </p>
            <h2 className="font-poppins font-bold leading-tight mb-10"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "var(--fg)" }}>
              {c.title}
            </h2>
            <p className="font-inter leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.6vw, 19px)", color: "var(--fg-muted)", lineHeight: 1.85 }}>
              {c.story}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex flex-col gap-6"
          >
            {[
              { title: c.misionTitle, body: c.mision, accent: "var(--accent)", glow: "var(--glow-a)" },
              { title: c.visionTitle, body: c.vision, accent: "var(--accent-b)", glow: "var(--glow-b)" },
            ].map(({ title, body, accent, glow }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4, boxShadow: `0 20px 60px ${glow}` }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl p-12"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderLeft: `3px solid ${accent}`,
                }}>
                <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-5"
                  style={{ color: accent }}>
                  {title}
                </p>
                <p className="font-inter leading-relaxed"
                  style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--fg-muted)", lineHeight: 1.85 }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {c.values.map(({ icon: Icon, title, body, color }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: `0 24px 64px ${color}28` }}
              className="rounded-3xl p-12 group"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${color}50`)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
                <Icon size={24} style={{ color }} />
              </div>
              <h4 className="font-poppins font-semibold mb-5"
                style={{ fontSize: "clamp(16px, 1.4vw, 18px)", color: "var(--fg)" }}>
                {title}
              </h4>
              <p className="font-inter leading-relaxed"
                style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "var(--fg-muted)", lineHeight: 1.9 }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
