import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEPS Models | Design, Eficiência, Performance, Solução",
  description: "Software house focada em soluções digitais sob medida para negócios. Desenvolvemos sistemas para produtividade, controle e crescimento empresarial.",
  openGraph: {
    title: "DEPS Models | Software House Sob Medida",
    description: "Software house focada em soluções digitais sob medida para negócios. Desenvolvemos sistemas para produtividade, controle e crescimento empresarial.",
    url: "https://depsmodels.com",
    siteName: "DEPS Models",
    images: [
      {
        url: "/logos/logo-icon-3.png",
        width: 800,
        height: 600,
        alt: "DEPS Models - Design, Eficiência, Performance, Solução",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEPS Models | Software House",
    description: "Software house focada em soluções digitais sob medida para negócios.",
    images: ["/logos/logo-icon-3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
