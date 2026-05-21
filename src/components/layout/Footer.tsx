import KSymbol from "@/components/ui/KSymbol";
import { Globe, Mail, ExternalLink, GitFork } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "Betho AI", href: "/betho" },
  { label: "Sobre Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

const legalLinks = [
  { label: "Privacidad", href: "/privacy" },
  { label: "Términos", href: "/terms" },
];

const socialLinks = [
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: Globe, href: "#", label: "Web" },
  { icon: Mail, href: "mailto:kryphorlabs@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "/apps", label: "Apps" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-3">
              <KSymbol size={40} animate={false} />
              <div>
                <div className="font-poppins font-bold text-kryphor-white tracking-widest text-sm">KRYPHOR</div>
                <div className="font-poppins font-light text-cyan tracking-widest text-xs">LABS</div>
              </div>
            </a>
            <p className="text-muted text-sm leading-relaxed">
              Software · Inteligencia Artificial · Videojuegos · Innovación
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 text-muted hover:text-cyan transition-colors rounded-lg hover:bg-white/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-poppins font-bold text-kryphor-white text-sm mb-4 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-bold text-kryphor-white text-sm mb-4 tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-purple/10 border border-purple/20">
              <p className="text-xs text-muted">
                <span className="text-soft-purp font-bold">Kryphor Labs®</span>{" "}
                — Marca en proceso de registro. Todos los productos y servicios están protegidos.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs text-center sm:text-left">
            © 2026 Kryphor Labs. Todos los derechos reservados.
          </p>
          <p className="text-muted text-xs">
            Hecho con ❤ en Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
}
