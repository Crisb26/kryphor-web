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
    <section className="py-36 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: "radial-gradient(ellipse 70% 55% at 50% 100%, var(--glow-b), transparent 70%)", position: "absolute", inset: 0 }} />
        <div style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, var(--glow-a), transparent 60%)", position: "absolute", inset: 0 }} />
      </div>

      <div className="relative z-10 kl-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-poppins font-semibold text-sm tracking-widest uppercase mb-6"
            style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-poppins font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "var(--fg)" }}>
            {c.title}
          </h2>
          <p className="font-inter leading-relaxed mb-14 max-w-xl mx-auto"
            style={{ fontSize: "clamp(16px, 1.6vw, 19px)", color: "var(--fg-muted)", lineHeight: 1.8 }}>
            {c.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-poppins font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.04]"
              style={{
                fontSize: "clamp(14px, 1.3vw, 16px)",
                background: "linear-gradient(135deg, var(--accent), var(--accent-b))",
                boxShadow: "0 8px 32px var(--glow-a)",
              }}>
              {c.cta} <ArrowRight size={16} />
            </a>
            <a href="mailto:kryphorlabs@gmail.com"
              className="inline-flex items-center gap-2 font-inter text-base transition-all duration-200 px-5 py-3 rounded-full border"
              style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}>
              <Mail size={16} /> {c.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
