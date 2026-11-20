import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Pinyon_Script, Questrial } from "next/font/google";
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
  title: "The Signature Affair | Luxury Event Planner & Event Designer in Georgia",
  description:
    "Luxury event planning and design across Georgia, and classes for aspiring planners ready to turn their passion into a business.",
  icons: { icon: "/images/logo-monogram.png" },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${pinyon.variable} ${questrial.variable}`}>
      <body>{children}</body>
    </html>
  );
}
