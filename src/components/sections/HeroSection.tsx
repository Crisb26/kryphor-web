"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    badge: "Plataforma Tecnológica · 2026",
    h1a: "Construyendo herramientas",
    h1b: "para el futuro.",
    sub: "Creamos inteligencia artificial, plataformas digitales y soluciones tecnológicas que ayudan a personas y organizaciones a crecer.",
    cta1: "Explorar Ecosistema",
    cta2: "Conocer Betho AI",
    scrollHint: "Desplázate para explorar",
  },
  en: {
    badge: "Technology Platform · 2026",
    h1a: "Building tools",
    h1b: "for the future.",
    sub: "We create artificial intelligence, digital platforms and technological solutions that help people and organizations grow.",
    cta1: "Explore Ecosystem",
    cta2: "Meet Betho AI",
    scrollHint: "Scroll to explore",
  },
};

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    canvas.addEventListener("mousemove", e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 90);
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width)  a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        // mouse attraction (subtle)
        const mdx = mouse.x - a.x;
        const mdy = mouse.y - a.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 160) {
          a.x += mdx * 0.0008;
          a.y += mdy * 0.0008;
        }

        // node dot
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "rgba(129,140,248,0.7)" : "rgba(56,189,248,0.65)";
        ctx.fill();

        // connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
}

export default function HeroSection() {
  const { lang, theme } = useApp();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}>

      {/* Neural canvas */}
      <NeuralCanvas />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 45%, var(--glow-b), transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 35% at 50% 45%, var(--glow-a), transparent 65%)" }} />

      {/* Content */}
      <div className="relative z-10 kl-container flex flex-col items-center text-center py-44">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-12 text-xs font-inter font-medium"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
          {c.badge}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-20 sm:h-28 lg:h-36 xl:h-44 w-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-bold tracking-tight leading-[1.06] mb-8"
          style={{ fontSize: "clamp(38px, 7vw, 96px)", color: "var(--fg)" }}
        >
          {c.h1a}
          <br />
          <span className="gradient-text">{c.h1b}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="font-inter max-w-2xl leading-relaxed mb-14"
          style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--fg-muted)", lineHeight: 1.75 }}
        >
          {c.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="/apps"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-poppins font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.04] active:scale-[0.98]"
            style={{
              fontSize: "clamp(13px, 1.2vw, 15px)",
              background: "linear-gradient(135deg, var(--accent), var(--accent-b))",
              boxShadow: "0 8px 40px var(--glow-a)",
            }}>
            {c.cta1} <ArrowRight size={16} />
          </a>
          <a href="/betho"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-poppins font-semibold transition-all duration-200 hover:scale-[1.04]"
            style={{
              fontSize: "clamp(13px, 1.2vw, 15px)",
              color: "var(--fg-muted)",
              border: "1px solid var(--border)",
              background: "var(--card-bg)",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"}
          >
            <Bot size={16} style={{ color: "var(--accent-b)" }} />
            {c.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
