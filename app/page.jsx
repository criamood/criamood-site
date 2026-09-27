import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Categories from "../components/Categories";
import BrandCTA from "../components/BrandCTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Categories />
      <BrandCTA />
      <Testimonials />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
