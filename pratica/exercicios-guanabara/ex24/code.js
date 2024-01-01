let exibicao = document.querySelector('div')
let botao = document.querySelector('#contar').addEventListener('click', function() {
    let Vinicial = 0
    let contar = document.querySelector('#valorInput').value
    let Contar = Number(contar)
    exibicao.innerHTML += `Contando de 0 até ${Contar}<br>`
    exibicao.innerHTML += `0`
    while (Vinicial < Contar) {
        Vinicial++
        exibicao.innerHTML += `&#x1F449 ${Vinicial}`
    }
    exibicao.innerHTML += `&#x1F3C1<br><br>`
})