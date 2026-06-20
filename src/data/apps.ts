export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Espiritual" | "Productividad" | "Conectividad" | "Agrícola" | "Finanzas" | "Bienestar";
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
    tagline: "Publicidad digital inteligente en tu pantalla",
    description:
      "App para Android TV y Google TV que convierte cualquier televisor en una pantalla de publicidad digital profesional. Gestiona campañas, programa contenido y monitorea estadísticas en tiempo real desde el panel web.",
    category: "Conectividad",
    status: "disponible",
    color: "#38BDF8",
    icon: "📺",
    subsidiary: "KryphorConnect",
    apkUrl: "/downloads/kryphorconnect-tv.apk",
    features: [
      "Compatible con Android TV y Google TV",
      "APK descargable (sin necesidad de Play Store)",
      "Gestión de campañas en tiempo real",
      "Programación por horarios y días",
      "Panel de administración web incluido",
    ],
  },
  {
    id: "mi-devocionario",
    name: "Mi Devocionario",
    tagline: "Rosario, novenas y oración diaria",
    description:
      "App de oración católica con el Santo Rosario completo (4 misterios), novenas con contenido íntegro, plan de oración personalizado, recordatorio diario configurable y modo nocturno. Disponible en 16 idiomas.",
    category: "Espiritual",
    status: "proximamente",
    color: "#D4AF37",
    icon: "🙏",
    features: [
      "Santo Rosario completo (4 misterios)",
      "Novenas con los 9 días completos",
      "Plan de oración multi-devoción",
      "Recordatorio diario configurable",
      "16 idiomas disponibles",
    ],
  },
  {
    id: "zenflow",
    name: "ZenFlow",
    tagline: "Productividad con bienestar",
    description:
      "App de productividad y bienestar digital que combina gestión de tareas, hábitos y mindfulness en una experiencia fluida y minimalista.",
    category: "Bienestar",
    status: "en-desarrollo",
    color: "#34D399",
    icon: "🌊",
    features: [
      "Gestión de tareas y proyectos",
      "Seguimiento de hábitos diarios",
      "Sesiones de mindfulness",
      "Estadísticas de bienestar",
    ],
  },
  {
    id: "agrolog",
    name: "AgroLog",
    tagline: "Gestión agrícola inteligente",
    description:
      "Plataforma para agricultores y fincas que permite registrar cultivos, controlar insumos, planificar cosechas y generar reportes de producción.",
    category: "Agrícola",
    status: "en-desarrollo",
    color: "#86EFAC",
    icon: "🌱",
    features: [
      "Registro de cultivos y parcelas",
      "Control de insumos y costos",
      "Planificación de cosechas",
      "Reportes de producción",
    ],
  },
  {
    id: "taskcamp",
    name: "TaskCamp",
    tagline: "Gestión de proyectos para equipos",
    description:
      "Herramienta de gestión de proyectos diseñada para equipos pequeños y medianos. Tableros kanban, sprints, seguimiento de tiempo y colaboración en tiempo real.",
    category: "Productividad",
    status: "en-desarrollo",
    color: "#818CF8",
    icon: "🏕️",
    features: [
      "Tableros kanban",
      "Gestión de sprints",
      "Seguimiento de tiempo",
      "Colaboración en tiempo real",
    ],
  },
  {
    id: "microcobros",
    name: "MicroCobros",
    tagline: "Gestión de cobros simplificada",
    description:
      "App para pequeños negocios y emprendedores que facilita el seguimiento de cobros, deudas de clientes, recordatorios de pago y reportes financieros básicos.",
    category: "Finanzas",
    status: "en-desarrollo",
    color: "#FBBF24",
    icon: "💰",
    features: [
      "Registro de clientes y deudas",
      "Recordatorios de pago automáticos",
      "Historial de cobros",
      "Reportes financieros básicos",
    ],
  },
  {
    id: "lokalio",
    name: "Lokalio",
    tagline: "Descubre lo local",
    description:
      "Plataforma de descubrimiento de negocios y servicios locales. Conecta a las personas con comercios, restaurantes y servicios de su ciudad de forma rápida y visual.",
    category: "Productividad",
    status: "en-desarrollo",
    color: "#F472B6",
    icon: "📍",
    features: [
      "Búsqueda de negocios locales",
      "Reseñas y calificaciones",
      "Mapas integrados",
      "Promociones y ofertas locales",
    ],
  },
];
