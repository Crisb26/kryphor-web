import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Mi Devocionario | Kryphor Labs",
  description:
    "Política de privacidad de Mi Devocionario, app de oración católica desarrollada por Kryphor Labs.",
};

export default function PrivacidadMiDevocionarioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">

        <div className="mb-10">
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}>
            Kryphor Labs
          </p>
          <h1 className="font-poppins font-bold text-4xl mb-3"
            style={{ color: "var(--foreground)" }}>
            Política de Privacidad
          </h1>
          <p className="font-poppins font-semibold text-xl mb-3"
            style={{ color: "var(--foreground)" }}>
            Mi Devocionario
          </p>
          <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>
            Última actualización: mayo de 2026
          </p>
        </div>

        <div
          className="glass rounded-3xl p-8 sm:p-10 space-y-8 font-inter leading-relaxed"
          style={{ color: "var(--muted-clr)" }}
        >
          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              1. Información que recopilamos
            </h2>
            <p className="mb-3">
              Mi Devocionario <strong style={{ color: "var(--foreground)" }}>no recopila ni transmite información personal identificable</strong> a servidores externos.
            </p>
            <p className="mb-3">La app almacena localmente en tu dispositivo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tu progreso en novenas y el santo rosario</li>
              <li>Tus intenciones de oración (guardadas solo en tu teléfono)</li>
              <li>Tus preferencias de configuración (idioma, tema, tamaño de texto, notificaciones)</li>
              <li>Tu nombre de usuario, si decides ingresarlo (opcional)</li>
            </ul>
            <p className="mt-3">
              Esta información nunca sale de tu dispositivo y no se envía a ningún servidor.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              2. Publicidad (Google AdMob)
            </h2>
            <p className="mb-3">
              Mi Devocionario muestra anuncios proporcionados por <strong style={{ color: "var(--foreground)" }}>Google AdMob</strong> para mantenerse gratuita.
            </p>
            <p className="mb-3">AdMob puede recopilar y usar datos no personales como:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tipo y modelo de dispositivo</li>
              <li>País e idioma del sistema</li>
              <li>Identificador publicitario del dispositivo (GAID/IDFA)</li>
            </ul>
            <p className="mt-3">
              Puedes desactivar los anuncios personalizados en{" "}
              <strong style={{ color: "var(--foreground)" }}>Ajustes del dispositivo → Google → Anuncios</strong>.
              Consulta la política de Google en{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              3. Notificaciones
            </h2>
            <p>
              Si activas el recordatorio diario de oración, la app programa una{" "}
              <strong style={{ color: "var(--foreground)" }}>notificación local</strong> en tu
              dispositivo a la hora que elijas. No se envía ningún dato a servidores externos para
              este fin.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              4. Permisos de la aplicación
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong style={{ color: "var(--foreground)" }}>INTERNET</strong> — necesario para
                mostrar publicidad de AdMob
              </li>
              <li>
                <strong style={{ color: "var(--foreground)" }}>POST_NOTIFICATIONS</strong> — para
                enviar el recordatorio diario de oración
              </li>
              <li>
                <strong style={{ color: "var(--foreground)" }}>RECEIVE_BOOT_COMPLETED</strong> —
                para reprogramar el recordatorio tras reiniciar el dispositivo
              </li>
              <li>
                <strong style={{ color: "var(--foreground)" }}>SCHEDULE_EXACT_ALARM</strong> —
                para que la notificación llegue exactamente a la hora elegida por el usuario
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              5. Menores de edad
            </h2>
            <p>
              Mi Devocionario es apta para todo público. No recopilamos intencionalmente datos
              personales de menores de 13 años. Si eres padre o tutor y tienes alguna inquietud,
              contáctanos.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              6. Derechos sobre tus datos
            </h2>
            <p className="mb-3">
              Dado que los datos se almacenan localmente en tu dispositivo, puedes eliminarlos en
              cualquier momento desde:{" "}
              <strong style={{ color: "var(--foreground)" }}>
                Configuración → Datos → Restablecer progreso
              </strong>{" "}
              dentro de la app, o desinstalando la aplicación.
            </p>
            <p>
              Para cualquier consulta adicional sobre privacidad, escríbenos a{" "}
              <a
                href="mailto:kryphorlabs@gmail.com"
                style={{ color: "var(--accent)" }}
              >
                kryphorlabs@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              7. Cambios a esta política
            </h2>
            <p>
              Cualquier actualización será publicada en esta página. El uso continuado de la app
              implica la aceptación de la política vigente.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3"
              style={{ color: "var(--foreground)" }}>
              8. Contacto
            </h2>
            <p>
              Desarrollado por{" "}
              <strong style={{ color: "var(--foreground)" }}>Kryphor Labs</strong>
              . Para preguntas sobre privacidad:{" "}
              <a
                href="mailto:kryphorlabs@gmail.com"
                style={{ color: "var(--accent)" }}
              >
                kryphorlabs@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
