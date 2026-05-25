"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useApp } from "@/lib/providers";

const data = {
  es: [
    { value: 2026, display: "2026", suffix: "",   label: "Año de fundación" },
    { value: 5,    display: "5",    suffix: "+",   label: "Apps en desarrollo" },
    { value: 2,    display: "2",    suffix: "",    label: "Categorías" },
    { value: 100,  display: "100",  suffix: "%",   label: "Independiente" },
  ],
  en: [
    { value: 2026, display: "2026", suffix: "",   label: "Founded" },
    { value: 5,    display: "5",    suffix: "+",   label: "Apps in development" },
    { value: 2,    display: "2",    suffix: "",    label: "Categories" },
    { value: 100,  display: "100",  suffix: "%",   label: "Independent" },
  ],
};

function AnimatedNumber({ from, to, suffix }: { from: number; to: number; suffix: string }) {
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
    <span ref={ref} className="gradient-text">
      {from}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { lang } = useApp();
  const items = data[lang];

  return (
    <section className="py-24 border-y" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
      <div className="kl-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)", borderRadius: "1rem", overflow: "hidden" }}>
          {items.map(({ value, suffix, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="flex flex-col items-center justify-center py-14 px-8 text-center"
              style={{ background: "var(--bg-2)" }}
            >
              <div className="font-poppins font-bold mb-3"
                style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1 }}>
                <AnimatedNumber
                  from={value === 2026 ? 2020 : 0}
                  to={value}
                  suffix={suffix}
                />
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
