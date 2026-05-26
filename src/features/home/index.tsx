import SEO from "@/components/SEO"
import HeroHome from "@/components/home/HeroHome"
import FeaturesSection from "@/components/home/FeaturesSection"
import ServiceSectionHome from "@/components/home/ServiceSectionHome"
import ClientsSection from "@/components/home/ClientsSection"

export default function Home() {
  return (
    <main>
      <SEO
        title="Mecatronix Perú | Mantenimiento Industrial y Automatización"
        description="Mecatronix Perú ofrece mantenimiento industrial, automatización y soluciones mecatrónicas para plantas y equipos."
        url="https://www.mecatronixperu.com"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
        breadcrumbs={[{
          name: "Inicio",
          url: "https://www.mecatronixperu.com/"
        }]}
      />
      <HeroHome />
      <FeaturesSection />
      <ServiceSectionHome />
      <ClientsSection />
    </main>
  )
}
