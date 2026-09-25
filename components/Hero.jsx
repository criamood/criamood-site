const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

export default function Hero() {
  return (
    <section className="relative bg-ink pt-[140px] md:pt-[150px] pb-20 px-6 overflow-hidden">
      {/* textura de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f4efe6 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div>
          <p className="uppercase tracking-[4px] text-sm text-brand mb-5 font-medium">
            CriaMood
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-paper mb-8">
            FÉ E ESTILO
            <br />
            EM UM ÚNICO
            <br />
            <span className="text-brand">LUGAR.</span>
          </h1>

          <p className="text-lg md:text-xl text-paper-muted max-w-lg mb-10">
            Uma marca que veste sua fé com atitude. Peças autorais que unem
            propósito e streetwear para o seu dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-ink font-semibold px-8 py-4 rounded-full duration-300 text-center"
            >
              Conheça a loja
            </a>

            <a
              href="https://wa.me/5521995515124"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-paper/30 text-paper font-semibold px-8 py-4 rounded-full hover:border-brand hover:text-brand duration-300 text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* PAINEL VISUAL */}
        <div className="relative">
          <div className="border border-white/10 rounded-[32px] p-10 bg-ink-soft">
            <p className="font-display text-3xl md:text-4xl text-paper leading-tight mb-6">
              &ldquo;Reavive o dom de Deus que há em você.&rdquo;
            </p>
            <p className="text-sm uppercase tracking-[3px] text-brand mb-8">
              2 Timóteo 1:6
            </p>
            <div className="h-px bg-white/10 mb-8" />
            <p className="text-paper-muted text-sm leading-relaxed">
              Design autoral inspirado em passagens que marcam. Cada estampa
              carrega uma mensagem — sem perder a estética urbana que você já
              usa no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
