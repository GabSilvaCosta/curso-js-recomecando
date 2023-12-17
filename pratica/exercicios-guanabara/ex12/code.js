let button = document.querySelector("button").addEventListener('click', function() {
    let exib = document.querySelector("p")
    let n = Number(window.prompt('Digíte um número:'))
    let teste = n % 2

    if (teste == 0) {
        exib.innerHTML = `O número ${n} é <strong>par</strong>`
    } else {
        exib.innerHTML = `O número ${n} é <strong>ímpar</strong>`
    }
})