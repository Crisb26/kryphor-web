"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, BookOpen, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "@/lib/providers";
import { apps, App } from "@/data/apps";

const copy = {
  es: {
    eyebrow: "Lo que construimos",
    title:   "Nuestro ecosistema.",
    sub:     "Arrastra las tarjetas para explorar. Haz clic en cualquiera para ver los detalles.",
    status: {
      disponible:      "Disponible",
      "en-desarrollo": "En desarrollo",
      proximamente:    "Próximamente",
    },
    statusColor: {
      disponible:      "#22c55e",
      "en-desarrollo": "#38BDF8",
      proximamente:    "#818CF8",
    },
    features:   "Características",
    catLabel:   { Juego: "Videojuego", Espiritual: "Espiritual" },
    close:      "Cerrar",
  },
  en: {
    eyebrow: "What we build",
    title:   "Our ecosystem.",
    sub:     "Drag cards to explore. Click any card to see details.",
    status: {
      disponible:      "Available",
      "en-desarrollo": "In Development",
      proximamente:    "Coming Soon",
    },
    statusColor: {
      disponible:      "#22c55e",
      "en-desarrollo": "#38BDF8",
      proximamente:    "#818CF8",
    },
    features:   "Features",
    catLabel:   { Juego: "Video Game", Espiritual: "Spiritual" },
    close:      "Close",
  },
};

const catIcon = { Juego: Gamepad2, Espiritual: BookOpen };

export default function EcosystemSection() {
  const { lang } = useApp();
  const c = copy[lang];
  const [selected, setSelected] = useState<App | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        setDragWidth(Math.max(0, trackRef.current.scrollWidth - trackRef.current.offsetWidth));
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const by = trackRef.current.offsetWidth * 0.7;
    trackRef.current.scrollBy({ left: dir === "right" ? by : -by, behavior: "smooth" });
  };

  return (
    <section className="py-32 overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="kl-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </p>
            <h2 className="font-poppins font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--fg)" }}>
              {c.title}
            </h2>
            <p className="font-inter text-base max-w-lg"
              style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
              {c.sub}
            </p>
          </div>

          {/* Arrow controls — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel — full-bleed scroll */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4 carousel-track select-none"
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 5rem))",
          paddingRight: "max(1.5rem, calc((100vw - 1280px) / 2 + 5rem))",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {apps.map((app, i) => {
          const Icon = catIcon[app.category];
          const statusColor = c.statusColor[app.status];

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="flex-shrink-0 rounded-2xl grad-border cursor-pointer group"
              style={{
                width: "clamp(260px, 28vw, 320px)",
                background: "var(--bg-2)",
                padding: "2rem",
              }}
              onClick={() => !isDragging && setSelected(app)}
              onMouseDown={() => setIsDragging(false)}
              onMouseMove={() => setIsDragging(true)}
            >
              {/* Category icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${app.color}18` }}>
                <Icon size={22} style={{ color: app.color }} />
              </div>

              {/* Name */}
              <h3 className="font-poppins font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}>
                {app.name}
              </h3>

              {/* Tagline */}
              <p className="font-inter text-sm mb-6"
                style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
                {app.tagline}
              </p>

              {/* Status */}
              <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full"
                style={{
                  color: statusColor,
                  background: `${statusColor}15`,
                  border: `1px solid ${statusColor}28`,
                }}>
                {c.status[app.status]}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)" }}
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}>
              <motion.div key="modal"
                initial={{ opacity: 0, scale: 0.93, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 28 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-lg relative rounded-3xl"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", padding: "2.5rem" }}
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ color: "var(--fg-muted)", background: "var(--bg-3)" }}>
                  <X size={14} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selected.color}18`, width: 52, height: 52 }}>
                    {(() => { const I = catIcon[selected.category]; return <I size={22} style={{ color: selected.color }} />; })()}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl" style={{ color: "var(--fg)" }}>
                      {selected.name}
                    </h3>
                    <p className="font-inter text-xs mt-1" style={{ color: "var(--fg-muted)" }}>
                      {c.catLabel[selected.category]}
                    </p>
                  </div>
                </div>

                <span className="inline-block font-poppins font-semibold text-xs px-3 py-1 rounded-full mb-5"
                  style={{
                    color: c.statusColor[selected.status],
                    background: `${c.statusColor[selected.status]}15`,
                    border: `1px solid ${c.statusColor[selected.status]}28`,
                  }}>
                  {c.status[selected.status]}
                </span>

                <p className="font-inter text-sm leading-relaxed mb-7"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
                  {selected.description}
                </p>

                <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--accent)" }}>
                  {c.features}
                </p>
                <ul className="space-y-3">
                  {selected.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={12} style={{ color: selected.color, flexShrink: 0 }} />
                      <span className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
