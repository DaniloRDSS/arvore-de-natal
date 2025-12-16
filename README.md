# Árvore de Natal Animada em 3D e Neve (HTML/CSS) 🎄

Este é um projeto simples e divertido criado com HTML e CSS puro para celebrar o Natal! Ele apresenta uma árvore de Natal animada em 3D, decorada com estrelas cintilantes e um efeito de "bolhas" (neve ou confete) flutuando ao fundo.

O objetivo principal foi explorar as capacidades de animações e transformações 3D (usando `transform: rotateX/Y/Z` e `perspective`) dentro do CSS.

## Tecnologias Utilizadas

* **HTML5**
* **CSS3** (Incluindo variáveis CSS customizadas para controle de animação e layout).

## Como Executar o Projeto

É extremamente simples rodar este projeto:

1.  **Clone o repositório** ou baixe os arquivos `index.html` e `style.css`.
2.  Abra o arquivo `index.html` no seu navegador web preferido (Chrome, Firefox, Edge, etc.).
3.  Pronto! Você verá a árvore de Natal animada e a mensagem festiva.

## Estrutura do HTML

O projeto é dividido em três seções principais dentro do `<body>`:

1.  **`<div class="bolhas">`**:
    * Cria o efeito de neve ou confete flutuando.
    * Cada `<span>` representa uma partícula individual e usa uma variável CSS (`--i`) para garantir que as animações de queda e opacidade sejam dessincronizadas, criando um efeito orgânico.

2.  **`<div class="a3d">` (A Árvore):**
    * É o contêiner principal para a árvore 3D.
    * Ele define variáveis globais como:
        * `--n-arms`: Número de "galhos" da árvore (neste caso, 2, para o efeito 3D).
        * `--n-stars`: O número total de elementos `🌟` (estrelas/luzes).
        * `--n-loops`: Controla a densidade e o formato dos galhos.
    * Cada elemento `<div class="🌟">` é uma **estrela/luz individual** da decoração. Variáveis CSS customizadas são usadas para posicioná-los aleatoriamente no espaço 3D e controlar seu tamanho:
        * `--rox`, `--roy`, `--roz`: Controlam a rotação no eixo X, Y e Z.
        * `--sf`: Controla a escala (tamanho) da estrela.

3.  **`<div class="cont">`**:
    * O contêiner para a mensagem de texto (`<h1 class="texto">Feliz Natal!!!</h1>`).

## Principais Animações em CSS

O coração deste projeto está nas animações e manipulações 3D feitas inteiramente com CSS:

* **Animação da Árvore (`@keyframes rotate`):**
    A árvore inteira (`.a3d`) gira lentamente em torno do eixo Y e Z, dando a ilusão de um objeto 3D que você está vendo de diferentes ângulos.
* **Animação das Bolhas/Neve (`@keyframes floating` e `@keyframes animate`):**
    Define o movimento vertical (queda) e a mudança de opacidade das partículas. A variação de `animation-delay` em cada `<span>` do HTML garante que elas caiam de forma independente.
* **Efeito Cintilante das Estrelas (`@keyframes pulse`):**
    As estrelas na árvore mudam sutilmente de escala e brilho ao longo do tempo, simulando luzes piscando ou cintilando.

---

## 📝 Créditos e Inspiração

O layout e as animações em 3D da árvore de Natal e o efeito de neve (bolhas) foram inspirados e adaptados de um código-fonte de demonstração encontrado online.

* **Autor Original/Inspiração:** Stella (via @coding.stella)
* **Link Original (se disponível):** [Insira aqui o link exato para o post, Codepen, ou repositório original]

Agradeço ao(à) autor(a) por compartilhar este belo exemplo de animação CSS 3D.

---

Se tiver alguma dúvida ou quiser explorar mais recursos de animação em CSS, me avise! **Feliz Natal!**