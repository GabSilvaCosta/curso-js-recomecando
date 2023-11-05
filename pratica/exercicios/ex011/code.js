function clicou() {
    var name = document.getElementById('inome').value
    var age = Number(document.getElementById('iidade').value)
    var conteiner = document.querySelector('div')
    if (age >= 18) {
        conteiner.innerHTML = `Olá ${name}, verifiquei que você é maior de idade.`
    }   else {
        conteiner.innerHTML = `Olá ${name}, verifiquei que você é menor de idade.`
    }
}
