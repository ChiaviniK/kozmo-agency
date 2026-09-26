# Task Report: Squad Lineup (FIFA Style), Botão Voltar ao Topo & Modelo de Patrocínio por Competição (Sem "Vakinha")

**Data:** 2026-09-26  
**Agentes Envolvidos:** architect · lead-designer · frontend · database · documentation-writer  
**Repositório GitHub:** [https://github.com/ChiaviniK/kozmo-agency](https://github.com/ChiaviniK/kozmo-agency)

## 1. Resumo da Entrega
Implementação de três melhorias estratégicas na plataforma **Kozmo Agency**:

1. **Botão Flutuante "Voltar ao Início" (`ScrollToTop`):**
   - Ancorado na parte inferior direita da tela (`bottom-6 right-6`), com fade-in suave ao rolar além de 300px.
   - Rolagem animada suave de volta ao topo (`behavior: 'smooth'`), anel de foco dourado e rótulo acessível.

2. **Kozmo Squad Lineup (Formação Tática Estilo FIFA / Ultimate Team):**
   - Vitrine panorâmica reunindo todo o elenco oficial (Eduardo Carvalho 🇧🇷, Monique Costa 🟣, Yago Carioca 🔵, Gustavo Veiga ⚪) lado a lado em pose de equipe.
   - Hover tático imersivo: o atleta focado expande e recebe iluminação dourada e bordas nítidas, enquanto os demais atletas recebem suave desfoque monocromático.
   - Ações imediatas por atleta:
     - **[ Ficha ]** -> Acesso direto ao media kit individual (`/athletes/[slug]`).
     - **[ Apoiar Camp ]** -> Abre instantaneamente o modal oficial de patrocínio com a próxima missão competitiva do lutador.

3. **Arquitetura de "Cotas de Patrocínio de Camp" (Eliminação da Estética Amadora de "Vakinha"):**
   - Substituição total do formato de vaquinha pelo padrão executivo internacional de patrocínio esportivo pontual:
     - **Cota Supporter (R$ 250):** Apoio individual direto com nome no mural oficial de apoiadores, agradecimento nos stories e boletim VIP de bastidores.
     - **Cota Corner (R$ 1.500):** Patrocinador regional com aplicação da logo no vestuário de treino e fotos oficiais em alta resolução.
     - **Cota Master (R$ 5.000):** Patch principal de destaque no kimono de competição oficial, direito de imagem e menção em entrevistas.
   - Metas de captação reais mapeadas para cada atleta:
     - Eduardo Carvalho: *Mundial de Jiu-Jitsu IBJJF 2026 (Long Beach, CA)*
     - Monique Costa: *Pan-Americano No-Gi IBJJF (Kissimmee, FL)*
     - Yago Carioca: *Campeonato Brasileiro CBJJ 2026 (Barueri, SP)*
     - Gustavo Veiga: *Curitiba Summer Open CBJJ (Curitiba, PR)*
   - Modalidades oficiais de repasse: PIX Desportivo, Transferência Bancária ou Nota Fiscal com recibo de patrocínio desportivo.

## 2. Validação Técnica do Build
- **Compilação Next.js 15:** `pnpm build` finalizado com sucesso em 24.1s (zero erros de tipagem TypeScript ou rotas).
- **Rotas Estáticas SSG (9/9):**
  - `/` (inclui Hero, Marquee, SquadLineup, Spotlight Interativo, Filosofia, Roster Preview e Contato)
  - `/_not-found`
  - `/roster`
  - `/athletes/eduardo-carvalho`
  - `/athletes/monique-costa`
  - `/athletes/yago-carioca`
  - `/athletes/gustavo-veiga`

## 3. Métricas Graphify
- **Nós no Grafo:** 609 nós mapeados
- **Arestas de Relacionamento:** 547 arestas
- **Comunidades Detectadas:** 95 comunidades
- **Atualização:** AST local sem custo de API (`python -m graphify update .`)
