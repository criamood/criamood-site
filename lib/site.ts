export const WA_NUMBER = "5521995515124";
export const WA_DISPLAY = "(21) 99551-5124";
export const EMAIL = "contato.criamood@gmail.com";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/CriaMood/data=!4m2!3m1!1s0x0:0xedfd80bfcf9a4003?sa=X&ved=1t%3A2428&ictx=111";
export const INSTAGRAM_URL = "https://www.instagram.com/cria.mood";
export const SITE_URL = "https://www.criamood.com.br";
// Loja da Doxa (Nuvemshop). Quando ela mudar de endereço, é só trocar aqui.
export const DOXA_STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export type Product = { name: string; detail?: string; img?: string };
export type Category = {
  slug: string; title: string; sub: string; intro: string; color: string; products: Product[];
};

// Sem preços de propósito: o valor varia conforme a arte e é combinado no WhatsApp.
// Para usar foto, coloque o arquivo em /public/produtos/ e preencha img: "/produtos/arquivo.jpg"
export const categories: Category[] = [
  { slug: "canecas", title: "Canecas e xícaras", sub: "do clássico ao especial", color: "#f1f8c4",
    intro: "Canecas e xícaras personalizadas com a sua arte, foto ou frase.",
    products: [
      { name: "Caneca de porcelana", detail: "325 ml" },
      { name: "Caneca Imperial", detail: "325 ml · consulte cores" },
      { name: "Caneca mágica", detail: "325 ml" },
      { name: "Caneca mágica com alça de coração", detail: "325 ml" },
      { name: "Caneca com colher", detail: "325 ml" },
      { name: "Caneca com alça e interior colorido", detail: "325 ml" },
      { name: "Caneca coração branca", detail: "325 ml" },
      { name: "Caneca preta com tarja branca", detail: "325 ml" },
      { name: "Caneca interior cromado", detail: "325 ml" },
      { name: "Caneca alça sport", detail: "325 ml" },
      { name: "Caneca glitter", detail: "325 ml" },
      { name: "Caneca perolada", detail: "325 ml" },
      { name: "Caneca base glitter", detail: "325 ml" },
      { name: "Xícara de cerâmica", detail: "180 ml" },
      { name: "Xícara borda bronze", detail: "240 ml" },
      { name: "Xícara de cerâmica com interior colorido", detail: "150 ml" },
      { name: "Xícara mágica com pires", detail: "88 ml" },
      { name: "Torre quarteto de xícaras", detail: "150 ml · suporte incluso" },
      { name: "Pires branco de cerâmica" },
    ] },
  { slug: "garrafas", title: "Garrafas e copos", sub: "térmicos e semitérmicos", color: "#d9f3f0",
    intro: "Garrafas, squeezes e copos térmicos com nome, frase ou arte.",
    products: [
      { name: "Garrafa térmica squeeze", detail: "650 ml · consulte cores" },
      { name: "Garrafa térmica Fresh", detail: "650 ml" },
      { name: "Garrafa squeeze térmica", detail: "900 ml" },
      { name: "Garrafa térmica bicolor", detail: "500 ml" },
      { name: "Copo jarra térmico", detail: "500 ml" },
      { name: "Copo térmico com tampa e abridor", detail: "473 ml" },
      { name: "Garrafa squeeze branca com bico dosador retrátil", detail: "500 ml" },
      { name: "Squeeze tampa bolinha", detail: "600 ml" },
      { name: "Garrafa squeeze branca", detail: "750 ml" },
      { name: "Garrafa de vidro Ecoline", detail: "400 ml" },
    ] },
  { slug: "camisetas", title: "Camisetas e ecobags", sub: "estampa do seu jeito", color: "#ffd9e2",
    intro: "Camisetas de algodão e de poliéster personalizadas, além de ecobags de algodão cru.",
    products: [
      { name: "Camiseta de algodão personalizada", detail: "consulte cores e tamanhos" },
      { name: "Camiseta de poliéster personalizada", detail: "consulte cores e tamanhos" },
      { name: "Ecobag de algodão cru personalizada" },
    ] },
  { slug: "acessorios", title: "Acessórios", sub: "pequenos e muito pedidos", color: "#ffeaa8",
    intro: "Bottons, chaveiros e porta-cartão para lembranças e brindes.",
    products: [
      { name: "Bottons personalizados", detail: "25 mm, 35 mm e 55 mm" },
      { name: "Chaveiro personalizado", detail: "25 mm" },
      { name: "Porta-cartão com photocard", detail: "7 x 11 cm" },
    ] },
  { slug: "casa", title: "Azulejos e quadros", sub: "para decorar", color: "#f6c79a",
    intro: "Azulejos decorativos e quadros em MDF, todos com suporte.",
    products: [
      { name: "Azulejo decorativo", detail: "10 x 10 cm · com suporte" },
      { name: "Quadros em azulejo", detail: "vários tamanhos · com suporte" },
      { name: "Quadro decorativo em MDF", detail: "10 x 10 cm · com suporte" },
      { name: "Quadros em MDF", detail: "vários tamanhos · com suporte" },
    ] },
  { slug: "kids", title: "Linha Kids", sub: "para os pequenos", color: "#c8e6b0",
    intro: "Garrafas e acessórios infantis com o nome da criança.",
    products: [
      { name: "Garrafa térmica Sport Pop", detail: "600 ml" },
      { name: "Garrafa de alumínio Sport Pop", detail: "600 ml" },
      { name: "Copo inox térmico Kawaii", detail: "500 ml" },
      { name: "Garrafa inox térmica Baby Pop", detail: "700 ml" },
      { name: "Toalha lavabo infantil" },
    ] },
  { slug: "kits", title: "Kits especiais", sub: "para presentear", color: "#e6f6c8",
    intro: "Combinações prontas para dar um upgrade no presente.",
    products: [
      { name: "Kit caneca + pote com biscoitos" },
      { name: "Kit garrafa térmica + quadro MDF", detail: "garrafa 650 ml + quadro 15 x 15 cm" },
      { name: "Kit garrafa infantil + toalha lavabo", detail: "garrafa 600 ml" },
      { name: "Lembrancinhas", detail: "peça um modelo sob medida" },
    ] },
  { slug: "corporativo", title: "Linha corporativa", sub: "para empresas", color: "#d9d4c4",
    intro: "Brindes com a marca da sua empresa. Quanto maior o pedido, melhor o valor.",
    products: [
      { name: "Copo térmico inox personalizado", detail: "360 ml" },
      { name: "Agenda personalizada", detail: "380 folhas · 145 x 200 mm" },
      { name: "Mousepad personalizado", detail: "21 x 25 cm" },
      { name: "Bottons personalizados", detail: "valores por quantidade" },
    ] },
];

export const menu = [
  { href: "/produtos/canecas", label: "Canecas" },
  { href: "/produtos/garrafas", label: "Garrafas" },
  { href: "/produtos/camisetas", label: "Camisetas" },
  { href: "/produtos/acessorios", label: "Acessórios" },
  { href: "/produtos/casa", label: "Casa" },
  { href: "/produtos/kids", label: "Kids" },
  { href: "/produtos/kits", label: "Kits" },
  { href: "/produtos/corporativo", label: "Corporativo" },
  { href: "/criaclick", label: "CriaClick" },
  { href: "/doxa", label: "Doxa" },
];

export const faq = [
  { q: "Quanto tempo leva?", a: "O prazo depende do produto e da quantidade. Você recebe a estimativa junto com o orçamento." },
  { q: "Posso aprovar a arte antes?", a: "Sim. Enviamos a prova da arte e só produzimos depois da sua confirmação." },
  { q: "Existe pedido mínimo?", a: "Para pessoa física, não. Alguns itens corporativos têm valores especiais por quantidade." },
  { q: "Como pago?", a: "As formas de pagamento são combinadas no pedido pelo WhatsApp." },
];
