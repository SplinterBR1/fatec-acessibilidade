---
name: 💡 Acessibilidade visual
about: Aumentar e diminuir a fonte da pagina
title: " Acessibilidade - 3º Semestre - Sistemas para Internet"
labels: enhancement
---

## 📌 Descrição
Descreva sua sugestão.
- 1 - Criar dois botões para aumentar e diminuir a fonte da pagina toda utilizando JavaScript
- 2 - Posicionar os botões na barra de navegação do site para facil acesso ao navegar
- 3 - Não quebrar o layout da pagina ao utilizar os botões

## 🎯 Objetivo
Qual problema isso resolve?
- Baixa Visão

## 📝 Informações adicionais
Codigo JS: 
- function alterarFonte(valor) {
    const pagina = document.getElementById('pagina');
    let estilo = window.getComputedStyle(pagina).fontSize
    let tamanho = parseFloat(estilo);
    pagina.style.fontSize = (tamanho + valor) + 'px';
}

## link para o projeto
https://github.com/SplinterBR1/fatec-acessibilidade/tree/atividade-1-fonte-aumentar-diminuir

## Membros da equipe
Abigaiu Porto
Vanessa Rosa
Bruno Henrique

