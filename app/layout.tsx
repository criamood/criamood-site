import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
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
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="font-sans bg-[#0c0b0a] text-[#f4efe6]">
        {children}
      </body>
    </html>
  );
}
