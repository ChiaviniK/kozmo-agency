# Apex Combat & Athletic Gold — Design System Specification

## 1. Filosofia de Design & Identidade Visual

O **Apex Combat UI** foi concebido especificamente para esportes de combate e artes marciais de alta performance (Jiu-Jitsu Brasileiro, Grappling, MMA).

A interface não deve parecer um painel corporativo monótono ou genérico. Ela deve transparecer:
- **Poder, Foco e Disciplina:** Transições rápidas e cirúrgicas, ângulos arrojados, tipografia display imersiva que remete a cartazes de campeonatos mundiais (ADCC, UFC, IBJJF).
- **Prestígio e Excelência:** Contraste intencional entre fundos escuros profundos (*Deep Onyx*) e acentos metálicos dourados (*Athletic Gold*), refletindo medalhas douradas e faixas de graduação máxima.
- **Dinamismo e Combate:** Acentos carmesim (*Submission Crimson*) para contagens regressivas de lutas, status de finalização e alertas de alta tensão.
- **Clareza de Dados:** Apresentação elegante e legível de dados densos (estatísticas de cartel de lutas, radar de atributos físicos, prazos contratuais de patrocínio).

---

## 2. Paleta Cromática & Design Tokens

### 2.1 Cores Primárias e Neutras (Fundos e Superfícies)

```css
:root {
  /* Bases de Fundo (Dark Mode Nativo e Imersivo) */
  --apex-bg-primary: #09090B;        /* Onyx Profundo - Fundo principal da aplicação */
  --apex-bg-surface: #121216;        /* Carbon Dark - Cards, modais e containers */
  --apex-bg-elevated: #18181F;       /* Surface Elevada - Dropdowns e tooltips */
  --apex-border-subtle: #272730;     /* Bordas refinadas e divisores */
  --apex-border-highlight: #3F3F4E;  /* Bordas em hover e foco */

  /* Acentos de Prestígio e Conquista (Athletic Gold) */
  --apex-gold-50: #FFFBEB;
  --apex-gold-400: #FBBF24;
  --apex-gold-500: #F59E0B;          /* Ouro Principal: Botões primários, medalhas, destaques */
  --apex-gold-600: #D97706;          /* Ouro Queimado: Bordas e estados de active */
  --apex-gold-glow: rgba(245, 158, 11, 0.25); /* Glow radiante para cards de campeões */

  /* Acentos de Combate e Alerta (Submission Crimson) */
  --apex-crimson-500: #EF4444;       /* Alerta, contagem regressiva de luta, finalização */
  --apex-crimson-glow: rgba(239, 68, 68, 0.2);

  /* Tatame & Vitória (Championship Green) */
  --apex-victory-500: #10B981;       /* Vitórias no cartel, contratos aprovados */

  /* Tipografia & Contraste */
  --apex-text-white: #FFFFFF;        /* Títulos principais e valores de estatísticas */
  --apex-text-muted: #A1A1AA;        /* Labels secundárias e descrições */
  --apex-text-dim: #71717A;          /* Metadados e datas */
}
```

### 2.2 Graduações das Faixas de Jiu-Jitsu (Rank Colors)

Cada faixa possui um token específico para badges e contornos dinâmicos nos cartões de atletas:
- **Faixa Branca:** `#E4E4E7` com borda escura.
- **Faixa Azul:** `#2563EB` (Royal Blue) com glow sutil.
- **Faixa Roxa:** `#9333EA` (Deep Purple) - prestígio técnico.
- **Faixa Marrom:** `#78350F` (Rich Earth/Brown).
- **Faixa Preta:** `#171717` com ponta vermelha característica (`#DC2626`).
- **Faixa Coral / Vermelha:** `#DC2626` / `#991B1B`.

---

## 3. Tipografia & Escala Visual

A hierarquia tipográfica combina impacto visceral nos títulos com legibilidade cristalina nas estatísticas e tabelas:

1. **Display & Títulos Esportivos (Headings):**
   - Famílias recomendadas: `Syne`, `Clash Display`, `Anton` ou `Bebas Neue`.
   - Propriedades: `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: -0.02em` a `+0.05em`.
   - Exemplo: `h1` em páginas de lutadores ou hero section com visual agressivo e letras maciças.
2. **Corpo de Texto & UI (Body):**
   - Famílias: `Inter`, `Geist Sans` ou `Plus Jakarta Sans`.
   - Propriedades: `font-feature-settings: "cv02", "cv03", "cv04", "cv11"`.
3. **Métricas, Cartel e Números (Data Display):**
   - Propriedades: `font-variant-numeric: tabular-nums`.
   - Garante alinhamento perfeito de colunas em tabelas de lutas e gráficos financeiros de patrocínio.

---

## 4. Componentes Chave da Agência Esportiva

### 4.1 Card 3D do Atleta (`AthleteCombatCard3D`)
O componente central de impacto visual do projeto, unindo a força do combate às microinterações editoriais modernas (inspiradas no dinamismo de `gallery-play.be` e nos materiais de `referencias/`):
- **Motor de Física 3D & Parallax:**
  - `perspective: 1200px` no container pai com `transform-style: preserve-3d`.
  - Rotação dinâmica em tempo real nos eixos X e Y (`rotateX`, `rotateY`) acompanhando a posição do cursor (ou giroscópio do smartphone).
  - Camada de reflexo holográfico (*glare sheen*) calculada dinamicamente via gradiente radial móvel (`--mouse-x`, `--mouse-y`).
- **Camadas de Profundidade (Z-Index Espacial):**
  - **Base Layer (`translateZ(0px)`):** Fundo em carbono escuro com textura radial sutil.
  - **Badge Layer (`translateZ(35px)`):** Faixa de Jiu-Jitsu oficial, categoria de peso e selo de campeão flutuando à frente da base.
  - **Fighter Cutout Layer (`translateZ(60px) scale(1.04)`):** Foto em alta definição recortada do atleta vazando o limite superior com sombra dramática projetada sobre as camadas inferiores.
  - **Telemetry Stats Layer (`translateZ(45px)`):** Placar de cartel (V-D-E), taxa de finalização, idade e envergadura em container translúcido no rodapé do card.
- **Alternância Interativa:**
  - Botão de alternância suave para visão de **Radar de Atributos SVG (6 eixos)** sem quebrar o efeito 3D da carta.

### 4.2 Gallery Play Marquee & Pill Badges
- **Infinite Marquee Ticker:** Faixa de alta energia com tipografia display Anton/Syne deslizando continuamente com separadores em estrelas e cores esportivas vivas.
- **Pill Badges de Alta Saturação:**
  - *Electric Blue* (`#213DED`) para Federações e Títulos Mundiais;
  - *Acid Mint* (`#00B181`) para Atletas Invictos e Vitórias Recentes;
  - *Solar Gold* (`#F59E0B`) para Campeões e Faixas Ouro;
  - *Hot Crimson* (`#FF3B4E`) para Avisos de Luta Ao Vivo e Nocautes.

### 4.3 Gráfico de Atributos Físicos e Técnicos (`PerformanceRadar`)
- Polígono SVG de 6 vértices com gradiente radial semitransparente em `--apex-gold-500`:
  1. *Gás / Resistência (Cardio)*
  2. *Explosão / Força (Power)*
  3. *Quedas / Wrestling (Takedowns)*
  4. *Guarda (Guard Game)*
  5. *Passagem de Guarda (Passing)*
  6. *Taxa de Finalização (Finishing)*

### 4.4 Tale of the Tape & Fight Timeline (`FightCountdownTimeline`)
- Bloco angular com especificações anatômicas (Altura, Envergadura, Base/Stance, Precisão de Golpes, Defesa de Quedas).
- Contagem regressiva viva (Dias : Horas : Minutos : Segundos) para a data da pesagem e da luta.

---

## 5. Movimento & Microinterações (Physics)

1. **Easing & Ritmo:**
   - Transições rápidas e decididas: `cubic-bezier(0.16, 1, 0.3, 1)` (spring rápido com parada nítida).
   - Duração padrão: 150ms a 250ms para interações de botões e cards.
2. **Efeitos de Hover & Focus:**
   - Shimmer reflexivo dourado percorrendo o botão ao passar o cursor.
   - Borda luminosa em inputs ao receber foco.
3. **Motion Reduzido:**
   - Respeito mandatório a `@media (prefers-reduced-motion: reduce)`.

