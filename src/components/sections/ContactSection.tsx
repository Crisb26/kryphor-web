"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Contacto",
    title:   "¿Hablamos?",
    sub:     "Tienes un proyecto, una idea, o simplemente quieres saber más sobre lo que hacemos. Estamos disponibles.",
    cta:     "Ir a contacto",
    email:   "O escríbenos directamente",
  },
  en: {
    eyebrow: "Contact",
    title:   "Let's talk.",
    sub:     "You have a project, an idea, or simply want to know more about what we do. We are available.",
    cta:     "Go to contact",
    email:   "Or write us directly",
  },
};

export default function ContactSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-40 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, var(--glow-b), transparent 70%)" }} />

      <div className="relative z-10 kl-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--fg-muted)", lineHeight: 1.7 }}>
            {c.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-poppins font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.04]"
              style={{ fontSize: "clamp(13px, 1.2vw, 15px)", background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
            >
              {c.cta} <ArrowRight size={16} />
            </a>
            <a href="mailto:kryphorlabs@gmail.com"
              className="inline-flex items-center gap-2 font-inter text-sm transition-colors"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
              <Mail size={14} /> {c.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
