import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4 md:mx-0">

        <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <span className="text-white text-sm font-bold uppercase">Contáctanos</span>
          <h2 className="text-white text-3xl font-bold uppercase">
            ¿Interesado por nuestros <br /> servicios? Escríbenos
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-start gap-15 md:gap-0 mt-20 md:mt-0" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full md:w-1/2 md:h-[600px] hidden md:block" >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/other/intersadoservicios-480.webp 480w, /images/other/intersadoservicios-700.webp 700w"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <img
                src="https://i.ibb.co/HfH0szpy/intersadoservicios.jpg"
                alt="Servicio de contacto e interés de servicios"
                width={700}
                height={473}
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-3xl"
              />
            </picture>
          </div>
          <div
            className="w-full md:w-[55%] md:-ml-16 -mt-10 z-10"
            data-aos="fade-up"
          >
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
