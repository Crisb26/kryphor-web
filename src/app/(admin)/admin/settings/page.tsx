import { Settings, Key, Globe, Shield } from "lucide-react";

const sections = [
  {
    icon: Key,
    title: "Variables de entorno",
    desc: "Las keys se configuran en Cloudflare Pages → Environment Variables.",
    color: "#38BDF8",
    items: ["ADMIN_EMAIL", "ADMIN_PASSWORD_HASH", "AUTH_SECRET", "ANTHROPIC_API_KEY"],
  },
  {
    icon: Globe,
    title: "Dominio",
    desc: "El sitio está desplegado en kryphorlabs.com con Cloudflare Pages.",
    color: "#818CF8",
    items: ["kryphorlabs.com", "Cloudflare DNS", "SSL automático"],
  },
  {
    icon: Shield,
    title: "Seguridad",
    desc: "Autenticación gestionada por NextAuth v5 con hash SHA-256.",
    color: "#22c55e",
    items: ["Sesión JWT", "Contraseña hasheada", "Middleware protegido"],
  },
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-poppins font-bold text-2xl flex items-center gap-3 mb-1"
          style={{ color: "var(--fg)" }}>
          <Settings size={22} style={{ color: "var(--accent)" }} />
          Configuración
        </h1>
        <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
          Ajustes del sistema Kryphor Labs.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map(({ icon: Icon, title, desc, color, items }) => (
          <div key={title} className="rounded-2xl p-6"
            style={{ background: "var(--bg-2)", border: `1px solid var(--border)` }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}18` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>
                  {title}
                </h3>
                <p className="font-inter text-xs mb-4" style={{ color: "var(--fg-muted)" }}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="font-mono text-xs px-3 py-1 rounded-lg"
                      style={{ background: `${color}12`, color }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
