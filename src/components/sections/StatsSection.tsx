"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const data = {
  es: [
    { n: "2026",  l: "Fundación" },
    { n: "5+",    l: "Apps activas" },
    { n: "2",     l: "Categorías" },
    { n: "100%",  l: "Independiente" },
  ],
  en: [
    { n: "2026",  l: "Founded" },
    { n: "5+",    l: "Active apps" },
    { n: "2",     l: "Categories" },
    { n: "100%",  l: "Independent" },
  ],
};

export default function StatsSection() {
  const { lang } = useApp();
  const items = data[lang];

  return (
    <section className="py-14 border-y" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px"
          style={{ background: "var(--border)", borderRadius: "1rem", overflow: "hidden" }}>
          {items.map(({ n, l }, i) => (
            <motion.div key={l}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center justify-center py-10 px-6"
              style={{ background: "var(--bg-2)" }}>
              <span className="font-poppins font-bold text-3xl sm:text-4xl gradient-text mb-1">{n}</span>
              <span className="font-inter text-xs tracking-wide" style={{ color: "var(--fg-muted)" }}>{l}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
