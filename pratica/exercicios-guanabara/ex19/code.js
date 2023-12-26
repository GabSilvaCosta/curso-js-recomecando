let exib = document.querySelector('p')
let button = document.querySelector('button').addEventListener('click', function() {
    let mesUser = window.prompt('Digite o mês em extenso (ex: Setembro)')
    if (mesUser == 'Janeiro') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>INVERNO</strong>.`
        exib.style.color = 'green'
    } else if (mesUser == 'Fevereiro') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>INVERNO</strong>.`
    }
})