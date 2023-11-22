let button = document.querySelector('#verificadorBtn') // Liga o input:button com o JS.
let mostrar = document.querySelector('#exibir')
button.addEventListener('click', function(){
    let valor = Number(document.querySelector('#ivalue').value)
    if (valor % 2 === 0) {
        mostrar.innerHTML = `O número ${valor} é par.`
    } else {
        mostrar.innerHTML = ` O número ${valor} é impár.`
    }
})