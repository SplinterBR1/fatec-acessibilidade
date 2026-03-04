# Projeto base para aula de Acessibilidade

## Desafio 1 — Aumentar/Diminuir Fonte

## Objetivo
Melhorar a usabilidade para pessoas com baixa visão.

- [x] Escreva em um papel um algoritmo que permita aumentar ou diminuir o tamanho da letra conforme a preferência do usuário

### Requisitos
- Botão A+
- Botão A-
- Não quebrar layout
- Usar unidades relativas 


```javascript - linha 380
    // função para aumentar e diminuir a fonte global da pagina utilizando os botões A+ e A-
    function alterarFonte(valor) {
        const pagina = document.getElementById('pagina');
        let estilo = window.getComputedStyle(pagina).fontSize
        let tamanho = parseFloat(estilo);
        pagina.style.fontSize = (tamanho + valor) + 'px';
    }

    // Melhoria feita utilizando consulta de IA ( chatGPT )
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
```
