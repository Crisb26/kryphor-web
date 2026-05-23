"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    sub: "Tienes un proyecto, una idea o simplemente quieres saber más. Estamos disponibles.",
    cta: "Ir a contacto",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "You have a project, an idea, or simply want to know more. We are available.",
    cta: "Go to contact",
  },
};

export default function ContactSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-36 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(129,140,248,0.06), transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "var(--fg-muted)" }}>
            {c.sub}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-poppins font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
          >
            {c.cta}
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
