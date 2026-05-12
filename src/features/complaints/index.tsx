import { openComplaintsWhatsApp } from "@/utils/whatsappComplaintsMessage"
import { Send } from "lucide-react"
import type { FormEvent } from "react"

export default function ComplaintsBookPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const email = data.get("email") as string
    const phone = data.get("phone") as string

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Por favor ingresa un correo válido.")
      return
    }
    if (!/^\d{9}$/.test(phone)) {
      alert("El teléfono debe tener 9 dígitos.")
      return
    }

    openComplaintsWhatsApp(form)
    form.reset()
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 md:py-20 text-gray-700">
      <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4 text-center md:text-left" data-aos="fade-up">
        Libro de Reclamaciones
      </h1>
      <p className="text-base leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="100">
        De conformidad con el Código de Protección y Defensa del Consumidor (Ley N° 29571),
        Mecatronix pone a disposición de sus clientes el presente Libro de Reclamaciones virtual.
        Complete el formulario a continuación para registrar su queja o reclamo.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8" data-aos="fade-up" data-aos-delay="200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="rc-name" className="text-sm font-semibold text-primary uppercase tracking-wide">
                Nombre completo *
              </label>
              <input
                type="text"
                id="rc-name"
                name="name"
                required
                placeholder="Juan Pérez"
                className="border-b border-neutral-400 py-2 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rc-phone" className="text-sm font-semibold text-primary uppercase tracking-wide">
                Teléfono *
              </label>
              <input
                type="tel"
                id="rc-phone"
                name="phone"
                required
                inputMode="numeric"
                placeholder="987654321"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").slice(0, 9)
                }}
                className="border-b border-neutral-400 py-2 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rc-email" className="text-sm font-semibold text-primary uppercase tracking-wide">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="rc-email"
                name="email"
                required
                placeholder="correo@ejemplo.com"
                className="border-b border-neutral-400 py-2 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rc-type" className="text-sm font-semibold text-primary uppercase tracking-wide">
                Tipo *
              </label>
              <select
                id="rc-type"
                name="type"
                required
                className="border-b border-neutral-400 py-2 text-base text-gray-700 focus:outline-none focus:border-primary transition-colors bg-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="Queja">Queja</option>
                <option value="Reclamo">Reclamo</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="rc-message" className="text-sm font-semibold text-primary uppercase tracking-wide">
              Descripción del reclamo / queja *
            </label>
            <textarea
              id="rc-message"
              name="message"
              required
              rows={5}
              placeholder="Describa detalladamente su queja o reclamo..."
              className="border-b border-neutral-400 py-2 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none"
            />
          </div>

          <p className="text-xs text-gray-400">
            Al enviar este formulario, acepta que sus datos serán tratados conforme a nuestra{" "}
            <a href="/politica-de-privacidad" className="text-primary underline">
              Política de Privacidad
            </a>
            .
          </p>

          <button
            type="submit"
            className="relative overflow-hidden inline-flex items-center gap-3 bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide cursor-pointer border border-primary group transition-colors rounded-full duration-500 hover:text-white text-primary"
          >
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
              <Send className="h-5 w-5" />
              Enviar reclamación
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
