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
      <div className="kl-container py-14">

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <a href="/">
              <img
                src={theme === "light" ? "/logos/kryphor_logo_light.png" : "/logos/kryphor_logo_transparent.png"}
                alt="Kryphor Labs"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="font-inter text-base leading-relaxed"
              style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>
              {taglines[lang]}
            </p>
            <a href="mailto:kryphorlabs@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-inter w-fit transition-colors"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
              <Mail size={14} />
              kryphorlabs@gmail.com
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-semibold text-xs tracking-widest uppercase"
              style={{ color: "var(--fg)" }}>
              Legal
            </h4>
            {legal[lang].map(l => (
              <a key={l.href} href={l.href}
                className="font-inter text-sm transition-colors w-fit"
                style={{ color: "var(--fg-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border)" }}>
          <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
            © 2026 Kryphor Labs® — {rights[lang]}
          </p>
          <a href="/login"
            className="font-inter text-xs transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
