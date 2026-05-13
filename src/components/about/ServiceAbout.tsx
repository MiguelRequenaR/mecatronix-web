import { ArrowRight, CalendarClock, Activity, Hammer, Factory } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    icon: <CalendarClock className="w-10 h-10" />,
    href: "/servicios/mantenimiento-preventivo"
  },
  {
    id: 2,
    title: "Mantenimiento Predictivo",
    icon: <Activity className="w-10 h-10" />,
    href: "/servicios/mantenimiento-predictivo"
  },
  {
    id: 3,
    title: "Mantenimiento Correctivo",
    icon: <Hammer className="w-10 h-10" />,
    href: "/servicios/mantenimiento-correctivo"
  },
  {
    id: 4,
    title: "Instalación y montaje de equipos industriales",
    icon: <Factory className="w-10 h-10" />,
    href: "/servicios/instalacion-montaje-y-puesta-en-marcha-de-equipos-industriales"
  }
]

export default function ServiceAbout() {
  return (
    <section className="max-w-7xl mx-auto pb-10 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
        <div className="mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="100">
          <span className="text-primary text-sm font-bold uppercase">Servicios</span>
          <h2 className="text-lg md:text-3xl font-bold uppercase text-primary">
            Explore Nuestros Servicios
          </h2>
        </div>
        <div className="text-gray-600 text-justify pt-0 md:pt-6 mx-4 md:mx-0 text-sm md:text-base" data-aos="fade-up" data-aos-delay="200">
          En Mecatronix Peru, ofrecemos una amplia gama de servicios de mantenimiento y reparación para equipos industriales, garantizando la eficiencia y continuidad operativa de sus instalaciones.
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 md:pt-20 mx-4 md:mx-0">
        {services.map((service) => (
          <Link key={service.id} to={service.href} className="group flex flex-col h-50 cursor-pointer" data-aos="fade-up" data-aos-delay="300"> 
            <div className="flex justify-center">
              <div className="bg-[#f5f5f4] rounded-full p-4 text-primary border border-dashed flex items-center justify-center transition-transform duration-500 group-hover:rotate-360" style={{ width: "72px", height: "72px" }}>
                {service.icon}
              </div>
            </div>
            <h3 className="text-sm md:text-lg text-primary uppercase font-bold pt-4 text-center">{service.title}</h3>
            <div className="mt-auto flex items-center gap-2 justify-center">
              <p className="uppercase text-primary text-sm font-bold">
                Conoce más
              </p>
              <ArrowRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
