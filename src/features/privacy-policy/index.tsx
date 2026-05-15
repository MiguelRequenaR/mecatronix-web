import SEO from "@/components/SEO"

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Política de Privacidad | Mecatronix Perú"
        description="Conoce nuestra política de privacidad y cómo protegemos su información personal."
        url="https://www.mecatronixperu.com/politica-de-privacidad"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
      />
      <section className="max-w-4xl mx-auto px-6 py-10 md:py-20 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-10 text-center md:text-left" data-aos="fade-up">
          Política de Privacidad
        </h1>

        <div className="space-y-8 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">1. Información que recopilamos</h2>
            <p>
              En Mecatronix recopilamos información personal que usted nos proporciona voluntariamente
              al completar formularios de contacto en nuestro sitio web. Esta información puede incluir:
              nombre completo, dirección de correo electrónico, número de teléfono y el contenido del
              mensaje enviado.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">2. Uso de la información</h2>
            <p>
              La información recopilada es utilizada exclusivamente para responder a sus consultas,
              brindarle información sobre nuestros servicios de mecatrónica y mantenimiento, y mejorar
              la calidad de nuestra atención al cliente. No utilizamos sus datos para fines publicitarios
              sin su consentimiento previo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Compartición de datos</h2>
            <p>
              Mecatronix no vende, alquila ni comparte su información personal con terceros, salvo que
              sea requerido por ley o sea estrictamente necesario para la prestación del servicio
              solicitado.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información
              personal contra accesos no autorizados, alteración, divulgación o destrucción.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Usted
              puede configurar su navegador para rechazar todas las cookies o para recibir una
              notificación cuando se envíe una cookie.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Sus derechos</h2>
            <p>
              Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier
              momento. Para ejercer estos derechos, puede contactarnos a través de{" "}
              <a href="mailto:info@mecatronix.com" className="text-primary underline">
                info@mecatronix.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">7. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier momento. Le
              recomendamos revisarla periódicamente para estar informado sobre cómo protegemos
              su información.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4">Última actualización: Mayo 2026</p>
        </div>
      </section>
    </>
  )
}
