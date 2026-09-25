const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

export default function BrandCTA() {
  return (
    <section className="px-6 py-6">
      <div className="max-w-7xl mx-auto bg-brand rounded-[40px] px-8 md:px-16 py-16 text-center">
        <p className="uppercase tracking-[4px] text-sm text-ink/70 mb-4 font-medium">
          Loja online
        </p>

        <h2 className="font-display text-4xl md:text-6xl text-ink mb-8 leading-tight">
          Vista a sua fé com estilo.
        </h2>

        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ink text-paper font-semibold px-10 py-5 rounded-full hover:bg-ink-soft duration-300"
        >
          Acessar a loja CriaMood
        </a>
      </div>
    </section>
  );
}
