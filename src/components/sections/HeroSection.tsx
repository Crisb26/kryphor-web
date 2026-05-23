"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/providers";
import { ArrowRight } from "lucide-react";

const copy = {
  es: {
    tag:  "Kryphor Labs",
    h1:   "Construimos lo que",
    h1b:  "el futuro necesita.",
    sub:  "Estudio de software independiente. Creamos videojuegos, aplicaciones y experiencias digitales con propósito y calidad.",
    cta:  "Explorar ecosistema",
    cta2: "Nuestra historia",
  },
  en: {
    tag:  "Kryphor Labs",
    h1:   "We build what",
    h1b:  "the future needs.",
    sub:  "Independent software studio. We create video games, applications and digital experiences with purpose and quality.",
    cta:  "Explore ecosystem",
    cta2: "Our story",
  },
};

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Glow blobs — very subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.07), transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-36 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-24 sm:h-32 lg:h-40 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-bold tracking-tight leading-[1.08] mb-7"
          style={{ fontSize: "clamp(38px, 6vw, 72px)", color: "var(--fg)" }}
        >
          {c.h1}<br />
          <span className="gradient-text">{c.h1b}</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="font-inter max-w-xl text-base sm:text-lg leading-relaxed mb-14"
          style={{ color: "var(--fg-muted)" }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="/apps"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-poppins font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
          >
            {c.cta}
            <ArrowRight size={15} />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-poppins font-semibold text-sm border transition-all duration-200 hover:opacity-80"
            style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}
          >
            {c.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--fg-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
