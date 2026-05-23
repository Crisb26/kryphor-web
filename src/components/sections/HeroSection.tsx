"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import Button from "@/components/ui/Button";

const copy = {
  es: {
    headline1: "Tecnología que",
    headline2: "transforma vidas.",
    sub: "Somos un estudio de software independiente nacido en Colombia. Construimos aplicaciones y videojuegos con calidad y propósito.",
    cta: "Explorar Ecosistema",
    ctaSecondary: "Nuestra Historia",
  },
  en: {
    headline1: "Technology that",
    headline2: "transforms lives.",
    sub: "We are an independent software studio born in Colombia. We build applications and video games with quality and purpose.",
    cta: "Explore Ecosystem",
    ctaSecondary: "Our Story",
  },
};

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid">
      {/* Subtle radial gradients — not saturated */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.06), transparent)" }} />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.05), transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-32 flex flex-col items-center text-center">

        {/* Logo — prominent */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-28 sm:h-36 lg:h-44 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-7"
        >
          <h1
            className="font-poppins font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(40px, 6.5vw, 76px)", color: "var(--foreground)" }}
          >
            {c.headline1}<br />
            <span className="gradient-text">{c.headline2}</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-inter max-w-xl text-base sm:text-lg leading-relaxed mb-12"
          style={{ color: "var(--muted-clr)" }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
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
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--border-clr)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "var(--accent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
