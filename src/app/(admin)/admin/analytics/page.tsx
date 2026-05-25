"use client";
import { useEffect, useState } from "react";
import { BarChart2, Users, Eye, TrendingUp, ExternalLink, RefreshCw } from "lucide-react";

interface PageStat { path: string; views: number; lastSeen: string; }

export default function AnalyticsPage() {
  const [stats, setStats] = useState<PageStat[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshed, setRefreshed] = useState<string>("");

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/analytics");
      const data = await res.json();
      const rows: PageStat[] = Object.entries(data).map(([path, v]: [string, unknown]) => {
        const val = v as { views: number; lastSeen: string };
        return { path, views: val.views, lastSeen: val.lastSeen };
      });
      rows.sort((a, b) => b.views - a.views);
      setStats(rows);
      setTotal(rows.reduce((s, r) => s + r.views, 0));
      setRefreshed(new Date().toLocaleTimeString());
    } catch {
      // analytics API may not have data yet
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl" style={{ color: "var(--fg)" }}>
            Analytics
          </h1>
          <p className="font-inter text-sm mt-1" style={{ color: "var(--fg-muted)" }}>
            Visitas registradas en esta sesión del servidor
          </p>
        </div>
        <button onClick={load}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-inter transition-colors"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}>
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          {refreshed ? `Actualizado ${refreshed}` : "Actualizar"}
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Eye,      label: "Vistas totales",   value: total,        color: "var(--accent)" },
          { icon: BarChart2, label: "Páginas únicas",  value: stats.length, color: "var(--accent-b)" },
          { icon: TrendingUp,label: "Página top",      value: stats[0]?.path ?? "—", color: "#22c55e" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="rounded-2xl p-6"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${color}18` }}>
                <Icon size={15} style={{ color }} />
              </div>
              <span className="font-inter text-xs" style={{ color: "var(--fg-muted)" }}>{label}</span>
            </div>
            <p className="font-poppins font-bold text-2xl" style={{ color: "var(--fg)" }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Page breakdown */}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
        <div className="px-6 py-4 border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
          <h2 className="font-poppins font-semibold text-sm" style={{ color: "var(--fg)" }}>
            Páginas más visitadas
          </h2>
        </div>
        <div style={{ background: "var(--bg-2)" }}>
          {loading ? (
            <div className="px-6 py-8 text-center font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
              Cargando...
            </div>
          ) : stats.length === 0 ? (
            <div className="px-6 py-8 text-center font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
              Aún no hay visitas registradas en esta sesión.
            </div>
          ) : (
            stats.map((row, i) => {
              const pct = total > 0 ? (row.views / total) * 100 : 0;
              return (
                <div key={row.path} className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{ borderColor: "var(--border)" }}>
                  <span className="font-poppins font-semibold text-xs w-5 text-right flex-shrink-0"
                    style={{ color: "var(--fg-muted)" }}>
                    {i + 1}
                  </span>
                  <span className="font-inter text-sm flex-1 truncate" style={{ color: "var(--fg)" }}>
                    {row.path}
                  </span>
                  <div className="hidden sm:block flex-1 max-w-32">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-3)" }}>
                      <div className="h-full rounded-full" style={{
                        width: `${pct}%`,
                        background: "linear-gradient(90deg, var(--accent), var(--accent-b))",
                      }} />
                    </div>
                  </div>
                  <span className="font-poppins font-semibold text-sm flex-shrink-0"
                    style={{ color: "var(--fg)" }}>
                    {row.views}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Cloudflare analytics notice */}
      <div className="rounded-2xl p-6"
        style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
        <div className="flex items-start gap-3">
          <Users size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
          <div>
            <h3 className="font-poppins font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>
              Analytics persistente con Cloudflare
            </h3>
            <p className="font-inter text-xs leading-relaxed mb-3" style={{ color: "var(--fg-muted)" }}>
              Los datos de arriba se reinician con cada redeploy. Para analytics permanentes, activa
              Cloudflare Web Analytics en tu dashboard de Cloudflare (es gratis).
            </p>
            <a href="https://dash.cloudflare.com" target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 font-inter text-xs transition-colors"
              style={{ color: "var(--accent)" }}>
              Ir al dashboard de Cloudflare <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
