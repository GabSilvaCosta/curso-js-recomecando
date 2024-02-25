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
                imagem.setAttribute('src', 'images/baby-boy.png')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'images/yong-men.png')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'images/adult-men.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'images/old-men.png')
            }
        } else if (sexUser[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'images/baby-girl.png')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'images/yong-woman.png')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'images/adult-woman.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'images/old-woman.png')
            }
        }
        let exibir = document.querySelector('#LocalExib').innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        document.body.appendChild(imagem)
        // Pararei por aqui, tenho que baixar novas imagens com tamanho padrão! Acredito que isso irá resolver o problema que ainda ocorre em meu site.
    }
})