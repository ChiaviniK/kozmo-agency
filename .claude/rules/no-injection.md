# Rule: Prevenção Contra Vulnerabilidades de Injeção

## Injeção de SQL (SQL Injection)
- Proibido de forma absoluta a concatenação de variáveis ou interpolação de strings em queries SQL.
- Todas as operações com banco devem utilizar ORM (Prisma/TypeORM/SQLAlchemy) ou queries parametrizadas (`$1`, `$2`, etc.).

## Injeção de Comandos (Command Injection)
- Proibido executar comandos no shell do sistema operacional interpolando entradas enviadas pelo usuário.
- Utilize chamadas de API nativas em vez de invocar comandos do sistema via `exec()` ou `spawn()`.

## Cross-Site Scripting (XSS) & Template Injection
- Nunca utilize `dangerouslySetInnerHTML` em componentes React sem sanitização rigorosa via DOMPurify.
- Trate todo dado digitado por usuários (biografias de atletas, descrições de patrocínio) como não confiável, aplicando escaping automático do framework.
