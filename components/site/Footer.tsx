import Image from "next/image";
import Link from "next/link";
import { EMAIL, GOOGLE_REVIEWS_URL, INSTAGRAM_URL, WA_DISPLAY, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="w">
        <div>
          <Image src="/logo-criamood.png" alt="CriaMood" width={112} height={96} />
          <p>Presentes personalizados que emocionam.</p>
        </div>
        <div>
          <h3>Central de atendimento</h3>
          <p><a href={waLink("Olá! Vim pelo site da CriaMood.")} target="_blank" rel="noopener noreferrer">WhatsApp: {WA_DISPLAY}</a></p>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram: @cria.mood</a></p>
        </div>
        <div>
          <h3>Navegue</h3>
          <p><Link href="/produtos">Produtos</Link></p>
          <p><Link href="/como-pedir">Como pedir</Link></p>
          <p><Link href="/contato">Contato</Link></p>
          <p><Link href="/criaclick">CriaClick</Link></p>
          <p><Link href="/doxa">Doxa</Link></p>
          <p><Link href="/politica-de-privacidade">Política de privacidade</Link></p>
        </div>
      </div>
      <div className="pay"><div className="w">
        <span>Pagamento: Pix, cartão e boleto, combinados no pedido</span>
        <span className="seals">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label="Avaliações da CriaMood no Google">
            <Image src="/badges/selo-google-5-estrelas.png" alt="Avaliação 5 estrelas no Google" width={180} height={33} />
          </a>
          <Image src="/badges/selo-ssl.png" alt="Site seguro, certificado SSL" width={110} height={53} />
        </span>
      </div></div>
      <div className="bottom">CriaMood | Presentes personalizados. Valores sujeitos a alteração conforme a arte.</div>
    </footer>
  );
}
