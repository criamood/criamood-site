import type { Metadata } from "next";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "CriaClick | Estação de foto lembrança para eventos",
  description: "Estação de foto lembrança para eventos: registramos os momentos, imprimimos na hora, com ou sem moldura, e os convidados levam a foto para casa.",
  alternates: { canonical: "/criaclick" },
};

const steps = [
  { t: "Registramos os momentos", d: "Fazemos as fotos durante todo o evento, com a alegria dos seus convidados." },
  { t: "Imprimimos na hora", d: "As fotos são impressas instantaneamente, sem espera." },
  { t: "Com ou sem moldura", d: "A moldura acompanha o tema do evento, ou a foto sai sem ela, como você preferir." },
  { t: "Expositor para os convidados", d: "As fotos ficam em um expositor, e cada convidado retira a sua durante o evento." },
];

export default function CriaClick() {
  return (
    <div className="w sec">
      <div className="ttl"><h1>CriaClick</h1><p>Estação de foto lembrança para eventos. Momentos que viram lembrança ainda durante a festa.</p></div>
      <p style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto 40px" }}>
        Com a CriaClick, o seu evento ganha uma estação de foto lembrança: registramos os momentos ao longo de toda a celebração,
        imprimimos instantaneamente e deixamos as fotos à disposição dos convidados, para que cada um leve uma recordação para casa.
      </p>
      <ol className="ck-steps">{steps.map((s) => <li key={s.t}><b>{s.t}</b><br />{s.d}</li>)}</ol>
      <div className="cta-box">
        <h2>Pacotes para o seu evento</h2>
        <p>Em breve, os pacotes disponíveis estarão aqui. Enquanto isso, chame no WhatsApp para saber valores e datas.</p>
        <a className="btn pill" href={waLink("Olá! Quero saber sobre a CriaClick para o meu evento.")} target="_blank" rel="noopener noreferrer">Pedir informações</a>
      </div>
    </div>
  );
}
