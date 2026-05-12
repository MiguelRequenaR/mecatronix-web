export const WHATSAPP_PHONE = "51902778456"

const DEFAULT_FLOATING_MESSAGE =
  "Hola, me gustaría obtener más información sobre sus servicios."

export function getWhatsAppChatUrl(message: string = DEFAULT_FLOATING_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export type ContactFormWhatsAppData = {
  name: string
  phone: string
  email: string
  ruc: string
  razon_social: string
  message: string
}

export function whatsappMessage(data: ContactFormWhatsAppData): string {
  const text = [
    "*Mensaje desde el formulario*",
    "",
    `Nombre: ${data.name || "—"}`,
    `Teléfono: ${data.phone || "—"}`,
    `Correo: ${data.email || "—"}`,
    `RUC: ${data.ruc || "—"}`,
    `Razón Social: ${data.razon_social || "—"}`,
    `Mensaje: ${data.message || "—"}`,
  ].join("\n")

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}

export function openContactWhatsApp(form: HTMLFormElement): void {
  const fd = new FormData(form)
  const url = whatsappMessage({
    name: String(fd.get("name") ?? "").trim(),
    phone: String(fd.get("phone") ?? "").trim(),
    email: String(fd.get("email") ?? "").trim(),
    ruc: String(fd.get("ruc") ?? "").trim(),
    razon_social: String(fd.get("razon_social") ?? "").trim(),
    message: String(fd.get("message") ?? "").trim(),
  })
  window.open(url, "_blank", "noopener,noreferrer")
}
