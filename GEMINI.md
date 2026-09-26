# Kozmo Agency (Combat Sports & High Performance) — GEMINI.md

Este documento define as diretrizes nativas para o agente Antigravity / Gemini no projeto da Agência Esportiva.

## Diretrizes Gerais
- Idioma de interação e documentação: Português do Brasil. Código e nomenclaturas técnicas: Inglês.
- O projeto foca em **Artes Marciais (BJJ & Grappling) e Gestão Esportiva de Alto Desempenho**.
- **Design de Elite Mandatório:** Todas as interfaces devem seguir o **Apex Combat UI** (`docs/specs/design-system.md`), priorizando estética visual impactante, alto contraste, dark mode atlético (Onyx e Ouro), tipografia display e componentes esportivos imersivos (Athlete Cards 3D, Radar de Performance, Contagem Regressiva de Lutas).

## Workflow Agêntico RPI+T (Obrigatório)
1. **Research:** Consulte sempre o grafo de conhecimento Graphify (`graphify-out/graph.json`) antes de abrir múltiplos arquivos. Leia as especificações em `docs/specs/`.
2. **Plan:** Formule planos com componentes e arquivos claramente delimitados antes de codificar.
3. **Implement:** Codifique em blocos pequenos, garantindo Clean Code, SOLID e tipagem estrita no TypeScript.
4. **Task Report:** Gere o relatório em `docs/tasks/YYYY-MM-DD-[feature].md` ao finalizar cada entrega, reportando a assertividade e redução de tokens do Graphify.

## Regras Ativas no Workspace
As regras de governança e segurança estão localizadas em `.agents/rules/` e `.claude/rules/`. Dentre elas:
- `sports-design-system.md` — Excelência e rigor em design esportivo
- `agent-security.md` — Princípio de menor privilégio e guardrails
- `dependency-security.md` — Integridade de dependências e lockfiles
- `information-security.md` — LGPD e dados confidenciais de atletas/contratos
- `authentication-security.md` & `authorization-security.md` — RBAC e proteção contra IDOR
- `input-validation.md` & `no-injection.md` — Prevenção contra injeção e validação Zod
- `data-structures-performance.md` — Estruturas de dados otimizadas (Seção 19 do Guia Universal)
- `task-report.md` — Relatório formal com métricas do Graphify

## Graphify no Projeto
- O projeto conta com um grafo de conhecimento persistente configurado em `graphify-out/`.
- Utilize as ferramentas e scripts de consulta para explorar dependências e nós do domínio sem desperdício de tokens.
