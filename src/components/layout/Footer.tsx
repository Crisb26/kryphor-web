"use client";
import { Mail } from "lucide-react";
import { useApp } from "@/lib/providers";

const links = {
  es: {
    nav: [
      { label: "Inicio",      href: "/" },
      { label: "Ecosistema",  href: "/apps" },
      { label: "Nosotros",    href: "/about" },
      { label: "Contacto",    href: "/contact" },
    ],
    legal: [
      { label: "Privacidad",  href: "/privacy" },
      { label: "Términos",    href: "/terms" },
    ],
    navTitle: "Navegación",
    legalTitle: "Legal",
    trademark: "Marca en proceso de registro.",
    rights: "Todos los derechos reservados.",
    made: "Hecho con",
    country: "en Colombia",
  },
  en: {
    nav: [
      { label: "Home",       href: "/" },
      { label: "Ecosystem",  href: "/apps" },
      { label: "About",      href: "/about" },
      { label: "Contact",    href: "/contact" },
    ],
    legal: [
      { label: "Privacy",    href: "/privacy" },
      { label: "Terms",      href: "/terms" },
    ],
    navTitle: "Navigation",
    legalTitle: "Legal",
    trademark: "Trademark pending registration.",
    rights: "All rights reserved.",
    made: "Made with",
    country: "in Colombia",
  },
};

export default function Footer() {
  const { lang, theme } = useApp();
  const c = links[lang];

  return (
    <footer className="mt-auto border-t" style={{ background: "var(--surface)", borderColor: "var(--border-clr)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="/" className="block">
              <img
                src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
                alt="Kryphor Labs"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--muted-clr)" }}>
              Software · Inteligencia Artificial · Videojuegos · Innovación
            </p>
            <a
              href="mailto:kryphorlabs@gmail.com"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--muted-clr)" }}
            >
              <Mail size={14} />
              kryphorlabs@gmail.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-poppins font-bold text-sm mb-5 tracking-wide" style={{ color: "var(--foreground)" }}>
              {c.navTitle}
            </h4>
            <ul className="space-y-3">
              {c.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-inter text-sm transition-colors"
                    style={{ color: "var(--muted-clr)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-clr)")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-bold text-sm mb-5 tracking-wide" style={{ color: "var(--foreground)" }}>
              {c.legalTitle}
            </h4>
            <ul className="space-y-3 mb-6">
              {c.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-inter text-sm transition-colors"
                    style={{ color: "var(--muted-clr)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-clr)")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-2xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
              <p className="text-xs font-inter" style={{ color: "var(--muted-clr)" }}>
                <span className="font-bold" style={{ color: "#A855F7" }}>Kryphor Labs®</span>{" "}
                — {c.trademark}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border-clr)" }}>
          <p className="font-inter text-xs" style={{ color: "var(--muted-clr)" }}>
            © 2026 Kryphor Labs. {c.rights}
          </p>
          <p className="font-inter text-xs" style={{ color: "var(--muted-clr)" }}>
            {c.made} ❤ {c.country} 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
}
