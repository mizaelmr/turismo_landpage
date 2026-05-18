import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutoriais em Vídeo",
  description:
    "Biblioteca completa de vídeos tutoriais para aprender a usar o UPTUR. Cadastro, painel, reservas, relatórios e muito mais — passo a passo.",
  openGraph: {
    title: "Tutoriais em Vídeo | UPTUR",
    description:
      "Aprenda a usar o UPTUR com nossa biblioteca de vídeos passo a passo.",
    url: "https://turismo.tecvalle.com.br/videos",
  },
  alternates: {
    canonical: "https://turismo.tecvalle.com.br/videos",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
