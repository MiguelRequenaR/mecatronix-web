import type { FormEvent } from "react"
import { Mail, Pencil, Phone, Send, UserRound } from "lucide-react"

import { openContactWhatsApp } from "@/utils/whatsappMessage"

export default function ContactForm() {
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

    openContactWhatsApp(form)
    form.reset()
  }

  return (
    <form className="bg-white p-10" onSubmit={handleSubmit}>
      <div className="space-y-11">
        <div className="relative border-b border-neutral-700 pb-3">
          <UserRound className="absolute left-0 top-1 h-5 w-5 text-primary" />
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nombre"
            className="w-full pl-10 text-base text-primary placeholder:text-slate-300 focus:outline-none"
          />
        </div>

        <div className="relative border-b border-neutral-700 pb-3">
          <Phone className="absolute left-0 top-1 h-5 w-5 text-primary" />
          <label htmlFor="phone" className="sr-only">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Teléfono"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 9);
            }}
            className="w-full pl-10 text-base text-primary placeholder:text-slate-300 focus:outline-none"
          />
        </div>

        <div className="relative border-b border-neutral-700 pb-3">
          <Mail className="absolute left-0 top-1 h-5 w-5 text-primary" />
          <label htmlFor="email" className="sr-only">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Correo Electrónico"
            className="w-full pl-10 text-base text-primary placeholder:text-slate-300 focus:outline-none"
          />
        </div>

        <div className="relative border-b border-neutral-700 pb-3">
          <Pencil className="absolute left-0 top-1 h-5 w-5 text-primary" />
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder="Deja tu mensaje aquí, te responderemos a la brevedad"
            className="w-full resize-none pl-10 text-base text-primary placeholder:text-slate-300 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="relative overflow-hidden mt-10 inline-flex items-center gap-3 bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide cursor-pointer border border-primary group transition-colors rounded-full duration-500 hover:text-white text-primary"
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
        <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
          <Send className="h-5 w-5" />
          Enviar mensaje
        </span>
      </button>

    </form>
  )
}
