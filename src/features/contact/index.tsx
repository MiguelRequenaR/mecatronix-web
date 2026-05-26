import SEO from "@/components/SEO"
import ContactSectionPage from "@/components/contact/ContactSectionPage"

export default function Contact() {
  return (
    <main>
      <SEO
        title="Contacto | Mecatronix Perú"
        description="¿Necesitas soporte técnico o una cotización para tu planta? Contáctanos. Nuestro equipo de ingenieros está listo para evaluar tu proyecto."
        url="https://www.mecatronixperu.com/contacto"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
        breadcrumbs={[
          {name: "Inicio", url: "https://www.mecatronixperu.com/"},
          {name: "Contacto", url: "https://www.mecatronixperu.com/contacto"},
        ]}
      />
      <ContactSectionPage />
    </main>
  )
}
