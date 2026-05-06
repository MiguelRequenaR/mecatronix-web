
export default function HistorySection() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-5 mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="100">
          <img src="https://images.unsplash.com/photo-1596496050825-984928b95d74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="historia" className="w-full h-[300px] object-cover rounded-3xl" />
          <h2 className="text-2xl font-bold uppercase text-primary md:mx-4 mx-0">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 md:mx-4 mx-0 text-justify">
            Nuestra organización, con más de 10 años en el mercado, se especializa en brindar soluciones integrales de mantenimiento industrial, automatización y mecatrónica para empresas de diversos sectores productivos.
            <br /> <br />
            Contamos con un equipo técnico altamente calificado y en constante capacitación, expertos en el diagnóstico, mantenimiento y optimización de sistemas industriales automatizados, maquinaria, líneas de producción y procesos mecatrónicos.
          </p>
        </div>
        <div className="space-y-7" data-aos="fade-up" data-aos-delay="200">
          <div className="space-y-3 mx-4 md:mx-0">
            <span className="text-primary text-sm font-bold uppercase md:mx-4 mx-0">Servicio Técnico</span>
            <h2 className="text-2xl font-bold uppercase text-primary md:mx-4 mx-0">
              Somos Mecatronix Peru
            </h2>
            <p className="text-gray-600 text-justify md:mx-4 mx-0">
              Servicio especializado en el mantenimiento y reparación de equipos industriales, garantizando la eficiencia y continuidad operativa de sus instalaciones.
            </p>
            <img src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="servicio tecnico" className="w-full h-[300px] object-cover rounded-3xl" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold uppercase text-primary mx-4">Misión</h2>
            <p className="text-gray-600 text-justify mx-4">
              Brindar soluciones integrales de mantenimiento industrial, automatización y mecatrónica para empresas de diversos sectores productivos, garantizando la eficiencia y continuidad operativa de sus instalaciones.
            </p>
            <h2 className="text-2xl font-bold uppercase text-primary mx-4">Visión</h2>
            <p className="text-gray-600 text-justify mx-4">
              Ser líder en el mercado peruano de soluciones integrales de mantenimiento industrial, automatización y mecatrónica, posicionando a Mecatronix como un aliado estratégico para el crecimiento y desarrollo de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
