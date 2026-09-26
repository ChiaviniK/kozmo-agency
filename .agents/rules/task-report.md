# Rule: Relatório Obrigatório de Conclusão de Tarefa (Task Report)

## Obrigação de Fechamento
Ao concluir qualquer implementação de feature, bugfix ou refatoração no projeto, o agente deve obrigatoriamente criar um relatório de task em `docs/tasks/YYYY-MM-DD-[feature].md` antes de considerar o trabalho finalizado.

## Seções Obrigatórias do Relatório

1. **Cabeçalho:** Data, Feature, Agentes envolvidos.
2. **Resumo da Entrega:** Descrição técnica do que foi implementado e tabela de arquivos criados/alterados.
3. **Métricas de Economia com Graphify:**
   - Queries Graphify executadas e nós identificados.
   - Tokens estimados consumidos com o uso do grafo (queries + arquivos selecionados).
   - Tokens que seriam consumidos sem o grafo (leitura ingênua de todo o projeto).
   - Fator de redução de tokens obtido.
   - Assertividade do grafo: \( \frac{\text{Nós utilizados}}{\text{Nós retornados}} \times 100\% \).
4. **Validação e Testes:** Comandos executados (lint, testes unitários, build) e status de aprovação.
5. **Riscos Remanescentes e Débito Técnico:** Avaliação de impacto colateral e itens para monitoramento.
