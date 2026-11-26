import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

/** Header, footer and mobile CTA bar shared by every page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-signature">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
