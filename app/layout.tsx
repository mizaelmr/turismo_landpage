import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.up.tur.br";

const title = "Sistema para Excursões e Agências de Turismo | UPTUR";
const description =
  "Venda excursões online 24h com mapa de poltronas, pagamento por Pix e embarque por QR Code. Sistema para agências de turismo rodoviário. Teste grátis por 1 mês.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | UPTUR",
  },
  description,
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
    url: "/",
    siteName: "UPTUR",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
  // Código da meta tag do Google Search Console (só o valor de content="...").
  // Sem a variável definida, a tag não é gerada.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "UPTUR",
      url: siteUrl,
      logo: `${siteUrl}/brand/assinatura-dark.png`,
      sameAs: ["https://www.instagram.com/uptur.br"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-87-98856-7300",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "UPTUR",
      url: siteUrl,
      description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: [
        {
          "@type": "Offer",
          name: "Teste grátis",
          price: "0",
          priceCurrency: "BRL",
          description: "1 mês grátis, sem cartão de crédito",
        },
        {
          "@type": "Offer",
          name: "Plano Profissional",
          price: "197.00",
          priceCurrency: "BRL",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "197.00",
            priceCurrency: "BRL",
            unitCode: "MON",
          },
        },
        {
          "@type": "Offer",
          name: "Plano Pro+ (WhatsApp próprio da agência)",
          price: "247.00",
          priceCurrency: "BRL",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "247.00",
            priceCurrency: "BRL",
            unitCode: "MON",
          },
        },
      ],
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
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}