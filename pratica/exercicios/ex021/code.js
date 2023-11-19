let button = document.querySelector('button')
let resultado = document.querySelector('p')
    button.addEventListener('click', clicou)
    function clicou() {
        resultado.innerHTML += `Você apertou o botão!<br>`
    }