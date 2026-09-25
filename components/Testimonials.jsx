const testimonials = [
  {
    id: 1,
    name: "Juliana",
    image: "/testimonials/cliente1.png",
    text: "Chegou perfeito, qualidade absurda.",
  },
  {
    id: 2,
    name: "Fernanda",
    image: "/testimonials/cliente2.png",
    text: "Melhor presente que já dei.",
  },
  {
    id: 3,
    name: "Camila",
    image: "/testimonials/cliente3.png",
    text: "Atendimento impecável e entrega rápida.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-ink-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-brand mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paper">
            Clientes apaixonados
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-ink rounded-[30px] p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-paper">
                    {item.name}
                  </h3>
                  <p className="text-brand">★★★★★</p>
                </div>
              </div>

              <p className="text-paper-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
