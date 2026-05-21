"use client";
import { motion } from "framer-motion";

interface KSymbolProps {
  size?: number;
  glow?: boolean;
  className?: string;
  animate?: boolean;
}

export default function KSymbol({ size = 64, glow = false, className = "", animate = true }: KSymbolProps) {
  const id = `kryphor-grad-${size}`;
  const diamondId = `kryphor-diamond-${size}`;

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
      }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={glow ? { filter: "drop-shadow(0 0 12px #00D4FF) drop-shadow(0 0 24px #7C3AED)" } : undefined}
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id={diamondId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#F0F0FF" />
          </linearGradient>
        </defs>

        {/* Barra vertical */}
        <rect x="18" y="10" width="14" height="80" rx="3" fill={`url(#${id})`} />

        {/* Brazo superior — apunta hacia arriba-derecha */}
        <polygon
          points="32,50 80,10 68,10 28,46"
          fill={`url(#${id})`}
        />

        {/* Brazo inferior — apunta hacia abajo-derecha */}
        <polygon
          points="32,50 80,90 68,90 28,54"
          fill={`url(#${id})`}
        />

        {/* Diamante en el nexo */}
        <polygon
          points="32,44 40,50 32,56 24,50"
          fill={`url(#${diamondId})`}
        />
      </svg>
    </Wrapper>
  );
}
