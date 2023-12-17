let exib = document.querySelector('div')
let button1 = document.querySelector('#botao1').addEventListener('click', function() {
    exib.innerHTML += `Botão 1 clicado!<br>`
})

let button2 = document.querySelector('#botao2').addEventListener('click', function() {
    exib.innerHTML += 'Botão 2 clicado!<br>'
})

let button3 = document.querySelector('#botao3').addEventListener('click', function() {
    exib.innerHTML += 'Botão 3 clicado!<br>'
})

let button4 = document.querySelector('#botao4').addEventListener('click', function() {
    exib.innerHTML += 'Botão 4 clicado!<br>'
})