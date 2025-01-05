class Temperatura {
    constructor(celsius){
        this.celsius = celsius
    }

    converterCelsiusParaFahrenheit(){
        return this.celsius * 1.8 + 32
    }
}

function calcularTemperatura(){
    const temperaturaLabel = document.getElementById('temperatura')
    const resultadoDiv = document.getElementById('resultado')
    const celsius = parseFloat(temperaturaLabel.value);


    const temperatura = new Temperatura(celsius)
    const conversão = temperatura.converterCelsiusParaFahrenheit()

    resultadoDiv.innerHTML = `
    <p>O valor passado em celsius convertido é : ${conversão}</p>`


}





// A fórmula da conversão é a  f = 9/5 c + 32

// Tutorial completo de JavaScript
//  Ou seja, você fornece a temperatura em graus Celsius, e seu script JS faz a conversão para graus Fahrenheit.