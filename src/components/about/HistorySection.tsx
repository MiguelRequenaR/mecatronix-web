
export default function HistorySection() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-5 mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="100">
          <img src="https://images.unsplash.com/photo-1596496050825-984928b95d74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="historia" className="w-full h-[300px] object-cover rounded-3xl" />
          <h2 className="text-lg md:text-2xl font-bold uppercase text-primary md:mx-4 mx-0">
            ¿Quienes Somos?
          </h2>
          <p className="text-gray-600 md:mx-4 mx-0 text-justify text-sm md:text-base">
            Somos una empresa de servicios que brinda soluciones integrales de servicio de mantenimiento preventivo, predictivo y correctivo, instalación de equipos de panificación, pastelería, gastronomía e industria en general.
            <br /> <br />
            Brindamos asesoramiento técnico, desarrollo e implementación de proyectos de automatización y mecatrónica industrial. Contamos con personal especializado y en constante capacitación con más de 15 años de experiencia en el rubro.
          </p>
        </div>
        <div className="space-y-7" data-aos="fade-up" data-aos-delay="200">
          <div className="space-y-3 mx-4 md:mx-0">
            <span className="text-primary text-sm font-bold uppercase md:mx-4 mx-0">Servicio Técnico</span>
            <h2 className="text-lg md:text-2xl font-bold uppercase text-primary md:mx-4 mx-0">
              Somos Mecatronix Peru
            </h2>
            <p className="text-gray-600 text-justify md:mx-4 mx-0 text-sm md:text-base">
              Servicio especializado en el mantenimiento y reparación de equipos industriales, garantizando la eficiencia y continuidad operativa de sus instalaciones.
            </p>
            <img src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="servicio tecnico" className="w-full h-[300px] object-cover rounded-3xl" />
          </div>
          <div className="space-y-3">
            <h2 className="text-lg md:text-2xl font-bold uppercase text-primary mx-4">Misión</h2>
            <p className="text-gray-600 text-justify mx-4 text-sm md:text-base">
              Nuestra misión es potenciar la productividad y eficiencia de nuestros clientes, brindando soluciones integrales de mantenimiento preventivo,predictivo,correctivo y automatización de vanguardia, garantizando la continuidad operativa, la seguridad y la innovación tecnológica en cada proyecto o servicio a través de la automatización inteligente, el análisis critico y el mantenimiento especializado, cubriendo asi las
              expectativas de nuestros clientes aplicando siempre la mejoracontinua.
            </p>
            <h2 className="text-lg md:text-2xl font-bold uppercase text-primary mx-4 pt-4">Visión</h2>
            <p className="text-gray-600 text-justify mx-4 text-sm md:text-base">
              Consolidar el liderazgo de Mecatronix Peru, como un aliado estratégico tanto para la industria alimentaria como para los diferentes sectores del rubro industrial. Logrando reconocimiento a nivel nacional e internacional, con recurso tecnológicos y técnicos de primer nivel para cubrir las necesidades de nuestros clientes. Basándonos en nuestros valores empresariales y éticos. Demostrando confiabilidad y eficiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
