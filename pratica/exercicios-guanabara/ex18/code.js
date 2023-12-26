let v = Math.floor(Math.random() * 100) + 1;
let botao = document.querySelector('button').addEventListener('click', function() {
    let nUser = Number(window.prompt('Qual é o seu palpite?'))
    if (nUser < v) {
        let exib = document.querySelector('p').innerHTML = `Você inseriu o número ${nUser}. Meu número é <strong>MAIOR!</strong>`
    } else if (nUser > v) {
        let exib = document.querySelector('p').innerHTML = `Você inseriu o número ${nUser}. Meu número é <strong>MENOR!</strong>`
    } else {
        let exib = document.querySelector('p').innerHTML = `Meus parabéns!!! Eu realmente estava pensando no <strong>${v}</strong>`
    }
});