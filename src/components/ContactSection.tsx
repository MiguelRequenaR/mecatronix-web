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
            <img
              src="https://i.ibb.co/HfH0szpy/intersadoservicios.jpg"
              alt="contacto"
              className="w-full h-full rounded-3xl"
            />
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
