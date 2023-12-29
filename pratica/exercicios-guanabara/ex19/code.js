let exib = document.querySelector('p')
let button = document.querySelector('button').addEventListener('click', function() {
    let mesUser = window.prompt('Digite o mês em extenso (ex: Setembro)')
    if (mesUser == 'Janeiro' || mesUser == 'Fevereiro' || mesUser == 'Março') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>INVERNO</strong>.`
        exib.style.color = 'green'
    } else if (mesUser == 'Abril' || mesUser == 'Maio' || mesUser == 'Junho') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>PRIMAVERA</strong>.`
    } else if (mesUser == 'Julho' || mesUser == 'Agosto' || mesUser == 'Setembro') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>VERÃO</strong>.`
    } else if (mesUser == 'outubro' || mesUser == 'Novembro' || mesUser == 'Dezembro') {
        exib.innerHTML = `No mês de ${mesUser}, estamos na estação <strong>OUTONO</strong>.`
    } else {
        exib.innerHTML = `No mês ${mesUser}, estamos na estação <strong>INDEFINIDA</strong>`
    }
})