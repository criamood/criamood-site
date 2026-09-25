
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

export default function KitsPage() {
  return (
    <main className="bg-[#f7f8ef] min-h-screen">

      <Header />

      <section className="pt-44 pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-black mb-4">
            Kits Personalizados
          </h1>

          <p className="text-zinc-600 text-lg mb-12">
            Crie presentes únicos com fotos, frases e artes exclusivas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="/images/kit-2.png"
                alt="Kits Personalizados"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl mb-2">
                  Kits Personalizados
                </h3>

                <p className="text-zinc-500 mb-6">
                  R$ 54,90
                </p>

                <a
                  href="https://wa.me/5521995515124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#bfd11a] py-3 rounded-full font-semibold"
                >
                  Solicitar orçamento
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
      <WhatsappButton />

    </main>
  );
}
