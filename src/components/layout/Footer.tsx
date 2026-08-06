"use client";
import { Mail } from "lucide-react";
import { useApp } from "@/lib/providers";

const legal = {
  es: [
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos",   href: "/terms" },
  ],
  en: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms",   href: "/terms" },
  ],
};

const taglines = {
  es: "Software independiente construido con propósito.",
  en: "Independent software built with purpose.",
};

const rights = {
  es: "Todos los derechos reservados.",
  en: "All rights reserved.",
};

export default function Footer() {
  const { lang, theme } = useApp();

  return (
    <footer className="border-t" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
      <div className="kl-container py-16">

        {/* Main row */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <a href="/">
            <img
              src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
              alt="Kryphor Labs"
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="font-inter text-base max-w-sm"
            style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
            {taglines[lang]}
          </p>
          <a href="mailto:kryphorlabs@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-inter transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
            <Mail size={14} />
            kryphorlabs@gmail.com
          </a>
          <div className="flex items-center gap-6">
            {legal[lang].map(l => (
              <a key={l.href} href={l.href}
                className="font-inter text-sm transition-colors"
                style={{ color: "var(--fg-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 text-center"
          style={{ borderColor: "var(--border)" }}>
          <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
            © 2026 Kryphor Labs® — {rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
}
