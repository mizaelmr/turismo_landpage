import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "UPTUR - Sistema para Excursões e Agências de Turismo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/assinatura-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "rgba(255,255,255,0.45)" }}>SISTEMA PARA EXCURSÕES</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, marginTop: 24, letterSpacing: -2 }}>
            Venda 24h com mapa de poltronas e embarque por QR Code
          </div>
          <div style={{ fontSize: 28, marginTop: 36, color: "rgba(255,255,255,0.55)" }}>
            Teste grátis por 1 mês · www.up.tur.br
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={220} alt="" />
      </div>
    ),
    size
  );
}
