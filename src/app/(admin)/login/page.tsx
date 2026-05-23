"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-sm">

        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
            <Lock size={20} style={{ color: "var(--accent)" }} />
          </div>
          <h1 className="font-poppins font-bold text-xl mb-1" style={{ color: "var(--fg)" }}>
            Acceso Admin
          </h1>
          <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
            Kryphor Labs
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block font-poppins font-semibold text-xs tracking-wide uppercase mb-2"
              style={{ color: "var(--fg-muted)" }}>
              Email
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl px-4 py-3 text-sm font-inter outline-none transition-colors"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          <div>
            <label className="block font-poppins font-semibold text-xs tracking-wide uppercase mb-2"
              style={{ color: "var(--fg-muted)" }}>
              Contraseña
            </label>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full rounded-xl px-4 py-3 text-sm font-inter outline-none transition-colors"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          {error && (
            <p className="font-inter text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-poppins font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}
          >
            {loading ? "Verificando..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="text-center mt-8">
          <a href="/" className="font-inter text-xs transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
            Volver al sitio
          </a>
        </p>
      </div>
    </div>
  );
}
