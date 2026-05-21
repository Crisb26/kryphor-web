"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import KSymbol from "@/components/ui/KSymbol";
import Button from "@/components/ui/Button";
import { Lock, Mail } from "lucide-react";

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
      setError("Credenciales inválidas. Intenta de nuevo.");
    } else {
      router.push("/admin");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <KSymbol size={64} glow />
          </div>
          <h1 className="font-poppins font-bold text-kryphor-white text-2xl">Acceso Admin</h1>
          <p className="text-muted text-sm mt-1">Kryphor Labs — Panel de control</p>
        </div>

        <form onSubmit={submit} className="glass rounded-3xl p-8 space-y-5">
          <div>
            <label className="flex items-center gap-2 text-xs font-poppins font-bold text-kryphor-white mb-2">
              <Mail size={12} className="text-cyan" />
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors"
              placeholder="kryphorlabs@gmail.com"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs font-poppins font-bold text-kryphor-white mb-2">
              <Lock size={12} className="text-cyan" />
              Contraseña
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none focus:border-cyan/40 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
            {loading ? "Verificando..." : "Iniciar sesión"}
          </Button>
        </form>

        <p className="text-center text-muted text-xs mt-6">
          <a href="/" className="hover:text-cyan transition-colors">← Volver al sitio público</a>
        </p>
      </div>
    </div>
  );
}
