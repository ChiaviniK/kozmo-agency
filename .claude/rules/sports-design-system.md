# Rule: Excelência Mandatória em Design Esportivo (Apex Combat UI)

## Mandato de Design de Elite
Todo componente visual, página ou fluxo de usuário criado ou editado neste projeto deve seguir a filosofia e os tokens do **Apex Combat UI** (`docs/specs/design-system.md`). Interfaces amadoras, com visual corporativo genérico ou sem energia atlética são estritamente proibidas.

## Diretrizes Mandatórias de Interface

1. **Estética Atlética & Dark Mode Imersivo:**
   - O fundo padrão deve utilizar os tons profundos de ônix (`--apex-bg-primary: #09090B` e `--apex-bg-surface: #121216`).
   - Cards e superfícies devem utilizar bordas sutis com gradientes suaves ou highlights metálicos (`--apex-border-subtle: #272730`).
   - Acentos primários de prestígio devem utilizar o Ouro Atlético (`--apex-gold-500: #F59E0B`), com efeito de glow controlado em elementos de campeões e destaques.

2. **Tipografia de Alto Impacto:**
   - Títulos de lutas, nomes de atletas e chamadas de evento devem utilizar fontes display com corte esportivo, tracking assertivo e maiúsculas marcantes (Syne, Clash Display, Anton ou Bebas Neue).
   - Métricas (cartel V-D-E, taxa de finalização, valores financeiros) devem utilizar fontes com numerais tabulares (`tabular-nums`) para perfeito alinhamento visual.

3. **Fotografia e Componentes de Atletas:**
   - Cards de lutadores devem privilegiar fotos recortadas (PNG/WebP transparente) com efeito *cutout* vazando sutilmente sobre a borda superior do cartão.
   - Badges visuais dinâmicos para a faixa de Jiu-Jitsu do atleta com suas cores autênticas (Branca, Azul, Roxa, Marrom, Preta com ponteira vermelha).
   - Radares de performance (SVG) limpos e fluidos para demonstrar cardio, força, quedas, guarda, passagem e finalização.

4. **Movimento, Microinterações e Feedback Visual:**
   - Microinterações rápidas (150ms-250ms) com física precisa (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Efeito de brilho direcional (shimmer sutil) ao passar o cursor sobre botões de ação e cards principais.
   - Respeito mandatório a preferências de movimento reduzido (`prefers-reduced-motion`).

5. **Responsividade e Mobile-First para Eventos:**
   - A interface do Media Kit e da agenda de lutas deve ser perfeita em smartphones, permitindo que agentes, promotores de eventos e patrocinadores consumam as informações à beira do tatame sem perda de contexto ou legibilidade.
