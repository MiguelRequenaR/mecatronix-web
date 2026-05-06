import services from "@/data/service"

export default function ServiceSectionHome() {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 mx-4 md:mx-0" data-aos="fade-up" data-delay="100">
        {services.map((service) => (
          <div key={service.id}>
            <div className="overflow-hidden rounded-3xl group">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl transition-transform duration-300 group-hover:scale-110 w-full h-auto cursor-pointer"
              />
            </div>
            <h3 className="text-lg text-primary uppercase font-bold pt-4 text-center">{service.title}</h3>
      
          </div>
        ))}
      </div>
      <div className="flex justify-center" data-aos="fade-up" data-delay="200">
        <a
          className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer font-bold border border-primary group transition-colors rounded-full duration-500 hover:text-white text-sm text-primary"
          href="/servicios"
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
        </a>
      </div>
    </section>
  )
}
