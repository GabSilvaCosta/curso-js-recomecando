let exib = document.querySelector('div')
let botao = document.querySelector('button').addEventListener('click', clicou)
function clicou() {
    exib.innerHTML += `<h1>Contagem Regressiva de 10 a 1.</h1>`
    let n = 11
    while (n > 0) {
        n --
        exib.innerHTML +=`${n} &#x1F449`
    }
exib.innerHTML += `&#x1F3C1`
}