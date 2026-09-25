const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

const destaques = [
  {
    name: "Feminino",
    text: "Camisetas, oversized, baby looks e croppeds.",
    link: `${STORE_URL}/feminina/`,
  },
  {
    name: "Masculino",
    text: "Camisetas, oversized e regatas.",
    link: `${STORE_URL}/masculino/`,
  },
];

const personalizados = [
  {
    name: "Canecas",
    image: "/images/Canecas1.jpg",
    link: `${STORE_URL}/canecas1/`,
  },
  {
    name: "Azulejos",
    image: "/images/azulejo-1.png",
    link: `${STORE_URL}/azulejos1/`,
  },
  {
    name: "MDF",
    image: "/images/quadros.jpg",
    link: `${STORE_URL}/mdf1/`,
  },
  {
    name: "Garrafas",
    image: "/images/squeeze.jpg",
    link: `${STORE_URL}/garrafas1/`,
  },
];

export default function Categories() {
  return (
    <section id="colecao" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[4px] text-sm text-brand mb-3">
            Nossa coleção
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paper">
            O que você encontra na loja
          </h2>
        </div>

        {/* LINHA DE ROUPAS */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {destaques.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-ink-soft border border-white/10 p-10 flex flex-col justify-between min-h-[260px]"
            >
              <h3 className="font-display text-4xl text-paper group-hover:text-brand duration-300">
                {item.name}
              </h3>
              <div>
                <p className="text-paper-muted mb-6">{item.text}</p>
                <span className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 text-sm font-medium text-paper group-hover:bg-brand group-hover:text-ink group-hover:border-brand duration-300">
                  Ver na loja →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* LINHA DE PERSONALIZADOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalizados.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl bg-ink-soft border border-white/10 block"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[220px] object-cover opacity-90 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-medium text-paper">
                  {item.name}
                </h3>
                <span className="text-brand text-sm">Ver na loja →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
