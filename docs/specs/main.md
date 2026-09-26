# Kozmo Agency (Combat Sports & High Performance) — main.md

## 1. Visão do Produto

A **Kozmo Agency** é uma plataforma e agência de representação de atletas de esportes de combate (Jiu-Jitsu Brasileiro / BJJ, Grappling e Artes Marciais) de alto rendimento, conectando atletas a marcas globais, patrocinadores e organizadores de eventos internacionais.

O objetivo do produto é transformar talentos das artes marciais em atletas de nível mundial com sustentabilidade financeira, oferecendo uma experiência digital de impacto visual extremo, profissionalização de contratos e visibilidade orientada por métricas.

## 2. Problema

No ecossistema de esportes de combate (em especial o BJJ):
- Atletas de alta performance frequentemente sofrem com amadorismo na gestão de suas carreiras e captação de patrocínios.
- Marcas e patrocinadores têm dificuldade em mensurar o retorno de investimento (ROI) e engajamento gerado pelos atletas patrocinados.
- Falta um Media Kit digital centralizado, atualizado em tempo real com estatísticas oficiais (cartel, taxa de finalização, títulos mundiais e continentais).
- A gestão de contratos, entregáveis de publicidade e cronograma de torneios é dispersa e propensa a perdas financeiras e quebras contratuais.

## 3. Usuários Principais

1. **Atleta de Alta Performance:**
   - Visualiza sua agenda de lutas, histórico de combates, treinos e compromissos com patrocinadores.
   - Acompanha faturamento, pagamentos pendentes e entregáveis de mídia contratados.
   - Compartilha seu Media Kit dinâmico e perfil profissional com organizadores e marcas.

2. **Agente / Gestor Esportivo:**
   - Gerencia o portfólio de atletas, negociações em andamento e fechamento de contratos.
   - Monitora o pipeline de patrocínios, cláusulas de bônus por medalhas/vitórias e renovações.
   - Faz o matchmaking e inscrição dos atletas nos maiores torneios internacionais (IBJJF, ADCC, AJP, UFC Fight Pass, etc.).

3. **Marca / Patrocinador (Sponsor):**
   - Descobre atletas com alinhamento de público-alvo, demografia e relevância competitiva.
   - Valida entregáveis de posts patrocinados, patches no kimono e aparições em eventos.
   - Acompanha relatórios de exposição de marca e métricas de conversão.

4. **Administrador do Sistema:**
   - Auditoria geral, governança financeira, conformidade com a LGPD e gestão de acessos e papéis.

## 4. Métricas de Sucesso

- **Disponibilidade:** ≥ 99.9%
- **Tempo de Resposta de API (p95):** < 250 ms
- **Lighthouse Performance Score:** ≥ 95 (Next.js SSR / Otimização de imagens de combate em alta definição)
- **Taxa de Erro:** < 0.5%
- **Cobertura Mínima de Testes:** ≥ 80%
- **Conversão de Patrocínio:** Aumento de pelo menos 40% na velocidade de fechamento de contratos através do Media Kit digital dinâmico.

## 5. Escopo Inicial (MVP)

1. **Portal do Atleta & Fighter Profile:**
   - Ficha técnica completa (faixa, peso, cartel V-D-E, finalizações por chave/estrangulamento, academia, títulos).
   - Radar de atributos físicos e técnicos (Gás, Explosão, Quedas, Guarda, Passagem, Finalização).
   - Media Kit público interativo com fotos de ação recortadas em alta resolução e highlights em vídeo.
2. **Hub de Patrocínios & Contratos:**
   - Gestão de contratos ativos, cláusulas financeiras (mensalidade, bônus por título).
   - Checklist de entregáveis de publicidade por atleta.
3. **Agenda de Torneios & Lutas:**
   - Calendário competitivo sincronizado com contagem regressiva para peso e dia da luta.
4. **Design Esportivo de Elite:**
   - Interface com estética brutalista refinada, dark mode nativo, contrastes dinâmicos dourados e transições de combate.

## 6. Não-Escopo Inicial

- Processamento direto de pagamentos via gateway bancário próprio (integração direta virá em fase futura; no MVP gerencia-se o registro contábil e faturas).
- Transmissão ao vivo de vídeo dentro da plataforma (apenas embeds de highlights do YouTube/Vimeo/Instagram).
- Fantasy game ou apostas esportivas.

## 7. Restrições e Conformidade

- **LGPD / Privacidade:** Dados de saúde, exames antidoping e valores confidenciais de contratos exigem criptografia em repouso e controle de acesso rígido (RBAC).
- **Direito de Imagem:** Consentimento explícito e controle de permissões para fotos e vídeos comerciais de atletas.
- **Acessibilidade:** Padrão WCAG 2.1 nível AA garantindo alto contraste e suporte a leitores de tela em modo esportivo escuro.
