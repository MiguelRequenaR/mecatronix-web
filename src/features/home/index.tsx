import HeroHome from "@/components/home/HeroHome"
import FeaturesSection from "@/components/home/FeaturesSection"
import ServiceSectionHome from "@/components/home/ServiceSectionHome"
import ClientsSection from "@/components/home/ClientsSection"

export default function Home() {
  return (
    <main>
      <HeroHome />
      <FeaturesSection />
      <ServiceSectionHome />
      <ClientsSection />
    </main>
  )
}
