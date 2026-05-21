import { Settings, Key, Globe, Shield } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-kryphor-white text-2xl mb-1 flex items-center gap-3">
          <Settings className="text-cyan" size={24} />
          Configuración
        </h1>
        <p className="text-muted text-sm">Ajustes del sistema Kryphor Labs.</p>
      </div>

      <div className="space-y-5 max-w-2xl">
        {[
          {
            icon: Key,
            title: "API Keys",
            desc: "Las API keys se configuran en el archivo .env.local del servidor.",
            color: "#00D4FF",
            items: ["ANTHROPIC_API_KEY", "NEXTAUTH_SECRET"],
          },
          {
            icon: Globe,
            title: "Dominio",
            desc: "El sitio está desplegado en kryphorlabs.com con Cloudflare.",
            color: "#7C3AED",
            items: ["kryphorlabs.com", "Cloudflare DNS", "SSL automático"],
          },
          {
            icon: Shield,
            title: "Seguridad",
            desc: "Autenticación gestionada por NextAuth v5.",
            color: "#C9A84C",
            items: ["Sesión segura", "Credenciales hasheadas", "CORS configurado"],
          },
        ].map(({ icon: Icon, title, desc, color, items }) => (
          <div key={title} className="glass rounded-2xl p-6" style={{ border: `1px solid ${color}20` }}>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}20` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-bold text-kryphor-white text-sm mb-1">{title}</h3>
                <p className="text-muted text-xs mb-3">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-lg font-mono"
                      style={{ background: `${color}10`, color }}
                    >
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
