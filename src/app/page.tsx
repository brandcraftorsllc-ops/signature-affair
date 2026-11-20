import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Hero } from "@/components/sections/Hero";
import { Paths } from "@/components/sections/Paths";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Academy } from "@/components/sections/Academy";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Inquire } from "@/components/sections/Inquire";

export default function HomePage() {
  return (
    <div className="bg-signature">
      <Header />
      <main>
        <Hero />
        <Paths />
        <Services />
        <Portfolio />
        <Academy />
        <About />
        <Testimonials />
        <Inquire />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
