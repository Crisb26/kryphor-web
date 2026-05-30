"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useApp } from "@/lib/providers";

const colors = ["#38BDF8", "#818CF8", "#34D399", "#F59E0B"];

const data = {
  es: [
    { value: 2026, from: 2020, suffix: "",  label: "Año de fundación" },
    { value: 5,    from: 0,    suffix: "+", label: "Apps en desarrollo" },
    { value: 2,    from: 0,    suffix: "",  label: "Categorías" },
    { value: 100,  from: 0,    suffix: "%", label: "Independiente" },
  ],
  en: [
    { value: 2026, from: 2020, suffix: "",  label: "Founded" },
    { value: 5,    from: 0,    suffix: "+", label: "Apps in development" },
    { value: 2,    from: 0,    suffix: "",  label: "Categories" },
    { value: 100,  from: 0,    suffix: "%", label: "Independent" },
  ],
};

function AnimatedNumber({ from, to, suffix, color }: { from: number; to: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(from, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => { node.textContent = Math.round(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [inView, from, to, suffix]);

  return (
    <span ref={ref} className="font-poppins font-bold" style={{ color }}>
      {from}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { lang } = useApp();
  const items = data[lang];

  return (
    <section className="py-24 border-y" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="kl-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ value, from, suffix, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, boxShadow: `0 16px 48px ${colors[i]}22` }}
              className="flex flex-col items-center justify-center py-12 px-6 text-center rounded-2xl"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderTop: `2px solid ${colors[i]}`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div className="mb-3" style={{ fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1 }}>
                <AnimatedNumber from={from} to={value} suffix={suffix} color={colors[i]} />
              </div>
              <span className="font-inter text-xs tracking-widest uppercase"
                style={{ color: "var(--fg-muted)" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
