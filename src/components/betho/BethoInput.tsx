"use client";
import { useState, KeyboardEvent } from "react";
import { Send, Loader2 } from "lucide-react";

interface BethoInputProps {
  onSend: (text: string) => void;
  loading: boolean;
  disabled?: boolean;
}

export default function BethoInput({ onSend, loading, disabled }: BethoInputProps) {
  const [text, setText] = useState("");

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed || loading || disabled) return;
    onSend(trimmed);
    setText("");
  };

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="flex gap-3 items-end p-4 border-t border-white/5 bg-bg-deep/50">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKey}
        disabled={loading || disabled}
        placeholder="Escribe tu mensaje... (Enter para enviar)"
        rows={1}
        className="flex-1 bg-bg-deep/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-kryphor-white placeholder-muted outline-none resize-none focus:border-cyan/40 transition-colors disabled:opacity-50"
        style={{ minHeight: "44px", maxHeight: "120px" }}
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = "auto";
          el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
        }}
      />
      <button
        onClick={send}
        disabled={!text.trim() || loading || disabled}
        className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity hover:opacity-80"
      >
        {loading ? (
          <Loader2 size={18} className="text-white animate-spin" />
        ) : (
          <Send size={18} className="text-white" />
        )}
      </button>
    </div>
  );
}
