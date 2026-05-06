import { ShieldCheck, ArrowUp, Wrench, Headset } from "lucide-react"
const features = [
  {
    id: 1,
    icon: <Wrench className="w-10 h-10" />,
    title: "Soluciones Mecatrónicas",
    description: "Integramos mecánica, electrónica y software para automatizar y optimizar tus líneas de producción."
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Confiabilidad Operativa \n Industrial",
    description: "Implementamos sistemas de control bajo estrictas normativas de seguridad y calidad industrial."
  },
  {
    id: 3,
    icon: <ArrowUp className="w-10 h-10" />,
    title: "Maximiza tu Productividad",
    description: "Minimizamos las paradas de planta mediante mantenimiento preventivo y modernización tecnológica."
  },
  {
    id: 4,
    icon: <Headset className="w-10 h-10" />,
    title: "Soporte Técnico Especializado",
    description: "Atendemos emergencias para garantizar la continuidad de tu operación."
  }
]


export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 mx-4 md:mx-0">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center justify-center md:py-20 gap-4">
            <div className="bg-[#f5f5f4] rounded-full p-4 text-primary border border-dashed">
              {feature.icon}
            </div>
            <h3 className="text-xl text-primary uppercase font-bold text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
