"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useApp } from "@/lib/providers";

const links = {
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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = links[lang];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="kl-container">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 group">
            <img
              src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
              alt="Kryphor Labs"
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="nav-link font-inter font-medium text-base relative py-1 transition-colors duration-150"
                style={{ color: "var(--fg-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <CtrlBtn onClick={toggleLang} title={lang === "es" ? "English" : "Español"}>
              <Globe size={15} />
              <span className="text-sm font-bold">{lang === "es" ? "EN" : "ES"}</span>
            </CtrlBtn>
            <CtrlBtn onClick={toggleTheme} title={theme === "dark" ? "Modo claro" : "Dark mode"}>
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </CtrlBtn>
            <a href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-poppins font-semibold transition-all duration-200 hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-b))",
                color: "#fff",
              }}>
              Admin
            </a>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "var(--glass)" }}
          >
            <div className="kl-container py-5 space-y-1">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-inter border-b"
                  style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4">
                <button onClick={toggleTheme}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm border font-inter"
                  style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                  {theme === "dark" ? <><Sun size={14} /> Modo claro</> : <><Moon size={14} /> Modo oscuro</>}
                </button>
                <button onClick={toggleLang}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm border font-inter"
                  style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                  <Globe size={14} /> {lang === "es" ? "English" : "Español"}
                </button>
              </div>
              <a href="/login"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-poppins font-semibold text-white mt-2"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}>
                Admin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function CtrlBtn({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title?: string }) {
  return (
    <button onClick={onClick} title={title}
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-inter transition-all duration-150 hover:scale-[1.04]"
      style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}
      onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
      onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
      {children}
    </button>
  );
}
