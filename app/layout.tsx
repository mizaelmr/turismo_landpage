import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://turismo.tecvalle.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UPTUR - Sistema de Gestão para Agências de Turismo",
    template: "%s | UPTUR",
  },
  description:
    "Sistema completo de gestão de viagens para agências. Gerencie pacotes, reservas e vendas em um único sistema. Experimente grátis por 1 mês!",
  keywords: [
    "sistema gestão agência turismo",
    "software para agência de turismo",
    "gestão de reservas viagem",
    "controle de pacotes turísticos",
    "sistema de embarque QRcode",
    "relatórios financeiros turismo",
    "UPTUR",
  ],
  authors: [{ name: "UPTUR" }],
  creator: "UPTUR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "UPTUR",
    title: "UPTUR - Sistema de Gestão para Agências de Turismo",
    description:
      "Gerencie pacotes, reservas e vendas em um único sistema. Experimente grátis por 1 mês!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UPTUR - Sistema de Gestão para Agências de Turismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPTUR - Sistema de Gestão para Agências de Turismo",
    description:
      "Gerencie pacotes, reservas e vendas em um único sistema. Experimente grátis por 1 mês!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UPTUR",
  url: siteUrl,
  description:
    "Sistema completo de gestão de viagens para agências de turismo. Gerencie pacotes, reservas, embarque por QRcode e relatórios financeiros.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Plano Gratuito",
      price: "0",
      priceCurrency: "BRL",
      description: "Grátis por 1 mês",
    },
    {
      "@type": "Offer",
      name: "Plano Profissional",
      price: "197",
      priceCurrency: "BRL",
      billingIncrement: "1",
    },
    {
      "@type": "Offer",
      name: "Plano Profissional + WhatsApp Próprio",
      price: "247",
      priceCurrency: "BRL",
      billingIncrement: "1",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}