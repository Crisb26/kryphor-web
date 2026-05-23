"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Sun, Moon, Globe } from "lucide-react";
import { useApp } from "@/lib/providers";

const navLinks = {
  es: [
    { label: "Inicio",     href: "/" },
    { label: "Ecosistema", href: "/apps" },
    { label: "Nosotros",   href: "/about" },
    { label: "Contacto",   href: "/contact" },
  ],
  en: [
    { label: "Home",       href: "/" },
    { label: "Ecosystem",  href: "/apps" },
    { label: "About",      href: "/about" },
    { label: "Contact",    href: "/contact" },
  ],
};

export default function Navbar() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = navLinks[lang];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b shadow-sm" : "bg-transparent"
      }`}
      style={{ borderBottomColor: scrolled ? "var(--border-clr)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 group">
            <img
              src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
              alt="Kryphor Labs"
              className="h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-75"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-inter transition-colors duration-150 pb-0.5"
                style={{ color: "var(--muted-clr)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-clr)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-1.5 text-xs font-poppins font-bold px-3 py-1.5 rounded-lg border transition-colors duration-150"
              style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe size={11} />
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg border transition-colors duration-150"
              style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="/login"
              className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors duration-150"
              style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}
            >
              <Shield size={11} />
              Admin
            </a>

            <button
              className="md:hidden p-1.5"
              style={{ color: "var(--muted-clr)" }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t"
              style={{ borderColor: "var(--border-clr)" }}
            >
              <div className="py-4 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm rounded-lg transition-colors font-inter"
                    style={{ color: "var(--muted-clr)" }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 px-3 pt-3 border-t mt-2" style={{ borderColor: "var(--border-clr)" }}>
                  <button onClick={toggleTheme}
                    className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border flex-1 justify-center"
                    style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}>
                    {theme === "dark" ? <><Sun size={12} /> Claro</> : <><Moon size={12} /> Oscuro</>}
                  </button>
                  <button onClick={toggleLang}
                    className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border flex-1 justify-center"
                    style={{ color: "var(--muted-clr)", borderColor: "var(--border-clr)" }}>
                    <Globe size={12} />
                    {lang === "es" ? "English" : "Español"}
                  </button>
                </div>
                <a href="/login" className="flex items-center gap-1.5 px-3 py-3 text-sm font-inter"
                  style={{ color: "var(--muted-clr)" }}>
                  <Shield size={14} /> Admin
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
