import type { Metadata } from "next";
import ProductCard from "@/components/site/ProductCard";
import { categories } from "@/lib/site";

export const metadata: Metadata = { title: "Produtos personalizados | CriaMood", description: "Veja todos os produtos que a CriaMood personaliza." };

export default async function Produtos({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const term = q.trim().toLowerCase();
  const list = categories.flatMap((c) => c.products.map((p) => ({ ...p, cat: c.title })))
    .filter((p) => !term || `${p.name} ${p.detail ?? ""} ${p.cat}`.toLowerCase().includes(term));
  return (
    <div className="w sec">
      <div className="ttl"><h1>{term ? `Resultados para “${q}”` : "Todos os produtos"}</h1></div>
      {list.length === 0
        ? <p style={{ textAlign: "center" }}>Não encontramos esse item, mas talvez a gente faça. Chame no WhatsApp e pergunte.</p>
        : <div className="grid">{list.map((p) => <ProductCard key={p.cat + p.name} p={p} />)}</div>}
    </div>
  );
}
