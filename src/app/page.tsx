import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Paths } from "@/components/sections/Paths";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Academy } from "@/components/sections/Academy";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { SignatureStatement } from "@/components/sections/SignatureStatement";
import { Inquire } from "@/components/sections/Inquire";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Paths />
      <Services />
      <Portfolio />
      <Academy />
      <About />
      <SignatureStatement />
      <Testimonials />
      <Inquire />
    </SiteShell>
  );
}
