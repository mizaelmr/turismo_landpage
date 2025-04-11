import logo from "../../public/logo-AQ2YPMYN.svg";
import heromockup from "../../public/hero-mockup-app-organizze-F7HBQCLE.webp";
import arrowright from "../../public/arrow-right-R7RZTDAN.svg";
import Image from "next/image";
import ButtonComponent from "../components/button";
import Container from "@/components/Container";
import Mock from "@/mock/mock.json";

export function Hero() {
  return (
    <section className="bg-[#edfdf2] text-black relative overflow-hidden">
      <header className="h-28 flex-none padding-x-all-sections bg-[#EDFDF2]">
        <div className="relative">
          <Container flexCol={true}>            
            <div className="flex absolute bottom-0 lg:relative lg:top-0 lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Organizze</span>
                <Image
                  src={logo}
                  alt="Logo Organizze"
                  width={188}
                  height={40}
                  className="object-contain"
                  // className="flex h-8 w-auto sm:h-10 lg:h-auto"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <ButtonComponent id="open-top-navigation-mobile">
                <span className="sr-only">Abrir Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </ButtonComponent>
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-10">
              <a
                className="font-normal relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
                href="/quem-somos"
              >
                Quem somos
              </a>
              <a
                className="font-normal relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
                href="./#recursos"
              >
                Recursos
              </a>
              <a
                className="font-normal relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
                href="/planos"
              >
                Planos e preços
              </a>
              {/* 
            <!--<a
              className="font-semibold relative z-10 text-[#000000] before:absolute before:h-0.5 before:-bottom-0.5 before:right-[6px] before:w-[43%] before:content  before:bg-[#17c64f] hover:before:w-full hover:before:right-0 hover:before:bg-[#a500fa] before:transition-all"
              href="/black-friday" target="_blank"
              >black friday</a
            > -->
             */}
              <a
                target="_blank"
                href="https://www.organizze.com.br/blog/"
                rel="noopener noreferrer"
                className="font-normal relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
              >
                Blog
              </a>
            </nav>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                className="relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
                href="https://auth.organizze.com.br/login"
              >
                Login
              </a>
              <a
                className="rounded-lg text-base tracking-tig transition-colors font-normal ease-in-out duration-300 select-none inline-flex min-w-fit items-center ml-8 z-20 text-[#FBF7EA] font-semibold py-3 px-6 bg-[#129E3F] hover:bg-[#006A33]"
                href="https://auth.organizze.com.br/cadastro"
              >
                Comece já!
              </a>
            </div>

          </Container>
        </div>
      </header>

      {/* <div className="container mx-auto py-16 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Controle financeiro pessoal com toda a praticidade que a planilha
              não te oferece
            </h1>
            <p className="lg:text-lg">texto texto texto</p>
            <a
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              contato via whatsapp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                texto texto texto
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full">
            <Image src={image1} alt="imagem 1" className="object-contain" />
          </div>
        </article>
      </div> */}

      <section className="w-full px-[1rem] sm:px-[2rem] lg:pr-0 xl:px-0 overflow-hidden bg-[#EDFDF2]">
        <div className="max-w-[1224px] h-full flex items-center relative mx-auto md:items-start lg:flex-row lg:justify-between lg:m-auto">
          <div className="sm:rounded-2xl h-full w-full lg:w-auto">
            <div className="relative flex flex-col items-center pt-0 py-8 sm:py-12 lg:py-16 lg:items-start">
              <h1 className="max-w-[590px] text-base-text text-3xl font-semibold md:leading-[64px] text-center tracking-tight sm:text-5xl lg:max-w-[460px] lg:text-5xl lg:text-left lg:m-0 xl:max-w-[550px] xl:text-6xl">
                {Mock.hero.title}
              </h1>
              <p className="mt-6 mb-8 max-w-[400px] text-base font-normal text-center font-light text-[#454843] lg:text-left lg:mx-0 lg:max-w-[520px]">
                {Mock.hero.subtitle}
              </p>
              <a
                className="rounded-lg text-base tracking-tig transition-colors ease-in-out duration-300 select-none inline-flex justify-center items-center drop-shadow-green-button-drop-shadow font-normal text-white font-semibold py-2 pl-6 pr-2 bg-[#129E3F] hover:bg-[#006A33]"
                href="https://auth.organizze.com.br/cadastro"
              >
                {Mock.hero.cta_primary}
                <div className="ml-4 bg-[#0D772F] rounded-md w-10 h-10 inline-flex justify-center items-center">
                  <Image
                    src={arrowright}
                    alt="icon button"
                    className="text-[#FBF7EA] w-6 h-6"
                    height={6}
                    width={6}
                  />
                </div>
              </a>
              <div className="mt-9 flex flex-col justify-start xl:space-x-4 xl:flex-row">
                <div className="flex items-center w-64 lg:w-72 h-20">
                  <svg
                    width="70"
                    height="52"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="42" height="42" rx="12" fill="#DFFCE9"></rect>
                    <g clipPath="url(#clip0_3202_51666)">
                      <path
                        d="M27 17H26V15C26 12.24 23.76 10 21 10C18.24 10 16 12.24 16 15V17H15C13.9 17 13 17.9 13 19V29C13 30.1 13.9 31 15 31H27C28.1 31 29 30.1 29 29V19C29 17.9 28.1 17 27 17ZM18 15C18 13.34 19.34 12 21 12C22.66 12 24 13.34 24 15V17H18V15ZM27 29H15V19H27V29ZM21 26C22.1 26 23 25.1 23 24C23 22.9 22.1 22 21 22C19.9 22 19 22.9 19 24C19 25.1 19.9 26 21 26Z"
                        fill="#0D772F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3202_51666">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(9 9)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="ml-5 font-light font-normal text-[#454843]">
                    Segurança dos seus dados em primeiro lugar
                  </p>
                </div>
                <div className="flex items-center w-64 lg:w-72 h-20">
                  <svg
                    width="70"
                    height="52"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="42" height="42" rx="12" fill="#DFFCE9"></rect>
                    <g clipPath="url(#clip0_3202_51658)">
                      <path
                        d="M13 15H31V13H13C11.9 13 11 13.9 11 15V26H9V29H23V26H13V15ZM32 17H26C25.45 17 25 17.45 25 18V28C25 28.55 25.45 29 26 29H32C32.55 29 33 28.55 33 28V18C33 17.45 32.55 17 32 17ZM31 26H27V19H31V26Z"
                        fill="#0D772F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3202_51658">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(9 9)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="ml-5 font-light font-normal text-[#454843]">
                    Acesse quando quiser, no celular ou computador
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-[598px] max-w-[615px] lg:flex relative bottom-[-7px] right-[-10px]">
            <Image
              className="object-cover"
              style={{ objectPosition: "20px bottom" }}
              src={heromockup}
              alt="Imagem com prints de diferentes funcionalidades do Organizze, um app repleto de funcionalidades para realizar um controle financeiro pessoal eficiente"
              height={598}
              width={615}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
