# Rule: Clean Code e Legibilidade

## Nomes Significativos
- Identificadores devem revelar intenção no domínio esportivo (`athleteRecord`, `calculateSubmissionRate`, `sponsorActiveDeals`).
- Evite abreviações crípticas (`ath`, `cntr`, `spn`).

## Tamanho e Complexidade de Funções
- Funções devem fazer apenas uma coisa e fazê-la com excelência.
- Prefira funções com menos de 40 linhas.
- Utilize *early return* para reduzir o aninhamento de condicionais e manter o fluxo principal à esquerda.

## Tratamento de Erros e Exceções
- Proibido capturar exceções silenciosamente (`catch (e) {}`).
- Utilize tipos de erro explícitos e lance exceções tipadas de domínio.
- Nunca retorne `null` quando uma coleção vazia ou objeto de resultado (`Result<T, E>`) for mais expressivo.

## Simplicidade e YAGNI
- Não crie camadas de abstração prematuras sem necessidade concreta de negócio.
- O código deve ser tão simples quanto possível, mas não mais simples do que o domínio exige.
