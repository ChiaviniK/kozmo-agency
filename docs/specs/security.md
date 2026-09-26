# Agência Esportiva — security.md

## 1. Visão de Segurança

A plataforma gerencia ativos de alto valor: contratos confidenciais com cifras expressivas de patrocínio, dados de saúde e desempenho físico de atletas, além de direitos de imagem. A segurança deve ser tratada como requisito primário e não reflexão tardia.

## 2. Modelo de Controle de Acesso (RBAC)

| Papel | Permissões |
| :--- | :--- |
| **ATHLETE** | Leitura e atualização do seu próprio perfil, agenda de lutas, upload de fotos de combate, visualização dos seus próprios contratos e status de entregáveis. Proibido ver dados de outros atletas. |
| **SPONSOR** | Leitura do Media Kit dos atletas contratados, aprovação de entregáveis de publicidade, visualização do contrato correspondente. Proibido acessar atletas não associados. |
| **AGENT** | Gestão de seus atletas agenciados, criação e negociação de contratos, matchmaking de lutas, submissão de propostas para patrocinadores. |
| **ADMIN** | Gestão de permissões, configurações de sistema, auditoria de logs e relatórios gerais. |

## 3. Diretrizes de Proteção de Dados (LGPD / GDPR)

1. **Minimização:** Coletar apenas dados estritamente necessários para a execução dos contratos e performance esportiva.
2. **Criptografia em Trânsito e Repouso:**
   - HTTPS / TLS 1.3 obrigatório para todas as comunicações.
   - Campos confidenciais de contratos e dados médicos criptografados com chaves gerenciadas de modo seguro.
3. **Direito ao Esquecimento e Retenção:**
   - Atletas podem solicitar anonimização de dados após encerramento do contrato de agenciamento, preservando apenas registros contábeis exigidos por lei.

## 4. Prevenção às Vulnerabilidades OWASP Top 10

- **A01: Quebra de Controle de Acesso / BOLA / IDOR:** Toda requisição a `/athletes/:id` ou `/contracts/:id` deve validar a posse do recurso no banco de dados com cláusula explícita de autorização (ex: `WHERE id = :id AND (athlete_id = :currentUserId OR agent_id = :currentUserId)`).
- **A02: Falhas Criptográficas:** Senhas hasheadas com Argon2id. Tokens JWT assinados com chaves assimétricas Ed25519 ou RS256 e expiração máxima de 15 minutos para access tokens.
- **A03: Injeção (SQL/NoSQL/Command):** Proibição categórica de concatenação de strings em queries. Uso de Prisma/Query Builders parametrizados.
- **A04: Design Inseguro:** Limitação de tentativas de login (rate limiting: máx 5 tentativas por minuto por IP), proteção contra força bruta.
- **A05: Configuração Incorreta:** Headers de segurança obrigatórios via Helmet / Next.js headers (`Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`).
- **A07: Falhas de Identificação e Autenticação:** Cookies de autenticação obrigatoriamente configurados com `HttpOnly`, `Secure`, `SameSite=Strict`.
- **A08: Falhas de Software e Integridade de Dados:** Validação com Zod de todos os payloads de entrada. Imagens de atletas com validação de magic bytes para impedir uploads maliciosos.
