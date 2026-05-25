"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import { ArrowRight, Sparkles } from "lucide-react";

const copy = {
  es: {
    badge: "Estudio independiente · Colombia",
    h1a: "Construimos lo que",
    h1b: "el futuro necesita.",
    sub: "Videojuegos, aplicaciones y experiencias digitales creadas con propósito real. Sin inversores. Sin presiones. Solo software que vale la pena.",
    cta:  "Explorar ecosistema",
    cta2: "Nuestra historia",
  },
  en: {
    badge: "Independent studio · Colombia",
    h1a: "We build what",
    h1b: "the future needs.",
    sub: "Video games, applications and digital experiences created with real purpose. No investors. No pressure. Just software worth making.",
    cta:  "Explore ecosystem",
    cta2: "Our story",
  },
};

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid">

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob w-[700px] h-[700px] top-[-200px] left-[-200px] opacity-20"
          style={{ background: "var(--accent)", "--blob-duration": "12s" } as React.CSSProperties} />
        <div className="blob w-[600px] h-[600px] bottom-[-150px] right-[-150px] opacity-15"
          style={{ background: "var(--accent-b)", "--blob-duration": "15s", animationDelay: "-5s" } as React.CSSProperties} />
        <div className="blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: "var(--accent)", "--blob-duration": "9s", animationDelay: "-2s" } as React.CSSProperties} />
      </div>

      <div className="relative z-10 kl-container flex flex-col items-center text-center py-40">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full mb-12 text-xs font-inter font-medium"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
        >
          <Sparkles size={12} style={{ color: "var(--accent)" }} />
          {c.badge}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-24 sm:h-32 lg:h-40 xl:h-48 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-bold tracking-tight leading-[1.06] mb-8"
          style={{ fontSize: "clamp(42px, 7.5vw, 100px)", color: "var(--fg)" }}
        >
          {c.h1a}
          <br />
          <span className="gradient-text">{c.h1b}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="font-inter max-w-2xl leading-relaxed mb-14"
          style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--fg-muted)", lineHeight: 1.7 }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="/apps"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.04] active:scale-[0.98]"
            style={{ fontSize: "clamp(13px, 1.2vw, 15px)", background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
          >
            {c.cta} <ArrowRight size={16} />
          </a>
          <a href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold transition-all duration-200 hover:opacity-70"
            style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "var(--fg-muted)", border: "1px solid var(--border)" }}
          >
            {c.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--fg-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
