"use client";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  AppWindow,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import KSymbol from "@/components/ui/KSymbol";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Betho Console", href: "/admin/betho", icon: Bot },
  { label: "Apps", href: "/admin/apps", icon: AppWindow },
  { label: "Configuración", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bg-card border-r border-white/5 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <a href="/admin" className="flex items-center gap-3">
          <KSymbol size={32} animate={false} />
          <div>
            <div className="font-poppins font-bold text-kryphor-white text-xs tracking-widest">KRYPHOR</div>
            <div className="font-poppins font-light text-cyan text-xs tracking-widest">ADMIN</div>
          </div>
        </a>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <a
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 group ${
                active
                  ? "bg-purple/20 text-kryphor-white border border-purple/30"
                  : "text-muted hover:text-kryphor-white hover:bg-white/5"
              }`}
            >
              <Icon size={18} className={active ? "text-cyan" : ""} />
              <span className="font-inter flex-1">{label}</span>
              {active && <ChevronRight size={14} className="text-cyan" />}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-kryphor-white hover:bg-white/5 text-sm transition-all"
        >
          <LogOut size={18} />
          <span>Volver al sitio</span>
        </a>
      </div>
    </aside>
  );
}
