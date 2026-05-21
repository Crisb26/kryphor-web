import { apps, statusLabels } from "@/data/apps";
import { AppWindow } from "lucide-react";

export default function AdminAppsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-kryphor-white text-2xl mb-1 flex items-center gap-3">
            <AppWindow className="text-cyan" size={24} />
            Gestión de Apps
          </h1>
          <p className="text-muted text-sm">{apps.length} aplicaciones registradas</p>
        </div>
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="glass rounded-2xl p-5 flex items-center gap-5"
            style={{ borderLeft: `3px solid ${app.color}` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${app.color}20` }}
            >
              {app.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-0.5">
                <h3 className="font-poppins font-bold text-kryphor-white text-sm">{app.name}</h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${app.color}20`, color: app.color }}
                >
                  {app.category}
                </span>
              </div>
              <p className="text-muted text-xs truncate">{app.tagline}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs text-muted">{statusLabels[app.status]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
