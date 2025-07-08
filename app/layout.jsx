import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";

import CookieBanner from "@/components/CookieBanner";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hidráulica, Pneumática e assistência técnica | Tecnidraulica",
  description:
    "Serviços de manutenção de equipamentos móveis e industriais na área da óleo-hidráulica e pneumática",
  keywords: [
    "hidráulica",
    "pneumática",
    "automóvel",
    "industrial",
    "naval",
    "mineira",
    "celulose",
    "gestão de resíduos",
    "construção",
    "aeronáutica",
    "alimentar",
    "cilindros",
    "automação",
    "instrumentação",
    "gruas",
    "camiões",
    "plataformas elevatórias",
  ],
  alternates: {
    canonical: "https://tecnidraulica.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
