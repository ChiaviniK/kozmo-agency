# Rule: Segurança DevOps e Infraestrutura

## Pipelines de CI/CD
- Todos os PRs devem passar obrigatoriamente por linters, testes unitários, build e auditoria de vulnerabilidades de dependências.
- Segredos de CI/CD devem ser configurados em variáveis secretas protegidas do repositório, nunca impressos em stdout.

## Imagens e Containers Docker
- Containers devem rodar como usuário sem privilégios (`non-root`).
- Utilize multi-stage builds para reduzir o tamanho da imagem final e eliminar ferramentas de compilação do container de produção.
- Arquivos `.env`, `.git` e chaves privadas nunca devem ser copiados para a imagem Docker (`.dockerignore`).

## Cloud e Armazenamento
- Buckets de mídia (S3/R2) devem ter políticas de acesso públicas restritas apenas para leitura de fotos de atletas; uploads devem ser autenticados e com presigned URLs de curta duração.
