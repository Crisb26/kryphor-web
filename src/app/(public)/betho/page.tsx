"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Bot, Sparkles, Zap, Brain, Lock } from "lucide-react";
import { useApp } from "@/lib/providers";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  dur: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

const features = [
  { icon: Brain,    label: "Respuestas contextuales e inteligentes" },
  { icon: Zap,      label: "Streaming en tiempo real" },
  { icon: Sparkles, label: "Integrado en todo el ecosistema Kryphor" },
  { icon: Bot,      label: "Personalidad propia, adaptativa" },
];

const demoMessages = [
  { role: "user",  text: "¿Qué es Kryphor Labs?" },
  { role: "betho", text: "Kryphor Labs es un estudio de desarrollo independiente fundado en Colombia en 2026. Creamos videojuegos, apps y experiencias digitales con propósito real." },
  { role: "user",  text: "¿Cuáles son sus apps?" },
  { role: "betho", text: "Tenemos Mi Devocionario, Vórtex, PicaOro, Toca & Ve, ColoLetras y KryphorConnect TV. Todas en desarrollo activo." },
];

export default function BethoPage() {
  const { lang } = useApp();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (result?.error) {
      setError(lang === "es" ? "Acceso denegado." : "Access denied.");
    } else {
      router.push("/admin/betho");
    }
    setLoading(false);
  };

  const t = {
    es: {
      back: "Volver",
      badge: "Inteligencia Artificial · Kryphor Labs",
      title: "Tu asistente de IA.",
      sub: "Betho es la inteligencia artificial de Kryphor Labs. Aprende, responde y acompaña a los usuarios de todo nuestro ecosistema con contexto, personalidad y velocidad.",
      demoTitle: "Betho en acción",
      loginTitle: "Acceso restringido",
      loginSub: "Esta sección es para el equipo de Kryphor Labs.",
      email: "Email",
      password: lang === "es" ? "Contraseña" : "Password",
      enter: "Ingresar a Betho",
      verifying: "Verificando...",
    },
    en: {
      back: "Back",
      badge: "Artificial Intelligence · Kryphor Labs",
      title: "Your AI assistant.",
      sub: "Betho is Kryphor Labs' artificial intelligence. It learns, responds and accompanies users across our entire ecosystem with context, personality and speed.",
      demoTitle: "Betho in action",
      loginTitle: "Restricted access",
      loginSub: "This section is for the Kryphor Labs team.",
      email: "Email",
      password: "Password",
      enter: "Enter Betho",
      verifying: "Verifying...",
    },
  };
  const c = t[lang];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto"
      style={{ background: "#04040E" }}>

      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(129,140,248,0.12), transparent 70%)" }} />
        {mounted && PARTICLES.map(p => (
          <motion.div key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.id % 2 === 0 ? "rgba(56,189,248,0.6)" : "rgba(129,140,248,0.6)",
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Back */}
      <a href="/"
        className="fixed top-6 left-6 flex items-center gap-2 font-inter text-xs z-20 transition-colors px-3 py-2 rounded-xl border"
        style={{ color: "rgba(99,102,241,0.7)", borderColor: "rgba(99,102,241,0.2)" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = "#818CF8";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(129,140,248,0.5)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = "rgba(99,102,241,0.7)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
        }}>
        <ArrowLeft size={13} /> {c.back}
      </a>

      <div className="relative z-10 kl-container py-28">

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          {/* Glowing B logo */}
          <div className="relative inline-block mb-10">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.65, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full blur-3xl"
              style={{ background: "rgba(56,189,248,0.4)", inset: "-28px" }}
            />
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(129,140,248,0.12))",
                border: "1px solid rgba(56,189,248,0.35)",
              }}>
              <span className="font-poppins font-bold text-4xl"
                style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                B
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-inter text-xs"
            style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)", color: "rgba(129,140,248,0.8)" }}>
            <Bot size={12} /> {c.badge}
          </div>

          <h1 className="font-poppins font-bold tracking-tight leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "#F2F2F8" }}>
            BETHO —{" "}
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {c.title}
            </span>
          </h1>

          <p className="font-inter max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(242,242,248,0.55)", lineHeight: 1.8 }}>
            {c.sub}
          </p>
        </motion.div>

        {/* Features + Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center gap-5"
          >
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(56,189,248,0.12)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.1)" }}>
                  <Icon size={18} style={{ color: "#38BDF8" }} />
                </div>
                <span className="font-inter text-sm" style={{ color: "rgba(242,242,248,0.7)" }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Demo chat */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(129,140,248,0.2)" }}
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b"
              style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(4,4,14,0.5)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                <Bot size={16} style={{ color: "white" }} />
              </div>
              <div>
                <p className="font-poppins font-bold text-sm" style={{ color: "#F2F2F8" }}>Betho</p>
                <p className="font-inter text-xs flex items-center gap-1.5" style={{ color: "#22c55e" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#22c55e" }} />
                  {c.demoTitle}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 min-h-[260px]">
              {demoMessages.map((msg, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[82%] px-4 py-3 rounded-2xl text-sm font-inter"
                    style={
                      msg.role === "user"
                        ? { background: "rgba(129,140,248,0.2)", color: "#F2F2F8", borderBottomRightRadius: 4 }
                        : { background: "rgba(255,255,255,0.05)", color: "rgba(242,242,248,0.75)", borderBottomLeftRadius: 4 }
                    }>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="flex justify-start"
              >
                <div className="px-4 py-3 rounded-2xl flex gap-1.5"
                  style={{ background: "rgba(255,255,255,0.05)", borderBottomLeftRadius: 4 }}>
                  {[0, 1, 2].map(i => (
                    <motion.div key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "rgba(56,189,248,0.6)" }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Fake input */}
            <div className="px-5 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex gap-2 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.1)" }}>
                <input disabled placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "rgba(242,242,248,0.35)" }} />
                <div className="w-7 h-7 rounded-lg flex items-center justify-center opacity-40"
                  style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                  <Zap size={14} style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Login form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
              <Lock size={20} style={{ color: "#38BDF8" }} />
            </div>
            <h2 className="font-poppins font-bold text-xl mb-2" style={{ color: "#F2F2F8" }}>
              {c.loginTitle}
            </h2>
            <p className="font-inter text-sm" style={{ color: "rgba(242,242,248,0.4)" }}>
              {c.loginSub}
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(56,189,248,0.15)" }}>
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block font-poppins text-xs tracking-widest uppercase mb-2.5"
                  style={{ color: "rgba(56,189,248,0.65)" }}>
                  {c.email}
                </label>
                <input
                  type="email" required autoComplete="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 font-inter text-sm outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.18)", color: "#F2F2F8" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                />
              </div>

              <div>
                <label className="block font-poppins text-xs tracking-widest uppercase mb-2.5"
                  style={{ color: "rgba(56,189,248,0.65)" }}>
                  {c.password}
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"} required autoComplete="current-password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full rounded-xl px-4 py-3.5 pr-12 font-inter text-sm outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.18)", color: "#F2F2F8" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: "rgba(56,189,248,0.4)" }}>
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-inter text-xs text-center py-2.5 rounded-xl"
                    style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)" }}>
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-poppins font-semibold text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
                style={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)" }}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 rounded-full"
                      style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "white" }}
                    />
                    {c.verifying}
                  </span>
                ) : c.enter}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
