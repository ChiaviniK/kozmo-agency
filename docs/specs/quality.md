# Agência Esportiva — quality.md

## 1. Princípios de Qualidade

1. **Zero Degradação Visual:** Toda alteração de interface deve respeitar estritamente o Design System (`Apex Combat UI`), garantindo fluidez em 60fps, sem quebras de layout (*Cumulative Layout Shift - CLS = 0*).
2. **Tipagem Estrita:** TypeScript com `strict: true`, proibido uso de `any` explícito ou cast abusivo (`as any`).
3. **Padrão de Cobertura de Testes:**
   - Mínimo de 80% de cobertura em regras de negócio e use cases.
   - 100% de cobertura em cálculos financeiros de patrocínio e validações de contratos.
4. **Clean Code & SOLID:**
   - Funções com responsabilidade única e menos de 40 linhas.
   - Early returns em vez de aninhamentos profundos de condicionais (`if/else`).
   - Componentes visuais desacoplados de chamadas diretas de banco de dados.

## 2. Pirâmide de Testes

- **Testes Unitários:** Vitest ou Jest para testar entidades de domínio, cálculos de cartel de lutas, bônus de patrocínio e schemas de validação Zod.
- **Testes de Integração:** Testes de rotas de API com banco de dados de teste (via Testcontainers ou banco Postgres em container), validando isolamento transacional.
- **Testes End-to-End (E2E):** Playwright cobrindo os fluxos críticos:
  1. Criação e publicação de perfil de atleta.
  2. Geração e compartilhamento de link de Media Kit.
  3. Proposta de patrocínio e fluxo de aprovação de entregáveis.

## 3. Web Vitals & Performance Frontend

- **Largest Contentful Paint (LCP):** < 2.0s mesmo com fotos esportivas de alta definição (uso de `next/image` com formato WebP/AVIF e dimensões responsivas).
- **First Input Delay (FID) / Interaction to Next Paint (INP):** < 100ms.
- **Cumulative Layout Shift (CLS):** < 0.05.

## 4. Linting e Formatação

- ESLint com regras estritas (TypeScript-ESLint, React Hooks, A11y).
- Prettier para consistência de código.
- Husky + lint-staged para validação pré-commit.
