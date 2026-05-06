import { useState } from "react"
import { Menu, X } from "lucide-react"
import logoMecatronix from "/mecatronixLogoWB.png"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const links = [
    "Inicio",
    "Sobre nosotros",
    "Servicios",
    "Contacto"
  ];

  return (
    <header className="bg-white shadow-xl relative">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        <div>
          <img src={logoMecatronix} alt="logo" className="w-[300px] h-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {links.map((label, idx) => (
              <li
                key={label}
                onClick={() => setActiveIndex(idx)}
                className={`
                  flex items-center gap-1 cursor-pointer transition-colors duration-200
                  font-bold uppercase relative group
                  ${activeIndex === idx ? "text-primary" : "text-primary"}
                `}
              >
                <span className="pb-1 relative">
                  {label}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-px bg-primary transition-all duration-300 ease-in-out rounded
                      ${activeIndex === idx ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </span>
              </li>
            ))}
          </ul>
        </nav>
        {/* Botón del menú hamburguesa para móvil */}
        <button 
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile - Overlay */}
      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-primary z-40 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-5">
          <img src="/logoFoodie.svg" alt="logo" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Mobile nav */}
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-2xl font-semibold">
            {links.map((label, idx) => (
              <li
                key={label}
                className={`
                  cursor-pointer transition-colors duration-300
                  hover:text-secondary 
                  ${activeIndex === idx ? 'text-secondary' : ''}
                `}
                onClick={() => {
                  setActiveIndex(idx);
                  setMenuOpen(false);
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pb-8">
          <button
            className="relative overflow-hidden bg-secondary px-8 py-3 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white text-base"
            onClick={() => setMenuOpen(false)}
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
              Ver menú
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
