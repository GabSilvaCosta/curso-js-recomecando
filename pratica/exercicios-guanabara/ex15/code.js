let button = document.querySelector('button').addEventListener('click', function() {
    let anoNasc = Number(window.prompt('Em que ano você nasceu?'))
    let anoAt = new Date().getFullYear()
    let age = anoAt - anoNasc
    let exib = document.querySelector('p').innerHTML = `Quem nasceu em ${anoNasc} vai completar ${age} anos em ${anoAt}`
})