import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const products = [
{
name: "Caneca Personalizada",
image: "/images/Canecas2.jpg",
price: "R$ 34,90",
},
{
name: "Caneca com Foto",
image: "/images/Canecas1.jpg",
price: "R$ 34,90",
},
{
name: "Caneca Presente Especial",
image: "/images/Canecas1.jpg",
price: "R$ 34,90",
},
];

export default function CanecasPage() {
return ( <main className="bg-[#f7f8ef] min-h-screen">

```
  <Header />

  {/* HERO */}

  <section className="pt-44 pb-20 px-6">

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <p className="uppercase tracking-[4px] text-[#bfd11a] mb-4">
          Categoria
        </p>

        <h1 className="text-5xl lg:text-6xl font-black mb-6">
          Canecas
          <span className="text-[#bfd11a]"> Personalizadas</span>
        </h1>

        <p className="text-xl text-zinc-600 mb-10">
          Transforme fotos, frases e momentos especiais em presentes únicos.
        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="https://wa.me/5521995515124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#bfd11a] px-8 py-4 rounded-full font-semibold"
          >
            Solicitar orçamento
          </a>

          <a
            href="#produtos"
            className="border px-8 py-4 rounded-full"
          >
            Ver modelos
          </a>

        </div>

      </div>

      <img
        src="/images/Canecas1.jpg"
        alt="Canecas Personalizadas"
        className="rounded-[40px] w-full"
      />

    </div>

  </section>

  {/* BENEFÍCIOS */}

  <section className="py-20 px-6">

    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-3xl">
        <h3 className="font-bold text-xl mb-3">
          Personalização Total
        </h3>
        <p>
          Fotos, nomes, frases e artes exclusivas.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl">
        <h3 className="font-bold text-xl mb-3">
          Presente Memorável
        </h3>
        <p>
          Ideal para aniversários, datas especiais e empresas.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl">
        <h3 className="font-bold text-xl mb-3">
          Produção Artesanal
        </h3>
        <p>
          Feito com carinho e atenção aos detalhes.
        </p>
      </div>

    </div>

  </section>

  {/* PRODUTOS */}

  <section id="produtos" className="py-20 px-6">

    <div className="max-w-7xl mx-auto">

      <h2 className="text-4xl font-black mb-12">
        Modelos Disponíveis
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <div
            key={product.name}
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
                href="https://wa.me/5521995515124"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-3 rounded-full"
              >
                Solicitar
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>

  </section>

  <Footer />
  <WhatsappButton />

</main>

);
}
