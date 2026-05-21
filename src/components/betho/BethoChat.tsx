"use client";
import { useState, useRef, useEffect } from "react";
import BethoMessage, { type Message } from "./BethoMessage";
import BethoInput from "./BethoInput";
import { Bot } from "lucide-react";

interface BethoChatProps {
  systemPrompt?: string;
  endpoint?: string;
  disabled?: boolean;
}

const DEFAULT_ENDPOINT = "/api/betho";

export default function BethoChat({
  systemPrompt,
  endpoint = DEFAULT_ENDPOINT,
  disabled = false,
}: BethoChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hola, soy Betho, el asistente de Kryphor Labs. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, systemPrompt }),
      });

      if (!res.ok || !res.body) throw new Error("Error al conectar con Betho");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Lo siento, hubo un error al procesar tu mensaje. Intenta de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-bg-card rounded-3xl overflow-hidden border border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-bg-deep/40 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
        <div>
          <p className="font-poppins font-bold text-kryphor-white text-sm">Betho</p>
          <p className="text-xs text-green-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            {loading ? "Escribiendo..." : "En línea"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0">
        {messages.map((msg, i) => (
          <BethoMessage key={i} message={msg} />
        ))}
        {loading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan/60 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <BethoInput onSend={sendMessage} loading={loading} disabled={disabled} />
    </div>
  );
}
