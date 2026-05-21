import type { Metadata } from "next";
import { motion } from "framer-motion";
import KSymbol from "@/components/ui/KSymbol";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Kryphor Labs",
  description: "Conoce la historia, misión y visión de Kryphor Labs, empresa de software, IA y videojuegos.",
};

const techStack = [
  "React Native", "Next.js", "Spring Boot", "Phaser.js",
  "Anthropic AI", "PostgreSQL", "Android", "Play Store",
  "TypeScript", "Docker", "Tailwind CSS", "SQLite",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-deep pt-24 pb-16">
      {/* Header */}
      <div className="relative py-20 overflow-hidden bg-bg-card border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.08), transparent 60%)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <KSymbol size={80} glow />
          </div>
          <h1 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-6xl mb-4">
            Sobre <span className="gradient-text">Kryphor Labs</span>
          </h1>
          <p className="text-muted text-lg font-inter max-w-2xl mx-auto">
            Una startup latinoamericana construyendo el futuro del software independiente.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Historia */}
        <section>
          <h2 className="font-poppins font-bold text-kryphor-white text-2xl mb-6">
            📖 Nuestra Historia
          </h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-muted font-inter leading-relaxed text-base">
              Kryphor Labs nació en 2026 con una visión clara: crear tecnología que realmente importe.
              Fundada en Colombia, surgió de la necesidad de un ecosistema de software independiente que
              combinara calidad profesional con accesibilidad real para los usuarios latinoamericanos.
            </p>
            <p className="text-muted font-inter leading-relaxed text-base mt-4">
              Desde apps espirituales hasta videojuegos de acción, pasando por herramientas educativas
              y asistentes de inteligencia artificial, Kryphor Labs construye con pasión y propósito.
              Cada producto es una declaración de que el talento latinoamericano puede competir a nivel global.
            </p>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8 border border-cyan/20">
            <h3 className="font-poppins font-bold text-cyan text-xl mb-4">🎯 Misión</h3>
            <p className="text-muted font-inter leading-relaxed">
              Crear tecnología que mejore la vida de las personas, desde aplicaciones móviles hasta
              inteligencia artificial, con calidad y propósito. Cada producto que desarrollamos tiene
              un impacto real en quienes lo usan.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 border border-purple/20">
            <h3 className="font-poppins font-bold text-soft-purp text-xl mb-4">🚀 Visión</h3>
            <p className="text-muted font-inter leading-relaxed">
              Ser una referencia latinoamericana en desarrollo de software independiente, accesible e
              innovador. Que el nombre Kryphor Labs sea sinónimo de excelencia tecnológica desde Colombia
              para el mundo.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section>
          <h2 className="font-poppins font-bold text-kryphor-white text-2xl mb-6">💎 Valores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "💡", name: "Innovación", desc: "Siempre la solución más creativa" },
              { emoji: "⭐", name: "Calidad", desc: "Cada línea de código importa" },
              { emoji: "🌍", name: "Accesibilidad", desc: "Tecnología para todos" },
              { emoji: "❤️", name: "Pasión", desc: "Construimos lo que amamos" },
            ].map((v) => (
              <div key={v.name} className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h4 className="font-poppins font-bold text-kryphor-white text-sm mb-2">{v.name}</h4>
                <p className="text-muted text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack tecnológico */}
        <section>
          <h2 className="font-poppins font-bold text-kryphor-white text-2xl mb-6">🛠 Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-poppins font-bold text-muted border border-white/10 hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Marca registrada */}
        <section className="glass rounded-2xl p-8 border border-gold/20 text-center">
          <h2 className="font-poppins font-bold text-gold text-xl mb-3">Kryphor Labs®</h2>
          <p className="text-muted font-inter text-sm leading-relaxed max-w-2xl mx-auto">
            Kryphor Labs es una marca en proceso de registro. Todos los productos, servicios, logotipos
            y materiales de marca están protegidos por derechos de autor. Queda prohibida su reproducción
            sin autorización expresa.
          </p>
        </section>
      </div>
    </div>
  );
}
