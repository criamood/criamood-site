import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

export default function NotFound() {
  return (
    <main className="bg-ink min-h-screen">
      <Header />

      <section className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="uppercase tracking-[4px] text-sm text-brand mb-6">
            Erro 404
          </p>

          <h1 className="font-display text-6xl md:text-8xl text-paper mb-8 leading-none">
            PERDIDO
            <br />
            <span className="text-brand">NO CAMINHO.</span>
          </h1>

          <p className="text-lg text-paper-muted mb-12">
            A página que você procura não existe ou foi movida. Mas a
            jornada não precisa parar por aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-brand hover:bg-brand-dark text-ink font-semibold px-8 py-4 rounded-full duration-300"
            >
              Voltar para o início
            </Link>

            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-paper/30 text-paper font-semibold px-8 py-4 rounded-full hover:border-brand hover:text-brand duration-300"
            >
              Ir para a loja
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
