# Kozmo Agency (Combat Sports & High Performance) — CLAUDE.md

## Idioma de Trabalho
- Responder e documentar preferencialmente em português do Brasil.
- Código, nomes de variáveis, tipos e commits seguem inglês técnico padronizado.

## Antes de Qualquer Tarefa
1. Leia `docs/specs/main.md`.
2. Leia `docs/specs/architecture.md`.
3. Leia `docs/specs/domain.md`.
4. Leia `docs/specs/security.md`.
5. Leia `docs/specs/quality.md`.
6. Leia `docs/specs/design-system.md` (Mandatório: todo componente visual segue o Apex Combat UI).
7. Identifique e respeite as regras ativas em `.claude/rules/`.
8. Se `graphify-out/graph.json` existir, execute uma busca no grafo com `/graphify query "[contexto da tarefa]"` antes de ler arquivos individuais.

## Stack do Projeto
- **Frontend:** Next.js 15+ (App Router, React 19, Server Components) + TailwindCSS v4 + Radix UI + Framer Motion.
- **Design System:** Apex Combat UI (`docs/specs/design-system.md` - Dark Mode Onix, Ouro Atlético e Carmesim de Combate).
- **Backend:** TypeScript / Node.js LTS com Clean Architecture e validação Zod.
- **Banco de Dados:** PostgreSQL 16 com Prisma ORM e migrações versionadas.
- **Cache:** Redis para sessões e perfis de atletas.
- **Storage:** S3/Cloudflare R2 com CDN para fotos de ação recortadas em alta definição e mídia.
- **Testes:** Vitest (unit/integration) e Playwright (E2E).

## Workflow Obrigatório: Research → Plan → Implement → Report
1. **RESEARCH:** Ler especificações e consultar o grafo Graphify sem editar código.
2. **PLAN:** Produzir plano enxuto com arquivos impactados, validações e estratégia de testes.
3. **IMPLEMENT:** Implementar em blocos pequenos respeitando Clean Code, SOLID e o Design System.
4. **VERIFY:** Executar linters, testes e checagem de tipos.
5. **TASK REPORT:** Criar obrigatoriamente o relatório em `docs/tasks/YYYY-MM-DD-[feature].md` registrando as métricas de tokens e assertividade do Graphify.

## Regras Ativas
- @.claude/rules/agent-security.md
- @.claude/rules/dependency-security.md
- @.claude/rules/information-security.md
- @.claude/rules/authentication-security.md
- @.claude/rules/authorization-security.md
- @.claude/rules/input-validation.md
- @.claude/rules/no-injection.md
- @.claude/rules/backend-security.md
- @.claude/rules/frontend-security.md
- @.claude/rules/database-security.md
- @.claude/rules/devops-security.md
- @.claude/rules/clean-code.md
- @.claude/rules/solid.md
- @.claude/rules/reuse.md
- @.claude/rules/task-report.md
- @.claude/rules/data-structures-performance.md
- @.claude/rules/sports-design-system.md

## Regras Invioláveis
- **Segredos:** Nunca ler, imprimir ou versionar chaves, segredos ou arquivos `.env`.
- **Autorização:** Nunca remover validação de autenticação ou autorização por recurso (prevenção contra IDOR/BOLA).
- **Injeção:** Nunca concatenar entradas de usuário em SQL, shells ou comandos.
- **Design de Elite:** Proibido criar interfaces genéricas ou corporativas monótonas; aplicar o design esportivo Apex Combat UI.
- **Banco:** Toda migration deve ter plano de reversão e ser testada previamente.
- **Qualidade:** Nunca ignorar testes quebrados ou silenciar erros com catches vazios.

## Graphify (Grafo de Conhecimento)
- Consultar o grafo no início de cada tarefa: `/graphify query "[termo]"`.
- Manter o grafo atualizado após mudanças no código: `/graphify . --update`.
- Visualização do grafo disponível em `graphify-out/graph.html` e relatório em `graphify-out/GRAPH_REPORT.md`.

## Critério de Pronto (Definition of Done)
- Código compila e passa na checagem estrita de tipos TypeScript.
- Testes unitários e de integração passam.
- Linter e formatação passam sem erros.
- Não há segredos ou dados confidenciais expostos.
- Design System verificado (contraste, alinhamento tabular de estatísticas, microinterações).
- Relatório de conclusão de tarefa gerado em `docs/tasks/`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
