let botao = document.querySelector('button').addEventListener('click', function() {
    let LocalExib = document.querySelector('p')
    let n1 = Number(window.prompt('Digíte um número:'))
    let n2 = Number(window.prompt('Digíte outro número:'))
    if (n1 == n2 || n2 == n1) {
        LocalExib.innerHTML = `Anilisando os valores ${n1} e ${n2}, ambos são <strong>iguais</strong>.`
    } 
    else if (n1 > n2) {
        LocalExib.innerHTML = ` Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}`
    }
    else {
        LocalExib.innerHTML = `Analisando os valores ${n1} e ${n2}, o menor valor é ${n2}`
    }
})
