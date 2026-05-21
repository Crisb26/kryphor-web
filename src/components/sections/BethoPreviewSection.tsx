"use client";
import { motion } from "framer-motion";
import { Bot, Sparkles, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

const demoMessages = [
  { role: "user", text: "¿Qué es Kryphor Labs?" },
  {
    role: "betho",
    text: "Kryphor Labs es una empresa de desarrollo de software, IA y videojuegos fundada en 2026. Creamos tecnología innovadora y accesible. ¿Puedo ayudarte con algo más?",
  },
  { role: "user", text: "¿Cuáles son sus apps?" },
];

export default function BethoPreviewSection() {
  return (
    <section className="py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Bot className="text-cyan" size={20} />
              <span className="text-cyan text-sm font-poppins font-bold tracking-wider uppercase">
                Inteligencia Artificial
              </span>
            </div>
            <h2 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-5xl mb-6">
              Betho —{" "}
              <span className="gradient-text">Tu Asistente de IA</span>
            </h2>
            <p className="text-muted font-inter text-lg mb-8 leading-relaxed">
              Inteligencia artificial integrada en nuestro ecosistema. Betho aprende, responde y
              acompaña a los usuarios de todas nuestras apps con contexto y personalidad.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {[
                { icon: Sparkles, text: "Respuestas contextuales e inteligentes" },
                { icon: Zap, text: "Streaming en tiempo real" },
                { icon: Bot, text: "Integrado en todo el ecosistema Kryphor" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-soft-purp" />
                  </div>
                  <span className="text-muted text-sm">{text}</span>
                </div>
              ))}
            </div>
            <Button href="/betho" size="lg">
              <Bot size={20} />
              Hablar con Betho
            </Button>
          </motion.div>

          {/* Demo visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
              {/* Header del chat */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-bg-deep/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-kryphor-white text-sm">Betho</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    En línea
                  </p>
                </div>
              </div>

              {/* Mensajes */}
              <div className="p-5 space-y-4 min-h-[240px]">
                {demoMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-inter ${
                        msg.role === "user"
                          ? "bg-purple/30 text-kryphor-white rounded-br-sm"
                          : "bg-white/5 text-muted rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan/60"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-white/5">
                <div className="flex gap-2 bg-bg-deep/60 rounded-xl px-4 py-2.5">
                  <input
                    disabled
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 bg-transparent text-sm text-muted outline-none"
                  />
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center flex-shrink-0 cursor-not-allowed opacity-50">
                    <Zap size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
