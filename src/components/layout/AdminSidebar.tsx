"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bot, AppWindow, Settings, LogOut, ChevronRight, BarChart2, Menu, X } from "lucide-react";
import { useApp } from "@/lib/providers";

const navItems = [
  { label: "Dashboard",  href: "/admin",           icon: LayoutDashboard },
  { label: "Analytics",  href: "/admin/analytics", icon: BarChart2 },
  { label: "Betho",      href: "/admin/betho",      icon: Bot },
  { label: "Apps",       href: "/admin/apps",       icon: AppWindow },
  { label: "Ajustes",    href: "/admin/settings",   icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { theme } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="px-5 py-5 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
        <a href="/admin">
          <img
            src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
            alt="Kryphor Labs"
            className="h-8 w-auto object-contain"
          />
        </a>
        <button className="lg:hidden p-1 rounded-lg" style={{ color: "var(--fg-muted)" }} onClick={() => setMobileOpen(false)}>
          <X size={18} />
        </button>
      </div>

      <p className="font-inter text-xs px-5 pt-3 pb-1" style={{ color: "var(--fg-muted)" }}>Panel de control</p>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
          return (
            <a key={href} href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-inter transition-all duration-150"
              style={
                active
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
    </>
  );

  return (
    <>
      {/* Mobile toggle button (shown in main layout area) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={18} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed left-0 top-0 z-50 h-screen flex flex-col overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ width: 240, background: "var(--bg-2)", borderRight: "1px solid var(--border)" }}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex w-[240px] flex-shrink-0 sticky top-0 h-screen flex-col overflow-y-auto"
        style={{ background: "var(--bg-2)", borderRight: "1px solid var(--border)" }}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
