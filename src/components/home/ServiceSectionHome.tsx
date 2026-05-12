import { Link } from "react-router-dom"
import { getServicesForHome } from "@/data/service"

export default function ServiceSectionHome() {
  const homeServices = getServicesForHome()

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-2xl md:text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 mx-4 md:mx-0" data-aos="fade-up" data-delay="100">
        {homeServices.map((service) => (
          <Link
            key={service.id}
            to={`/servicios/${service.id}`}
            className="group block hover:no-underline"
            aria-label={`Ver más detalles de ${service.title}`}
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={service.image}
                className="rounded-3xl transition-transform duration-300 group-hover:scale-110 w-full h-auto"
              />
            </div>
            <h3 className="text-lg text-primary uppercase font-bold pt-4 text-center">{service.title}</h3>
          </Link>
        ))}
      </div>
      <div className="flex justify-center" data-aos="fade-up" data-delay="200">
        <Link
          className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer font-bold border border-primary group transition-colors rounded-full duration-500 hover:text-white text-sm text-primary"
          to="/servicios"
        >
          <span
            className="
                absolute inset-0 
                bg-primary
                translate-y-full
                group-hover:translate-y-0
                transition-transform duration-500 ease-in-out pointer-events-none
              "
          />
          <span
            className="relative z-10 transition-colors duration-500"
          >
            Ver todos los servicios
          </span>
        </Link>
      </div>
    </section>
  )
}
