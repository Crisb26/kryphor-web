"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    title: "¿Tienes una idea?",
    sub: "Estamos listos para construir algo increíble juntos. Cuéntanos tu proyecto y lo hacemos realidad.",
    cta: "Escribenos",
  },
  en: {
    title: "Have an idea?",
    sub: "We are ready to build something incredible together. Tell us about your project and we'll make it happen.",
    cta: "Get in touch",
  },
};

export default function ContactSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--background)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(124,58,237,0.08) 0%, transparent 65%)" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: "rgba(0,212,255,0.10)", border: "1px solid rgba(0,212,255,0.15)" }}>
            <Mail size={28} className="text-cyan" />
          </div>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-5" style={{ color: "var(--foreground)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed mb-10" style={{ color: "var(--muted-clr)" }}>
            {c.sub}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-poppins font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)", color: "#fff" }}
          >
            <Mail size={16} />
            {c.cta}
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
