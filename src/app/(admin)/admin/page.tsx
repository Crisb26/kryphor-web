import { LayoutDashboard, Bot, AppWindow, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: AppWindow, label: "Apps en desarrollo", value: "5", color: "#00D4FF" },
  { icon: Bot, label: "Conversaciones con Betho", value: "—", color: "#7C3AED" },
  { icon: Users, label: "Usuarios totales", value: "—", color: "#C9A84C" },
  { icon: TrendingUp, label: "Uptime", value: "99.9%", color: "#10B981" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-kryphor-white text-3xl mb-2 flex items-center gap-3">
          <LayoutDashboard className="text-cyan" size={28} />
          Dashboard
        </h1>
        <p className="text-muted font-inter text-sm">Bienvenido al panel de control de Kryphor Labs.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ background: `${color}20` }}
            >
              <Icon size={20} style={{ color }} />
            </div>
            <div className="font-poppins font-bold text-kryphor-white text-2xl mb-1">{value}</div>
            <div className="text-muted text-xs font-inter">{label}</div>
          </div>
        ))}
      </div>

      {/* Links rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { href: "/admin/betho", icon: Bot, title: "Betho Consola", desc: "Versión completa del asistente IA", color: "#7C3AED" },
          { href: "/admin/apps", icon: AppWindow, title: "Gestionar Apps", desc: "Ver y editar información de apps", color: "#00D4FF" },
          { href: "/admin/settings", icon: LayoutDashboard, title: "Configuración", desc: "Ajustes del sistema", color: "#C9A84C" },
        ].map(({ href, icon: Icon, title, desc, color }) => (
          <a
            key={href}
            href={href}
            className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-200 group"
            style={{ borderColor: `${color}20`, border: `1px solid ${color}20` }}
          >
            <Icon size={24} className="mb-3" style={{ color }} />
            <h3 className="font-poppins font-bold text-kryphor-white text-sm mb-1">{title}</h3>
            <p className="text-muted text-xs">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
