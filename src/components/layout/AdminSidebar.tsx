"use client";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bot, AppWindow, Settings, LogOut, ChevronRight, BarChart2 } from "lucide-react";
import { useApp } from "@/lib/providers";

const navItems = [
  { label: "Dashboard",   href: "/admin",            icon: LayoutDashboard },
  { label: "Analytics",   href: "/admin/analytics",  icon: BarChart2 },
  { label: "Betho",       href: "/admin/betho",       icon: Bot },
  { label: "Apps",        href: "/admin/apps",        icon: AppWindow },
  { label: "Ajustes",     href: "/admin/settings",    icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { theme } = useApp();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 flex flex-col z-40"
      style={{ background: "var(--bg-2)", borderRight: "1px solid var(--border)" }}>

      {/* Logo */}
      <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
        <a href="/admin" className="flex items-center gap-3">
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-7 w-auto object-contain"
          />
        </a>
        <p className="font-inter text-xs mt-2" style={{ color: "var(--fg-muted)" }}>
          Panel de control
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== "/admin" && pathname.startsWith(href));
          return (
            <a key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-inter transition-all duration-150"
              style={active
                ? { background: "var(--glow-b)", color: "var(--fg)", border: "1px solid var(--border)" }
                : { color: "var(--fg-muted)", border: "1px solid transparent" }
              }
              onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--fg-muted)"; }}
            >
              <Icon size={16} style={{ color: active ? "var(--accent)" : "inherit", flexShrink: 0 }} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight size={13} style={{ color: "var(--accent)" }} />}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t" style={{ borderColor: "var(--border)" }}>
        <a href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-inter transition-colors"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
          <LogOut size={16} style={{ flexShrink: 0 }} />
          Volver al sitio
        </a>
      </div>
    </aside>
  );
}
