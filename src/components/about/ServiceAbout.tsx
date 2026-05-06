import { Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Servicios Mecatrónicos Integrales",
    icon: <Wrench className="w-10 h-10" />
  },
  {
    id: 2,
    title: "Servicios Eléctricos",
    icon: <Wrench className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Servicios de Mantenimiento",
    icon: <Wrench className="w-10 h-10" />
  }
]

export default function ServiceAbout() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
        <div className="mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="100">
          <span className="text-primary text-sm font-bold uppercase">Servicios</span>
          <h2 className="text-3xl font-bold uppercase text-primary">
            Explore Nuestros Servicios
          </h2>
        </div>
        <div className="text-gray-600 text-justify pt-0 md:pt-6 mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="200">
          En Mecatronix Peru, ofrecemos una amplia gama de servicios de mantenimiento y reparación para equipos industriales, garantizando la eficiencia y continuidad operativa de sus instalaciones.
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 pt-10 md:pt-20 mx-4 md:mx-0">
        {services.map((service) => (
          <div key={service.id} className="group flex flex-col h-50 cursor-pointer" data-aos="fade-up" data-aos-delay="300"> 
            <div className="flex justify-center">
              <div className="bg-[#f5f5f4] rounded-full p-4 text-primary border border-dashed flex items-center justify-center transition-transform duration-500 group-hover:rotate-360" style={{ width: "72px", height: "72px" }}>
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg text-primary uppercase font-bold pt-4 text-center">{service.title}</h3>
            <div className="mt-auto flex items-center gap-2 justify-center">
              <a href="/servicios" className="uppercase text-primary text-sm font-bold">
                Conoce más
              </a>
              <ArrowRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
