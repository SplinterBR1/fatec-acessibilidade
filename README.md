# Projeto base para aula de Acessibilidade

## Desafio 2 — Contraste

## Objetivo
- Melhorar a usabilidade para pessoas com baixa visão.

### Requisitos
- Alterar constraste da pagina para melhorar a visibilidade 

### Elementos adicionados
```HTML
    <section class="menu-acessibilidade">
        <h4 class="hidden">seção de acessibilidade</h4>
        <button class="botaoFonte" onclick="alterarFonte(-2)">A-</button>
        <button class="botaoFonte" onclick="alterarFonte(2)">A+</button>
        <button class="botaoFonte" onclick="restaurarFonte()">Padrão</button>
        <button class="botaoFonte" id="botao-contraste">Contraste</button>
    </section>
```

```CSS - barra de acessibilidades
    .botaoFonte {
        font-size: 1.1em;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        margin: 5px .5vw;
        padding: 3px 10px;
    }

    .botaoFonte:hover {
        transform: scale(.95);
        transition: .5 ease-in-out;
    }

    .alto-contraste {
        background-color: #000;
        color: #fff;
    }

    body.alto-contraste div {
        background-color: hsl(0, 3%, 7%);
        color: #fff;
    }

    body.alto-contraste .pill {
        background-color: lightgrey;
        color: black;
        font-weight: 600;
    }
```

```JavaScript
    const botaoContraste = document.getElementById("botao-contraste");
    
    botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    });
```
