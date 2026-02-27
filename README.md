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
```
