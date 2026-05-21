import type { Metadata } from "next";
import BethoChat from "@/components/betho/BethoChat";
import { Bot, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Betho AI — Kryphor Labs",
  description: "Habla con Betho, el asistente de inteligencia artificial de Kryphor Labs.",
};

const PUBLIC_SYSTEM_PROMPT = `Eres Betho, el asistente de inteligencia artificial de Kryphor Labs.
Puedes responder preguntas sobre Kryphor Labs, sus apps (Mi Devocionario, Vórtex, PicaOro, Toca & Ve, ColoLetras), y dar información general.
Eres amigable, profesional y conciso. No tienes acceso a funciones administrativas en esta versión pública.
Responde siempre en el idioma en que te hablen.`;

export default function BethoPage() {
  return (
    <div className="min-h-screen bg-bg-deep pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Header */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-soft-purp text-xs font-bold mb-4">
            <Sparkles size={12} />
            Demo pública — versión limitada
          </div>
          <h1 className="font-poppins font-bold text-kryphor-white text-3xl sm:text-4xl mb-2">
            <span className="gradient-text">Betho</span> — Asistente IA
          </h1>
          <p className="text-muted font-inter text-sm max-w-lg mx-auto">
            Inteligencia artificial de Kryphor Labs. Pregúntame sobre nuestras apps, la empresa o cualquier cosa general.
          </p>
        </div>

        {/* Chat */}
        <div style={{ height: "60vh" }}>
          <BethoChat systemPrompt={PUBLIC_SYSTEM_PROMPT} />
        </div>

        {/* Admin link */}
        <div className="text-center mt-6">
          <a
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors"
          >
            <Shield size={14} />
            ¿Eres el administrador? Inicia sesión para la versión completa
          </a>
        </div>

        {/* Features info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Bot, title: "IA Real", desc: "Powered by Anthropic Claude" },
            { icon: Sparkles, title: "Streaming", desc: "Respuestas en tiempo real" },
            { icon: Shield, title: "Versión limitada", desc: "Admin tiene acceso completo" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl p-4 text-center">
              <Icon size={20} className="text-cyan mx-auto mb-2" />
              <p className="font-poppins font-bold text-kryphor-white text-sm">{title}</p>
              <p className="text-muted text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
