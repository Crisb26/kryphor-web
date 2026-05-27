"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

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
      setError("Credenciales inválidas.");
    } else {
      router.push("/admin");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "var(--bg)" }}>

      {/* Back */}
      <a href="/"
        className="absolute top-6 left-6 flex items-center gap-2 font-inter text-sm transition-colors rounded-xl px-4 py-2 border"
        style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
        <ArrowLeft size={15} />
        Volver al sitio
      </a>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
            <Lock size={22} style={{ color: "var(--accent)" }} />
          </div>
          <h1 className="font-poppins font-bold text-2xl mb-2" style={{ color: "var(--fg)" }}>
            Acceso Admin
          </h1>
          <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
            Kryphor Labs — Panel de control
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl p-8 sm:p-10"
          style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="block font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--fg-muted)" }}>
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl px-5 py-4 font-inter text-sm outline-none transition-all duration-200"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>

            <div>
              <label className="block font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--fg-muted)" }}>
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
                  className="w-full rounded-xl px-5 py-4 pr-12 font-inter text-sm outline-none transition-all duration-200"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "var(--fg-muted)" }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-inter text-sm text-center py-3 rounded-xl"
                  style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}>
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-poppins font-semibold text-base text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}>
              {loading ? "Verificando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
