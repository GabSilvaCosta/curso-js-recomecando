let apertou = document.querySelector('#botao').addEventListener('click', function() {
    let data = new Date()
    let ano = data.getFullYear()
    let Anasc = document.querySelector('#itxtano')
    let res = document.querySelector('#res')
    if (Anasc.value.length == 0 || Number(Anasc.value) > ano) {
        window.alert('[ERRO] Digite outro valor e tente novamente!')
    } else {
        let age = ano - Number(Anasc.value)
        let genero = ''
        let MorF = document.getElementsByName('radsex')
        let img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (MorF[0].checked) {
            genero = 'Masculino'
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src', 'images/baby-boy-circle.png')
            } else if (age <= 21) {
                // Jovem
                img.setAttribute('src', 'images/young-boy-circle.png')
            } else if (age <= 50) {
                // Adulto
                img.setAttribute('src', 'images/adult-man-circle.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/old-man-circle.png')
            }
        } else {
            genero = 'Feminino'
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src', 'images/baby-girl-circle.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'images/young-girl-circle.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'images/adult-woman-circle.png')
            } else {
                // Idosa
                img.setAttribute('src', 'images/old-woman-circle.png')
            }
        }
        res.innerHTML = `Detectei uma pessoa do genêro <strong>${genero}</strong> com ${age} anos de idade.`
        res.appendChild(img)
    }
})