import Image from "next/image";
import { Product, waLink } from "@/lib/site";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <div className="photo">
        {p.img ? <Image src={p.img} alt={p.name} fill sizes="(max-width:860px) 50vw, 240px" style={{ objectFit: "cover" }} /> : "foto em breve"}
      </div>
      <h3>{p.name}</h3>
      <div className="p">{p.detail ?? "Consulte valores"}</div>
      <a className="btn" href={waLink(`Olá! Quero orçar: ${p.name}${p.detail ? ` (${p.detail})` : ""}.`)} target="_blank" rel="noopener noreferrer">Pedir no WhatsApp</a>
    </article>
  );
}
