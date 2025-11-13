import Container from "../Container"

export const Header = () => {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-100/50 relative z-10">
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
            {/* Login and Register for mobile */}
            <div className="flex lg:hidden items-center space-x-6">
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
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                href="/videos"
              >
                Tutoriais
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
    )
}