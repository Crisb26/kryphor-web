import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio — Kryphor Labs",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-10">
          <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--foreground)" }}>
            Términos de Servicio
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
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder o usar las aplicaciones, sitio web o servicios de Kryphor Labs, aceptas estos
              términos. Si no estás de acuerdo con alguno, no uses nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              2. Uso aceptable
            </h2>
            <p className="mb-3">Te comprometes a usar nuestros servicios solo para fines legales:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No intentar acceder sin autorización a sistemas o datos de Kryphor Labs</li>
              <li>No usar los servicios para distribuir contenido ilegal, ofensivo o malicioso</li>
              <li>No interferir con el funcionamiento normal de nuestras aplicaciones</li>
              <li>No copiar ni revertir la ingeniería de nuestro software sin autorización</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              3. Propiedad intelectual
            </h2>
            <p>
              Todo el contenido, código fuente, diseños, logotipos y materiales de Kryphor Labs son
              propiedad exclusiva de Kryphor Labs y están protegidos por las leyes de propiedad intelectual
              aplicables. Kryphor Labs® es una marca registrada.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              4. Limitación de responsabilidad
            </h2>
            <p>
              Kryphor Labs no será responsable por daños indirectos, incidentales, especiales o
              consecuentes derivados del uso de nuestros servicios. Los servicios se proporcionan
              &quot;tal como están&quot;, sin garantías de ningún tipo.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              5. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
              entran en vigor al publicarse. El uso continuado implica aceptación de las modificaciones.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
              6. Contacto
            </h2>
            <p>
              Para consultas:{" "}
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
