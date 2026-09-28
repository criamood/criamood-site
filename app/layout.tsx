import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "CriaMood | Fé e Estilo em um Único Lugar",
  description:
    "CriaMood é uma marca que une fé e streetwear. Conheça nossa história e visite nossa loja online.",
  metadataBase: new URL("https://www.criamood.com.br"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CriaMood | Fé e Estilo em um Único Lugar",
    description:
      "CriaMood é uma marca que une fé e streetwear. Conheça nossa história e visite nossa loja online.",
    url: "https://www.criamood.com.br",
    siteName: "CriaMood",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CriaMood",
    url: "https://www.criamood.com.br",
    logo: "https://www.criamood.com.br/images/logo-full-white.png",
    description:
      "CriaMood é uma marca que une fé e streetwear. Camisetas e itens personalizados com design autoral.",
    sameAs: [
      "https://www.instagram.com/cria.mood",
      "https://criamood.lojavirtualnuvem.com.br",
      "https://www.google.com/maps/place/CriaMood/data=!4m2!3m1!1s0x0:0xedfd80bfcf9a4003?sa=X&ved=1t:2428&ictx=111",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-21-99551-5124",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="font-sans bg-[#0c0b0a] text-[#f4efe6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
