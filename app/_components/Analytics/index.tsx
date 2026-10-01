"use client";

import Script from "next/script";
import { useEffect } from "react";

// GA4 tem ID padrão; Ads e Pixel só carregam se a variável correspondente estiver definida no Vercel.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-SQ037QXYHX"; // propriedade GA4 "UPTUR"
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID; // AW-XXXXXXX
const ADS_SIGNUP_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL; // rótulo da conversão "Cadastro"
const ADS_WHATSAPP_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL; // rótulo da conversão "WhatsApp"
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const GTAG_ID = GA_ID || ADS_ID;

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

function trackSignupClick(href: string) {
  window.gtag?.("event", "sign_up_click", { link_url: href });
  if (ADS_ID && ADS_SIGNUP_LABEL) {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_SIGNUP_LABEL}` });
  }
  window.fbq?.("track", "Lead");
}

function trackWhatsappClick(href: string) {
  window.gtag?.("event", "whatsapp_click", { link_url: href });
  if (ADS_ID && ADS_WHATSAPP_LABEL) {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_WHATSAPP_LABEL}` });
  }
  window.fbq?.("track", "Contact");
}

function trackDownload(href: string) {
  window.gtag?.("event", "file_download", { link_url: href });
  window.fbq?.("track", "Lead", { content_name: "planilha" });
}

export function Analytics() {
  // Um único listener cobre todos os CTAs da landing, sem precisar mexer em cada botão.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link?.href) return;

      const href = link.href;
      if (href.includes("app.up.tur.br/register")) trackSignupClick(href);
      else if (href.includes("api.whatsapp.com") || href.includes("wa.me")) trackWhatsappClick(href);
      else if (href.includes("/downloads/")) trackDownload(href);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {GTAG_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('set', 'linker', { domains: ['up.tur.br', 'www.up.tur.br', 'app.up.tur.br'] });
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}
      {FB_PIXEL_ID && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
