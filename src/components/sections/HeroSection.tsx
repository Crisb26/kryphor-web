"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import Button from "@/components/ui/Button";

const copy = {
  es: {
    tagline: "Software · Inteligencia Artificial · Videojuegos · Innovación",
    headline1: "Tecnología que",
    headline2: "transforma vidas.",
    sub: "Somos un laboratorio de software independiente nacido en Colombia. Construimos apps, videojuegos e inteligencia artificial con calidad y propósito.",
    cta: "Explorar Ecosistema",
    ctaSecondary: "Nuestra Historia",
  },
  en: {
    tagline: "Software · Artificial Intelligence · Video Games · Innovation",
    headline1: "Technology that",
    headline2: "transforms lives.",
    sub: "We are an independent software studio born in Colombia. We build apps, video games and AI with quality and purpose.",
    cta: "Explore Ecosystem",
    ctaSecondary: "Our Story",
  },
};

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-32 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-20 sm:h-24 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Tagline chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <span
            className="inline-block text-xs sm:text-sm font-poppins tracking-[0.2em] uppercase px-4 py-2 rounded-full border"
            style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}
          >
            {c.tagline}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8"
        >
          <h1 className="font-poppins font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(42px, 7vw, 80px)", color: "var(--foreground)" }}>
            {c.headline1}<br />
            <span className="gradient-text">{c.headline2}</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="font-inter max-w-2xl text-base sm:text-lg leading-relaxed mb-12"
          style={{ color: "var(--muted-clr)" }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="/apps" size="lg">{c.cta}</Button>
          <Button href="/about" variant="outline" size="lg">{c.ctaSecondary}</Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--muted-clr)" }}
        >
          <div className="w-1 h-2 rounded-full bg-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
