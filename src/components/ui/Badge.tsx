interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "gold" | "green" | "gray";
  className?: string;
}

const variantStyles = {
  cyan: "bg-cyan/10 text-cyan border-cyan/30",
  purple: "bg-purple/10 text-soft-purp border-purple/30",
  gold: "bg-gold/10 text-gold border-gold/30",
  green: "bg-green-500/10 text-green-400 border-green-500/30",
  gray: "bg-white/5 text-muted border-white/10",
};

export default function Badge({ children, variant = "cyan", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border font-poppins ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
