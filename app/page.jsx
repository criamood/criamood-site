import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

export const metadata = {
  title: "Política de Privacidade | CriaMood",
  description:
    "Saiba como a CriaMood coleta, usa e protege os seus dados pessoais.",
};

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <>
        A CriaMood é uma marca operada por pessoa física, responsável pelo
        tratamento dos dados coletados através deste site institucional
        (www.criamood.com.br). Para qualquer assunto relacionado à sua
        privacidade, você pode falar com a gente pelo e-mail{" "}
        <a
          href="mailto:contato.criamood@gmail.com"
          className="text-brand hover:underline"
        >
          contato.criamood@gmail.com
        </a>{" "}
        ou pelo WhatsApp{" "}
        <a
          href="https://wa.me/5521995515124"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          (21) 99551-5124
        </a>
        .
      </>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        Quando você usa o formulário da nossa página de{" "}
        <span className="text-paper">Contato</span>, coletamos os dados que
        você mesmo digita: nome, número de WhatsApp, assunto e mensagem.
        Esses dados são usados apenas para gerar a mensagem que é enviada
        para o nosso WhatsApp — não ficam armazenados em nenhum banco de
        dados nosso.
        <br />
        <br />
        Também usamos o{" "}
        <span className="text-paper">Vercel Web Analytics</span>, uma
        ferramenta de estatísticas de visitas que não usa cookies e não
        identifica pessoalmente quem visita o site. Ela nos mostra apenas
        números agregados, como quantidade de visitas e páginas mais
        acessadas.
      </>
    ),
  },
  {
    title: "3. Para que usamos esses dados",
    body: (
      <>
        Usamos os dados exclusivamente para responder seu contato e
        entender, de forma geral, como as pessoas usam o site — por
        exemplo, quais páginas são mais visitadas. Não usamos seus dados
        para enviar e-mails promocionais ou mensagens automáticas de
        marketing.
      </>
    ),
  },
  {
    title: "4. Compartilhamento com terceiros",
    body: (
      <>
        Não vendemos nem compartilhamos seus dados com terceiros para fins
        comerciais. Este site tem links para a nossa loja online, hospedada
        na plataforma Nuvemshop (
        <a
          href="https://criamood.lojavirtualnuvem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          criamood.lojavirtualnuvem.com.br
        </a>
        ). A loja é um ambiente separado, com sua própria política de
        privacidade e tratamento de dados de compra, pagamento e entrega —
        recomendamos consultá-la ao fazer um pedido.
      </>
    ),
  },
  {
    title: "5. Seus direitos (LGPD)",
    body: (
      <>
        De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
        você tem direito a:
        <ul className="list-disc list-inside mt-4 space-y-2 text-paper-muted">
          <li>Confirmar se tratamos algum dado seu;</li>
          <li>Acessar os dados que temos sobre você;</li>
          <li>Corrigir dados incompletos ou desatualizados;</li>
          <li>Solicitar a exclusão dos seus dados;</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <br />
        Para exercer qualquer um desses direitos, é só chamar a gente no
        e-mail ou WhatsApp informados no início desta página.
      </>
    ),
  },
  {
    title: "6. Segurança",
    body: (
      <>
        Como não armazenamos os dados do formulário em nenhum banco de
        dados próprio, o principal cuidado de segurança é com o próprio
        canal de envio (WhatsApp), que já conta com criptografia de ponta a
        ponta.
      </>
    ),
  },
  {
    title: "7. Alterações nesta política",
    body: (
      <>
        Podemos atualizar esta política de tempos em tempos, para refletir
        mudanças no site ou na legislação. Recomendamos revisitar esta
        página periodicamente.
      </>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-ink min-h-screen">
      <Header />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-sm text-brand mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-paper mb-6 leading-tight">
            Política de Privacidade
          </h1>
          <p className="text-paper-muted">
            Última atualização: setembro de 2026
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-paper mb-4">
                {section.title}
              </h2>
              <p className="text-paper-muted leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
