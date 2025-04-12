import ParagrafoComponent from "@/components/paragrafos";
import star from "../../public/star.svg";
import Container from "@/components/Container";
import Mock from "@/mock/mock.json";

export function Understand() {
    return (
        <>
            <section className="py-12 lg:pb-28 padding-x-all-sections bg-[#FEFDF9]">
                <Container>
                    <div className="md:mt-6 flex flex-col items-center lg:items-start w-full lg:w-auto">
                        <h2 className="font-bold max-w-[375px] text-3xl text-black text-base-text text-center m-auto md:max-w-[875px] md:text-5xl">
                            {Mock.sessions[1].title}

                        </h2>
                        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-baseline justify-center gap-x-10 gap-y-10 lg:gap-x-24 lg:gap-y-20">
                            {Mock?.sessions[1]?.items.map((item, key) => (
                                <ParagrafoComponent
                                    key={key}
                                    icon={star}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}


                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}