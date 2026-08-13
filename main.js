const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "assim que a duda sai da escola, ela se depara com muitas crianças farmando aura",
    alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  },
  {
    enunciado:
      "E uma dessas crianças é o namorado dela, vulgo Leonardo Fatuch, o maior farmador de aura do mundo, e ele está com uma aura muito grande, oq ela faz?",
    alternativas: [
      "Farma mais aura que ele",
      "sai de cabeça baixa e vira uma betinha",
    ],
  },
  {
    enunciado:
      "após isso ela pensa em como ela poder farmar mais aura, e ela pensa em fazer um ritual de farm de aura, oq ela faz?",
    alternativas: [
      "procura por livros de magia negra e faz o ritual",
      "procura por livros de magia branca e faz o ritual",
    ],
  },
  {
    enunciado:
      "a duda consegue fazer o ritual, só que ela invocou o demônio da aura e descobriu que ele era o namorado dela, oq ela faz?",
    alternativas: [
      "tenta conversar com ele para descobrir como farmar aura igual a ele",
      "aceita a derrota e vai embora, pois ele é muito mais forte que ela",
    ],
  },
  {
    enunciado:
      "a",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  caixaAlternativas.innerHTML = "";
  
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botaoAlternativas.addEventListener("click", proximaPergunta);
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function proximaPergunta() {
  atual++;
  
  if (atual < perguntas.length) {
    mostraPergunta();
  } else {
    mostraResultado();
  }
}

function mostraResultado() {
  caixaPerguntas.textContent = "Quiz Finalizado!";
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = "Obrigado por participar do quiz!";
  caixaResultado.style.display = "block";
}

mostraPergunta();