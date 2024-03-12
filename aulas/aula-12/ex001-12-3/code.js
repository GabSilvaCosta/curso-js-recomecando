function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let exib = document.querySelector('#res').innerHTML = `Agora são ${hora} horas.`
    let imagem = document.querySelector('img')
    let corpo = document.querySelector('body')
    if (hora <= 11) {
        corpo.style.background = 'rgb(185, 157, 136)'
        imagem.setAttribute('src', 'imagens/fotomanha.png')
    } else if (hora > 11 && hora <= 18) {
        imagem.setAttribute('src', 'imagens/fototarde.png')
        corpo.style.background = 'rgb(207, 136, 85)'
    } else {
        imagem.setAttribute('src', 'imagens/fotonoite.png')
        corpo.style.background = 'rgb(93, 93, 93)'
    }
}


