let Button = document.querySelector('button')
    Button.addEventListener('click', function() {
        let n1 = Number(window.prompt('Dígite um valor!'))
        let n2 = Number(window.prompt('Digíte outro valor!'))
        let soma = n1 + n2
        let exib = document.querySelector('div')
            exib.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}`
    })