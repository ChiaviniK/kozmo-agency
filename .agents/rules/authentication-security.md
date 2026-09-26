# Rule: Autenticação Segura

## Credenciais e Login
- Respostas de falha de login devem utilizar mensagens genéricas ("E-mail ou senha inválidos"), nunca revelando se o usuário existe.
- Rate limiting obrigatório nos endpoints de autenticação e recuperação de senha para mitigar ataques de força bruta.
- Suporte a MFA (Autenticação Multifator) para perfis administrativos e agentes.

## Política de Senhas
- Senhas hasheadas exclusivamente com Argon2id ou bcrypt com alto fator de custo.
- Senhas nunca devem ser armazenadas em texto plano nem em logs.
- Links de redefinição de senha devem possuir expiração curta (máximo 15 minutos) e uso único (token invalidado após consumo).

## Sessões e Tokens
- Access tokens com ciclo de vida curto (ex: 15 minutos).
- Refresh tokens rotativos, revogáveis e armazenados em banco com hash.
- Cookies de autenticação obrigatoriamente configurados com flags: `HttpOnly`, `Secure` e `SameSite=Strict` ou `Lax`.
- Proibido armazenar tokens de autenticação sensíveis em `localStorage` quando houver risco de XSS.
