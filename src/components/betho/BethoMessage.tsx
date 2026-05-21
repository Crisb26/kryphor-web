import { Bot, User } from "lucide-react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function BethoMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
          isUser
            ? "bg-purple/40"
            : "bg-gradient-to-br from-cyan to-purple"
        }`}
      >
        {isUser ? <User size={16} className="text-kryphor-white" /> : <Bot size={16} className="text-white" />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-inter leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-purple/20 text-kryphor-white rounded-tr-sm"
            : "bg-white/5 text-kryphor-white rounded-tl-sm border border-white/5"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
