
const clients = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576446470246-499c738d1c8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Cliente 1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576446470246-499c738d1c8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Cliente 2"
  },
]

export default function ClientsSection() {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10" data-aos="fade-up" data-delay="100">
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.image} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  )
}
