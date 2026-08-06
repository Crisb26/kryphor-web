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
    apkUrl: "https://github.com/Crisb26/kryphorconnect-tv/releases/download/v1.0.0/kryphorconnect-tv.apk",
    features: [
      "Compatible con Android TV y Google TV",
      "APK descargable (sin necesidad de Play Store)",
      "Gestión de campañas en tiempo real",
      "Programación por horarios y días",
      "Panel de administración web incluido",
    ],
  },
];
