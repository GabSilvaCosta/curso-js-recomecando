function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/baby-boy.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/yong-men.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adult-men.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/old-men.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/baby-girl.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/yong-woman.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adult-woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/old-woman.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //Cria um elemento abaixo.
    }
}