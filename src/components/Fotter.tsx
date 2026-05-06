import { Mail, Phone, MapPin } from "lucide-react"
import logoMecatronix from "/mecatronixLogoWB.png"

export default function Fotter() {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <hr className="border-primary w-full" />
          <img src={logoMecatronix} alt="logo" className="w-[400px] h-auto" />
          <hr className="border-primary w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch text-center py-10 space-y-10 md:space-y-0">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-primary text-lg font-semibold uppercase">Contactanos</h3>
            <p className="flex items-center justify-center gap-2 text-gray-600 pt-2">
              <Mail className="w-6 h-6 text-primary" /> info@mecatronix.com
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-600">
              <Phone className="w-6 h-6 text-primary" /> +51 902 778 456
            </p>
          </div>
          <div className="hidden md:block w-px bg-primary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-primary text-lg font-semibold uppercase">Dirección</h3>
            <p className="text-gray-600 flex items-center justify-center gap-2 pt-2">
              <MapPin className="w-6 h-6 text-primary" /> Av. La Victoria, Lima
            </p>
            <p className="text-gray-600">Lima, Perú</p>
          </div>
          <div className="hidden md:block w-px bg-primary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-primary text-lg uppercase font-semibold">Horario de atención</h3>
            <p className="text-gray-600 pt-2">Lunes a Viernes: 10:00 - 22:00</p>
            <p className="text-gray-600">Sábado y Domingo: 10:00 - 20:00</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 px-4 text-center md:text-left">2026 ©Todos los derechos reservados. Desarrollado por <a href="https://www.groblestudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Grobles Studio.</a></p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png" alt="facebook" className="w-6 h-6 cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="instagram" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
