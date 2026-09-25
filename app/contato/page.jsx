"use client";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarWhatsapp() {
    const texto = `
Olá, CriaMood!

Meu nome é: ${nome}

WhatsApp: ${whatsapp}

Assunto: ${assunto}

Mensagem:
${mensagem}
`;

    const numero = "5521995515124";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <main className="bg-ink min-h-screen">
      <Header />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-sm text-brand mb-4">
            Contato
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-paper mb-6 leading-tight">
            Vamos falar sobre fé e estilo.
          </h1>
          <p className="text-lg text-paper-muted max-w-2xl mx-auto">
            Dúvidas sobre a marca, parcerias ou qualquer outro assunto —
            manda uma mensagem pra gente. Para comprar, visite nossa{" "}
            <a
              href="https://criamood.lojavirtualnuvem.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              loja online
            </a>
            .
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* INFORMAÇÕES */}
          <div className="bg-ink-soft rounded-[40px] p-10 border border-white/10">
            <h2 className="text-2xl font-semibold text-paper mb-10">
              Fale com a CriaMood
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-paper-muted/70 mb-2">WhatsApp</p>
                <p className="text-2xl font-semibold text-paper">
                  (21) 99551-5124
                </p>
              </div>

              <div>
                <p className="text-sm text-paper-muted/70 mb-2">Instagram</p>
                <p className="text-2xl font-semibold text-paper">
                  @cria.mood
                </p>
              </div>

              <div>
                <p className="text-sm text-paper-muted/70 mb-2">
                  Atendimento
                </p>
                <p className="text-xl text-paper-muted">
                  Segunda à Sexta
                  <br />
                  08h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="bg-ink-soft rounded-[40px] p-10 border border-white/10">
            <h2 className="text-2xl font-semibold text-paper mb-10">
              Envie sua mensagem
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-2xl px-6 py-4 text-paper placeholder:text-paper-muted/50 outline-none focus:border-brand"
              />

              <input
                type="text"
                placeholder="Seu WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-2xl px-6 py-4 text-paper placeholder:text-paper-muted/50 outline-none focus:border-brand"
              />

              <input
                type="text"
                placeholder="Assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-2xl px-6 py-4 text-paper placeholder:text-paper-muted/50 outline-none focus:border-brand"
              />

              <textarea
                placeholder="Escreva sua mensagem"
                rows="6"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-2xl px-6 py-4 text-paper placeholder:text-paper-muted/50 outline-none focus:border-brand"
              />

              <button
                onClick={enviarWhatsapp}
                className="bg-brand hover:bg-brand-dark duration-300 text-ink font-semibold px-8 py-4 rounded-full"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
