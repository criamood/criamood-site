import type { Metadata } from "next";
import { faq, waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Como pedir | CriaMood", description: "Veja como pedir seu produto personalizado na CriaMood pelo WhatsApp." };

const steps = ["Escolha seus produtos favoritos", "Envie a foto, a frase ou a ideia", "Solicite orçamento e prazo", "Confirme o pedido e aprove a arte"];

export default function ComoPedir() {
  return (
    <div className="w sec">
      <div className="ttl"><h1>Como pedir</h1><p>Seu presente, do seu jeito. Tudo combinado pelo WhatsApp.</p></div>
      <ol className="steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <div className="faq" style={{ marginTop: 50 }}>
        <div className="ttl"><h2>Perguntas frequentes</h2></div>
        {faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
      </div>
      <div className="cta-box"><h2>Vamos criar algo especial?</h2>
        <a className="btn pill" href={waLink("Olá! Quero fazer um orçamento.")} target="_blank" rel="noopener noreferrer">Pedir pelo WhatsApp</a></div>
    </div>
  );
}
