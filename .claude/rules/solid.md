# Rule: Princípios SOLID e Arquitetura de Software

## S — Princípio da Responsabilidade Única (Single Responsibility)
- Cada módulo, classe, use case ou componente deve ter uma única razão para mudar.
- Controllers HTTP apenas orquestram requisições; use cases coordenam regras de negócio; repositórios tratam da persistência.
- Componentes de UI não devem executar queries de banco de dados ou chamadas diretas a APIs externas.

## O — Princípio Aberto/Fechado (Open/Closed)
- Entidades devem estar abertas para extensão, mas fechadas para modificação.
- Novos métodos de pontuação esportiva ou tipos de patrocínio devem ser adicionados através de composição, estratégias (Strategy Pattern) ou polimorfismo.

## L — Princípio de Substituição de Liskov (Liskov Substitution)
- Subclasses ou implementações de repositório devem cumprir integralmente o contrato de suas interfaces sem quebrar comportamentos esperados.

## I — Princípio da Segregação de Interfaces (Interface Segregation)
- Crie interfaces específicas e coesas em vez de interfaces monolíticas. DTOs de leitura de atletas devem ser segregados de DTOs de mutação ou edição.

## D — Princípio da Inversão de Dependência (Dependency Inversion)
- Módulos de alto nível (casos de uso) não devem depender de módulos de baixo nível (Prisma/Redis). Ambos devem depender de contratos/interfaces abstratas.
