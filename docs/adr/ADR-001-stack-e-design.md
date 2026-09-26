# ADR-001: Escolha da Stack Tecnológica e do Design System Apex Combat

## Status
Aprovado

## Contexto
A plataforma é uma Agência Esportiva de Alta Performance com foco em atletas de Jiu-Jitsu Brasileiro (BJJ) e artes marciais de combate.
O sistema precisa entregar:
1. Uma experiência visual de elite (design esportivo premium, animações fluidas a 60fps, responsividade extrema para visualização em smartphones de organizadores de eventos e patrocinadores).
2. Alto desempenho no carregamento de fotos recortadas de atletas e mídias de alta resolução (Media Kit digital).
3. Segurança robusta para gestão de contratos de patrocínio confidenciais e conformidade com a LGPD.
4. Compatibilidade com desenvolvimento agêntico e grafo de conhecimento persistente via Graphify.

## Decisão

1. **Frontend e Aplicação Web:**
   - **Framework:** Next.js (App Router com React 19) para excelente performance de renderização estática e dinâmica (SSG/SSR), otimização automática de imagens esportivas (`next/image`) e SEO impecável para o perfil público dos atletas.
   - **Estilização e Design System:** TailwindCSS v4 integrado com Radix UI (acessibilidade) e Framer Motion (microinterações e física esportiva), seguindo o Design System `Apex Combat UI` definido em `docs/specs/design-system.md`.
2. **Backend e API:**
   - **Linguagem & Runtime:** TypeScript / Node.js LTS com arquitetura modular Clean Architecture.
   - **Validação:** Zod em 100% dos contratos de entrada e saída.
3. **Persistência de Dados:**
   - **Banco Relacional:** PostgreSQL 16 com Prisma ORM para garantia de integridade referencial, transações ACID para contratos de patrocínio e migrações versionadas.
   - **Cache:** Redis para memoização de cartéis de lutas, perfis públicos e controle de rate limiting.
4. **Armazenamento de Mídia:**
   - Cloudflare R2 ou AWS S3 com URLs pré-assinadas e CDN global para carregamento ultra-rápido de fotos e vídeos dos lutadores.
5. **Memória Agêntica:**
   - Graphify como grafo persistente do projeto para reduzir consumo de tokens e guiar a navegação contextual dos sub-agentes.

## Consequências
- **Positivas:**
  - Carregamento instantâneo do Media Kit dos atletas por marcas e patrocinadores.
  - Consistência visual absoluta com identidade atlética de prestígio.
  - Segurança comprovada com tipos compartilhados em TypeScript (`packages/shared`).
  - Navegação ultra-eficiente dos agentes no codebase via Graphify.
- **Negativas / Mitigações:**
  - Exige rigor na otimização de imagens de combate pesadas (mitigado por conversão automática para WebP/AVIF na ingestão de fotos).
