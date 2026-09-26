# Agência Esportiva — api-contracts.md

## 1. Padrão de Comunicação

- Todas as rotas usam formato JSON com convenção camelCase no body e kebab-case nas URLs.
- Headers padrão: `Content-Type: application/json`, `X-Request-Id: <uuid>`, `Idempotency-Key: <uuid>` (para mutações financeiras).
- Respostas de erro utilizam o padrão RFC 7807 (`ProblemDetails`):
  ```json
  {
    "type": "https://api.bjjagency.com/errors/invalid-contract-dates",
    "title": "Invalid Contract Dates",
    "status": 400,
    "detail": "End date must be strictly after start date",
    "instance": "/api/contracts"
  }
  ```

## 2. Endpoints Principais

### 2.1 Atletas (Athletes)

- `GET /api/v1/athletes`
  - Filtros: `belt`, `weightClass`, `discipline`, `status`, `page`, `limit`
  - Resposta: Lista paginada de perfis resumidos de atletas.
- `GET /api/v1/athletes/:slug/mediakit` (Endpoint Público de Alto Desempenho)
  - Resposta: Ficha técnica completa, cartel de lutas, histórico de medalhas, fotos de ação otimizadas e contatos para patrocínio.
- `POST /api/v1/athletes` [Restrito: AGENT, ADMIN]
  - Criação de novo atleta no portfólio.
- `PUT /api/v1/athletes/:id` [Restrito: ATHLETE (próprio), AGENT, ADMIN]
  - Atualização cadastral e atributos técnicos.

### 2.2 Lutas e Torneios (Fight Events)

- `GET /api/v1/athletes/:id/fights`
  - Histórico de lutas do atleta com método de vitória e contagem regressiva para próximas lutas.
- `POST /api/v1/athletes/:id/fights` [Restrito: AGENT, ADMIN]
  - Registro de novo combate no cartel oficial.

### 2.3 Contratos e Patrocínios (Contracts & Sponsors)

- `GET /api/v1/contracts` [Restrito: AGENT, ADMIN, SPONSOR (apenas próprios)]
  - Listagem de contratos ativos, valores e prazos de vigência.
- `POST /api/v1/contracts` [Restrito: AGENT, ADMIN]
  - Criação de nova minuta de contrato de patrocínio.
- `PATCH /api/v1/contracts/:id/deliverables/:deliverableId` [Restrito: ATHLETE, SPONSOR, AGENT]
  - Marcação de entrega de post/ação publicitária com link de comprovação.
