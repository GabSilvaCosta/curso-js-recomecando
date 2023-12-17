let contador = 0
let exib = document.querySelector('p')

let button1 = document.querySelector('#botao1').addEventListener('click', function() {
    contador++
    exib.innerHTML = `O contador está com <strong>${contador}</strong> clique(s)`
})

let button2 = document.querySelector('#botao2').addEventListener('click', function() {
    contador = 0
    exib.innerHTML = ``
})