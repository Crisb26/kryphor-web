import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Kryphor Labs",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-10">
          <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--foreground)" }}>
            Política de Privacidad
          </h1>
          <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>
            Última actualización: 20 de mayo de 2026
          </p>
          <p className="font-inter text-sm" style={{ color: "var(--muted-clr)" }}>
            kryphorlabs.com
          </p>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-10 space-y-8 font-inter leading-relaxed"
          style={{ color: "var(--muted-clr)" }}>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              1. Introducción
            </h2>
            <p>
              Kryphor Labs respeta tu privacidad y se compromete a proteger tus datos personales.
              Esta política describe cómo recopilamos, usamos y protegemos la información cuando
              usas nuestras aplicaciones y servicios.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              2. Datos que recopilamos
            </h2>
            <p className="mb-3">
              La mayoría de nuestras aplicaciones funcionan sin necesidad de cuenta. Los datos que podemos
              recopilar incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Datos de uso anónimos para mejorar la experiencia</li>
              <li>Identificador de dispositivo anónimo para funcionamiento de publicidad</li>
              <li>Email y nombre si decides crear una cuenta, solo en apps que lo requieran</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              3. Publicidad
            </h2>
            <p>
              Algunas aplicaciones utilizan Google AdMob para mostrar publicidad. AdMob puede
              recopilar datos según la política de privacidad de Google. Puedes optar por no recibir
              anuncios personalizados en la configuración de tu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              4. Uso de los datos
            </h2>
            <p className="mb-3">Utilizamos los datos únicamente para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mejorar la funcionalidad y experiencia de nuestras apps</li>
              <li>Enviar comunicaciones si expresamente nos autorizaste</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              5. Derechos sobre tus datos
            </h2>
            <p>
              Tienes derecho de acceso, rectificación, cancelación y oposición sobre tus datos
              personales. Para ejercer estos derechos, escríbenos a:{" "}
              <a href="mailto:kryphorlabs@gmail.com" style={{ color: "var(--accent)" }}>
                kryphorlabs@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              6. Menores de edad
            </h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos
              conscientemente datos personales de menores. Si eres padre o tutor y crees que tu
              hijo nos proporcionó información, contáctanos.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              7. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios
              significativos. El uso continuado implica aceptación de la política actualizada.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              8. Contacto
            </h2>
            <p>
              Para cualquier consulta sobre privacidad:{" "}
              <a href="mailto:kryphorlabs@gmail.com" style={{ color: "var(--accent)" }}>
                kryphorlabs@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
