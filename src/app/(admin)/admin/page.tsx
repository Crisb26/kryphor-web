"use client";
import { LayoutDashboard, Bot, AppWindow, Users, TrendingUp, BarChart2 } from "lucide-react";

const stats = [
  { icon: AppWindow,   label: "Apps en desarrollo",   value: "5",     color: "#38BDF8" },
  { icon: Bot,         label: "Conversaciones Betho",  value: "—",     color: "#818CF8" },
  { icon: Users,       label: "Usuarios totales",      value: "—",     color: "#34D399" },
  { icon: TrendingUp,  label: "Uptime",                value: "99.9%", color: "#F59E0B" },
];

const shortcuts = [
  { href: "/admin/betho",     icon: Bot,             title: "Betho",          desc: "Asistente de IA interno",          color: "#818CF8" },
  { href: "/admin/apps",      icon: AppWindow,       title: "Gestionar Apps", desc: "Ver y editar apps del ecosistema", color: "#38BDF8" },
  { href: "/admin/analytics", icon: BarChart2,       title: "Analytics",      desc: "Visitas y métricas del sitio",     color: "#34D399" },
  { href: "/admin/settings",  icon: LayoutDashboard, title: "Ajustes",        desc: "Configuración del sistema",        color: "#F59E0B" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="font-poppins font-bold text-2xl flex items-center gap-3 mb-1"
          style={{ color: "var(--fg)" }}>
          <LayoutDashboard size={24} style={{ color: "var(--accent)" }} />
          Dashboard
        </h1>
        <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
          Bienvenido al panel de control de Kryphor Labs.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label}
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderTop: `2px solid ${color}`,
            }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${color}18` }}>
              <Icon size={18} style={{ color }} />
            </div>
            <div className="font-poppins font-bold text-3xl mb-1" style={{ color: "var(--fg)" }}>
              {value}
            </div>
            <div className="font-inter text-xs" style={{ color: "var(--fg-muted)" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {shortcuts.map(({ href, icon: Icon, title, desc, color }) => (
          <a key={href} href={href}
            className="rounded-2xl p-7 flex items-start gap-5 transition-all duration-250 hover:scale-[1.02]"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${color}18`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
              <Icon size={22} style={{ color }} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-base mb-1" style={{ color: "var(--fg)" }}>
                {title}
              </h3>
              <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
