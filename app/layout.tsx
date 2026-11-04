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

const TITLE = "CriaMood | Presentes personalizados";
const DESC =
  "Canecas, garrafas, camisetas, bottons, chaveiros e muito mais personalizados com a sua arte, foto ou frase. Peça pelo WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL("https://www.criamood.com.br"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://www.criamood.com.br",
    siteName: "CriaMood",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
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
    logo: "https://www.criamood.com.br/logo-criamood.png",
    description:
      "CriaMood cria presentes personalizados: canecas, garrafas, camisetas, bottons, chaveiros e mais. Também é a casa da Doxa, marca de camisetas cristãs de algodão.",
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
