class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}

function calcularCirculo() {
    const radioInput = document.getElementById('radio');
    const resultadoDiv = document.getElementById('resultado');
    const radio = parseFloat(radioInput.value);

    

    const circulo = new Circulo(radio);
    const area = circulo.calcularArea().toFixed(1)
    const perimetro = circulo.calcularPerimetro().toFixed(1)

    resultadoDiv.innerHTML = `
        <p>Raio: ${radio}</p>
        <p>Área: ${area}</p>
        <p>Perímetro: ${perimetro}</p>`;
}