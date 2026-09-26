# Rule: Segurança de Backend e APIs

## Endpoints e Exposição
- Todo endpoint deve declarar verbo HTTP, rota, schema de entrada (Zod), schema de resposta e requisitos de autorização.
- Erros não devem expor stack traces ou mensagens internas para os clientes em ambiente de produção.
- Rate limiting aplicado em endpoints de autenticação, upload e listagens públicas.

## Resiliência e Integrações Externas
- Chamadas para APIs externas (ex: feeds de torneios, webhooks de redes sociais) devem conter timeout estrito (máximo 5s) e retries com backoff exponencial.
- Webhooks recebidos devem validar assinatura criptográfica (HMAC).

## Transações e Idempotência
- Mutações que alteram saldos, contratos ou agendamento de lutas devem rodar dentro de transações de banco atômicas.
- Endpoints de criação de contratos e aprovação financeira devem suportar cabeçalho `Idempotency-Key`.
- Paginação obrigatória em todas as listagens para evitar esgotamento de memória (máximo padrão de 50 itens por página).
