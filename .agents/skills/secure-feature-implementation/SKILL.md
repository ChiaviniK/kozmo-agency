---
name: secure-feature-implementation
description: Procedimento passo a passo para implementar novas funcionalidades de forma segura em conformidade com as regras de backend, frontend, banco de dados e LGPD da agência esportiva.
---

# Skill: secure-feature-implementation

## Quando Usar
Sempre que uma nova funcionalidade for desenvolvida, envolvendo novas rotas de API, persistência ou telas de usuário.

## Passos Obrigatórios
1. **Fase RESEARCH:**
   - Consultar o grafo com `graphify query "[contexto da funcionalidade]"`.
   - Ler especificações relevantes em `docs/specs/` (`main.md`, `domain.md`, `security.md`, `design-system.md`).
2. **Fase PLAN:**
   - Produzir plano com lista de arquivos a criar/alterar, validações de entrada, autorizações e testes.
3. **Fase IMPLEMENT:**
   - Implementar contratos de entrada e saída com schemas Zod.
   - Implementar regras de negócio e invariantes no domínio/use case.
   - Implementar validação e interface no frontend conforme o Design System `Apex Combat UI`.
   - Implementar testes unitários e de integração.
4. **Fase VERIFY:**
   - Rodar linter, testes e checagem de tipos TypeScript (`tsc --noEmit`).
   - Auditar segurança (prevenção a IDOR, sem vazamento de segredos).
5. **Fase REPORT:**
   - Invocar a skill `task-report` e registrar o documento de entrega em `docs/tasks/`.
