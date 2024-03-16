function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector('#itxtano')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fSex = document.getElementsByName('radsex')
        let age = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.id = 'imagem'
        if (fSex[0].checked) {
            genero = 'Homem'
            if (age >= 0 && age <= 10) {
                //Criança
                img.setAttribute('src', 'images/baby-boy-circle.png')
            } else if (age < 21) {
                //Jovem
                img.setAttribute('src', 'images/young-boy-circle.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'images/adult-man-circle.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/old-man-circle.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (age >= 0 && age <= 10) {
                //Criança
                img.setAttribute('src', 'images/baby-girl-circle.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'images/young-girl-circle.png')
            } else if (age < 50) {
                //Adulta
                img.setAttribute('src', 'images/adult-woman-circle.png')
            } else {
                //Idosa
                img.setAttribute('src', 'images/old-woman-circle.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${age} anos de idade!`
        res.appendChild(img)
    }
}