let exib = document.querySelector('p') // Liga a tag p ao script
let botao = document.querySelector('button') // Liga o button ao script
    botao.addEventListener('click', clicou)
    function clicou() {
        let n = Number(window.prompt('Qual o valor desejado?'))
        while (n >= 0) {
            exib.innerHTML += `Passo ${n}<br>`
            n--
        }
    }