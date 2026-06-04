export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Espiritual" | "Juego" | "Conectividad";
  status: "disponible" | "en-desarrollo" | "proximamente";
  playStoreUrl?: string;
  apkUrl?: string;
  color: string;
  icon: string;
  features: string[];
  subsidiary?: string;
}

export const statusLabels: Record<App["status"], string> = {
  disponible: "Disponible",
  "en-desarrollo": "En Desarrollo",
  proximamente: "Próximamente",
};

export const apps: App[] = [
  {
    id: "kryphor-connect-tv",
    name: "KryphorConnect TV",
    tagline: "Conectividad digital en tu pantalla",
    description:
      "App para Android TV y Google TV que gestiona contenido digital en pantallas. Subsidiaria de Kryphor Labs, disponible en Play Store y como APK descargable para TVs sin Play Store.",
    category: "Conectividad",
    status: "disponible",
    color: "#38BDF8",
    icon: "📺",
    subsidiary: "KryphorConnect",
    apkUrl: "/downloads/kryphorconnect-tv.apk",
    features: [
      "Compatible con Android TV y Google TV",
      "APK descargable (sin necesidad de Play Store)",
      "Instalación vía USB o descarga directa",
      "Panel de administración web",
      "Gestión de contenido en tiempo real",
    ],
  },
  {
    id: "mi-devocionario",
    name: "Mi Devocionario",
    tagline: "Rosario, novenas y oración diaria",
    description:
      "App de oración católica con el Santo Rosario completo (4 misterios), 6 novenas con contenido íntegro, plan de oración personalizado, recordatorio diario configurable y modo nocturno. Disponible en español, inglés, portugués, francés y latín.",
    category: "Espiritual",
    status: "proximamente",
    color: "#D4AF37",
    icon: "🙏",
    features: [
      "Santo Rosario completo (4 misterios)",
      "6 novenas con los 9 días completos",
      "Plan de oración multi-devoción",
      "Recordatorio diario configurable",
      "Modo nocturno y tamaño de texto",
      "5 idiomas: ES, EN, PT, FR, LA",
    ],
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
