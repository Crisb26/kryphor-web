import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio — Kryphor Labs",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-deep pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-poppins font-bold text-kryphor-white text-4xl mb-3">
            Términos de Servicio
          </h1>
          <p className="text-muted text-sm">Última actualización: 20 de mayo de 2026</p>
          <p className="text-muted text-sm">Kryphor Labs — kryphorlabs.com</p>
        </div>

        <div className="glass rounded-2xl p-8 space-y-8 font-inter text-muted leading-relaxed">
          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">1. Aceptación de los términos</h2>
            <p>
              Al acceder o usar las aplicaciones, sitio web o servicios de Kryphor Labs, aceptas estos
              Términos de Servicio. Si no estás de acuerdo con algún término, no uses nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">2. Uso aceptable</h2>
            <p className="mb-3">Te comprometes a usar nuestros servicios solo para fines legales y a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No intentar acceder sin autorización a sistemas o datos de Kryphor Labs</li>
              <li>No usar los servicios para distribuir contenido ilegal, ofensivo o malicioso</li>
              <li>No interferir con el funcionamiento normal de nuestras aplicaciones</li>
              <li>No intentar revertir la ingeniería o copiar nuestro software sin autorización</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido, código fuente, diseños, logotipos, marcas y materiales de Kryphor Labs
              son propiedad exclusiva de Kryphor Labs y están protegidos por leyes de propiedad intelectual
              colombianas e internacionales. Kryphor Labs® es una marca en proceso de registro.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">4. Betho AI</h2>
            <p>
              El asistente Betho AI es una herramienta de inteligencia artificial. Sus respuestas son
              generadas automáticamente y no constituyen asesoramiento profesional de ningún tipo.
              Kryphor Labs no se responsabiliza por decisiones tomadas basadas en respuestas de Betho AI.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">5. Limitación de responsabilidad</h2>
            <p>
              Kryphor Labs no será responsable por daños indirectos, incidentales, especiales o
              consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestros
              servicios se proporcionan &quot;tal como están&quot; sin garantías de ningún tipo.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
              entran en vigor al publicarse. El uso continuado implica aceptación de los términos
              modificados.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">7. Jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa se
              someterá a los tribunales competentes de Colombia. Las partes acuerdan someterse a la
              jurisdicción exclusiva de dichos tribunales.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-kryphor-white text-xl mb-3">8. Contacto</h2>
            <p>
              Para consultas sobre estos términos:{" "}
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
