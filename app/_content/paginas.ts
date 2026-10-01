// Páginas de conteúdo (SEO). Cada uma mira uma busca diferente do excursionista.
// Regra: só descrever o que o sistema faz de verdade — nada de números ou depoimentos inventados.

export type Secao = {
  titulo: string;
  paragrafos?: string[];
  lista?: string[];
  passos?: { titulo: string; texto: string }[];
};

export type PaginaConteudo = {
  slug: string;
  titleTag: string;
  metaDescription: string;
  menu: string;
  chamada: string;
  h1: string;
  intro: string[];
  secoes: Secao[];
  faq: { pergunta: string; resposta: string }[];
  cta: { titulo: string; texto: string };
  download?: { url: string; rotulo: string; detalhe: string };
  relacionadas: string[];
};

export const paginas: PaginaConteudo[] = [
  {
    slug: "sistema-para-excursao",
    titleTag: "Sistema para Excursão: reservas, poltronas e embarque",
    metaDescription:
      "Sistema para excursão com site de vendas, mapa de poltronas, pagamento por Pix e cartão e embarque por QR Code. Feito para excursionistas. Teste grátis por 1 mês.",
    menu: "Sistema para excursão",
    chamada: "Para excursionistas e agências de turismo rodoviário",
    h1: "Sistema para excursão: organize reservas, poltronas e embarque num lugar só",
    intro: [
      "Quem organiza excursão sabe como é: nome de passageiro no caderno, poltrona anotada na planilha, comprovante de Pix perdido no meio de centenas de mensagens no WhatsApp e, no dia da viagem, uma lista impressa pra conferir quem subiu no ônibus.",
      "O UPTUR é um sistema para excursão feito para essa rotina. Você cadastra o pacote, ele vira uma página de vendas no seu site, o cliente escolhe a poltrona e paga sozinho, e no embarque você confere tudo pelo celular com QR Code.",
    ],
    secoes: [
      {
        titulo: "O que um bom sistema para excursão precisa ter",
        paragrafos: [
          "Antes de escolher qualquer ferramenta, vale checar se ela resolve os quatro momentos da excursão: divulgar, vender, receber e embarcar. Um sistema que só faz cadastro de passageiro ainda te deixa preso no WhatsApp para todo o resto.",
        ],
        lista: [
          "Página de vendas para cada pacote, com fotos, datas, preço e cidades de embarque",
          "Mapa de poltronas do ônibus, para o cliente escolher o assento na hora da reserva",
          "Pagamento online (Pix e cartão) com baixa automática da reserva",
          "Lista de passageiros sempre atualizada, sem digitar nada duas vezes",
          "Conferência de embarque pelo celular, sem lista impressa",
          "Controle financeiro do pacote: quanto entrou, quanto falta receber",
        ],
      },
      {
        titulo: "Como o UPTUR funciona na prática",
        passos: [
          {
            titulo: "Cadastre o pacote",
            texto:
              "Informe destino, datas, preço, fotos, cidades de embarque e o ônibus. Também dá para vender pacote só de hospedagem, sem transporte.",
          },
          {
            titulo: "Divulgue o link",
            texto:
              "O pacote aparece automaticamente no site da sua agência. É só mandar o link no WhatsApp, no Instagram ou nos grupos.",
          },
          {
            titulo: "O cliente reserva e paga sozinho",
            texto:
              "Ele escolhe a poltrona no mapa do ônibus, preenche os dados dos passageiros e paga pelo Mercado Pago. A reserva entra confirmada no seu painel.",
          },
          {
            titulo: "Embarque com QR Code",
            texto:
              "Cada passageiro recebe o cartão de embarque com QR Code. No dia, você lê o código pelo celular e acompanha em tempo real quem já embarcou e quem falta.",
          },
        ],
      },
      {
        titulo: "Para quem é",
        lista: [
          "Excursionistas que organizam viagens de ônibus, van ou micro-ônibus",
          "Agências de turismo rodoviário e de viagens em grupo",
          "Quem vende excursão para praia, romaria, show, compras ou parque",
          "Quem vende pacote de hospedagem sem transporte incluído",
          "Quem ainda controla tudo em caderno, planilha ou só pelo WhatsApp",
        ],
      },
      {
        titulo: "Recursos que economizam horas por semana",
        lista: [
          "Site da agência publicado automaticamente, vendendo 24 horas por dia",
          "Editor visual do mapa de assentos de cada ônibus",
          "Várias cidades de embarque no mesmo pacote",
          "Lista de espera quando o ônibus lota",
          "Cancelamento automático de reservas não pagas no prazo, liberando a poltrona",
          "Lembrete de viagem e notificações por WhatsApp e e-mail",
          "Relatórios de pacote e de hospedagem em PDF",
          "Painel financeiro com recebimentos e lançamentos",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Preciso ter CNPJ para usar um sistema para excursão?",
        resposta:
          "Não. No UPTUR você pode começar com CPF. Muitos excursionistas começam assim e formalizam a empresa depois.",
      },
      {
        pergunta: "Quanto custa o sistema?",
        resposta:
          "O primeiro mês é grátis e sem cartão de crédito. Depois, o plano Profissional custa R$ 197 por mês e o Pro+, com o WhatsApp da própria agência, custa R$ 247 por mês. Não há fidelidade.",
      },
      {
        pergunta: "Funciona no celular?",
        resposta:
          "Sim. O UPTUR é 100% online: você gerencia pelo celular ou computador, e seus clientes reservam pelo navegador, sem instalar aplicativo.",
      },
      {
        pergunta: "Serve para excursão de van ou micro-ônibus?",
        resposta:
          "Sim. Você monta o mapa de assentos de cada veículo no editor visual, com a quantidade e a disposição de poltronas que ele tiver.",
      },
    ],
    cta: {
      titulo: "Organize sua próxima excursão no UPTUR",
      texto: "Cadastre o pacote hoje e mande o link de vendas para os seus clientes ainda esta semana. 1 mês grátis, sem cartão.",
    },
    relacionadas: ["mapa-de-poltronas-onibus", "embarque-qr-code-excursao", "como-vender-excursao-online"],
  },
  {
    slug: "mapa-de-poltronas-onibus",
    titleTag: "Mapa de Poltronas de Ônibus para Excursão (online)",
    metaDescription:
      "Monte o mapa de poltronas do seu ônibus de excursão e deixe o passageiro escolher o assento na reserva online. Sem planilha e sem poltrona vendida duas vezes.",
    menu: "Mapa de poltronas",
    chamada: "Reserva de assentos para excursão",
    h1: "Mapa de poltronas de ônibus: o passageiro escolhe o assento na reserva online",
    intro: [
      "Poltrona vendida duas vezes, cliente reclamando que pediu a janela, casal separado no ônibus: quase sempre o problema é o mapa de poltronas controlado à mão, numa folha ou numa planilha que só uma pessoa atualiza.",
      "Com um mapa de poltronas online, cada assento vendido some da lista na hora. O passageiro vê o ônibus, escolhe onde quer sentar e paga. Você não precisa conferir nada.",
    ],
    secoes: [
      {
        titulo: "Por que usar mapa de poltronas online na excursão",
        lista: [
          "Acaba a venda duplicada: a poltrona reservada fica indisponível para todo mundo na mesma hora",
          "O cliente escolhe janela, corredor ou lugar ao lado do acompanhante sem te chamar no WhatsApp",
          "Você vê a ocupação do ônibus e sabe quantas poltronas ainda faltam vender",
          "A lista de passageiros já sai com o número da poltrona de cada um",
          "Poltrona de reserva não paga volta a ficar livre automaticamente quando o prazo vence",
        ],
      },
      {
        titulo: "Como montar o mapa do seu ônibus no UPTUR",
        passos: [
          {
            titulo: "Cadastre o veículo",
            texto: "Ônibus convencional, leito, double deck, micro-ônibus ou van: cada veículo tem o próprio mapa.",
          },
          {
            titulo: "Desenhe as poltronas",
            texto:
              "No editor visual você define fileiras, corredor e numeração, igual ao veículo real. Dá para bloquear poltronas, como as do guia e do motorista auxiliar.",
          },
          {
            titulo: "Vincule ao pacote",
            texto: "Ao publicar o pacote, o mapa aparece na página de reserva e o passageiro escolhe o assento antes de pagar.",
          },
        ],
      },
      {
        titulo: "Modelos comuns de ônibus de excursão",
        paragrafos: [
          "A disposição mais comum em ônibus rodoviário é a 2+2: duas poltronas de cada lado do corredor, geralmente com 42 a 46 lugares. Ônibus leito costumam usar 2+1, com menos poltronas e mais espaço. Micro-ônibus ficam na faixa de 20 a 30 lugares e vans, de 12 a 20.",
          "Como o mapa é montado por você, ele segue exatamente o veículo que a empresa de fretamento vai mandar, inclusive quando muda de um pacote para outro.",
        ],
      },
      {
        titulo: "Prefere começar com papel?",
        paragrafos: [
          "Se você ainda não quer usar um sistema, baixe nossa planilha de excursão grátis. Ela tem um mapa de poltronas 2+2 com 46 lugares que se preenche sozinho no Excel ou no Google Planilhas.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "O passageiro precisa instalar aplicativo para escolher a poltrona?",
        resposta: "Não. Ele escolhe pelo navegador do celular, no próprio link de reserva do pacote.",
      },
      {
        pergunta: "Posso trocar a poltrona de um passageiro depois da reserva?",
        resposta: "Sim. Pelo painel você ajusta a reserva, e o mapa se atualiza para os próximos clientes.",
      },
      {
        pergunta: "Dá para ter mais de um ônibus na mesma excursão?",
        resposta: "Sim. Cada veículo tem seu mapa de assentos, e você acompanha a ocupação de cada um.",
      },
    ],
    cta: {
      titulo: "Monte o mapa do seu ônibus em minutos",
      texto: "Crie sua conta, desenhe o veículo e publique a primeira excursão com escolha de poltrona. 1 mês grátis.",
    },
    relacionadas: ["sistema-para-excursao", "planilha-de-excursao-gratis", "embarque-qr-code-excursao"],
  },
  {
    slug: "como-vender-excursao-online",
    titleTag: "Como Vender Excursão Online: guia prático passo a passo",
    metaDescription:
      "Aprenda como vender excursão online: montar o pacote, calcular o preço, divulgar no WhatsApp e Instagram e receber por Pix sem perder vendas fora do horário.",
    menu: "Como vender excursão online",
    chamada: "Guia para excursionistas",
    h1: "Como vender excursão online: guia prático do pacote ao embarque",
    intro: [
      "Vender excursão online não é só postar a arte no Instagram. É fazer com que o interessado consiga ver o roteiro, escolher a poltrona e pagar na hora em que decidiu comprar, mesmo que seja domingo às 23h.",
      "Este guia mostra o caminho que funciona para excursionistas e pequenas agências, do cálculo do preço até a conferência no embarque.",
    ],
    secoes: [
      {
        titulo: "1. Monte um pacote fácil de entender",
        paragrafos: [
          "O cliente decide em segundos. Deixe claro, logo no começo: destino, data de ida e volta, horário e cidades de embarque, o que está incluso (transporte, hospedagem, ingressos, café da manhã) e o preço por pessoa.",
          "Fotos reais do destino e da hospedagem vendem mais do que banco de imagens. Se o pacote tem opções diferentes de quarto, mostre o preço de cada uma.",
        ],
      },
      {
        titulo: "2. Calcule o preço sem prejuízo",
        paragrafos: [
          "Some os custos fixos da viagem (fretamento do ônibus, motorista, pedágios, estacionamento, guia) e divida por um número de passageiros abaixo da lotação. Assim a excursão se paga mesmo se sobrarem algumas poltronas. Depois some os custos por pessoa (hospedagem, ingressos, seguro) e a sua margem.",
          "Defina também um prazo para o pagamento e o que acontece com a poltrona se o cliente não pagar. Isso evita ônibus 'cheio' de reservas que nunca se confirmam.",
        ],
      },
      {
        titulo: "3. Tenha um link de vendas, não só uma arte",
        paragrafos: [
          "A arte chama atenção, mas quem vende é o link. Com uma página de reserva, o interessado não precisa esperar você responder: ele vê as poltronas livres, preenche os dados e paga por Pix ou cartão.",
          "Cada mensagem a menos no WhatsApp é uma venda que não esfriou esperando resposta.",
        ],
      },
      {
        titulo: "4. Divulgue onde seus passageiros estão",
        lista: [
          "Status e listas de transmissão do WhatsApp, sempre com o link de reserva",
          "Grupos de clientes antigos: quem já viajou com você é quem mais compra de novo",
          "Instagram: link na bio e nos stories, com vídeos da última viagem",
          "Parcerias com igrejas, escolas, academias e associações para excursões em grupo",
          "Quando der, mostre as poltronas acabando: 'faltam 8 lugares' faz o indeciso agir",
        ],
      },
      {
        titulo: "5. Receba pagamento online",
        paragrafos: [
          "Pagamento por Pix ou cartão direto na reserva elimina o vai e vem de comprovante. Com a baixa automática, você sabe exatamente quem pagou sem abrir extrato. Reservas não pagas no prazo são canceladas e a poltrona volta para a venda.",
        ],
      },
      {
        titulo: "6. Capriche no embarque e na volta",
        paragrafos: [
          "Um embarque organizado, com lista no celular e QR Code, passa profissionalismo e gera indicação. Depois da viagem, peça fotos e depoimentos e já apresente a próxima excursão para quem voltou satisfeito.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Qual a melhor forma de divulgar excursão?",
        resposta:
          "WhatsApp e Instagram com um link de reserva direto. A divulgação traz o interesse, e o link transforma o interesse em venda sem depender de você estar online.",
      },
      {
        pergunta: "Como cobrar sinal da excursão?",
        resposta:
          "Defina um valor de entrada para garantir a poltrona e um prazo para quitar o restante. No UPTUR, a reserva paga online já entra confirmada no painel.",
      },
      {
        pergunta: "Preciso de site para vender excursão online?",
        resposta:
          "Ajuda muito. No UPTUR, a agência ganha um site com os pacotes publicados automaticamente, sem precisar contratar programador.",
      },
    ],
    cta: {
      titulo: "Tenha seu link de vendas de excursão hoje",
      texto: "Publique o pacote, divulgue o link e receba reservas pagas até de madrugada. Teste grátis por 1 mês.",
    },
    relacionadas: ["sistema-para-excursao", "planilha-de-excursao-gratis", "mapa-de-poltronas-onibus"],
  },
  {
    slug: "embarque-qr-code-excursao",
    titleTag: "Lista de Embarque de Excursão com QR Code no Celular",
    metaDescription:
      "Faça a conferência de embarque da excursão pelo celular com QR Code: veja em tempo real quem já embarcou e quem falta, sem lista impressa.",
    menu: "Embarque por QR Code",
    chamada: "Check-in de passageiros",
    h1: "Embarque de excursão com QR Code: lista de embarque em tempo real no celular",
    intro: [
      "O embarque é o momento mais tenso da excursão: ônibus parado, passageiros chegando juntos, lista impressa riscada à caneta e ninguém sabe ao certo quem ainda falta.",
      "Com o embarque por QR Code, cada passageiro tem o próprio cartão de embarque no celular. Você lê o código e a lista se atualiza sozinha.",
    ],
    secoes: [
      {
        titulo: "Como funciona o check-in por QR Code",
        passos: [
          {
            titulo: "O passageiro recebe o cartão de embarque",
            texto: "Depois da reserva, cada pessoa tem o próprio QR Code, inclusive quando a reserva inclui vários passageiros.",
          },
          {
            titulo: "Você lê o código no embarque",
            texto: "Pelo celular, você confere o QR e confirma o embarque daquele passageiro, com a poltrona dele.",
          },
          {
            titulo: "A lista mostra quem falta",
            texto:
              "A lista de embarque exibe em tempo real quem já embarcou, com o horário, e quem ainda não chegou. Ninguém some da lista.",
          },
        ],
      },
      {
        titulo: "Vantagens em relação à lista impressa",
        lista: [
          "Não precisa imprimir nem atualizar lista na última hora",
          "Conferência por passageiro, não só por reserva",
          "Horário de embarque registrado para cada pessoa",
          "Fácil saber quem falta antes de o ônibus sair",
          "Funciona com várias cidades de embarque na mesma viagem",
          "Passa mais profissionalismo para o cliente",
        ],
      },
      {
        titulo: "E se o passageiro esquecer o celular?",
        paragrafos: [
          "Você também encontra a reserva pelo código ou pelo nome, direto na lista de embarque, e confirma manualmente. O QR Code agiliza, mas não é obrigatório.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Preciso de leitor de QR Code?",
        resposta: "Não. A câmera do celular basta.",
      },
      {
        pergunta: "O passageiro precisa baixar aplicativo?",
        resposta: "Não. O cartão de embarque abre no navegador do celular.",
      },
      {
        pergunta: "Serve para excursão com vários pontos de embarque?",
        resposta:
          "Sim. Cada passageiro está vinculado à sua cidade de embarque, e você acompanha a lista durante todo o trajeto.",
      },
    ],
    cta: {
      titulo: "Seu próximo embarque sem lista de papel",
      texto: "Cadastre a excursão no UPTUR e use o check-in por QR Code já na próxima viagem. 1 mês grátis.",
    },
    relacionadas: ["sistema-para-excursao", "mapa-de-poltronas-onibus", "como-vender-excursao-online"],
  },
  {
    slug: "planilha-de-excursao-gratis",
    titleTag: "Planilha de Excursão Grátis (Excel): passageiros e poltronas",
    metaDescription:
      "Baixe grátis a planilha de excursão em Excel: lista de passageiros, controle de pagamentos, mapa de poltronas do ônibus e cálculo do preço da viagem.",
    menu: "Planilha de excursão grátis",
    chamada: "Download gratuito",
    h1: "Planilha de excursão grátis: passageiros, pagamentos e mapa de poltronas",
    intro: [
      "Montamos uma planilha de excursão pronta para usar no Excel ou no Google Planilhas. Ela organiza os passageiros, mostra quem ainda deve, desenha o mapa de poltronas do ônibus e calcula o preço mínimo da viagem para você não ter prejuízo.",
      "É grátis e não pede cadastro. Baixe, preencha e use na sua próxima excursão.",
    ],
    download: {
      url: "/downloads/planilha-de-excursao-uptur.xlsx",
      rotulo: "Baixar planilha grátis (.xlsx)",
      detalhe: "Excel · funciona no Google Planilhas · sem cadastro",
    },
    secoes: [
      {
        titulo: "O que tem na planilha",
        lista: [
          "Passageiros: nome, documento, telefone, cidade de embarque, poltrona, valor, quanto pagou e quanto falta, com aviso de poltrona repetida",
          "Mapa de poltronas: ônibus 2+2 com 46 lugares que se preenche sozinho com o nome de cada passageiro e mostra as poltronas livres",
          "Custos e preço: some os custos da viagem e descubra o preço mínimo por passageiro e o seu lucro",
          "Instruções de uso passo a passo",
        ],
      },
      {
        titulo: "Como usar a planilha de controle de excursão",
        passos: [
          {
            titulo: "Preencha os custos",
            texto: "Na aba de custos, informe fretamento, hospedagem e demais despesas. A planilha mostra o preço mínimo por passageiro.",
          },
          {
            titulo: "Cadastre os passageiros",
            texto: "A cada venda, adicione o passageiro e registre os pagamentos. A coluna 'Falta pagar' se atualiza sozinha.",
          },
          {
            titulo: "Confira o mapa do ônibus",
            texto: "Ao informar a poltrona de cada passageiro, o mapa do ônibus se preenche sozinho. As livres aparecem em verde.",
          },
          {
            titulo: "Imprima a lista de embarque",
            texto: "No dia da viagem, use a aba de passageiros como lista de conferência.",
          },
        ],
      },
      {
        titulo: "Quando a planilha começa a atrapalhar",
        paragrafos: [
          "A planilha funciona bem para uma ou duas excursões por mês. Quando o volume cresce, os problemas aparecem: duas pessoas editando ao mesmo tempo, poltrona vendida duas vezes, comprovante de Pix que ninguém lançou e cliente perguntando no WhatsApp se ainda tem lugar.",
          "Nesse ponto, vale passar para um sistema para excursão. No UPTUR, o próprio cliente escolhe a poltrona, paga online e recebe o QR Code de embarque. A lista de passageiros se monta sozinha.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "A planilha de excursão é grátis mesmo?",
        resposta: "Sim. O download é gratuito e não pede e-mail nem cadastro.",
      },
      {
        pergunta: "Funciona no Google Planilhas?",
        resposta: "Sim. Abra o Google Planilhas, vá em Arquivo > Importar e envie o arquivo .xlsx.",
      },
      {
        pergunta: "Posso mudar o mapa de poltronas?",
        resposta:
          "Pode. O modelo vem com um ônibus 2+2 de 46 lugares, e você pode renumerar as poltronas para ficar igual ao seu veículo. No UPTUR, o mapa é montado num editor visual para qualquer veículo.",
      },
    ],
    cta: {
      titulo: "Cansou da planilha?",
      texto: "No UPTUR a lista de passageiros, as poltronas e os pagamentos se atualizam sozinhos. Teste grátis por 1 mês.",
    },
    relacionadas: ["sistema-para-excursao", "mapa-de-poltronas-onibus", "como-vender-excursao-online"],
  },
];

export function getPagina(slug: string): PaginaConteudo {
  const pagina = paginas.find((p) => p.slug === slug);
  if (!pagina) throw new Error(`Página de conteúdo não encontrada: ${slug}`);
  return pagina;
}
