import type { Metadata } from "next";
import { DOXA_STORE_URL, EMAIL, WA_DISPLAY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | CriaMood",
  description: "Saiba como a CriaMood coleta, usa e protege os seus dados pessoais.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Privacidade() {
  return (
    <div className="w sec">
      <div className="ttl"><h1>Política de Privacidade</h1></div>
      <div className="legal">
        <p className="upd">Última atualização: novembro de 2026</p>

        <h2>1. Quem somos</h2>
        <p>
          A CriaMood é uma marca operada por pessoa física, responsável pelo tratamento dos dados coletados
          por este site institucional (www.criamood.com.br), onde também apresentamos a Doxa, nossa marca de
          camisetas cristãs de algodão. Para qualquer assunto de privacidade, fale com a gente pelo e-mail{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo WhatsApp{" "}
          <a href={waLink("Olá! Tenho uma dúvida sobre privacidade.")} target="_blank" rel="noopener noreferrer">{WA_DISPLAY}</a>.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p>
          Este site não tem formulários, cadastro nem carrinho de compras. Os pedidos e orçamentos são feitos
          pelo WhatsApp: ao clicar em um botão de pedido, você é levado ao aplicativo e só envia o que você mesmo
          escrever (por exemplo nome, ideia da arte e fotos). Esses dados chegam diretamente ao nosso WhatsApp.
        </p>
        <p>
          Se você usar o campo de busca do site, o termo digitado aparece no endereço da página para mostrar os
          resultados. Nós não guardamos esses termos em um banco de dados próprio.
        </p>
        <p>
          Também usamos o Vercel Web Analytics, uma ferramenta de estatísticas que não usa cookies e não
          identifica pessoalmente quem visita o site. Ela mostra apenas números agregados, como quantidade de
          visitas e páginas mais acessadas.
        </p>

        <h2>3. Para que usamos esses dados</h2>
        <p>
          Usamos os dados do WhatsApp apenas para responder seu contato, fazer orçamentos e produzir o seu pedido.
          As estatísticas servem para entender, de forma geral, como as pessoas usam o site. Não usamos seus dados
          para enviar e-mails promocionais nem mensagens automáticas de marketing.
        </p>

        <h2>4. Serviços de terceiros</h2>
        <p>Não vendemos seus dados. Para o site funcionar, alguns serviços de terceiros são usados:</p>
        <ul>
          <li>WhatsApp (Meta), para conversar com você;</li>
          <li>Vercel, que hospeda o site e fornece as estatísticas de visitas;</li>
          <li>Google Fonts, de onde carregamos as fontes do site, o que envia o endereço IP do visitante ao Google;</li>
          <li>Google Maps, que abre quando você clica no selo de avaliações;</li>
          <li>Instagram, quando você clica no nosso perfil.</li>
        </ul>
        <p>
          A loja da Doxa fica na plataforma Nuvemshop (
          <a href={DOXA_STORE_URL} target="_blank" rel="noopener noreferrer">criamood.lojavirtualnuvem.com.br</a>
          ). Ela é um ambiente separado, com política de privacidade própria e tratamento de dados de compra,
          pagamento e entrega. Recomendamos consultá-la ao fazer um pedido.
        </p>

        <h2>5. Seus direitos (LGPD)</h2>
        <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
        <ul>
          <li>Confirmar se tratamos algum dado seu;</li>
          <li>Acessar os dados que temos sobre você;</li>
          <li>Corrigir dados incompletos ou desatualizados;</li>
          <li>Solicitar a exclusão dos seus dados;</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <p>Para exercer qualquer um desses direitos, chame a gente no e-mail ou no WhatsApp informados no início desta página.</p>

        <h2>6. Segurança</h2>
        <p>
          Como o site não armazena dados de formulários, o principal cuidado de segurança está no canal de
          contato (WhatsApp), que usa criptografia de ponta a ponta. O site é servido com certificado SSL.
        </p>

        <h2>7. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política de tempos em tempos, para refletir mudanças no site ou na legislação.
          Recomendamos revisitar esta página periodicamente.
        </p>
      </div>
    </div>
  );
}
