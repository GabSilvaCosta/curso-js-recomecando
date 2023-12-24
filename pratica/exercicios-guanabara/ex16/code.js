let button = document.getElementById('gerarValor').addEventListener('click', function() {
    let N_aleatorio = Math.random() * (100 - 1) + 0
    let exib = document.querySelector('p').innerHTML += `Acabei de pensar no número <strong>${N_aleatorio.toFixed(0)}</strong>!<br><br>`
})

let button2 = document.getElementById('clear').addEventListener('click', function() {
    let exib = document.querySelector('p').innerHTML = ''
})