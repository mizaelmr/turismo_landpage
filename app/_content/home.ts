export const REGISTER_URL = "https://app.up.tur.br/register";
export const LOGIN_URL = "https://app.up.tur.br/login";
export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?1=pt_BR&phone=5587988567300&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR";
export const INSTAGRAM_URL = "https://www.instagram.com/uptur.br";

export const planos = [
  {
    nome: "Teste grátis",
    preco: "R$ 0",
    periodo: "por 1 mês",
    descricao: "Para conhecer a plataforma, sem cartão de crédito.",
    itens: ["Sem limite de reservas", "Controle de pacotes", "Suporte por e-mail"],
    cta: "Começar grátis",
    destaque: false,
  },
  {
    nome: "Profissional",
    preco: "R$ 197",
    periodo: "/mês",
    descricao: "Para agências que vendem excursão todo mês.",
    itens: [
      "Pacotes e reservas ilimitados",
      "Mapa de poltronas e embarque por QR Code",
      "Pagamento online com baixa automática",
      "Painel financeiro completo",
      "Notificações por WhatsApp",
      "Suporte por chat e e-mail",
    ],
    cta: "Testar o Profissional",
    destaque: true,
  },
  {
    nome: "Pro+",
    preco: "R$ 247",
    periodo: "/mês",
    descricao: "Para atender com o número da própria agência.",
    itens: [
      "Tudo do Profissional",
      "WhatsApp com o número da sua agência",
      "Inbox de conversas no painel",
      "Mensagens com a identidade da sua marca",
    ],
    cta: "Testar o Pro+",
    destaque: false,
  },
];

export const faq = [
  {
    pergunta: "Preciso ter CNPJ para usar?",
    resposta: "Não. Qualquer pessoa pode testar e usar o UPTUR, mesmo com CPF.",
  },
  {
    pergunta: "Posso cancelar quando quiser?",
    resposta: "Sim, não há fidelidade. Você pode cancelar ou trocar de plano a qualquer momento.",
  },
  {
    pergunta: "Como funciona o período gratuito?",
    resposta:
      "Você usa o sistema por 1 mês sem precisar de cartão de crédito. Depois, pode assinar o Profissional por R$ 197/mês ou o Pro+ (com o WhatsApp da própria agência) por R$ 247/mês.",
  },
  {
    pergunta: "Preciso instalar algo?",
    resposta:
      "Não. O UPTUR é 100% online: funciona no navegador do computador, tablet ou celular. Seus clientes também reservam pelo navegador, sem aplicativo.",
  },
  {
    pergunta: "Posso cadastrar quantos pacotes?",
    resposta: "Quantos quiser, com datas, preços, fotos, cidades de embarque, hospedagem e descrição completa.",
  },
  {
    pergunta: "Como meus clientes pagam?",
    resposta:
      "A plataforma é integrada ao Mercado Pago: o cliente paga por Pix ou cartão na própria reserva e o status de pagamento é atualizado automaticamente.",
  },
  {
    pergunta: "O cliente escolhe a poltrona na hora da reserva?",
    resposta: "Sim. Ele vê o mapa do ônibus, as poltronas livres e escolhe o assento antes de pagar.",
  },
];
