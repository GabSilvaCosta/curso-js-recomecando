let Button = document.querySelector('button')
    Button.addEventListener('click', function() {
        let name = window.prompt('Qual é o seu nome?')
        let exib = document.querySelector('p')
            exib.innerHTML = `É um prazer conhecer você ${name}!`
})