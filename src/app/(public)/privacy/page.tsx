import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Kryphor Labs",
};

export default function PrivacyPage() {
  const lastUpdated = "20 de mayo de 2026";

  return (
    <div className="min-h-screen bg-bg-deep pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-poppins font-bold text-kryphor-white text-4xl mb-3">
            Política de Privacidad
          </h1>
          <p className="text-muted text-sm">Última actualización: {lastUpdated}</p>
          <p className="text-muted text-sm">Kryphor Labs — kryphorlabs.com</p>
        </div>

        <div className="glass rounded-2xl p-8 space-y-8 font-inter text-muted leading-relaxed">
          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">1. Introducción</h2>
            <p>
              Kryphor Labs (&quot;nosotros&quot;, &quot;nuestra empresa&quot;) respeta su privacidad y se compromete a proteger
              sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos la
              información cuando usa nuestras aplicaciones y servicios.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">2. Datos que recopilamos</h2>
            <p className="mb-3">
              La mayoría de nuestras aplicaciones funcionan sin necesidad de cuenta. Los datos que podemos
              recopilar incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Datos de uso anónimos para mejorar la experiencia (crashlytics, analíticas básicas)</li>
              <li>Identificador de dispositivo anónimo para funcionamiento de publicidad (AdMob)</li>
              <li>Email y nombre si decides crear una cuenta (solo en apps que lo requieran)</li>
              <li>Mensajes enviados a Betho AI para procesar respuestas (no se almacenan permanentemente)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">3. Publicidad (AdMob)</h2>
            <p>
              Algunas de nuestras aplicaciones utilizan Google AdMob para mostrar publicidad. AdMob puede
              recopilar datos para personalizar anuncios según la política de privacidad de Google. Puedes
              optar por no recibir anuncios personalizados en la configuración de tu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">4. Uso de los datos</h2>
            <p className="mb-3">Utilizamos los datos para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mejorar la funcionalidad y experiencia de usuario de nuestras apps</li>
              <li>Procesar mensajes enviados al asistente Betho AI</li>
              <li>Enviar comunicaciones si expresamente nos autorizaste</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">5. Derechos ARCO</h2>
            <p>
              Tienes derecho de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre tus datos
              personales. Para ejercer estos derechos, escríbenos a:{" "}
              <span className="text-cyan">kryphorlabs@gmail.com</span>
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">6. Cumplimiento GDPR</h2>
            <p>
              Para usuarios en el Espacio Económico Europeo, cumplimos con el Reglamento General de
              Protección de Datos (GDPR). La base legal para el procesamiento es el interés legítimo
              y, cuando aplica, el consentimiento explícito del usuario.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">7. Menores de edad</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos conscientemente
              datos personales de niños menores de 13 años. Si eres padre/tutor y crees que tu hijo nos
              proporcionó información, contáctanos.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">8. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos
              mediante aviso en la app o por email. El uso continuado de nuestros servicios implica
              aceptación de la política actualizada.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">9. Contacto</h2>
            <p>
              Para cualquier consulta sobre privacidad:{" "}
              <span className="text-cyan">kryphorlabs@gmail.com</span>
              <br />
              Kryphor Labs — Colombia 🇨🇴
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
