var botao = document.querySelector('#Botao').addEventListener('click', function() {
    var res = document.getElementById('res')
    var pais = document.querySelector('#txtpais')
    if (pais.value == 'Brasil') {
        res.innerHTML = `Você é Brasileiro!`
    } else {
        res.innerHTML = `Você é Estrangeiro!`
    }
})