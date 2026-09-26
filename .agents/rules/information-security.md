# Rule: Segurança da Informação e Privacidade

## Classificação e Minimização de Dados
- Classifique todos os dados manipulados: Públicos (Media Kit), Internos (agenda de treinos), Confidenciais (valores de patrocínio) e Pessoais/Sensíveis (saúde, documentos, RG/CPF/Passaporte).
- Colete e trafegue apenas o estritamente necessário para cada funcionalidade (princípio da minimização da LGPD).

## Segredos e Credenciais
- Credenciais e chaves de API externas (armazenamento S3, serviços de email) devem residir unicamente em variáveis de ambiente ou secrets managers.
- Jamais persista credenciais no código ou em mensagens.

## Logs Seguros
- Proibido logar senhas, tokens de autorização, dados bancários de atletas, chaves privadas ou valores brutos de contratos.
- Todos os logs de auditoria devem mascarar dados pessoais (`jo***@email.com`) e utilizar `correlationId` para rastreamento.

## Criptografia
- HTTPS/TLS 1.3 obrigatório para todas as conexões em trânsito.
- Dados altamente confidenciais devem ser cifrados em repouso com algoritmos auditados (Argon2id para senhas, AES-256-GCM para dados em repouso).
- Proibido criar ou utilizar algoritmos caseiros de criptografia.
