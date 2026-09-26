# Rule: Validação de Entrada de Dados

## Validação no Backend
- Valide rigorosamente todos os dados recebidos via HTTP, webhooks, query parameters e formulários utilizando schemas (Zod, Pydantic ou class-validator).
- Rejeite campos desconhecidos (*strip unknown* ou *strict mode*).
- Imponha limites de tamanho, formato e tipo de dados (ex: strings com comprimento máximo definido, emails validados por regex, números com intervalo positivo).

## Validação no Frontend
- Valide inputs no cliente para feedback imediato ao usuário, sem substituir a validação no servidor.
- Mensagens de erro de validação devem orientar o usuário sem expor detalhes internos de implementação ou nomes de colunas do banco de dados.

## Uploads e Arquivos de Mídia
- Valide tamanho máximo de upload de fotos de lutadores e comprovantes de mídia.
- Valide a extensão e os magic bytes reais do arquivo (não confie no header `Content-Type`).
- Renomeie arquivos com hashes aleatórios no servidor antes do armazenamento no storage S3/R2.
