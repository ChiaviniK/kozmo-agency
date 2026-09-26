# Agência Esportiva — architecture.md

## 1. Visão Arquitetural

A arquitetura do sistema adota o padrão **Clean Architecture / Monolito Modular Moderno em TypeScript**, preparado para separação em microsserviços quando a escala exigir.

O sistema é centrado no domínio esportivo, com isolamento absoluto entre interface de usuário, regras de negócio e adaptadores de infraestrutura e persistência.

```
┌────────────────────────────────────────────────────────┐
│                      APPS / WEB                        │
│   Next.js 15+ (App Router, React 19, Server Components)│
│   TailwindCSS v4 + Radix UI + Framer Motion (Apex UI)  │
└───────────────────────────┬────────────────────────────┘
                            │ REST / Server Actions / tRPC
┌───────────────────────────▼────────────────────────────┐
│                      APPS / API                        │
│   Controllers / Routes / DTOs de Entrada e Saída       │
├────────────────────────────────────────────────────────┤
│                      USE CASES                         │
│   Gestão de Atletas, Matchmaking, Gestão de Contratos  │
├────────────────────────────────────────────────────────┤
│                       DOMAIN                           │
│   Entidades: Athlete, Contract, Sponsor, FightEvent    │
│   Invariantes de negócio e Eventos de Domínio          │
├────────────────────────────────────────────────────────┤
│                   INFRASTRUCTURE                       │
│   Prisma ORM + PostgreSQL / Redis Cache                │
│   Cloudflare R2 / AWS S3 (Mídias e Fotos de Luta)      │
└────────────────────────────────────────────────────────┘
```

## 2. Containers e Módulos Principais

- `apps/web`: Frontend público (landing page da agência, catálogo de atletas, media kits interativos) e portal restrito (dashboard do atleta, painel do patrocinador e painel do agente).
- `apps/api`: Backend com endpoints RESTful, validação estrita via schemas Zod e documentação OpenAPI/Swagger.
- `packages/shared`: Tipos TypeScript compartilhados, constantes esportivas (categorias de peso IBJJF/ADCC, graduações de faixas), schemas de validação Zod.
- `packages/ui`: Biblioteca de componentes de design esportivo reutilizáveis (**Apex Combat UI**).
- `database`: PostgreSQL 16 com migrações versionadas (Prisma Migrate / Flyway) e índices B-Tree e GIN para buscas rápidas.
- `cache`: Redis para cache de perfis públicos de atletas e sessões.
- `storage`: S3/R2 para armazenamento de fotos de ação em 4K, vetores de patrocinadores e documentos de contrato (PDFs com URLs assinadas e expiração curta).

## 3. Padrões Arquiteturais e Guardrails

1. **Separação de Camadas (Clean Architecture):**
   - Controllers/Routes apenas recebem a requisição, validam entrada e delegam para o caso de uso.
   - Use Cases contêm o fluxo da regra de negócio.
   - Entidades de domínio contêm as regras invariantes (ex: um atleta só pode assinar contrato se o período não colidir com cláusula de exclusividade ativa).
   - Repositórios desacoplam o banco de dados do caso de uso.
2. **Design Tokens & Isolamento de UI:**
   - Nenhum estilo de cor ou espaçamento deve ser hardcoded sem usar tokens do Design System (`apex-*`).
3. **Idempotência e Segurança Financeira:**
   - Qualquer mutação de contrato, pagamento ou bônus possui chave de idempotência (`Idempotency-Key`).
4. **Tratamento Global de Erros:**
   - Formato padronizado RFC 7807 (`application/problem+json`).
   - Bloqueio total de vazamento de stack traces em ambiente de produção.
5. **Observabilidade:**
   - Structured JSON logging com `correlationId` em cada requisição.

## 4. Decisões Arquiteturais Registradas (ADRs)

- `ADR-001`: Escolha da stack TypeScript Full-Stack (Next.js + TailwindCSS + PostgreSQL) e Design System Apex Combat.
- `ADR-002`: Estratégia de autenticação JWT em cookies HttpOnly com refresh tokens rotativos e RBAC.
- `ADR-003`: Armazenamento de mídia de alta performance com CDN e transformação de imagem on-the-fly.
