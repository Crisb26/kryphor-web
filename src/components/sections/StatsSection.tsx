"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const stats = {
  es: [
    { value: "2026", label: "Fundada en Colombia" },
    { value: "5+",   label: "Apps en desarrollo" },
    { value: "100%", label: "Software independiente" },
    { value: "∞",    label: "Innovación continua" },
  ],
  en: [
    { value: "2026", label: "Founded in Colombia" },
    { value: "5+",   label: "Apps in development" },
    { value: "100%", label: "Independent software" },
    { value: "∞",    label: "Continuous innovation" },
  ],
};

export default function StatsSection() {
  const { lang } = useApp();
  const items = stats[lang];

  return (
    <section className="py-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px"
          style={{ border: "1px solid var(--border-clr)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 text-center"
              style={{ background: "var(--glass-bg)", borderRight: i < 3 ? "1px solid var(--border-clr)" : "none" }}
            >
              <div className="font-poppins font-bold text-4xl sm:text-5xl gradient-text mb-2">
                {stat.value}
              </div>
              <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
