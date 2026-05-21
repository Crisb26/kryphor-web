import BethoChat from "@/components/betho/BethoChat";

const ADMIN_SYSTEM_PROMPT = `Eres Betho, el asistente de inteligencia artificial de Kryphor Labs en modo ADMINISTRADOR.
Tienes acceso completo. Puedes ayudar con:
- Análisis de datos y estadísticas del sistema
- Gestión de contenido de las apps
- Soporte técnico avanzado
- Información detallada sobre el ecosistema Kryphor
- Redacción de contenido para las apps y el sitio web
- Estrategia de producto y marketing
Sé directo, técnico cuando sea necesario, y proactivo con sugerencias.`;

export default function AdminBethoPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="mb-6 flex-shrink-0">
        <h1 className="font-poppins font-bold text-kryphor-white text-2xl mb-1">
          Betho — Consola Admin
        </h1>
        <p className="text-muted text-sm">Versión completa con acceso extendido.</p>
      </div>
      <div className="flex-1 min-h-0">
        <BethoChat systemPrompt={ADMIN_SYSTEM_PROMPT} />
      </div>
    </div>
  );
}
