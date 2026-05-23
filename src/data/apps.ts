export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Espiritual" | "Juego";
  status: "disponible" | "en-desarrollo" | "proximamente";
  playStoreUrl?: string;
  color: string;
  icon: string;
  features: string[];
}

export const statusLabels: Record<App["status"], string> = {
  disponible: "Disponible",
  "en-desarrollo": "En Desarrollo",
  proximamente: "Próximamente",
};

export const apps: App[] = [
  {
    id: "mi-devocionario",
    name: "Mi Devocionario",
    tagline: "Tu guía espiritual diaria",
    description:
      "Aplicación de devocionales, oraciones y reflexiones espirituales para acompañarte cada día en tu fe.",
    category: "Espiritual",
    status: "en-desarrollo",
    color: "#27AE60",
    icon: "🙏",
    features: ["Devocionales diarios", "Oraciones guiadas", "Versículos personalizados", "Modo sin conexión"],
  },
  {
    id: "vortex",
    name: "Vórtex",
    tagline: "Aventura épica de acción",
    description:
      "Videojuego de acción y aventura con mecánicas innovadoras, combate fluido y un universo expansivo en 2.5D.",
    category: "Juego",
    status: "en-desarrollo",
    color: "#E74C3C",
    icon: "⚔️",
    features: ["Combate fluido", "Historia profunda", "Mundo abierto", "Gráficos 2.5D"],
  },
  {
    id: "picaoro",
    name: "PicaOro",
    tagline: "Mina, construye, conquista",
    description:
      "Juego de minería y construcción donde acumulas recursos, construyes tu imperio y conquistas nuevos territorios.",
    category: "Juego",
    status: "en-desarrollo",
    color: "#F39C12",
    icon: "⛏️",
    features: ["Minería estratégica", "Gestión de recursos", "Modo multijugador", "Progresión RPG"],
  },
  {
    id: "toca-y-ve",
    name: "Toca & Ve",
    tagline: "Aprende tocando",
    description:
      "Juego educativo interactivo que convierte el aprendizaje en una experiencia táctil y visual para todas las edades.",
    category: "Juego",
    status: "en-desarrollo",
    color: "#2E86AB",
    icon: "👆",
    features: ["Interfaz táctil", "Contenido educativo", "Gamificación", "Seguimiento de progreso"],
  },
  {
    id: "coloLetras",
    name: "ColoLetras",
    tagline: "Colorea con palabras",
    description:
      "Juego creativo que combina colorear y escritura para potenciar la creatividad y el aprendizaje del lenguaje.",
    category: "Juego",
    status: "en-desarrollo",
    color: "#8E44AD",
    icon: "🎨",
    features: ["Colorear interactivo", "Aprendizaje de letras", "Múltiples idiomas", "Compartir creaciones"],
  },
];
