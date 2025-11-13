'use client'

import Container from "@/_components/Container";
import { useState, useMemo } from "react";
import { Play, X, House } from "@phosphor-icons/react";

const videos = [
  {
    title: "Realizando o cadastro",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=ba663b59-2efc-485f-8c12-207b8c493468",
  },
  {
    title: "Resetar minha senha",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=468565dc-c242-4a73-964f-af56b4a5dd30",
  },
  {
    title: "Conhecendo o painel",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=d979e72a-63f2-47ac-9ecc-69de1e53e8b1",
  },
  {
    title: "Embarque e destino",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=da855788-03c2-4fe7-9982-be329289d1c3",
  },
  {
    title: "Mapa de assentos",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=d5376ca9-4d53-4787-a3a1-278aaec235ee",
  },
  {
    title: "Quarto de hospedagem",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=e3be479a-de9b-4932-961e-6348a1da2dce",
  },
  {
    title: "Pacote de viagem",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=0c8e55d4-a431-4118-9eb2-ee559b7aef48",
  },
  {
    title: "Reserva automática",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=feba5e2a-8e1e-4355-923c-2ec286df19b1",
  },
  {
    title: "Reserva manual",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=17899a16-6f2f-47ad-b934-62733c975f40",
  },
  {
    title: "Gerência de reserva",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=9f45a8b2-352f-44f4-b265-4f4cbeab122f",
  },
  {
    title: "Google Wallet",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=44af19e6-5b4e-4775-9ffa-3bd8cd5cad3c",
  },
  {
    title: "Relatórios",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=a8257c6a-988e-4995-9279-e2dbd48ead0d",
  },
  {
    title: "Rede social",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=313b1978-d6df-4dbd-a7fa-ad4d4fc4d49f",
  },
  {
    title: "Sua logomarca",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=59f8b1a5-db5e-4e33-97f2-f99991470774",
  },
  {
    title: "Slides de promoção",
    url: "https://player-vz-59817ca7-33e.tv.pandavideo.com.br/embed/?v=f69af74f-4ebe-482a-ab47-dfaf482810f7",
  },
];

interface VideoCardProps {
  url: string;
  title: string;
  index: number;
  onPlay: (url: string) => void;
}

function HeaderVideos() {
  return (
    <header className="h-20 bg-white relative z-10 border-b border-gray-200 shadow-sm">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center h-full">
          <h1 className="text-2xl font-bold text-gray-900">Biblioteca de Vídeos</h1>
        </div>
        <a 
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 group"
          aria-label="Voltar para página inicial"
        >
          <House size={20} weight="bold" className="text-gray-700 group-hover:text-blue-600 transition-colors" />
        </a>
      </Container>
    </header>
  )
}

function VideoCard({ url, title, index, onPlay }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group">
      <div
        className="relative pb-[56.25%] h-0 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
        onClick={() => onPlay(url)}
      >
          <img
            src="/imageBackgrond2.jpg"
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 ">
            <Play size={32} weight="fill" className="text-blue-600 ml-1" />
          </div>
        </div>

        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded z-10">
          #{index + 1}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}

interface VideoModalProps {
  url: string | null;
  onClose: () => void;
}

function VideoModal({ url, onClose }: VideoModalProps) {
  if (!url) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
          aria-label="Fechar"
        >
          <X size={24} weight="bold" />
        </button>
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            src={url}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            title="Tutorial Uptur"
          />
        </div>
      </div>
    </div>
  );
}

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos = useMemo(() => {
    const videosWithIndex = videos.map((video, index) => ({ ...video, index }));

    if (!searchQuery.trim()) {
      return videosWithIndex;
    }

    return videosWithIndex.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-blue-50 text-black relative overflow-hidden min-h-screen">
      {/* Header */}
      <HeaderVideos />

      <Container className="py-8">
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Pesquisar tutoriais..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-400 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum vídeo encontrado com sua busca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(({ url, title, index }) => (
              <VideoCard
                key={url}
                url={url}
                title={title}
                index={index}
                onPlay={setSelectedVideo}
              />
            ))}
          </div>
        )}
      </Container>

      <VideoModal
        url={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
