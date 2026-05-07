import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { getServiceByIdParam } from "@/data/service"
import ContactSectionService from "@/components/services/ContactSectionService"

export default function ServiceDetailPage() {

  const { serviceId } = useParams();
  const service = serviceId ? getServiceByIdParam(serviceId) : undefined;
  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Mecatronix Peru`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-10 md:py-20">
        <div className="mx-4 md:mx-0 space-y-5">
          <Link
            to="/servicios"
            className="text-sm font-bold uppercase text-primary hover:underline"
          >
            ← Volver a servicios
          </Link>
          <span className="text-primary text-sm font-bold uppercase block text-center pt-10" data-aos="fade-up" data-aos-delay="100">
            Mecatronix Peru
          </span>
          <h1 className="text-2xl md:text-4xl font-bold uppercase text-primary text-center" data-aos="fade-up" data-aos-delay="200">
            {service.title}
          </h1>
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-h-[420px] object-cover rounded-3xl"
            data-aos="fade-up" data-aos-delay="300"
          />
          <p className="text-lg text-gray-500 leading-relaxed max-w-3xl" data-aos="fade-up" data-aos-delay="400">
            {service.description}
          </p>
          {service.longDescription ? (
            <div className="prose prose-lg max-w-3xl text-gray-600 whitespace-pre-line" data-aos="fade-up" data-aos-delay="500">
              {service.longDescription}
            </div>
          ) : null}
        </div>
      </section>
      <ContactSectionService />
    </main>
  )
}
