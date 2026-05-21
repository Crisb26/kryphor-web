"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import KSymbol from "@/components/ui/KSymbol";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "Betho AI", href: "/betho" },
  { label: "Sobre Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/90 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <KSymbol size={36} glow={false} animate={false} />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-kryphor-white text-base leading-tight tracking-widest">
                KRYPHOR
              </span>
              <span className="font-poppins font-light text-cyan text-xs leading-tight tracking-widest">
                LABS
              </span>
            </div>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-inter text-muted hover:text-kryphor-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Admin button + mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden md:flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition-colors duration-200 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan/30"
            >
              <Shield size={12} />
              Admin
            </a>
            <button
              className="md:hidden text-muted hover:text-kryphor-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-white/5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-muted hover:text-kryphor-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/login"
              className="flex items-center gap-1.5 px-4 py-3 text-muted hover:text-cyan transition-colors mt-2 border-t border-white/5"
            >
              <Shield size={14} />
              Acceso Admin
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
