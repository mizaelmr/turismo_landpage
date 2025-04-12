import steps from "../../public/steps.svg";
import phone from "../../public/phone-resources.webp";
import Image from "next/image";
import Container from "@/components/Container";


export function Resources() {
    return (
        <section className="w-full h-[auto] flex padding-x-all-sections pt-12 pb-3 md:pt-20 bg-[#f1f5fd] md:pb-0">
            <Container>
                <div className="z-10 text-center m-auto mb-8">
                    <h2 className="text-3xl md:text-5xl text-black font-semibold font-bold mb-4 text-base-text text-center">
                        Nosso principais recursos
                    </h2>
                    <p className="max-w-[600px] mx-[auto] font-normal font-normal text-base leading-[24px] text-[#454843] md:text-center">
                        Conheça os recursos que vão revolucionar seu controle financeiro pessoal, proporcionando uma visão clara da sua situação financeira e te ajudando a tomar decisões mais assertivas para alcançar seus objetivos.
                    </p>
                </div>
                <div className="sm:rounded-2xl h-full w-full lg:w-auto">
                    <div className="relative flex flex-col items-center lg:items-start">
                        <div className="w-full items-center md:items-baseline flex flex-col md:flex-row lg:items-start gap-x-10 lg:gap-x-0 lg:grid" style={{ gridTemplateColumns: "26.5% 47% 26.5%" }}>
                            <div className="z-10 w-full md:w-1/2 lg:w-full md:pt-5 lg:pt-12">
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <Image
                                            src={steps}
                                            alt="Logo yourPilot"
                                            width={40}
                                            height={40}
                                            className="object-contain mb-2"
                                        />
                                        <p className="text-lg text-black font-semibold md:text-xl leading-6 text-base-text">
                                            Limite de gasto
                                        </p>
                                    </div>

                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <Image
                                            src={steps}
                                            alt="Logo yourPilot"
                                            width={40}
                                            height={40}
                                            className="object-contain mb-2"
                                        />
                                        <p className="text-lg text-black font-semibold md:text-xl leading-6 text-base-text">
                                            Limite de gasto
                                        </p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <Image
                                            src={steps}
                                            alt="Logo yourPilot"
                                            width={40}
                                            height={40}
                                            className="object-contain mb-2"
                                        />
                                        <p className="text-lg text-black font-semibold md:text-xl leading-6 text-base-text">
                                            Limite de gasto
                                        </p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <div>
                                            <Image
                                                src={steps}
                                                alt="Logo yourPilot"
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        <p className="text-lg text-black font-normal md:text-xl leading-6 font-semibold text-base-text">Limete de gasto</p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center ">
                                <Image
                                    src={phone}
                                    alt="phone yourPilot"
                                    className="z-10 hidden lg:block w-[600px] m-[auto] lg:m-[unset] translate-x-[4.375rem] lg:translate-x-[5.4rem]"
                                />
                            </div>
                            <div className="z-10 w-full md:w-1/2 lg:w-full md:pt-5 lg:pt-12">
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <div>
                                            <Image
                                                src={steps}
                                                alt="Logo yourPilot"
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        <p className="text-lg text-black font-normal md:text-xl leading-6 font-semibold text-base-text">Limite de gasto</p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <div>
                                            <Image
                                                src={steps}
                                                alt="Logo yourPilot"
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        <p className="text-lg text-black font-normal md:text-xl leading-6 font-semibold text-base-text">Limite de gasto</p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <div>
                                            <Image
                                                src={steps}
                                                alt="Logo yourPilot"
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        <p className="text-lg text-black font-normal md:text-xl leading-6 font-semibold text-base-text">Limete de gasto</p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                                <div className="w-full max-w-[350px] md:max-w-[unset] m-[auto] mb-10 flex flex-col items-center md:items-start">
                                    <div className="mt-2 md:mt-5 flex flex-col items-center md:items-start text-center md:text-left relative">
                                        <div>
                                            <Image
                                                src={steps}
                                                alt="Logo yourPilot"
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        <p className="text-lg text-black font-normal md:text-xl leading-6 font-semibold text-base-text">Limete de gasto</p>
                                    </div>
                                    <span className="mt-3 text-base leading-6 text-[#454843] text-center md:text-left">
                                        Defina o quanto você pode gastar em cada categoria e economize
                                        sem esforço.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}