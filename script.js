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