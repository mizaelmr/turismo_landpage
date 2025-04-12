import Image from "next/image";
import logo from "../../public/logo_pilot.png";
import instagram from "../../public/instagram-logo.svg";
import facebook from "../../public/facebook-logo.svg";
import linkedin from "../../public/linkedin-logo.svg";
import xLogo from "../../public/x-logo.svg";
import Container from "@/components/Container";
import Mock from "@/mock/mock.json";

export function Footer() {
    return (
        <footer className="bg-[#FEFDF9] padding-x-all-sections w-full border-t border-[#F1F1F1]">
            <Container>
                <div className="flex flex-col items-center lg:flex-row lg:justify-between mb-8 lg:mb-0">

                    <a href="/">
                        <span className="sr-only">{Mock.sessions[6]?.company_name || "Default Company Name"}
                        </span>
                        <Image
                            src={logo}
                            alt="Logo yourPilot"
                            width={188}
                            height={40}
                            className="object-contain mr-4"
                        // className="flex h-8 w-auto sm:h-10 lg:h-auto"
                        />
                    </a>
                    <nav className="-mx-5 -my-2 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center mt-3 mb-3">
                        <div className="px-5 py-2">
                            <a className="text-base text-[#454843] font-normal hover:text-gray-900 transition duration-200 ease-in-out" href="">
                                Quem somos
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base text-[#454843] font-normal hover:text-gray-900 transition duration-200 ease-in-out" href="">
                                Quem somos
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base text-[#454843] font-normal hover:text-gray-900 transition duration-200 ease-in-out" href="">
                                Quem somos
                            </a>
                        </div>
                        
                    </nav>
                    <div>
                        <a className="ml-4 rounded-lg text-base tracking-tig transition-colors font-normal ease-in-out duration-300 select-none inline-flex min-w-fit items-center text-[#FBF7EA] font-semibold py-3 px-6 bg-[#104398] hover:bg-[#006A33]" href="">
                            começar agora
                        </a>
                    </div>
                </div>
                <div className="w-full overflow-hidden flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-between lg:mt-10">
                    <p className="text-center text-sm text-[#454843] font-normal lg:text-left mt-6 lg:mt-0">
                        ©2025
                    </p>
                    <div className="flex flex-col lg:flex-row lg:space-x-10 items-center">
                        <div className="flex justify-center space-x-6 mb-6 lg:mb-0">
                            <a href="#" target="_blank" rel="noreferrer" className="text-[#454843] hover:text-gray-500 transition duration-200 ease-in-out">
                                <Image
                                    src={linkedin}
                                    alt="Logo yourPilot"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-[#454843] hover:text-gray-500 transition duration-200 ease-in-out">
                                <Image
                                    src={instagram}
                                    alt="Logo yourPilot"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-[#454843] hover:text-gray-500 transition duration-200 ease-in-out">
                                <Image
                                    src={xLogo}
                                    alt="Logo yourPilot"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-[#454843] hover:text-gray-500 transition duration-200 ease-in-out">
                                <Image
                                    src={facebook}
                                    alt="Logo yourPilot"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
                        <a className="text-sm leading-6 font-normal text-[#454843] mt-2 lg:mt-0" href="/politicas-de-privacidade">Política de Privacidade</a>
                        <a className="text-sm leading-6 font-normal text-[#454843] mt-2 lg:mt-0" href="/termos-de-uso">Termos de Serviço</a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}