"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const data = {
  es: [
    { n: "2026",  l: "Fundación" },
    { n: "5+",    l: "Apps en desarrollo" },
    { n: "2",     l: "Categorías" },
    { n: "100%",  l: "Independiente" },
  ],
  en: [
    { n: "2026",  l: "Founded" },
    { n: "5+",    l: "Apps in development" },
    { n: "2",     l: "Categories" },
    { n: "100%",  l: "Independent" },
  ],
};

export default function StatsSection() {
  const { lang } = useApp();
  const items = data[lang];

  return (
    <section className="py-20 border-y" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x" style={{ borderColor: "var(--border)" }}>
          {items.map(({ n, l }, i) => (
            <motion.div key={l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-12 px-6 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="font-poppins font-bold gradient-text mb-2"
                style={{ fontSize: "clamp(36px, 4vw, 54px)", lineHeight: 1 }}>
                {n}
              </span>
              <span className="font-inter text-xs tracking-widest uppercase"
                style={{ color: "var(--fg-muted)" }}>
                {l}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
