"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    sub: "Tienes un proyecto o una idea y quieres saber más sobre lo que hacemos. Estamos disponibles.",
    cta: "Ir a contacto",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "You have a project or an idea and want to know more about what we do. We are available.",
    cta: "Go to contact",
  },
};

export default function ContactSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-40 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, var(--glow-b), transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-8 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
            {c.sub}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-poppins font-semibold text-sm text-white transition-all duration-250 hover:opacity-90 hover:scale-[1.04]"
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
