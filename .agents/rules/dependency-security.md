# Rule: Segurança de Dependências

## Antes de Adicionar Qualquer Biblioteca
- Verifique se a funcionalidade já não existe no ecossistema nativo ou nas dependências atuais.
- Avalie a reputação, licença (MIT, Apache 2.0), frequência de atualizações e saúde da comunidade.
- Prefira bibliotecas focadas, leves e com suporte nativo a TypeScript.
- Evite dependências abandonadas, sem tipagem ou com histórico grave de vulnerabilidades conhecidas (CVEs).

## Versionamento e Lockfiles
- O lockfile (`pnpm-lock.yaml`, `package-lock.json` ou `uv.lock`) deve ser sempre mantido e commitado.
- Proibido usar versões flutuantes (`*`, `latest` ou ranges amplos) em dependências de produção.
- Toda adição de dependência deve rodar auditoria de vulnerabilidades (`pnpm audit` / `npm audit`).

## Supply Chain Security
- Nunca instale pacotes com nomes similares aos oficiais sem checar o autor (prevenção contra typosquatting).
- Scripts de `postinstall` devem ser auditados antes da execução.
- Jamais instale dependências de backend em pacotes de componentes de UI frontend.
