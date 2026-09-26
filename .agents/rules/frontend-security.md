# Rule: Segurança de Frontend

## Prevenção a XSS
- Escaping padrão do framework (React/Next.js).
- URLs fornecidas por usuários (ex: links de Instagram ou YouTube) devem ser validadas contra esquemas perigosos (`javascript:`, `data:`). Apenas `http:` e `https:` são permitidos.

## Manipulação de Estado e Dados
- Nunca armazene dados altamente sensíveis de contratos ou informações financeiras em stores globais persistidas sem necessidade.
- Não exponha chaves secretas no bundle do cliente (variáveis públicas devem conter estritamente o prefixo `NEXT_PUBLIC_` e apenas para identificadores públicos).

## Dependências e Bundle
- Monitore o impacto de pacotes no bundle final do cliente (`@next/bundle-analyzer`).
- Evite bibliotecas pesadas para utilitários triviais.
- Nunca importe módulos ou serviços de backend dentro de Client Components.
