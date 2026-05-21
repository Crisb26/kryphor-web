"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", glow, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`glass rounded-2xl p-6 ${className}`}
      style={glow ? { boxShadow: `0 0 30px ${glow}30` } : undefined}
    >
      {children}
    </motion.div>
  );
}
