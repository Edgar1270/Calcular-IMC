# ⚖️ Calculadora de IMC

Um projeto simples de **Calculadora de IMC (Índice de Massa Corporal)**, onde o usuário pode inserir seu peso e altura para obter o valor do IMC.

---

## 🚀 Funcionalidades

* ⚖️ Cálculo do IMC a partir do peso e altura
* 📊 Exibição do resultado na tela
* ❗ Validação básica de entrada
* 🎯 Interface simples e direta

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript 

---

## 📂 Estrutura do Projeto

```id="a9f2lx"
📁 calculadora-imc
 ├── index.html
 ├── styles.css
 └── script.js
```

---

## 💻 Como Funciona

* O usuário informa o **peso (kg)** e a **altura (cm)**
* A altura é convertida para metros automaticamente
* O cálculo do IMC é realizado
* O resultado é exibido na tela

---

## ▶️ Como Executar

1. Baixe ou clone o projeto
2. Abra o arquivo `index.html` no navegador

---

## 📄 Código Principal (Resumo)

### ⚖️ Cálculo do IMC

```javascript id="v6k2dn"
function calcularIMC() {
    const peso = parseFloat(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value) / 100;

    const result = document.getElementById("result");

    if(peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        result.style.color = '#333';
        result.textContent = `Teu IMC é ${imc}`;
    } else {
        result.style.color = 'red';
        result.textContent = "Por favor, coloque número válido.";
    }
}
```

---

## 👨‍💻 Autor

Desenvolvido por mim 🚀
Projeto simples para praticar lógica, manipulação de DOM e entrada de dados em JavaScript.
