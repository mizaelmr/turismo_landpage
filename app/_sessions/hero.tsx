"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../_components/Container";
import Mock from "../_mock/mock.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dados dos slides - pode ser movido para o mock.json posteriormente
const slidesData = [
  {
    id: 1,
    backgroundImage: "/imageBackgrond2.jpg",
    badge: "Sistema completo para agências de turismo",
    title: "Seu destino, nosso comando. Sistema de gestão de viagens feito para agências que querem vender mais.",
    subtitle: "Diga adeus às planilhas! Com o UPTUR você gerencia sua agência com facilidade, publica pacotes em um site moderno e vende 24 horas por dia, 7 dias por semana.",
    cta_primary: "Experimente Grátis",
    cta_primary_url: "https://turismo.tecvalle.com.br/register",
    cta_secondary: "Ver Demonstração",
    cta_secondary_url: "#recursos",
    showIcons: true
  },
  {
    id: 2,
    backgroundImage: "/imageBackgrond.jpeg",
    badge: "Tecnologia que impulsiona vendas",
    title: "Venda mais com menos esforço. Automatize processos e foque no que importa.",
    subtitle: "Com reservas online 24/7, mapa de assentos interativo e QR codes para embarque, seus clientes terão uma experiência única.",
    cta_primary: "Começar Agora",
    cta_primary_url: "https://turismo.tecvalle.com.br/register",
    cta_secondary: "Falar com Especialista",
    cta_secondary_url: "https://api.whatsapp.com/send?1=pt_BR&phone=554497013460&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR",
    showIcons: false
  },
  {
    id: 3,
    backgroundImage: "/imageBackgrond2.jpg",
    badge: "Gestão financeira integrada",
    title: "Controle total das suas finanças. Relatórios em tempo real e pagamentos automatizados.",
    subtitle: "Painel financeiro completo com controle de receitas, despesas e relatórios detalhados para tomar as melhores decisões.",
    cta_primary: "Testar Grátis",
    cta_primary_url: "https://turismo.tecvalle.com.br/register",
    cta_secondary: "Ver Planos",
    cta_secondary_url: "#planos",
    showIcons: false
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slidesData[currentSlide];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>

      {/* Header */}
      <header className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-100/50 relative z-20">
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <span className="sr-only">UPTUR</span>
                <div className="flex items-center space-x-3">
                  {/* Logo Icon - Paper Plane + Location Pin */}
                  <div className="relative w-10 h-10">
                    {/* Location Pin Background */}
                    <svg
                      className="w-10 h-10 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {/* Paper Plane Inside */}
                    <svg
                      className="absolute inset-0 w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  {/* Text */}
                  <span className="text-2xl font-bold text-blue-600">
                    UPTUR
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="#home"
              >
                Início
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="#recursos"
              >
                Recursos
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="#depoimentos"
              >
                Depoimentos
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="#planos"
              >
                Planos
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="#faq"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="https://turismo.tecvalle.com.br/login"
              >
                Login
              </a>
              <a
                className="rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 px-6 py-2.5 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                href="https://turismo.tecvalle.com.br/register"
              >
                Começar
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Slider */}
      <div className="relative">
        {/* Slide Content */}
        <div
          className="flex items-center bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${currentSlideData.backgroundImage}')`,
            minHeight: "calc(100vh - 80px)"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {currentSlideData.badge}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                  {currentSlideData.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow">
                  {currentSlideData.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    href={currentSlideData.cta_primary_url}
                  >
                    {currentSlideData.cta_primary}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                  {currentSlideData.cta_secondary && (
                    <a
                      className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transition-all duration-300"
                      href={currentSlideData.cta_secondary_url}
                    >
                      {currentSlideData.cta_secondary}
                    </a>
                  )}
                </div>
              </div>

              {/* Right Content - Travel Icons (only show on first slide) */}
              {currentSlideData.showIcons && (
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-2xl">
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-600 rounded-full opacity-20 animate-pulse delay-1000"></div>

                    {/* Travel Icons Grid */}
                    <div className="grid grid-cols-2 gap-8 relative z-10">
                      {/* Plane */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 opacity-90">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Reservas Online
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Sistema completo de reservas com mapa de assentos
                        </p>
                      </div>

                      {/* Hotel */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 opacity-90">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Gestão de Pacotes
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Crie e gerencie pacotes de viagem facilmente
                        </p>
                      </div>

                      {/* Credit Card */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 opacity-90">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Pagamentos
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Controle financeiro integrado e relatórios
                        </p>
                      </div>

                      {/* QR Code */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 opacity-90">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          QR Code
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Embarque digital com passagens na wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
