# Agência Esportiva — domain.md

## 1. Linguagem Ubíqua (Glossário Esportivo & Domínio BJJ)

- **Atleta (Fighter):** Praticante de esporte de combate agenciado pela plataforma, com histórico competitivo e atributos físicos.
- **Faixa / Graduação (Rank):** Nível técnico do praticante no Jiu-Jitsu (Branca, Azul, Roxa, Marrom, Preta, Coral, Vermelha), além de graus (*stripes*).
- **Divisão de Peso (Weight Class):** Categoria oficial de peso de acordo com federações reguladoras (IBJJF, ADCC, AJP, CBJJ), ex: Galo, Pluma, Pena, Leve, Médio, Meio-Pesado, Pesado, Super-Pesado, Pesadíssimo.
- **Modalidade (Discipline):** Gi (com kimono) ou No-Gi (sem kimono / Submission Fighting).
- **Cartel (Record):** Histórico oficial de lutas estruturado em Vitórias (W), Derrotas (L) e Empates (D), discriminado por método de vitória: Finalização (Submission), Pontos, Vantagens, Decisão dos Árbitros ou Desqualificação.
- **Taxa de Finalização (Submission Rate):** Percentual de vitórias conquistadas por finalização (\( \text{Subs} / \text{Total Vitórias} \times 100\% \)).
- **Patrocinador (Sponsor):** Empresa, marca de suplementos, kimono, vestuário esportivo ou marca corporativa que investe financeiramente ou em permuta no atleta.
- **Contrato de Patrocínio (Sponsorship Deal):** Acordo jurídico que vincula o Atleta ao Patrocinador com vigência, valor fixo mensal, bônus por pódio e entregáveis.
- **Entregável de Mídia (Media Deliverable):** Ação publicitária exigida (ex: 2 posts mensais no feed do Instagram com tag da marca, uso do patch oficial no kimono em torneios elegíveis, presença em workshop).
- **Media Kit:** Documento interativo que compila audiência nas redes sociais, demografia de seguidores, histórico de conquistas e propostas de cotas de patrocínio.

---

## 2. Entidades Principais e Agregados

### 2.1 Entidade `Athlete` (Raiz de Agregado)

**Atributos:**
- `id`: UUID v7 (ordenável no tempo)
- `slug`: String única para URL pública do Media Kit (ex: `gabriel-souza-bjj`)
- `name`: String
- `nickname`: String opcional (ex: `"O Tanque"`)
- `birthDate`: Date
- `nationality`: ISO 3166-1 alpha-2
- `discipline`: Enum (`GI`, `NOGI`, `BOTH`)
- `belt`: Enum (`WHITE`, `BLUE`, `PURPLE`, `BROWN`, `BLACK`, `CORAL`, `RED`)
- `weightClass`: Enum (`ROOSTER`, `LIGHT_FEATHER`, `FEATHER`, `LIGHT`, `MIDDLE`, `MEDIUM_HEAVY`, `HEAVY`, `SUPER_HEAVY`, `ULTRA_HEAVY`, `OPEN_WEIGHT`)
- `academy`: String (Equipe/Academia)
- `coach`: String
- `record`: Objeto `{ wins: Int, losses: Int, draws: Int, submissions: Int }`
- `militaryAffiliation`: String opcional (ex: `"Exército Brasileiro"`)
- `instagram`: String opcional (ex: `"carvalhobjj93"`)
- `palmares`: Objeto `{ worldTitles: Int, panAmericanTitles: Int, brazilianTitles: Int, southAmericanTitles: Int, stateTitles: Int, beltsCount: Int }`
- `medalsTally`: Objeto `{ gold: Int, silver: Int, bronze: Int, total: Int }`
- `status`: Enum (`ACTIVE`, `INJURED`, `RETIRED`, `SUSPENDED`)
- `createdAt`, `updatedAt`: Timestamp

**Instância de Referência (Atleta Titular):**
- **Nome:** Eduardo Carvalho (`eduardo-carvalho-bjj`)
- **Graduação:** Faixa Preta de Jiu-Jitsu Brasileiro
- **Filiação Institucional:** Atleta Militar / Exército Brasileiro 🇧🇷
- **Palmarès Principal:** 2x Campeão Mundial, 2x Pan-Americano, 3x Brasileiro, 3x Sul-Americano, 3x Paulista, 3 Cinturões Internacionais
- **Medalhometria:** 104 Medalhas Oficiais (51🥇 Ouro, 31🥈 Prata, 22🥉 Bronze)
- **Instagram:** `@carvalhobjj93` (https://www.instagram.com/carvalhobjj93/)

**Invariantes:**
- O número de `submissions` não pode ser superior a `wins`.
- `medalsTally.total` deve ser rigorosamente igual a `gold + silver + bronze`.
- Um atleta não pode ser agendado para eventos esportivos caso seu status seja `SUSPENDED` ou `INJURED`.
- A taxa de finalização é calculada dinamicamente e memoizada.

### 2.2 Entidade `Sponsor`

**Atributos:**
- `id`: UUID v7
- `companyName`: String
- `industry`: String (Vestuário, Nutrição, Equipamento, Fintech, Saúde)
- `contactEmail`: Email
- `brandLogoUrl`: URL
- `status`: Enum (`PROSPECT`, `ACTIVE_PARTNER`, `INACTIVE`)

### 2.3 Entidade `Contract` (Acordo de Patrocínio)

**Atributos:**
- `id`: UUID v7
- `athleteId`: UUID (FK)
- `sponsorId`: UUID (FK)
- `startDate`: Date
- `endDate`: Date
- `monthlyBaseAmountCents`: BigInt (em centavos para evitar ponto flutuante)
- `currency`: ISO 4217 (BRL, USD, EUR)
- `bonusStructure`: Lista de bônus por torneio (ex: Ouro Mundial IBJJF = +R$ 10.000)
- `status`: Enum (`DRAFT`, `PENDING_SIGNATURES`, `ACTIVE`, `COMPLETED`, `TERMINATED`)
- `exclusiveNiche`: Boolean (Se impede patrocínios concorrentes na mesma categoria de produto)

**Invariantes:**
- `endDate` deve ser estritamente posterior a `startDate`.
- O valor `monthlyBaseAmountCents` deve ser ≥ 0.
- Não pode existir outro contrato com `exclusiveNiche: true` ativo para o mesmo atleta no mesmo nicho de mercado.

### 2.4 Entidade `FightEvent`

**Atributos:**
- `id`: UUID v7
- `athleteId`: UUID (FK)
- `tournamentName`: String (ex: "ADCC World Championship")
- `opponentName`: String
- `eventDate`: DateTime
- `result`: Enum (`PENDING`, `WIN`, `LOSS`, `DRAW`, `NO_CONTEST`)
- `winMethod`: Enum (`SUBMISSION`, `POINTS`, `ADVANTAGES`, `REFEREE_DECISION`, `DQ`) opcional
- `submissionDetails`: String opcional (ex: "Rear Naked Choke / Mata-Leão aos 3m42s")
- `medal`: Enum (`GOLD`, `SILVER`, `BRONZE`, `NONE`)

---

## 3. Políticas de Dados e Privacidade

1. **Dados Médicos e Físicos:**
   - Exames de saúde e relatórios de lesões são dados sensíveis.
   - Devem ser criptografados em repouso com AES-256-GCM.
   - Apenas o Atleta, o Agente responsável e a equipe médica autorizada têm acesso.
2. **Sigilo Financeiro:**
   - Valores contratuais (`monthlyBaseAmountCents`) nunca são expostos em endpoints públicos de Media Kit.
   - Apenas agregados anonimizados de faturamento são visíveis em relatórios gerenciais da agência.
3. **Logs de Auditoria:**
   - Qualquer consulta ou alteração em contratos sensíveis gera registro imutável com `userId`, `timestamp`, `ip` e `motivo`.
