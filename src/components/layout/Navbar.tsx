"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe, ChevronDown, Bot, Wifi, GraduationCap, Shield, Heart, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/providers";

const products = [
  { id: "betho",    icon: Bot,           color: "#818CF8", href: "/betho",    labelEs: "Betho AI",          labelEn: "Betho AI",          descEs: "Asistente de inteligencia artificial",  descEn: "Artificial intelligence assistant" },
  { id: "connect",  icon: Wifi,          color: "#38BDF8", href: "/connect",  labelEs: "KryphorConnect",    labelEn: "KryphorConnect",    descEs: "Plataforma de gestión para organizaciones", descEn: "Management platform for organizations" },
  { id: "academy",  icon: GraduationCap, color: "#34D399", href: "/academy",  labelEs: "Kryphor Academy",   labelEn: "Kryphor Academy",   descEs: "Cursos y certificaciones tecnológicas",  descEn: "Tech courses and certifications" },
  { id: "security", icon: Shield,        color: "#F59E0B", href: "/security", labelEs: "Kryphor Security",  labelEn: "Kryphor Security",  descEs: "Auditorías y monitoreo de seguridad",   descEn: "Security audits and monitoring" },
  { id: "health",   icon: Heart,         color: "#F472B6", href: "/health",   labelEs: "Kryphor Health",    labelEn: "Kryphor Health",    descEs: "Bienestar digital y productividad",     descEn: "Digital wellness and productivity" },
];

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

const productsLabel = { es: "Productos", en: "Products" };

export default function Navbar() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
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
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="nav-link flex items-center gap-1.5 font-inter font-medium text-base py-1 transition-colors duration-150"
                style={{ color: dropdown ? "var(--fg)" : "var(--fg-muted)" }}
                onClick={() => setDropdown(!dropdown)}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => { if (!dropdown) e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                {productsLabel[lang]}
                <motion.span animate={{ rotate: dropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl p-2 shadow-2xl"
                    style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
                  >
                    {products.map(p => {
                      const Icon = p.icon;
                      return (
                        <a key={p.id} href={p.href}
                          onClick={() => setDropdown(false)}
                          className="flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-150 group"
                          style={{ color: "var(--fg-muted)" }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                            (e.currentTarget as HTMLElement).style.background = "var(--bg)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${p.color}18` }}>
                            <Icon size={15} style={{ color: p.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-poppins font-semibold text-sm" style={{ color: "var(--fg)" }}>
                              {lang === "es" ? p.labelEs : p.labelEn}
                            </p>
                            <p className="font-inter text-xs truncate" style={{ color: "var(--fg-muted)" }}>
                              {lang === "es" ? p.descEs : p.descEn}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            <a href="/betho"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-poppins font-semibold transition-all duration-200 hover:scale-[1.04]"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))", color: "#fff" }}>
              <Bot size={14} /> Betho AI
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
              <p className="font-poppins font-semibold text-xs tracking-widest uppercase px-3 py-2"
                style={{ color: "var(--fg-muted)" }}>
                {productsLabel[lang]}
              </p>
              {products.map(p => {
                const Icon = p.icon;
                return (
                  <a key={p.id} href={p.href} onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl"
                    style={{ color: "var(--fg-muted)" }}>
                    <Icon size={15} style={{ color: p.color }} />
                    <span className="font-inter text-base">{lang === "es" ? p.labelEs : p.labelEn}</span>
                  </a>
                );
              })}
              <div className="border-t my-2" style={{ borderColor: "var(--border)" }} />
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="block py-3 px-3 text-base font-inter rounded-xl"
                  style={{ color: "var(--fg-muted)" }}>
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3">
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
              <a href="/betho" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-poppins font-semibold text-white mt-2"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-b))" }}>
                <Bot size={14} /> Betho AI
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
