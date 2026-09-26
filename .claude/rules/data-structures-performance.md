# Rule: Estruturas de Dados, Performance e Complexidade Algorítmica

## Escolha Consciente da Estrutura de Dados
Toda decisão que manipula coleções, listas, ordenações ou buscas deve considerar a complexidade de tempo e espaço (Big-O notation) e a escala de dados.

## Diretrizes Práticas por Caso de Uso
1. **Buscas por Chave Única:**
   - Utilize Map ou Set em memória (\( O(1) \)) em vez de percorrer arrays com `.find()` (\( O(n) \)) repetidamente dentro de loops (\( O(n^2) \)).
2. **Filtragem e Ordenação de Atletas:**
   - Operações pesadas de ordenação e filtro em massa devem ser delegadas ao banco de dados com índices B-Tree apropriados, nunca executadas em memória carregando toda a base.
3. **Paginação e Limites de Dados:**
   - Toda rota que retorna múltiplos registros deve aplicar paginação (cursor-based para dados em tempo real ou offset com limite máximo estrito de 50 itens).
4. **Filas de Processamento Assíncrono:**
   - Processamento de vídeos de lutas, geração de PDFs de contratos e envio de notificações devem utilizar filas (Redis/BullMQ) em vez de bloquear o ciclo de resposta HTTP.
5. **Caches:**
   - Caches em memória ou Redis devem possuir TTL (Time To Live) explícito e política de invalidação orientada a eventos para evitar vazamentos de memória (*memory leaks*).
