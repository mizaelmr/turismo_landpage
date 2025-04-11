import Image from "next/image";
import traceborder from "../../public/traced-border@2x-AJ4X7YYM.png";
import financialScreen from "../../public/financialScreen.png";

export function Financial() {
    return (
        <section className="relative pt-12 md:pt-16 pb-4 overflow-hidden padding-x-all-sections bg-[#FBF7EA]">
            <div className="max-w-[1224px] h-full flex items-center relative mx-auto md:items-start lg:flex-row lg:justify-between lg:m-auto">
                <div className="sm:rounded-2xl h-full w-full lg:w-auto">
                    <div className="relative flex flex-col items-center pt-0 py-8 sm:py-12 lg:py-16 lg:items-start">
                        <p className="text-base mb-3 font-normal font-bold text-base-text leading-[16px] text-center text-[#5C5F5A] sm:text-center md:text-left">Segurança em primeiro lugar</p>
                        <h2 className="w-full font-normal md:max-w-[800px] font-bold text-base-text tracking-[-0.03em] md:leading-[56px] font-semibold text-3xl text-center text-base-text text-black md:text-5xl md:text-left md:tracking-tighter"            >
                        Tenha a gestão financeira pessoal
                        que sempre sonhou
                            <Image
                                alt="separator"
                                className="absolute -left-1.5 -right-1 -bottom-[2px] -z-10 hidden md:flex"
                                src={traceborder}
                                height={200}
                                width={300}
                            />
                        </h2>
                        <ul className="mb-8 mt-8 list-disc list-inside flex flex-col gap-4">
                            <li className="text-base font-normal ml-3 font-normal leading-6 text-[#454843]">Item 1</li>
                            <li className="text-base font-normal ml-3 font-normal leading-6 text-[#454843]">Item 2</li>
                            <li className="text-base font-normal ml-3 font-normal leading-6 text-[#454843]">Item 3</li>
                        </ul>
                        <a
                            className="rounded-lg text-base tracking-tig transition-colors font-normal ease-in-out duration-300 select-none inline-flex min-w-fit items-center text-[#FBF7EA] font-semibold py-3 px-6 bg-[#129E3F] hover:bg-[#006A33]"
                            href="https://auth.organizze.com.br/cadastro"
                        >
                            Teste gratuitamente
                        </a>
                        <div className="flex flex-col items-center space-y-10 mt-10 mb-6 md:mb-12 sm:flex sm:flex-row sm:justify-center sm:space-x-10 sm:space-y-0 md:flex md:flex-row md:justify-start md:mt-10 md:space-x-10 lg:flex lg:flex-row lg:justify-start lg:mt-10 lg:space-x-10 xl:flex xl:flex-row xl:justify-start xl:mt-10 xl:space-x-10">

                            <div className="flex space-x-4">
                                <svg
                                    width="45"
                                    height="45"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="42" height="42" rx="12" fill="#F6EDCF"></rect>
                                    <path
                                        d="M29.8706 26.1331C29.5382 26.9012 29.1447 27.6081 28.6886 28.2583C28.0671 29.1444 27.5582 29.7578 27.166 30.0985C26.558 30.6576 25.9066 30.9439 25.2091 30.9602C24.7084 30.9602 24.1045 30.8178 23.4015 30.5287C22.6962 30.2409 22.0481 30.0985 21.4555 30.0985C20.8339 30.0985 20.1673 30.2409 19.4543 30.5287C18.7403 30.8178 18.165 30.9683 17.7252 30.9833C17.0563 31.0117 16.3895 30.7172 15.724 30.0985C15.2993 29.728 14.768 29.0928 14.1315 28.1931C13.4486 27.2323 12.8872 26.1182 12.4474 24.848C11.9764 23.476 11.7402 22.1474 11.7402 20.8612C11.7402 19.3878 12.0586 18.117 12.6963 17.0521C13.1975 16.1968 13.8642 15.5221 14.6986 15.0267C15.5331 14.5314 16.4347 14.279 17.4057 14.2628C17.937 14.2628 18.6337 14.4272 19.4995 14.7502C20.3629 15.0742 20.9173 15.2386 21.1603 15.2386C21.342 15.2386 21.9579 15.0464 23.0018 14.6633C23.9891 14.308 24.8223 14.1609 25.505 14.2189C27.3546 14.3681 28.7443 15.0973 29.6684 16.4109C28.0142 17.4133 27.1959 18.8171 27.2121 20.6181C27.2271 22.0209 27.736 23.1883 28.7362 24.1151C29.1893 24.5453 29.6956 24.8778 30.2588 25.1139C30.1367 25.4681 30.0076 25.8074 29.8706 26.1331ZM25.6285 9.43983C25.6285 10.5393 25.2268 11.5659 24.4261 12.5162C23.4599 13.6458 22.2912 14.2985 21.0238 14.1955C21.0076 14.0636 20.9983 13.9248 20.9983 13.7789C20.9983 12.7234 21.4578 11.5938 22.2738 10.6701C22.6812 10.2025 23.1993 9.81366 23.8276 9.50347C24.4546 9.19792 25.0476 9.02894 25.6054 9C25.6217 9.14699 25.6285 9.29398 25.6285 9.43981V9.43983Z"
                                        fill="#1A1C19"
                                    />

                                </svg>
                                <div>
                                    <p className="text-lg leading-[24px] text-black font-normal font-semibold text-base-text">
                                        App store
                                    </p>
                                    <span className="text-base leading-[24px] font-normal text-[#454843]">
                                        40,3 mil avaliações
                                    </span>
                                    <div className="flex mt-2 space-x-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <svg
                                    width="45"
                                    height="45"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="42" height="42" rx="12" fill="#F6EDCF"></rect>
                                    <path
                                        d="M24.3418 19.61L15.2896 10.5332L26.8068 17.1449L24.3418 19.61V19.61ZM12.9271 10C12.3939 10.2789 12.0371 10.7875 12.0371 11.4479V29.548C12.0371 30.2084 12.3939 30.717 12.9271 30.9959L23.4517 20.4959L12.9271 10ZM30.367 19.2531L27.9512 17.8545L25.2564 20.5L27.9512 23.1455L30.4162 21.7469C31.1545 21.1604 31.1545 19.8396 30.367 19.2531V19.2531ZM15.2896 30.4668L26.8068 23.8551L24.3418 21.39L15.2896 30.4668Z"
                                        fill="#1A1C19"
                                    />

                                </svg>
                                <div>
                                    <p className="text-lg leading-[24px] text-black font-normal font-semibold text-base-text">
                                        Google Play
                                    </p>
                                    <span className="text-base leading-[24px] font-normal text-[#454843]">
                                        40,3 mil avaliações
                                    </span>
                                    <div className="flex mt-2 space-x-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3202_50950)">
                                            <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block mt-12 sm:mt-16">
                    <Image
                        className="absolute right-[-200px] top-[-150px] xl:max-w-[750px] 3xl:hidden"
                        style={{ objectPosition: "20px bottom" }}
                        src={financialScreen}
                        alt="Imagem do Organizze sendo exibido na sua versão para computador, uma solução para gestão financeira pessoal e controle de contas"
                    />
                </div>
            </div>
        </section>
    );
}
