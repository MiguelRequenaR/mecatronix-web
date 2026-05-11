import { WHATSAPP_PHONE } from "@/utils/whatsappMessage"

export type ComplaintsFormWhatsAppData = {
  name: string
  phone: string
  email: string
  type: string
  message: string
}

export function complaintsWhatsappUrl(data: ComplaintsFormWhatsAppData): string {
  const text = [
    "*Libro de Reclamaciones — Mecatronix*",
    "",
    `Nombre: ${data.name || "—"}`,
    `Teléfono: ${data.phone || "—"}`,
    `Correo: ${data.email || "—"}`,
    `Tipo: ${data.type || "—"}`,
    "",
    "*Descripción:*",
    data.message || "—",
  ].join("\n")

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}

export function openComplaintsWhatsApp(form: HTMLFormElement): void {
  const fd = new FormData(form)
  const url = complaintsWhatsappUrl({
    name: String(fd.get("name") ?? "").trim(),
    phone: String(fd.get("phone") ?? "").trim(),
    email: String(fd.get("email") ?? "").trim(),
    type: String(fd.get("type") ?? "").trim(),
    message: String(fd.get("message") ?? "").trim(),
  })
  window.open(url, "_blank", "noopener,noreferrer")
}
