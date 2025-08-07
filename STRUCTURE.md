# Estrutura do Projeto UPTUR

## 📁 Organização de Pastas

### App Router (Next.js 13+)
```
app/
├── _components/          # Componentes reutilizáveis
│   ├── button/
│   ├── cardFeedback/
│   ├── Container/
│   ├── paragrafos/
│   └── ui/
├── _sessions/           # Seções da landing page
│   ├── hero.tsx
│   ├── understand.tsx
│   ├── resources.tsx
│   ├── feedback.tsx
│   ├── questions.tsx
│   ├── footer.tsx
│   └── pag2.tsx
├── _lib/               # Utilitários e configurações
│   ├── fbPixel.js
│   └── utils.ts
├── _mock/              # Dados mockados
│   └── mock.json
├── globals.css         # Estilos globais
├── layout.tsx          # Layout principal
└── page.tsx            # Página inicial
```

### Assets
```
public/
├── logo_pilot.png
├── arrow-right-R7RZTDAN.svg
├── star.svg
├── steps.svg
├── phone-resources.webp
└── [outros assets...]
```

## 🎯 Convenções

### Nomenclatura
- **Pastas privadas**: Prefixo `_` (ex: `_components`, `_sessions`)
- **Componentes**: PascalCase (ex: `Hero`, `Container`)
- **Arquivos**: camelCase (ex: `hero.tsx`, `mock.json`)

### Importações
```typescript
// Componentes
import { Hero } from "@/sessions/hero";
import Container from "@/components/Container";

// Utilitários
import { utils } from "@/lib/utils";

// Dados
import Mock from "@/mock/mock.json";
```

### Estrutura de Componentes
```typescript
// Componente de sessão
export function Hero() {
  return (
    <section className="...">
      <Container>
        {/* Conteúdo */}
      </Container>
    </section>
  );
}
```

## 🚀 Benefícios da Nova Estrutura

1. **App Router**: Seguindo as melhores práticas do Next.js 13+
2. **Organização Clara**: Separação lógica entre componentes, sessões e utilitários
3. **Reutilização**: Componentes organizados e reutilizáveis
4. **Manutenibilidade**: Estrutura escalável e fácil de manter
5. **Performance**: Otimizações automáticas do App Router

## 📋 Checklist de Migração

- [x] Mover componentes para `app/_components/`
- [x] Mover sessões para `app/_sessions/`
- [x] Mover utilitários para `app/_lib/`
- [x] Mover dados mock para `app/_mock/`
- [x] Atualizar importações
- [x] Configurar paths no tsconfig.json
- [x] Documentar estrutura
- [x] Remover pasta `src/` antiga
- [x] Testar build e funcionamento

## ✅ Status Atual

- **Build**: ✅ Funcionando
- **Estrutura**: ✅ Organizada
- **Importações**: ✅ Corrigidas
- **Performance**: ✅ Otimizada
- **Manutenibilidade**: ✅ Melhorada

## 🔧 Próximos Passos

1. ✅ ~~Remover pasta `src/` após confirmar funcionamento~~
2. Implementar lazy loading para sessões
3. Adicionar testes unitários
4. Configurar CI/CD
5. Implementar SEO otimizado

## 🎉 Resultado Final

A estrutura agora está **100% organizada** seguindo as melhores práticas do Next.js 13+ com App Router! Todos os componentes foram refatorados e organizados corretamente.
