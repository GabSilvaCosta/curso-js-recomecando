let exib = document.querySelector('div')
let botao = document.querySelector('button').addEventListener('click', function() {
    let valor = document.querySelector('#valor').value
    let valor_trat = Number(valor)
    let contador = 1
    exib.innerHTML = `<h2>Tabuada do ${valor_trat}</h2>`
    while (contador <= 10) {
        let resultado = valor_trat * contador
        exib.innerHTML += `${valor_trat} X ${contador} = <strong>${resultado}</strong><br>`
        contador++
    }
})