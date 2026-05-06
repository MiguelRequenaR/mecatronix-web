
export default function CallToAction() {
  return (
    <section
      className="w-full flex flex-wrap justify-center gap-6 px-4 py-20 md:py-40 relative bg-scroll md:bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1732714552116-399f828fa355?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 z-10">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl text-white font-bold uppercase">
            Inicia tu proyecto hoy
          </h2>
          <p className="text-white">Cuéntanos qué necesitas y te ayudamos con la mejor solución para tu empresa.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer font-bold border-2 border-white group transition-colors rounded-full duration-500 hover:text-white text-sm text-white"
            href="/servicios"
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
              Nuestros Servicios
            </span>
          </a>
          <a
            className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer font-bold border-2 border-white group transition-colors rounded-full duration-500 hover:text-white text-sm text-white"
            href="/contacto"
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
              Contactanos
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
