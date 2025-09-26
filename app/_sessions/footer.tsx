import Image from "next/image";
import logo from "/public/logo_pilot.png";
import instagram from "/public/instagram-logo.svg";
import whatsapp from "/public/whatsapp-logo.png";
import facebook from "/public/facebook-logo.svg";
import linkedin from "/public/linkedin-logo.svg";
import xLogo from "/public/x-logo.svg";
import Container from "../_components/Container";
import Mock from "../_mock/mock.json";
import { WhatsAppSession } from "./whatsAppSession";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <a href="/" className="flex items-center">
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
                <span className="text-2xl font-bold text-blue-600">UPTUR</span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center lg:justify-center mb-6 lg:mb-0">
            <div className="px-4 py-2">
              <a
                className="text-gray-300 hover:text-white transition-colors duration-200"
                href="#home"
              >
                Início
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                className="text-gray-300 hover:text-white transition-colors duration-200"
                href="#recursos"
              >
                Recursos
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                className="text-gray-300 hover:text-white transition-colors duration-200"
                href="#depoimentos"
              >
                Depoimentos
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                className="text-gray-300 hover:text-white transition-colors duration-200"
                href="#planos"
              >
                Planos
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                className="text-gray-300 hover:text-white transition-colors duration-200"
                href="#faq"
              >
                FAQ
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 transition-colors duration-300"
              href="https://turismo.tecvalle.com.br/register"
            >
              Começar agora
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8 border-t border-gray-800">
          {/* Copyright */}
          <p className="text-center lg:text-left text-sm text-gray-400 mb-6 lg:mb-0">
            ©2025 up.tur.br
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/uptur.br"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-gray-500 transition-colors duration-200"
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain filter invert"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=554497013460&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-gray-500 transition-colors duration-200"
              >
                <Image
                  src={whatsapp}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain filter invert"
                />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              href="/privacy-policy"
            >
              Política de Privacidade
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              href="/terms-service"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
