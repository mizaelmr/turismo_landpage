import Container from "../_components/Container";

export function Problema() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            O dia a dia de quem ainda não automatizou
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Planilha não escala, e reserva por WhatsApp{" "}
            <span className="text-blue-600">se perde fácil</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-left mt-12">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Controle espalhado</h3>
              <p className="text-gray-600 text-sm">
                Reserva anotada no caderno, confirmação no WhatsApp e pagamento
                em outra planilha. Ninguém tem a visão completa do que já
                vendeu.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-bold text-gray-900 mb-2">Venda parada fora do horário</h3>
              <p className="text-gray-600 text-sm">
                Sem site próprio, todo pacote depende de alguém responder
                mensagem. Fim de semana e feriado, a venda simplesmente não
                acontece.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">🚌</div>
              <h3 className="font-bold text-gray-900 mb-2">Embarque no improviso</h3>
              <p className="text-gray-600 text-sm">
                Lista de passageiro impressa, conferência manual na porta do
                ônibus, e o risco de embarcar (ou barrar) a pessoa errada.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
