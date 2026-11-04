import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL, menu, waLink } from "@/lib/site";

export default function Header() {
  return (
    <>
      <div className="util"><div className="w">
        <Link href="/como-pedir">Como pedir</Link>
        <Link href="/contato">Contato</Link>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div></div>
      <header className="hd">
        <div className="w bar">
          <Link className="logo" href="/" aria-label="CriaMood, página inicial">
            <Image src="/logo-criamood.png" alt="CriaMood" width={75} height={64} priority />
          </Link>
          <form className="search" action="/produtos" role="search">
            <input type="search" name="q" placeholder="Olá, o que você procura?" aria-label="Buscar produto" />
            <button type="submit">Buscar</button>
          </form>
          <a className="talk" href={waLink("Olá! Quero fazer um orçamento.")} target="_blank" rel="noopener noreferrer">Fale conosco</a>
        </div>
        <nav className="nav" aria-label="Categorias"><div className="w">
          {menu.map((m) => <Link key={m.href} href={m.href}>{m.label}</Link>)}
        </div></nav>
      </header>
    </>
  );
}
