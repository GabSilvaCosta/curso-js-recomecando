let contador = 0;
let exib = document.querySelector('p')
function atualizarContador() {
    contador++
}
// A function acima soma mais 1 a variavel contador.
function zerarContador() {
    contador--
}

let buttonCont = document.querySelector('#botao1').addEventListener('click', function() {
    atualizarContador()
    exib.innerHTML = `O contador está em ${contador} clique(s)`    
    }) 
// A function acima faz com que o botão quando clicado exiba na tag <p> uma mensagem exibindo a quantidade de cliques, sempre adicionando mais 1 ao total.
let buttonClear = document.querySelector('#botao2').addEventListener('click', function() {
    contador = 0
    exib.innerHTML = ``
})