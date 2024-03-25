let add = document.querySelector('#botao').addEventListener('click', function() {
    let Vuser = document.getElementById('Ivalor')
    if (Number(Vuser.value.length) == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        window.alert('funciona')
    }
})