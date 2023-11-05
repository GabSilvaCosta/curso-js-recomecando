function clicou() {
    var age = Number(document.querySelector('#iage').value)
    var result = document.querySelector('div')
    if (age >= 18) {
        result.innerHTML = 'Você é maior de idade.'
    } else {
        result.innerHTML = 'Voê é menor de idade.'
    }
}