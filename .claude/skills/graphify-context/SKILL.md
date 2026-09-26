---
name: graphify-context
description: Consulta o grafo de conhecimento persistente do projeto gerado pelo Graphify para obter contexto do codebase com redução drástica no consumo de tokens.
---

# Skill: graphify-context

## Quando Usar
- No início de qualquer sessão de trabalho ou nova tarefa.
- Na fase **RESEARCH** do workflow antes de abrir ou editar arquivos.
- Para rastrear relacionamentos e impactos de uma alteração arquitetural.

## Passos de Execução
1. Verifique se `graphify-out/graph.json` existe. Se não existir, execute a indexação inicial do Graphify no projeto.
2. Execute a consulta ao grafo:
   - Para contexto amplo (busca em largura / BFS):
     `python -c "import json; from pathlib import Path; ..."` ou execute `/graphify query \"[termo de busca]\"`
   - Para traçar dependências entre dois nós:
     `python -c \"...\"` ou execute `/graphify path \"Origem\" \"Destino\"`
   - Para obter a explicação detalhada de um nó:
     `python -c \"...\"` ou execute `/graphify explain \"NomeDoNo\"`
3. Leia apenas os arquivos e nós destacados pelo grafo como estritamente relevantes para a tarefa.

## Após Implementações no Código
Atualize o grafo incrementalmente para que o conhecimento permaneça sincronizado:
`/graphify . --update --no-viz`
