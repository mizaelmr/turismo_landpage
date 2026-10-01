# Plano de SEO e Tráfego — UPTUR

Objetivo: aparecer no topo do Google para quem procura sistema de excursão/agência de turismo
e transformar esse tráfego em cadastros no teste grátis.

- **Curto prazo (semanas):** Google Ads → topo da busca imediatamente.
- **Médio/longo prazo (3–9 meses):** SEO orgânico → páginas de conteúdo + links + tempo.

---

## 1. Configuração (fazer primeiro — sem isso, anúncio é dinheiro no escuro)

### 1.1 Google Search Console
1. search.google.com/search-console → **Adicionar propriedade → Domínio** → `up.tur.br`.
2. Copie o registro TXT e crie no DNS (painel da Vercel → Domains → up.tur.br → DNS Records).
3. Depois de verificado: **Sitemaps** → enviar `https://www.up.tur.br/sitemap.xml`.
4. **Inspeção de URL** → cole cada página nova e clique em "Solicitar indexação":
   - https://www.up.tur.br/
   - https://www.up.tur.br/sistema-para-excursao
   - https://www.up.tur.br/mapa-de-poltronas-onibus
   - https://www.up.tur.br/como-vender-excursao-online
   - https://www.up.tur.br/embarque-qr-code-excursao
   - https://www.up.tur.br/planilha-de-excursao-gratis

### 1.2 Redirect permanente
Vercel → Settings → Domains → `up.tur.br` → redirecionar para `www.up.tur.br` com **308** (hoje está 307).

### 1.3 Google Analytics 4
1. analytics.google.com → Admin → Criar propriedade "UPTUR — Landing" (fuso America/Sao_Paulo, moeda BRL).
2. Fluxo de dados Web → `https://www.up.tur.br` → copie o ID `G-XXXXXXX`.
3. Admin → Fluxo de dados → **Configurar marcação → Configurar seus domínios** → adicione `up.tur.br` e `app.up.tur.br` (medição entre domínios).
4. Depois de 24h com tráfego: Admin → **Eventos** → marque como *evento-chave*: `sign_up_click`, `whatsapp_click`, `file_download`.

### 1.4 Variáveis de ambiente na Vercel (projeto da landing → Settings → Environment Variables)

| Variável | Exemplo | Para quê |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXX` | Google Analytics 4 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-XXXXXXXXX` | Tag do Google Ads |
| `NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL` | `AbC-dEfGhIjK` | Conversão "Clique em Começar" |
| `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL` | `XyZ-123` | Conversão "Clique no WhatsApp" |
| `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | `1234567890` | Pixel da Meta (opcional) |
| `GOOGLE_SITE_VERIFICATION` | código da meta tag | Só se não verificar por DNS |

Depois de criar, faça **Redeploy**. Nada precisa mudar no código.

O que é medido automaticamente em todas as páginas:
- clique em qualquer link para `app.up.tur.br/register` → `sign_up_click` + conversão Ads + `Lead` na Meta
- clique em qualquer link do WhatsApp → `whatsapp_click` + conversão Ads + `Contact` na Meta
- download da planilha → `file_download` + `Lead` na Meta

> Próximo passo técnico: medir o **cadastro concluído** (não só o clique) colocando a tag de
> conversão na tela pós-cadastro do Laravel (`app.up.tur.br`). É a conversão que o Google
> deve otimizar. Me passe o ID/rótulo quando criar a conversão.

---

## 2. Google Ads — campanha de Pesquisa

### 2.1 Estrutura
- **Tipo:** Pesquisa. **Desmarque** "Rede de Display" e "Parceiros de pesquisa".
- **Local:** Brasil — opção "Presença: pessoas que estão ou costumam estar nos locais".
- **Idioma:** Português.
- **Orçamento inicial:** R$ 30/dia (~R$ 900/mês) por 4 semanas. Conferir CPC real no *Planejador de palavras-chave* antes.
- **Lances:**
  - Semanas 1–3: *Maximizar cliques* com CPC máximo de R$ 4.
  - Com 15+ conversões em 30 dias: *Maximizar conversões*.
  - Com 30+ conversões/mês: *CPA desejado* (comece com o CPA real observado).
- **Conta de referência:** plano R$ 197/mês. Um cliente que fica 6 meses = ~R$ 1.180.
  CPA de cadastro até ~R$ 80–120 costuma se pagar se 1 em cada 4–6 testes vira assinante — acompanhe essa taxa.

### 2.2 Grupos de anúncios (use correspondência de **frase** "..." e **exata** [...])

**Grupo A — Sistema para excursão** → página `/sistema-para-excursao`
- "sistema para excursão", [sistema para excursão]
- "sistema de excursão", "programa para excursão"
- "software para excursão", "aplicativo para excursão"
- "sistema para excursionista", "app para excursionista"
- "sistema para controle de excursão"

**Grupo B — Agência de turismo** → página inicial
- "sistema para agência de turismo", [sistema para agência de turismo]
- "software para agência de turismo", "sistema para agência de viagens"
- "sistema de reservas para agência de turismo"
- "sistema para turismo rodoviário"

**Grupo C — Mapa de poltronas / reservas** → `/mapa-de-poltronas-onibus`
- "mapa de poltronas ônibus", "sistema de reserva de poltronas"
- "reserva de assentos excursão", "venda de poltronas excursão"

> **Não** anuncie "planilha de excursão" no início: é busca de quem quer algo grátis.
> Essa página trabalha no orgânico e alimenta remarketing.

### 2.3 Palavras-chave negativas (nível da campanha)
Evitam pagar clique de viajante procurando excursão para comprar, ou de quem procura emprego:

```
emprego, vaga, vagas, curso, faculdade, tcc, apostila, pdf, download, crackeado, pirata,
passagem, passagens, rodoviária, clickbus, buser, "excursão para", "pacote de excursão",
"excursões para", viagem barata, hotel, pousada, cruzeiro, "transporte escolar",
"ônibus urbano", consulta cnpj, reclame aqui
```
Revise o relatório **Termos de pesquisa** toda semana e negative o que não tem a ver.

### 2.4 Anúncio responsivo (títulos ≤ 30 caracteres, descrições ≤ 90 — já conferidos)

Títulos:
1. Sistema para Excursão *(fixar na posição 1 no grupo A)*
2. Teste Grátis por 1 Mês
3. Mapa de Poltronas Online
4. Embarque por QR Code
5. Venda Excursão 24h Online
6. Receba por Pix e Cartão
7. Cliente Escolhe a Poltrona
8. Lista de Embarque no Celular
9. Site de Vendas Incluso
10. Chega de Planilha
11. Sem Cartão de Crédito
12. Sem Fidelidade
13. A partir de R$197/mês
14. Para Agências de Turismo
15. UPTUR Sistema de Excursão

Descrições:
1. Cliente escolhe a poltrona, paga por Pix e recebe QR Code de embarque. Teste grátis.
2. Pare de controlar excursão no caderno e no WhatsApp. Tudo num sistema só, 100% online.
3. Site da agência com os pacotes publicados sozinhos. Venda 24h, até de madrugada.
4. 1 mês grátis, sem cartão e sem fidelidade. Funciona no celular e no computador.

### 2.5 Recursos (extensões)
- **Sitelinks:** Mapa de Poltronas → `/mapa-de-poltronas-onibus` · Embarque QR Code → `/embarque-qr-code-excursao` · Planilha Grátis → `/planilha-de-excursao-gratis` · Planos → `/#planos`
- **Frases de destaque:** 1 mês grátis · Sem cartão de crédito · Sem fidelidade · Pix e cartão · Suporte por WhatsApp
- **Snippet estruturado (Recursos):** Mapa de poltronas, Pagamento online, Embarque QR Code, Site da agência, Relatórios
- **Ligação/WhatsApp:** +55 87 98856-7300 (só em horário de atendimento)

### 2.6 Rotina semanal (15 min)
1. Termos de pesquisa → negativar lixo, adicionar termos bons como palavra-chave.
2. Custo por conversão por grupo → pausar palavra-chave com gasto > 2× CPA sem conversão.
3. Índice de qualidade < 5 → alinhar anúncio e página de destino.
4. Anotar: cadastros no período e quantos viraram assinantes.

### 2.7 Remarketing (depois de ~1.000 visitas/mês)
Público "visitou a landing e não clicou em Começar" → anúncios na Meta (Instagram) com vídeo curto do mapa de poltronas + "1 mês grátis".

---

## 3. SEO orgânico — próximos passos

### 3.1 Links (o que mais pesa agora)
- **Link "Feito com UPTUR" no rodapé dos sites das agências** (turismo_site): cada agência cliente vira um link para `www.up.tur.br/sistema-para-excursao`. É o link mais barato e escalável que existe.
- Google Meu Negócio (Fase 3) com categoria "Empresa de software".
- Perfis com link: Instagram, YouTube, LinkedIn, Facebook — todos apontando para `https://www.up.tur.br`.
- Parcerias: empresas de fretamento, associações de excursionistas, grupos de guias.

### 3.2 Calendário de conteúdo (1 a 2 páginas por mês)
- Como calcular o preço de uma excursão (com a planilha)
- Contrato de excursão: o que colocar (modelo)
- Documentos e lista de passageiros para viagem de ônibus fretado
- Como fretar ônibus para excursão: o que perguntar à empresa
- Excursão bate-volta: como organizar
- Como divulgar excursão no Instagram e WhatsApp (roteiro de posts)

Cada página nova entra em `app/_content/paginas.ts` e aparece sozinha no sitemap, no rodapé e nos "Leia também".

### 3.3 Prova social (Fase 3)
Depoimentos **reais** com nome, agência e cidade (com autorização) + prints do sistema em uso.
Nada inventado: o Google e os clientes percebem.

### 3.4 KPIs mensais
| Métrica | Onde ver | Meta 90 dias |
|---|---|---|
| Impressões orgânicas | Search Console | crescer mês a mês |
| Posição média "sistema para excursão" | Search Console | top 10 |
| Cliques em Começar | GA4 (`sign_up_click`) | acompanhar |
| Cadastros concluídos | painel do app | acompanhar |
| Custo por cadastro (Ads) | Google Ads | < R$ 100 |
| Cadastro → assinante | painel do app | > 20% |
