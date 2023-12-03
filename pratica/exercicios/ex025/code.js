let exib = document.querySelector('div')
let botao = document.querySelector('button')
    botao.addEventListener('click', function() {
        let valor = Number(window.prompt('Qual é o valor desejado?'))
        let multiplicador = 1
        while (valor <= valor * 10) {
            exib.innerHTML += `${valor} X ${multiplicador}<br>`
            valor * multiplicador++
        }
    }) 

