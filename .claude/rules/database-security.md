# Rule: Segurança e Integridade de Banco de Dados

## Consultas Seguras
- Queries devem ser 100% parametrizadas.
- Todas as consultas devem conter filtros de tenant/escopo (`athleteId` ou `sponsorId`) para garantir isolamento de dados.

## Migrations Seguras
- Toda alteração de schema deve ser acompanhada de migration versionada e rastreável.
- Alterações destrutivas (remoção de colunas ou tabelas) devem ser feitas em fases:
  1. Parar de escrever na coluna antiga.
  2. Migrar dados históricos se necessário.
  3. Deletar a coluna em release posterior.
- Proibido adicionar colunas `NOT NULL` sem valor `DEFAULT` em tabelas populosas de produção.

## Permissões de Conexão
- A aplicação deve conectar com usuário de privilégios mínimos (SELECT, INSERT, UPDATE, DELETE).
- Operações de migration e DDL devem rodar com usuário separado e apenas no pipeline de deploy.
