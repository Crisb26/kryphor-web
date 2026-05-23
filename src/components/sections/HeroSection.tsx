"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import { ArrowRight } from "lucide-react";

const copy = {
  es: {
    h1:  "Construimos lo que",
    h1b: "el futuro necesita.",
    sub: "Estudio de software independiente. Videojuegos, aplicaciones y experiencias digitales creadas con propósito real.",
    cta:  "Explorar ecosistema",
    cta2: "Nuestra historia",
  },
  en: {
    h1:  "We build what",
    h1b: "the future needs.",
    sub: "Independent software studio. Video games, applications and digital experiences created with real purpose.",
    cta:  "Explore ecosystem",
    cta2: "Our story",
  },
};

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid">
      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, var(--glow-b), transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 sm:px-12 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-28 sm:h-36 lg:h-44 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-bold tracking-tight leading-[1.06] mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 88px)", color: "var(--fg)" }}
        >
          {c.h1}
          <br />
          <span className="gradient-text">{c.h1b}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="font-inter max-w-2xl text-lg sm:text-xl leading-relaxed mb-14"
          style={{ color: "var(--fg-muted)" }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/apps"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-semibold text-sm text-white transition-all duration-250 hover:opacity-90 hover:scale-[1.04]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
          >
            {c.cta}
            <ArrowRight size={16} />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-sm transition-all duration-250 hover:opacity-70"
            style={{ color: "var(--fg-muted)", border: "1px solid var(--border)" }}
          >
            {c.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--fg-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
