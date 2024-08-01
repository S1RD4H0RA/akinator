const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { enunciado: "Você tem vergonha das músicas que escuta?", alternativas:[ {texto:"Sim",afirmacao:"s"},{texto:"Não",afirmacao:"n"},{texto:"Talvez",afirmacao:3} ]},
    { enunciado: "Você tem ciência do que escuta, e gosta sem deixar que os outros te julguem!", alternativas:[ {texto:"Voltar",afirmacao:1} ] },
    { enunciado: "O que sente quando alguém escuta?",  alternativas:[ {texto:"Fica desconfortável",afirmacao:1},{texto:"Fica tranquilo(a)",afirmacao:2} ] },
    { enunciado: "Sente que vai ser odiado se outros escutarem?",alternativas:[ {texto:"Sim",afirmacao:1},{texto:"Não",afirmacao:2}]},
    { enunciado: "(não entendi) O que te faz Feliz(não entendi)",  alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] }, 
    { enunciado: "Por qual motivo?",alternativas:[ {texto:"Letra",afirmacao:1},{texto:"Tema",afirmacao:2}]},
    { enunciado: "Ela é Vulgar ou explicita?",alternativas:[ {texto:"Vulgar",afirmacao:1},{texto:"Explicito",afirmacao:2}]},
    { enunciado: "Tente algo com menos teor/sinônimos apelativos, mas que ainda goste!",alternativas:[ {texto:"Voltar",afirmacao:1}] },
    { enunciado: "O autor quer explicar e influenciar para induzir, o que fazer ou não fazer, por algo que possa ter ocorrido em sua vida.",alternativas:[ {texto:"Voltar",afirmacao:1} ] },
    { enunciado: "Pense em levar em conta o que te faz feliz e continue a escutar, ignore os outros te julgando.", alternativas:[ {texto:"Voltar",afirmacao:1} ] },
];

let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    if (atual >= perguntas.length) {
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    let afirmacoes = opcaoSelecionada.afirmacao;

    if (atual === 0 && afirmacoes === "s") {
        atual = 5;
    } else if (atual === 5 && afirmacoes === 1) {
        atual = 6;
    } else if (atual === 6 && afirmacoes === 1){
        atual = 7;
    }else if(atual===7 && afirmacoes === 1){
        atual=0;
    }else if(atual===6 && afirmacoes===2||atual===5 && afirmacoes===2){
        atual=8;
    }else if(atual===0 && afirmacoes==="n"){
        atual=1;
    }else if(atual===1 && afirmacoes===1){
        atual=0;
    }else if(atual===0 && afirmacoes===3){
        atual=2;
    }else if(atual===2 && afirmacoes===2){
        atual=1;
    }else if(atual===2 && afirmacoes===1){
        atual=3;
    }else if(atual===3 && afirmacoes===1){
        atual=9;
    }else if(atual===3 && afirmacoes===2){
        atual=8;
    }
    
    mostraPergunta();
}





mostraPergunta();