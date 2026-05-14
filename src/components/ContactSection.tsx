import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="relative flex flex-col md:flex-row mx-4 md:mx-0 gap-10 md:gap-0">
        <div className="space-y-10 md:w-1/2" data-aos="fade-up" data-aos-delay="100">
          <span className="text-white text-sm font-bold uppercase">Contáctanos</span>
          <h2 className="text-white text-3xl font-bold uppercase">¿Interesado por nuestros <br /> servicios? Escríbenos</h2>
          <img src="https://images.unsplash.com/photo-1717386255777-ce60792a2a56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contacto" className="w-full h-full rounded-3xl" />
        </div>
        <div className="md:w-1/2 md:absolute md:right-15 md:top-0" data-aos="fade-up">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
