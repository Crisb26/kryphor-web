"use client";
import { Mail } from "lucide-react";
import { useApp } from "@/lib/providers";

const links = {
  es: {
    nav: [
      { label: "Inicio",     href: "/" },
      { label: "Ecosistema", href: "/apps" },
      { label: "Nosotros",   href: "/about" },
      { label: "Contacto",   href: "/contact" },
    ],
    legal: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos",   href: "/terms" },
    ],
    navTitle: "Navegación",
    legalTitle: "Legal",
    tagline: "Software independiente construido con propósito.",
    rights: "Todos los derechos reservados.",
  },
  en: {
    nav: [
      { label: "Home",      href: "/" },
      { label: "Ecosystem", href: "/apps" },
      { label: "About",     href: "/about" },
      { label: "Contact",   href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms",   href: "/terms" },
    ],
    navTitle: "Navigation",
    legalTitle: "Legal",
    tagline: "Independent software built with purpose.",
    rights: "All rights reserved.",
  },
};

export default function Footer() {
  const { lang, theme } = useApp();
  const c = links[lang];

  return (
    <footer className="border-t" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/">
              <img
                src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
                alt="Kryphor Labs"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              {c.tagline}
            </p>
            <a
              href="mailto:kryphorlabs@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-inter transition-colors"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
            >
              <Mail size={13} />
              kryphorlabs@gmail.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--fg)" }}>
              {c.navTitle}
            </h4>
            <ul className="space-y-3">
              {c.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-inter text-sm transition-colors"
                    style={{ color: "var(--fg-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--fg)" }}>
              {c.legalTitle}
            </h4>
            <ul className="space-y-3">
              {c.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-inter text-sm transition-colors"
                    style={{ color: "var(--fg-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center" style={{ borderColor: "var(--border)" }}>
          <p className="font-inter text-xs" style={{ color: "var(--fg-muted)" }}>
            © 2026 Kryphor Labs® — {c.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
