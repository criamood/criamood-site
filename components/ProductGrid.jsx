const products = [
  {
    id: 1,
    name: "Caneca Personalizada",
    price: "R$34,90",
    image: "/images/Canecas1.jpg",
  },

  {
    id: 2,
    name: "Azulejo 10x10 Personalizado",
    price: "R$24,90",
    image: "/images/azulejo-1.png",
  },

  {
    id: 3,
    name: "Kit Caneca + Azulejo 10x10 Personalizado",
    price: "R$54,90",
    image: "/images/kit-2.png",
  },

  {
    id: 4,
    name: "Quadro MDF 15x15 Personalizado",
    price: "R$14,90",
    image: "/images/quadros.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section id="mais-vendidos" className="py-24 px-6 bg-[#faf8f6]">

      <div className="max-w-7xl mx-auto">

        <h2
  className="text-4xl font-semibold mb-12"
  style={{ color: "#000000" }}
>
          Mais vendidos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl mb-2">
                  {product.name}
                </h3>

                <p className="text-zinc-500 mb-6">
                  {product.price}
                </p>

                                <a
  href="https://shopee.com.br/criamood"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center bg-black text-white py-3 w-full rounded-full hover:bg-[#bfd11a] hover:text-black duration-300"
>
  Comprar
</a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}