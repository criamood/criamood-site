import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import "./site.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Pinyon+Script&display=swap";

// Layout só das páginas novas (grupo "(site)"). As fontes vêm do Google Fonts por <link>,
// que é mais confiável do que @import dentro do CSS.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONTS} precedence="default" />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
