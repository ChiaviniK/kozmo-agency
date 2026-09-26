# Rule: Reaproveitamento de Código e Componentes

## Quando Reaproveitar
- Reaproveite quando a lógica for duplicada em múltiplos pontos ou for uma regra essencial do domínio esportivo (ex: cálculo de idade atlética, conversão de peso em kg/lbs).
- Extraia componentes visuais quando houver padrão recorrente no design system (botões angulares, badges de faixa, cartões de estatísticas).

## Onde Organizar
- **Frontend UI:** `packages/ui` ou `src/components/ui` para componentes primitivos (botões, inputs, cards, modais).
- **Tipos e Contratos:** `packages/shared` para tipos compartilhados entre frontend e backend.
- **Utilitários Puros:** Funções puras e sem efeitos colaterais em pastas `utils/` devidamente testadas com testes unitários.

## Evitando Armadilhas de Reuso
- Não crie abstrações universais para componentes que apenas se parecem visualmente, mas possuem propósitos e ciclos de vida de negócio completamente distintos.
- Prefira duplicar duas linhas de código simples a criar uma dependência prematura e acoplada.
