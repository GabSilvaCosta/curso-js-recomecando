let EntradaUser = document.querySelector('#afazeres')
let lista = document.querySelector('#lista-afazeres')
let tarefa = []

let add = document.querySelector('#add').addEventListener('click', function() {
    if (EntradaUser.value == '') {
        window.alert('[ERRO] tente dígitar algo e aperte o botão novamente!')
    } else {
        let item = document.createElement('option')
        lista.appendChild(item)
        item.innerHTML = `${EntradaUser.value}`
    }
})