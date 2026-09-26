---
name: task-report
description: Gera o relatório formal de conclusão de tarefa em docs/tasks/YYYY-MM-DD-[feature].md com métricas de redução de tokens e assertividade obtidas via Graphify.
---

# Skill: task-report

## Quando Usar
Ao finalizar qualquer tarefa de implementação, refatoração ou correção de bug, antes de reportar a conclusão ao usuário.

## Passos de Execução
1. Reúna os dados da tarefa:
   - Queries Graphify executadas na fase de pesquisa.
   - Nós identificados pelo grafo vs. nós efetivamente modificados ou lidos.
   - Arquivos criados, alterados ou removidos.
   - Testes executados e status dos linters.
2. Calcule os tokens estimados:
   - `tokens_com_graphify` = tokens das queries + tokens dos arquivos lidos pós-grafo.
   - `tokens_sem_graphify` = leitura naive de todos os arquivos relevantes do projeto.
   - `redução` = `tokens_sem_graphify` / `tokens_com_graphify`.
   - `assertividade` = (`nós_utilizados` / `nós_surfaced`) * 100%.
3. Gere o arquivo `docs/tasks/YYYY-MM-DD-[feature].md` com base no template oficial do projeto.
