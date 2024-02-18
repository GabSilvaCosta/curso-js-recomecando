function carregar() {
    let tempo = new Date()
    let hora = tempo.getHours()
    let minutos = tempo.getMinutes()
    let segundos = tempo.getSeconds()
    let exib = document.getElementById('saida')
    let img = document.querySelector('img')
    exib.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/fotomanha.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/fototarde.png"
        document.body.style.background = '#b9846f'
    } else {
        img.src = "imagens/fotonoite.png"
        document.body.style.background = '#515154'
    }
}