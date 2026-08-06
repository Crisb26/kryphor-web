"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useApp } from "@/lib/providers";

const links = {
  es: [
    { label: "Inicio",    href: "/" },
    { label: "Nosotros",  href: "/about" },
    { label: "Contacto",  href: "/contact" },
  ],
  en: [
    { label: "Home",    href: "/" },
    { label: "About",   href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Navbar() {
  const { lang, toggleLang } = useApp();
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
        background: "var(--glass)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="kl-container">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 group">
            <img
              src="/logos/kryphor_logo_light.png"
              alt="Kryphor Labs"
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

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
                  className="block py-3 px-3 text-base font-inter rounded-xl"
                  style={{ color: "var(--fg-muted)" }}>
                  {link.label}
                </a>
              ))}
              <button onClick={toggleLang}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm border font-inter mt-2"
                style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                <Globe size={14} /> {lang === "es" ? "English" : "Español"}
              </button>
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
