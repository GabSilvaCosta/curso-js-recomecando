document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const botao = document.querySelector('input')
    let iscolor1 = true

    botao.addEventListener('click', function() {
        if (iscolor1) {
            body.style.backgroundColor = 'red'
        } else {
            body.style.backgroundColor = 'blue'
        }
        iscolor1 = !iscolor1
    })
})