import type { Metadata } from "next";
import { EMAIL, INSTAGRAM_URL, WA_DISPLAY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato | CriaMood",
  description: "Fale com a CriaMood pelo WhatsApp, e-mail ou Instagram e peça o seu orçamento.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <div className="w sec">
      <div className="ttl"><h1>Contato</h1><p>O jeito mais rápido de pedir é pelo WhatsApp.</p></div>
      <div className="faq" style={{ textAlign: "center" }}>
        <p><a className="btn pill" href={waLink("Olá! Quero fazer um orçamento.")} target="_blank" rel="noopener noreferrer">WhatsApp {WA_DISPLAY}</a></p>
        <p style={{ marginTop: 24 }}>E-mail: <a href={`mailto:${EMAIL}`}><b>{EMAIL}</b></a></p>
        <p>Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><b>@cria.mood</b></a></p>
      </div>
    </div>
  );
}
