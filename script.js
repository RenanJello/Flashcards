
function exibirFlashcard() {
    var perguntaElemento = document.getElementById("pergunta");
    var respostaElemento = document.getElementById("resposta");
    var anteriorBotao = document.getElementById("anterior");
    var proximoBotao = document.getElementById("proximo");

    var flashcardAtual = flashcards[currentIndex];

    perguntaElemento.style.display = "block";
    respostaElemento.style.display = "none";

    perguntaElemento.textContent = flashcardAtual.pergunta;

    perguntaElemento.addEventListener("click", function() {
        perguntaElemento.style.display = "none";
        respostaElemento.style.display = "block";
        respostaElemento.textContent = flashcardAtual.resposta;
    });

    respostaElemento.addEventListener("click", function() {
        perguntaElemento.style.display = "block";
        respostaElemento.style.display = "none";
        respostaElemento.textContent = "";
    });

    if (currentIndex === 0) {
        anteriorBotao.disabled = true;
    } else {
        anteriorBotao.disabled = false;
    }

    if (currentIndex === flashcards.length - 1) {
        proximoBotao.disabled = true;
    } else {
        proximoBotao.disabled = false;
    }
}

function exibirProximoFlashcard() {
    currentIndex++;
    exibirFlashcard();
}

function exibirFlashcardAnterior() {
    currentIndex--;
    exibirFlashcard();
}

var proximoBotao = document.getElementById("proximo");
proximoBotao.addEventListener("click", exibirProximoFlashcard);

var anteriorBotao = document.getElementById("anterior");
anteriorBotao.addEventListener("click", exibirFlashcardAnterior);

exibirFlashcard();

// ...

function redirecionarParaFlashcards(disciplina) {
    window.location.href = disciplina + ".html";
}

// ...
