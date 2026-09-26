---
name: sports-ui-design
description: Procedimento e boas práticas para concepção, desenho de layout e prototipação de telas e componentes esportivos de elite seguindo o Design System Apex Combat UI.
---

# Skill: sports-ui-design

## Quando Usar
Ao criar ou remodelar qualquer componente visual, card de atleta, visualização de dados esportivos (radar de atributos, cartel de lutas), landing page ou dashboard da agência esportiva.

## Diretrizes de Execução
1. **Verificação de Tokens:**
   - Conferir variáveis em `docs/specs/design-system.md` e a regra `.claude/rules/sports-design-system.md`.
   - Garantir uso das cores oficiais: Onyx (`#09090B`), Ouro Atlético (`#F59E0B`), Carmesim (`#EF4444`).
2. **Construção do Componente:**
   - Iniciar pelo modelo semântico acessível (HTML semântico com tags adequadas).
   - Aplicar estilização com TailwindCSS utilizando as classes e tokens do tema escuro esportivo.
   - Adicionar camadas de profundidade: sombras sutis, bordas com reflexo suave e cantos dinâmicos.
3. **Fotos e Atletas:**
   - Utilizar recorte com fundo transparente e efeito de sobreposição (*cutout*).
   - Aplicar tags com a faixa do Jiu-Jitsu do atleta com cores padronizadas.
4. **Métricas e Cartel:**
   - Formatar cartel como `XX-YY-ZZ` utilizando fontes tabulares (`tabular-nums`) e destaque para a taxa de finalização.
5. **Microinterações:**
   - Adicionar transições de hover com física de mola rápida (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Incluir verificação de acessibilidade de movimento (`motion-reduce`).
