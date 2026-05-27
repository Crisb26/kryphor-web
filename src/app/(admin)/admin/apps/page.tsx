import { apps, statusLabels } from "@/data/apps";
import { AppWindow, Gamepad2, BookOpen, Wifi } from "lucide-react";

const catIcon = { Juego: Gamepad2, Espiritual: BookOpen, Conectividad: Wifi };

export default function AdminAppsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-poppins font-bold text-2xl flex items-center gap-3 mb-1"
          style={{ color: "var(--fg)" }}>
          <AppWindow size={22} style={{ color: "var(--accent)" }} />
          Gestión de Apps
        </h1>
        <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
          {apps.length} aplicaciones registradas
        </p>
      </div>

      <div className="space-y-3">
        {apps.map(app => {
          const Icon = catIcon[app.category];
          return (
            <div key={app.id}
              className="rounded-2xl p-5 flex items-center gap-5"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${app.color}`,
              }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${app.color}18` }}>
                <Icon size={18} style={{ color: app.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h3 className="font-poppins font-semibold text-sm" style={{ color: "var(--fg)" }}>
                    {app.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full font-poppins font-semibold"
                    style={{ background: `${app.color}18`, color: app.color }}>
                    {app.category}
                  </span>
                </div>
                <p className="font-inter text-xs truncate" style={{ color: "var(--fg-muted)" }}>
                  {app.tagline}
                </p>
              </div>
              <span className="font-inter text-xs flex-shrink-0" style={{ color: "var(--fg-muted)" }}>
                {statusLabels[app.status]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
