import Link from "next/link";
import Banner from "@/components/site/Banner";
import ProductCard from "@/components/site/ProductCard";
import { categories, faq, waLink } from "@/lib/site";

const cat = (s: string) => categories.find((c) => c.slug === s)!;

export default function Home() {
  const top = [cat("canecas").products[0], cat("garrafas").products[0], cat("acessorios").products[0], cat("camisetas").products[0]];
  return (
    <>
      <Banner />
      <div className="w benef">
        <div>Sua arte, foto ou frase</div><div>Um presente que emociona</div><div>Para casa e empresa</div><div>Pedido pelo WhatsApp</div>
      </div>

      <section className="sec"><div className="w">
        <div className="ttl"><h2>Mais pedidos</h2></div>
        <div className="grid">{top.map((p) => <ProductCard key={p.name} p={p} />)}</div>
      </div></section>

      <section className="sec"><div className="w">
        <div className="ttl"><h2>O que a gente personaliza</h2><p>Escolha uma categoria para ver os modelos.</p></div>
        <div className="cats">
          {categories.map((c) => (
            <Link key={c.slug} href={`/produtos/${c.slug}`} className="cat" style={{ ["--c" as string]: c.color }}>
              <b>{c.title}</b><small>{c.sub}</small>
            </Link>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="w four">
        <div className="big" style={{ background: "#d9d4c4" }}><h3>Corporativo</h3><Link className="btn" href="/produtos/corporativo">Ver itens</Link></div>
        <div className="big" style={{ background: "#e6f6c8" }}><h3>Kits</h3><Link className="btn" href="/produtos/kits">Ver kits</Link></div>
        <div className="big ck"><h3>CriaClick</h3><p>Foto lembrança para eventos</p><Link className="btn" href="/criaclick">Saber mais</Link></div>
        <div className="big dx"><h3>Doxa</h3><p>Camisetas cristãs de algodão</p><Link className="btn" href="/doxa">Conhecer a Doxa</Link></div>
      </div></section>

      <section className="sec"><div className="w faq">
        <div className="ttl"><h2>Perguntas frequentes</h2></div>
        {faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        <div className="cta-box"><h2>Vamos criar algo especial?</h2><p>Conte a sua ideia e receba orçamento e prazo.</p>
          <a className="btn pill" href={waLink("Olá! Quero fazer um orçamento.")} target="_blank" rel="noopener noreferrer">Pedir orçamento</a></div>
      </div></section>
    </>
  );
}
