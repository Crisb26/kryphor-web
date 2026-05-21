"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Apps en desarrollo" },
  { value: "2026", label: "Año de fundación" },
  { value: "AI", label: "Powered by Betho" },
  { value: "∞", label: "Innovación continua" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-poppins font-bold text-3xl sm:text-4xl gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-muted text-sm font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
