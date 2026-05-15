import SEO from "@/components/SEO"
import ServicesList from "@/components/services/ServicesList"
import ContactSectionService from "@/components/services/ContactSectionService"

export default function ServicesPage() {
  return (
    <main>
      <SEO
        title="Servicios Industriales y Automatización | Mecatronix Perú"
        description="Explora nuestras soluciones en mantenimiento preventivo y correctivo, diseño de tableros eléctricos, neumática y control de procesos industriales."
        url="https://www.mecatronixperu.com/servicios"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
      />
      <ServicesList />
      <ContactSectionService />
    </main>
  )
}
