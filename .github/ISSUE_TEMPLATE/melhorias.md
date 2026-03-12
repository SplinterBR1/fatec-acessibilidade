---
name: 💡 Acessibilidade visual
about: Alterar o contraste da pagina para melhor visibilidade
title: "Acessibilidade - 3º Semestre - Sistemas para Internet"
labels: enhancement
---

## 📌 Descrição
Descreva sua sugestão.
- 1 - Criar um botao utilizando HTML e CSS para alterar entre o modo alto contraste
- 2 - Posicionar o botão na barra acessibilidade do site para facil acesso ao navegar
- 3 - Não quebrar o layout da pagina ao utilizar o botão

## 🎯 Objetivo
Qual problema isso resolve?
- Dificuldade na leitura e identificação de elementos na tela devido ao contraste entre as cores

## 📝 Informações adicionais
- Adicionados os arquivos CSS e JS para separar o codigo do HTML

### Codigo JS - contraste: 
- const botaoContraste = document.getElementById("botao-contraste");

  botaoContraste.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
  });

### Melhorias sugeridas por IA ( chat gpt )

- const botaoContraste = document.getElementById("botao-contraste");

  if (localStorage.getItem("contraste") === "ativo") {
    document.body.classList.add("alto-contraste");
  }

  botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    if (document.body.classList.contains("alto-contraste")) {
        localStorage.setItem("contraste", "ativo");
    } else {
        localStorage.setItem("contraste", "inativo");
    }
  });

## link para o projeto
https://github.com/SplinterBR1/fatec-acessibilidade/tree/atividade-2-contraste

## Membros da equipe
Abigaiu Porto;
Vanessa Rosa;
Bruno Henrique;

