
const clients = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPGmEPL__ZQAD7r_vrQhTgrCJkZf-JbWQ2w&s",
    name: "La P'tite France"
  },
  {
    id: 2,
    image: "https://images.seeklogo.com/logo-png/40/1/supermercados-peruanos-logo-png_seeklogo-400077.png",
    name: "Super Mercados Peruanos S.A."
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i9001OhNPNNlZp7hx8gZOQRGjGBGls5OEg&s",
    name: "La Purita Verdad"
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA09ZNRkJCdaEjYPSmvMu9qWboPbBjbOwouA&s",
    name: "Hotel Melia"
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIRSJ9MSxt-URKR9KcUo34JStzshFLQA8eg&s",
    name: "Las Delicias"
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPAMmBEMxg6-RUfVRweWizYDoU9RFIGbelw&s",
    name: "Tortatti"
  },
  {
    id: 7,
    image: "https://static.wixstatic.com/media/f0108c_f61b71e43c0d472d9776a907659238de~mv2.png/v1/fit/w_270,h_243,q_90,enc_avif,quality_auto/f0108c_f61b71e43c0d472d9776a907659238de~mv2.png",
    name: "Sakao"
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNMi4dUJqAcwKHksUXNW9D4xYP2Tu1WRi3Q&s",
    name: "Romex"
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVo5icBHEYYsbM2U23NFBXGziz7cUMg8Obw&s",
    name: "San Roque"
  }
]

export default function ClientsSection() {
  return (
    <section className=" py-20">
      <style>{`
        @keyframes clients-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: clients-marquee 50s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 80rem;
            margin-inline: auto;
          }
        }
      `}</style>
      <h2 className="text-2xl md:text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Nuestros Clientes
      </h2>
      <div
        className="relative mt-10 overflow-hidden py-4"
        data-aos="fade-up"
        data-aos-delay="100"
        aria-label="Logos de clientes"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent md:w-24"
          aria-hidden
        />
        <div className="clients-marquee-track">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
            >
              <img
                src={client.image}
                alt={client.name}
                title={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {clients.map((client) => (
            <div
              key={`dup-${client.id}`}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
              aria-hidden
            >
              <img
                src={client.image}
                alt=""
                title={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
