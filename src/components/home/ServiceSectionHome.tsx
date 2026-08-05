import { Link } from "react-router-dom"
import { getServicesForHome } from "@/data/service"
import { ArrowRight } from "lucide-react"

export default function ServiceSectionHome() {
  const homeServices = getServicesForHome()

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-2xl md:text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 mx-4 md:mx-0" data-aos="fade-up" data-delay="100">
        {homeServices.map((service) => (
          <Link
            key={service.id}
            to={`/servicios/${service.slug}`}
            className="group block hover:no-underline bg-primary rounded-2xl p-5"
            aria-label={`Ver más detalles de ${service.title}`}
          >
            <div className="flex flex-col md:flex-row gap-5 rounded-lg items-stretch">
              <div className="overflow-hidden rounded-2xl w-full h-56 md:w-80 md:h-[300px] shrink-0">
                {service.imageBase ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/images/${service.imageBase}-320.webp 320w, /images/${service.imageBase}-480.webp 480w, /images/${service.imageBase}-640.webp 640w`}
                      sizes="(min-width: 768px) 320px, 100vw"
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      width={service.imageWidth ?? 1600}
                      height={service.imageHeight ?? 1200}
                      loading="lazy"
                      decoding="async"
                      className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover"
                    />
                  </picture>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    width={service.imageWidth ?? 1600}
                    height={service.imageHeight ?? 1200}
                    loading="lazy"
                    decoding="async"
                    className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col flex-1 space-y-5">
                <h3 className="text-lg text-white uppercase font-bold pt-4 md:pt-4">{service.title}</h3>
                <p className="text-white text-[15px]">{service.description}</p>
                <div className="flex items-center gap-2 mt-auto bg-white w-fit px-4 rounded-2xl py-2">
                  <p className="uppercase text-primary text-sm font-bold">
                    Conoce más
                  </p>
                  <ArrowRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
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
