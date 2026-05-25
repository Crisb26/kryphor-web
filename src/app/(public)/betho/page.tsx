"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  dur: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

export default function BethoPage() {
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
      setError("Acceso denegado.");
    } else {
      router.push("/admin/betho");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "#04040E" }}>

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(129,140,248,0.1), transparent 70%)" }} />
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
        className="absolute top-6 left-6 flex items-center gap-2 font-inter text-xs z-10 transition-colors"
        style={{ color: "rgba(99,102,241,0.6)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "#818CF8")}
        onMouseLeave={e => (e.currentTarget.style.color = "rgba(99,102,241,0.6)")}>
        <ArrowLeft size={13} /> Volver
      </a>

      <div className="relative z-10 w-full max-w-sm mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Identity */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full blur-2xl"
                style={{
                  background: "rgba(56,189,248,0.35)",
                  inset: "-20px",
                }}
              />
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))",
                  border: "1px solid rgba(56,189,248,0.35)",
                }}>
                <span className="font-poppins font-bold text-3xl gradient-text">B</span>
              </div>
            </div>
            <h1 className="font-poppins font-bold text-3xl tracking-[0.15em] mb-2"
              style={{ color: "#F2F2F8" }}>
              BETHO
            </h1>
            <p className="font-inter text-xs tracking-widest uppercase"
              style={{ color: "rgba(129,140,248,0.7)" }}>
              Asistente · Kryphor Labs
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block font-poppins text-xs tracking-widest uppercase mb-2.5"
                style={{ color: "rgba(56,189,248,0.65)" }}>
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl px-4 py-3.5 font-inter text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(56,189,248,0.18)",
                  color: "#F2F2F8",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)")}
              />
            </div>

            <div>
              <label className="block font-poppins text-xs tracking-widest uppercase mb-2.5"
                style={{ color: "rgba(56,189,248,0.65)" }}>
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full rounded-xl px-4 py-3.5 pr-12 font-inter text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(56,189,248,0.18)",
                    color: "#F2F2F8",
                  }}
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
                  Verificando...
                </span>
              ) : "Ingresar a Betho"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
