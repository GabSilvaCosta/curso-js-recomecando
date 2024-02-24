let verificar = document.querySelector('#botao').addEventListener('click', function() {
    let data = new Date()
    let ano = data.getFullYear()
    let AnoNasc = document.getElementById('nasc')

    let age = ano - AnoNasc.value
    let exibir = document.querySelector('#LocalExib')

    if (AnoNasc.value.length == 0 || AnoNasc.value > ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente.')
        //Esse if valida se o user deixou o input em branco ou se o valor inserido é maior do que o ano atual.
        } else {
            let img = document.createElement('img').setAttribute('id', 'foto')
            let sexUser = document.querySelector('sexoUser')
            let genero = ''
        }


})