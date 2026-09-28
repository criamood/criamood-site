import Link from "next/link";
import Image from "next/image";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 text-paper py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* MARCA */}
          <div className="max-w-md">
            <Image
              src="/images/logo-full-white.png"
              alt="CriaMood"
              width={1801}
              height={320}
              className="h-9 w-auto mb-5"
            />
            <p className="text-paper-muted leading-relaxed">
              Fé e estilo em um único lugar. Peças autorais que unem
              propósito e streetwear para o seu dia a dia.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-brand mb-5">
              Navegação
            </h3>
            <div className="flex flex-col gap-3 text-paper-muted">
              <Link href="/#sobre" className="hover:text-brand duration-300">
                Quem Somos
              </Link>
              <Link
                href="/#colecao"
                className="hover:text-brand duration-300"
              >
                Coleção
              </Link>
              <Link href="/contato" className="hover:text-brand duration-300">
                Contato
              </Link>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand duration-300"
              >
                Loja Online
              </a>
            </div>
          </div>

          {/* CONTATO / REDES */}
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-brand mb-5">
              Fale com a gente
            </h3>
            <div className="flex flex-col gap-3 text-paper-muted">
              <a
                href="https://instagram.com/cria.mood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand duration-300"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                @cria.mood
              </a>

              <a
                href="https://wa.me/5521995515124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand duration-300"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                (21) 99551-5124
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-paper-muted/70 flex flex-col sm:flex-row justify-between gap-3">
          <span>
            © CriaMood {new Date().getFullYear()}. Todos os direitos
            reservados.
          </span>
          <Link
            href="/politica-de-privacidade"
            className="hover:text-brand duration-300"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
