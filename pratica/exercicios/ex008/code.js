let botao = document.querySelector('button')
let container = document.querySelector('p')
botao.addEventListener('click', clicar)

function clicar() {
    let nasc = Number.parseInt(window.prompt('Em que ano você nasceu?'))
    let ano_atual = Number.parseInt(window.prompt('Em que ano estamos?'))
    let age = ano_atual - nasc
    container.innerHTML = (`Você tem ${age} anos.`)
}
