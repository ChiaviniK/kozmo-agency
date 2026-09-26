# Orquestração Multi-Agente — AGENTS.md

Este repositório possui uma equipe de 12 sub-agentes especializados configurados para atuar em sinergia no desenvolvimento da plataforma da Agência Esportiva.

## Catálogo de Sub-Agentes

| Agente | Arquivo | Responsabilidade Principal |
| :--- | :--- | :--- |
| **Lead Designer** | `.claude/agents/lead-designer.md` | **Liderança em Design Esportivo**, UI/UX, Design System Apex Combat, Motion e Identidade Visual. |
| **Architect** | `.claude/agents/architect.md` | Clean Architecture, separação de camadas, escalabilidade e registros de ADRs. |
| **Researcher** | `.claude/agents/researcher.md` | Pesquisa no codebase, navegação no grafo de conhecimento (Graphify) e análise prévia. |
| **Backend** | `.claude/agents/backend.md` | APIs RESTful, use cases, domínio de contratos e atletas, validação Zod. |
| **Frontend** | `.claude/agents/frontend.md` | Páginas Next.js, Server Components, otimização de imagens de combate e reatividade. |
| **Database** | `.claude/agents/database.md` | Modelagem PostgreSQL, Prisma ORM, migrations seguras e índices de performance. |
| **Security Reviewer** | `.claude/agents/security-reviewer.md` | Auditoria OWASP, LGPD, autorização por recurso (anti-IDOR) e proteção de segredos. |
| **Test Engineer** | `.claude/agents/test-engineer.md` | Automação de testes unitários, integração e Playwright E2E. |
| **Code Reviewer** | `.claude/agents/code-reviewer.md` | Clean Code, refatoração, conformidade SOLID e prevenção de duplicações. |
| **DevOps** | `.claude/agents/devops.md` | Docker multi-stage, pipelines de CI/CD, observabilidade e infraestrutura. |
| **Accessibility Reviewer** | `.claude/agents/accessibility-reviewer.md` | Auditoria de contraste em dark mode, navegação por teclado e conformidade WCAG 2.1 AA. |
| **Documentation Writer** | `.claude/agents/documentation-writer.md` | Manutenção de specs em `docs/specs/` e relatórios de tasks em `docs/tasks/`. |

## Protocolo de Cooperação
1. O **Researcher** consulta o grafo Graphify e analisa contratos.
2. O **Architect** ou **Lead Designer** define o plano de implementação visual e estrutural.
3. Os agentes **Backend** e **Frontend** codificam a solução em blocos pequenos.
4. O **Security Reviewer**, **Code Reviewer** e **Accessibility Reviewer** validam o código entregue.
5. O **Documentation Writer** gera o relatório final com as métricas do Graphify em `docs/tasks/`.
