import logo from "../../public/logo_pilot.png";
// import heromockup from "../../public/hero-mockup-app-yourPilot-F7HBQCLE.webp";
import arrowright from "../../public/arrow-right-R7RZTDAN.svg";
import Image from "next/image";
import ButtonComponent from "../components/button";
import Container from "@/components/Container";
import Mock from "@/mock/mock.json";

export function Hero() {
  return (
    <section className="bg-[#f1f5fd] text-black relative overflow-hidden">
      <header className="h-28 flex-none padding-x-all-sections bg-[#f1f5fd]">
        <div className="relative">
          <Container flexCol={true}>            
            <div className="flex absolute bottom-0 lg:relative lg:top-0 lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">yourPilot</span>
                <Image
                  src={logo}
                  alt="Logo yourPilot"
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
             
              
            </nav>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                className="relative z-10 text-[#454843] before:absolute before:h-0.5 before:-bottom-1 before:left-0 before:w-0 before:content before:bg-base-text hover:before:w-2/5 before:transition-all"
                href="https://turismo.yourPilot.com.br"
              >
                Login
              </a>
              <a
                className="rounded-lg text-base tracking-tig transition-colors font-normal ease-in-out duration-300 select-none inline-flex min-w-fit items-center ml-8 z-20 text-[#FBF7EA] font-semibold py-3 px-6 bg-[#104398] hover:bg-[#006A33]"
                href="https://auth.yourPilot.com.br/cadastro"
              >
                Comece já!
              </a>
            </div>

          </Container>
        </div>
      </header>

      <section className="w-full px-[1rem] sm:px-[2rem] lg:pr-0 xl:px-0 overflow-hidden bg-[#f1f5fd]">
        <div className="max-w-[1224px] h-full flex items-center relative mx-auto md:items-start lg:flex-row lg:justify-between lg:m-auto">
          <div className="sm:rounded-2xl h-full w-full lg:w-auto">
            <div className="relative flex flex-col items-center pt-0 py-8 sm:py-12 lg:py-16 lg:items-start">
              <h2 className="max-w-[590px] text-base-text text-3xl font-semibold md:leading-[54px] text-center tracking-tight sm:text-5xl lg:max-w-[460px] lg:text-5xl lg:text-left lg:m-0 xl:max-w-[550px] xl:text-5xl">
              {Mock.sessions[0].title}
              </h2>
              <p className="mt-6 mb-8 max-w-[400px] text-base font-normal text-center font-light text-[#454843] lg:text-left lg:mx-0 lg:max-w-[520px]">
              {Mock.sessions[0].subtitle}
              </p>
              <a
                className="rounded-lg text-base tracking-tig transition-colors ease-in-out duration-300 select-none inline-flex justify-center items-center drop-shadow-green-button-drop-shadow font-normal text-white font-semibold py-2 pl-6 pr-2 bg-[#104398] hover:bg-[#006A33]"
                href="https://auth.yourPilot.com.br/cadastro"
              >
               {Mock.sessions[0].cta_primary}

                <div className="ml-4 bg-[#071e45] rounded-md w-10 h-10 inline-flex justify-center items-center">
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
                    <rect width="42" height="42" rx="12" fill="#c3d7f8"></rect>
                    <g clipPath="url(#clip0_3202_51666)">
                      <path
                        d="M27 17H26V15C26 12.24 23.76 10 21 10C18.24 10 16 12.24 16 15V17H15C13.9 17 13 17.9 13 19V29C13 30.1 13.9 31 15 31H27C28.1 31 29 30.1 29 29V19C29 17.9 28.1 17 27 17ZM18 15C18 13.34 19.34 12 21 12C22.66 12 24 13.34 24 15V17H18V15ZM27 29H15V19H27V29ZM21 26C22.1 26 23 25.1 23 24C23 22.9 22.1 22 21 22C19.9 22 19 22.9 19 24C19 25.1 19.9 26 21 26Z"
                        fill="#071e45"
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
                    <rect width="42" height="42" rx="12" fill="#c3d7f8"></rect>
                    <g clipPath="url(#clip0_3202_51658)">
                      <path
                        d="M13 15H31V13H13C11.9 13 11 13.9 11 15V26H9V29H23V26H13V15ZM32 17H26C25.45 17 25 17.45 25 18V28C25 28.55 25.45 29 26 29H32C32.55 29 33 28.55 33 28V18C33 17.45 32.55 17 32 17ZM31 26H27V19H31V26Z"
                        fill="#071e45"
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
            {/* <Image
              className="object-cover"
              style={{ objectPosition: "20px bottom" }}
              src={heromockup}
              alt="Imagem com prints de diferentes funcionalidades do yourPilot, um app repleto de funcionalidades para realizar um controle financeiro pessoal eficiente"
              height={598}
              width={615}
            /> */}
          </div>
        </div>
      </section>
    </section>
  );
}
