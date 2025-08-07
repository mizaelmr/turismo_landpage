import ParagrafoComponent from "../_components/paragrafos";
import star from "/public/star.svg";
import Container from "../_components/Container";
import Mock from "../_mock/mock.json";

export function Understand() {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {Mock.sessions[1].title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        Descubra como nossa plataforma pode transformar sua gestão financeira
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Mock?.sessions[1]?.items && Mock.sessions[1].items.map((item, key) => (
                        <ParagrafoComponent
                            key={key}
                            icon={star}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}