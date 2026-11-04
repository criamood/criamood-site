import type { Metadata } from "next";
import Image from "next/image";
import { waLink } from "@/lib/site";

const description =
  "Estação de foto lembrança para eventos: registramos os momentos, imprimimos na hora, com ou sem moldura, e os convidados levam a foto para casa. Pacotes de 2h, 3h e 4h.";

export const metadata: Metadata = {
  title: "CriaClick | Estação de foto lembrança para eventos",
  description,
  alternates: { canonical: "/criaclick" },
  // O openGraph da página substitui o da home, por isso repetimos siteName, locale e type.
  openGraph: {
    title: "CriaClick | Estação de foto lembrança para eventos",
    description,
    url: "/criaclick",
    siteName: "CriaMood",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/criaclick/estacao.jpg", width: 1400, height: 868, alt: "Estação CriaClick montada em um evento" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CriaClick | Estação de foto lembrança para eventos",
    description,
    images: ["/criaclick/estacao.jpg"],
  },
};

const steps = [
  { t: "Registramos os momentos", d: "Fazemos as fotos durante todo o evento, com a alegria dos seus convidados." },
  { t: "Imprimimos na hora", d: "As fotos são impressas instantaneamente, sem espera." },
  { t: "Com ou sem moldura", d: "A moldura acompanha o tema do evento, ou a foto sai sem ela, como você preferir." },
  { t: "Expositor para os convidados", d: "As fotos ficam em um expositor, e cada convidado retira a sua durante o evento." },
];

const pacotes = [
  { horas: "2h", texto: "de evento, ideal para encontros e festas mais curtas." },
  { horas: "3h", texto: "de evento, para quem quer mais tempo de fotos e brincadeira." },
  { horas: "4h", texto: "de evento, para a festa inteira registrada do começo ao fim." },
];

// Tamanhos das fotos desenhados em escala (largura em px, proporção altura/largura)
const tamanhos = [
  { rotulo: "7x11 cm", w: 112, prop: 11 / 7 },
  { rotulo: "10x15 cm", w: 160, prop: 15 / 10 },
];

export default function CriaClick() {
  return (
    <>
      {/* Faixa de ponta a ponta com a logo: as letras brancas e o subtítulo azul-escuro não leem no fundo preto do site */}
      <div className="w-full bg-[#41b93d] px-6 py-8">
        <Image
          src="/criaclick/logo-criaclick.png"
          alt="CriaClick, estação foto lembrança: camaleão verde segurando uma câmera"
          width={700}
          height={420}
          priority
          className="mx-auto h-auto w-full max-w-[520px]"
        />
      </div>

      <div className="w sec">
      <div className="ttl">
        <h1>CriaClick</h1>
        <p>Estação de foto lembrança para eventos. Momentos que viram lembrança ainda durante a festa.</p>
      </div>

      <p style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto 40px" }}>
        Com a CriaClick, o seu evento ganha uma estação de foto lembrança: registramos os momentos ao longo de toda a celebração,
        imprimimos instantaneamente e deixamos as fotos à disposição dos convidados, para que cada um leve uma recordação para casa.
      </p>

      <figure className="mx-auto mb-12 max-w-4xl">
        <Image
          src="/criaclick/estacao.jpg"
          alt="Estação CriaClick montada em um evento, com balcão, notebook, impressora e painel com fotos penduradas"
          width={1400}
          height={868}
          className="h-auto w-full rounded-2xl"
        />
        <figcaption className="mt-3 text-center text-sm text-paper-muted">
          A nossa estação montada: o convidado tira a foto e retira a impressão ali mesmo, no painel “Retire aqui sua foto”.
        </figcaption>
      </figure>

      <ol className="ck-steps">
        {steps.map((s) => (
          <li key={s.t}>
            <b>{s.t}</b>
            <br />
            {s.d}
          </li>
        ))}
      </ol>

      <section className="mx-auto mt-16 max-w-4xl">
        <h2 className="font-display mb-2 text-center text-3xl text-brand">Pacotes para o seu evento</h2>
        <p className="mx-auto mb-8 max-w-[60ch] text-center text-paper-muted">
          Escolha a duração que combina com a sua festa. Todos os pacotes têm fotos nos tamanhos 7x11 cm e 10x15 cm.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {pacotes.map((p) => (
            <article key={p.horas} className="rounded-2xl border border-brand/40 bg-ink-soft p-6">
              <b className="font-display block text-6xl leading-none text-brand after:mb-3 after:mt-3 after:block after:h-1.5 after:w-12 after:rounded after:bg-brand-light after:content-['']">
                {p.horas}
              </b>
              <span className="text-paper-muted">{p.texto}</span>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-center gap-10">
          {tamanhos.map((f) => (
            <div
              key={f.rotulo}
              style={{ width: f.w }}
              className="rounded-md bg-paper p-2 pb-5 text-center text-sm font-semibold text-ink"
            >
              <div
                style={{ height: Math.round(f.w * f.prop) - 46 }}
                className="w-full rounded-sm bg-gradient-to-br from-brand-light to-brand-dark"
              />
              <span className="mt-2 block">{f.rotulo}</span>
            </div>
          ))}
          <p className="max-w-[34ch] text-paper-muted">
            Dois tamanhos de foto impressa, com ou sem moldura, para você escolher o que fica melhor na sua festa.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <h2 className="font-display mb-2 text-center text-3xl text-brand">Lembranças para levar para casa</h2>
        <p className="mb-8 text-center text-paper-muted">Além da foto impressa, também fazemos:</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-l-8 border-brand py-1 pl-5">
            <h3 className="font-display mb-1 text-2xl">Chaveiros</h3>
            <p className="text-paper-muted">Para a lembrança do evento ir junto com os convidados no dia a dia.</p>
          </div>
          <div className="border-l-8 border-brand py-1 pl-5">
            <h3 className="font-display mb-1 text-2xl">Ímãs</h3>
            <p className="text-paper-muted">Para a foto ganhar um lugar de destaque na geladeira.</p>
          </div>
        </div>
      </section>

      <div className="cta-box mt-16">
        <h2>Quer saber os valores?</h2>
        <p>Os valores dos pacotes, chaveiros e ímãs são passados pelo WhatsApp. Chame a gente e conte sobre o seu evento e a data.</p>
        <a
          className="btn pill"
          href={waLink("Olá! Quero saber sobre a CriaClick para o meu evento.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar valores no WhatsApp
        </a>
      </div>
      </div>
    </>
  );
}
