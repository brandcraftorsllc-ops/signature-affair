import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Pinyon_Script, Questrial } from "next/font/google";
import { IMG, SITE_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "The Signature Affair | Luxury Event Planner & Event Designer in Georgia",
    description:
      "Luxury event planning and design across Georgia, and classes for aspiring planners ready to turn their passion into a business.",
    path: "/",
    image: IMG.hero,
    imageAlt: "Candlelit ballroom framed by a gold mirrored arch, designed by The Signature Affair",
  }),
  icons: { icon: "/images/logo-monogram.png" },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodoni.variable} ${pinyon.variable} ${questrial.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
