import ContactForm from "@/components/ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSectionPage() {
  return (
    <section className="bg-[#f5f5f4] py-10 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <span className="text-primary text-sm font-bold uppercase">Contáctanos</span>
            <h2 className="text-primary text-lg md:text-3xl font-bold uppercase">¿Tienes alguna consulta? Escríbenos</h2>
            <p className="text-gray-600 text-sm md:text-base">
              En Mecatronix Perú, estamos comprometidos a brindar la mejor atención y solución a tus necesidades.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="mailto:contacto@mecatronixperu.com"
                className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
                aria-label="Enviar correo a contacto@mecatronixperu.com"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span className="relative z-10 text-sm md:text-base">
                  contacto@mecatronixperu.com
                </span>
                <span
                  className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
                />
              </a>
              <a
                href="tel:+51902778456"
                className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
                aria-label="Llamar al teléfono +51 902 778 456"
              >
                <Phone className="w-6 h-6 text-primary" />
                <span className="relative z-10 text-sm md:text-base">
                  +51 902 778 456
                </span>
                <span
                  className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
                />
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-gray-600 text-sm md:text-base">Augusto Tamayo Vargas 119, Barranco - Lima - Perú</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
