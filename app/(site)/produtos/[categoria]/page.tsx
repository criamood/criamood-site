import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/site/ProductCard";
import { categories, waLink } from "@/lib/site";

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const c = categories.find((x) => x.slug === categoria);
  return c ? { title: `${c.title} personalizados | CriaMood`, description: c.intro, alternates: { canonical: `/produtos/${c.slug}` } } : {};
}

export default async function Categoria({ params }: Props) {
  const { categoria } = await params;
  const c = categories.find((x) => x.slug === categoria);
  if (!c) notFound();
  return (
    <div className="w">
      <div className="crumb"><Link href="/">Início</Link> / <Link href="/produtos">Produtos</Link> / {c.title}</div>
      <section className="sec">
        <div className="ttl"><h1>{c.title}</h1><p>{c.intro}</p></div>
        <div className="grid">{c.products.map((p) => <ProductCard key={p.name} p={p} />)}</div>
        <div className="cta-box"><h2>Não achou o que queria?</h2><p>Conte a sua ideia que a gente vê o que dá para criar.</p>
          <a className="btn pill" href={waLink(`Olá! Vim pela página ${c.title} e quero fazer um orçamento.`)} target="_blank" rel="noopener noreferrer">Pedir orçamento</a></div>
      </section>
    </div>
  );
}
