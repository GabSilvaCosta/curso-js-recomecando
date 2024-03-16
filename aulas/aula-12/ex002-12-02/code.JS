let verificar = document.querySelector('#botao').addEventListener('click', function() {
    let data = new Date()
    let ano = data.getFullYear()
    let AnoNasc = document.querySelector('#nasc')
    if (AnoNasc.value.length == 0 || AnoNasc.value > ano) {
        window.alert(' [ERRO] verifique o valor inserido e tente novamente.')
    } else {
        let sexUser = document.getElementsByName('sexoUser')
        let gênero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        let idade = ano - Number(AnoNasc.value) 
        if (sexUser[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'images2/baby-boy-circle.png')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'images2/young-boy-circle.png')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'images2/adult-man-circle.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'images2/old-man-circle.png')
            }
        } else if (sexUser[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'images2/baby-girl-circle.png')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'images2/young-girl-circle.png')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'images2/adult-woman-circle.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'images2/old-woman-circle.png')
            }
        }
        let exibir = document.querySelector('#LocalExib').innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        exibir.appendChild(imagem)
    }
})