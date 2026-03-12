'use strict'

// Melhoria feita com consulta de IA ( chatGPT )
function alterarFonte(valor) {
    const pagina = document.getElementById('pagina');
    if (!pagina) return;

    let tamanho = parseFloat(window.getComputedStyle(pagina).fontSize);
    let novoTamanho = tamanho + valor;

    // Limites de tamanho
    if (novoTamanho < 10) novoTamanho = 10;
    if (novoTamanho > 40) novoTamanho = 40;

    pagina.style.fontSize = novoTamanho + 'px';

    // Salva no localStorage para manter a fonte ao atualizar a pagina
    localStorage.setItem('tamanhoFonte', novoTamanho);
}

window.addEventListener('DOMContentLoaded', () => {
    const pagina = document.getElementById('pagina');
    const tamanhoSalvo = localStorage.getItem('tamanhoFonte');

    if (pagina && tamanhoSalvo) {
        pagina.style.fontSize = tamanhoSalvo + 'px';
    }
});

function restaurarFonte() {
    const pagina = document.getElementById('pagina');
    if (!pagina) return;
    localStorage.removeItem('tamanhoFonte');
    pagina.style.fontSize = '';
}

// Botao para alterar o contraste da pagina
const botaoContraste = document.getElementById("botao-contraste");

// Verifica a opçao salva ao carregar a pagina
if (localStorage.getItem("contraste") === "ativo") {
    document.body.classList.add("alto-contraste");
}

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    // Salva o modo atual
    if (document.body.classList.contains("alto-contraste")) {
        localStorage.setItem("contraste", "ativo");
    } else {
        localStorage.setItem("contraste", "inativo");
    }
});

