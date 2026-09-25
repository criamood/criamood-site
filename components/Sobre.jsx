const pilares = [
  {
    title: "Design autoral",
    text: "Estampas próprias, inspiradas em passagens e mensagens de fé, com estética streetwear contemporânea.",
  },
  {
    title: "Algodão premium",
    text: "Peças confeccionadas com fibras nobres, toque macio e alta durabilidade.",
  },
  {
    title: "Fé no detalhe",
    text: "Cada coleção nasce de uma reflexão — moda com propósito, não só estampa.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-ink-soft py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div>
            <p className="uppercase tracking-[4px] text-sm text-brand mb-4">
              Quem somos
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-tight">
              Unimos fé e moda para o dia a dia.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-paper-muted text-lg leading-relaxed">
              A CriaMood nasceu para levar uma mensagem de fé de forma
              discreta e moderna — sem clichês, sem exageros. Criamos peças
              streetwear com estampas autorais que conversam com quem vive a
              fé no dia a dia, dentro e fora da igreja.
            </p>
            <p className="text-paper-muted text-lg leading-relaxed">
              Vista a sua fé com estilo. Essa é a proposta por trás de cada
              peça que desenvolvemos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pilares.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-3xl p-8 bg-ink"
            >
              <h3 className="text-xl font-semibold text-paper mb-3">
                {item.title}
              </h3>
              <p className="text-paper-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
