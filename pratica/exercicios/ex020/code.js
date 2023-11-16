function clicou() {
    var n1 = Number(window.prompt('Insira o primeiro valor.'))
    var n2 = Number(window.prompt('Insira o segundo valor.'))
    var adicao = n1 + n2
    var subtracao = n1 - n2
    var mult = n1 * n2
    var divi = n1 / n2
    var result = document.getElementById('resultado')
    result.innerHTML = `A soma entre ${n1} e ${n2} é ${adicao}.<br>`
    result.innerHTML += `A subtração entre ${n1} e ${n2} é ${subtracao}.<br>`
    result.innerHTML += `A multiplicação entre ${n1} e ${n2} é ${mult}.<br>`
    result.innerHTML += `A divisão entre ${n1} e ${n2} é ${divi}`
}

