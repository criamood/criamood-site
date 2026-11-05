import type { Metadata } from "next";
import { DOXA_STORE_URL, waLink } from "@/lib/site";
import DoxaBanners, { type BannerSlide } from "@/components/site/DoxaBanners";

export const metadata: Metadata = {
  title: "Doxa | Camisetas cristãs de algodão",
  description: "Vista a sua fé com estilo. Doxa, a marca de camisetas cristãs de algodão da CriaMood, com coleções autorais.",
  alternates: { canonical: "/doxa" },
  // Ícone próprio da Doxa (montanhas): vale só nesta página.
  icons: { icon: [{ url: "/doxa/favicon.ico" }, { url: "/doxa/icon.png", type: "image/png" }], apple: "/doxa/apple-touch-icon.png" },
};

// Paleta oficial: preto + Sahara Sand (dourado) + Tuna (azul-petróleo). Quando o logo da Doxa ficar pronto,
// coloque o arquivo em /public e use <Image> no lugar do título "Doxa" abaixo.
const links = [
  { label: "Masculino", href: "/masculino/" },
  { label: "Feminino", href: "/feminina/" },
  { label: "Oversized", href: "/masculino/oversized/" },
  { label: "Ver tudo", href: "/produtos/" },
];

// Banners da Doxa (arquivos em /public/doxa). Para trocar a ordem, basta reordenar esta lista.
const banners: BannerSlide[] = [
  {
    src: "/doxa/banner-vista-sua-fe.jpg",
    alt: "Doxa: Vista sua fé. Camisetas exclusivas com até 40% off, com modelos usando camisetas PRAY. e GOD IS GOOD.",
    href: DOXA_STORE_URL + "/produtos/",
  },
  {
    src: "/doxa/banner-pense-ilimitado.jpg",
    alt: "Doxa: Pense ilimitado. Vista a sua fé com estilo! Modelo sorrindo com camiseta branca PRAY. e botão Compre agora.",
    href: DOXA_STORE_URL,
  },
  {
    src: "/doxa/banner-camisetas-oversized.jpg",
    alt: "Doxa: camisetas oversized, fé mais estilo, design exclusivo. Fotos em preto e branco de um homem e de uma mulher de costas.",
    href: DOXA_STORE_URL + "/masculino/oversized/",
  },
];

export default function Doxa() {
  return (
    <div className="dxp">
      <section className="hero">
        <div className="w" style={{ padding: "90px 24px" }}>
          <h1 style={{ font: "700 clamp(56px,10vw,120px)/1.05 var(--font-serif),serif", letterSpacing: "-2px" }}>Doxa</h1>
          <p style={{ fontSize: 22, margin: "14px 0 30px" }}>Vista a sua fé com estilo!</p>
          <a className="btn" href={DOXA_STORE_URL} target="_blank" rel="noopener noreferrer">Ir para a loja</a>
        </div>
      </section>
      <section className="sec"><div className="w">
        <DoxaBanners slides={banners} />
      </div></section>
      <section className="sec"><div className="w">
        <div className="ttl"><h2>Compre por categoria</h2></div>
        <div className="links">
          {links.map((l) => <a key={l.label} href={DOXA_STORE_URL + l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
        </div>
      </div></section>
      <section className="sec"><div className="w lema">
        <p>✓ Frete grátis acima de R$ 189 &nbsp; ✓ Troca em até 7 dias &nbsp; ✓ Pagamento via Pix, cartão ou boleto</p>
      </div></section>
      <section className="sec" style={{ paddingBottom: 70 }}><div className="w lema">
        <div className="ttl"><h2>Design autoral, propósito e cuidado</h2></div>
        <p>Camisetas de algodão premium com coleções exclusivas da Doxa, criadas para você expressar a sua melhor versão. A Doxa é uma marca da CriaMood.</p>
        <p style={{ marginTop: 24 }}><a className="btn" href={waLink("Olá! Tenho uma dúvida sobre a Doxa.")} target="_blank" rel="noopener noreferrer">Falar com a gente</a></p>
      </div></section>
    </div>
  );
}
