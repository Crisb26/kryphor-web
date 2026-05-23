"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";

const stats = {
  es: [
    { value: "2026",  label: "Año de fundación" },
    { value: "5+",    label: "Aplicaciones en desarrollo" },
    { value: "2",     label: "Géneros de apps" },
    { value: "100%",  label: "Software independiente" },
  ],
  en: [
    { value: "2026",  label: "Founded" },
    { value: "5+",    label: "Apps in development" },
    { value: "2",     label: "App categories" },
    { value: "100%",  label: "Independent software" },
  ],
};

export default function StatsSection() {
  const { lang } = useApp();
  const items = stats[lang];

  return (
    <section className="py-16" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0"
          style={{ border: "1px solid var(--border-clr)", borderRadius: "1rem", overflow: "hidden",
            "--tw-divide-color": "var(--border-clr)" } as React.CSSProperties}>
          {items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="px-8 py-10 text-center"
              style={{ background: "var(--glass-bg)", borderColor: "var(--border-clr)" }}
            >
              <div className="font-poppins font-bold text-4xl sm:text-5xl gradient-text mb-2">
                {stat.value}
              </div>
              <p className="font-inter text-xs sm:text-sm" style={{ color: "var(--muted-clr)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
