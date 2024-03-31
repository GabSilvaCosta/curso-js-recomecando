let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function dentroDeLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !dentroDeLista(num.value, valores)) {
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('ERRO! Valor inválido ou já inserido.')
    }
}

function finalizar() {
    if (Number(lista.length) == 0) {
        window.alert('ERRO')
    } else {
        let total = lista.length
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0
        for (let pos in valores) {
            if (maior[pos] > maior)
            maior = maior[pos]
            if (menor[pos] < menor)
            menor = menor[pos]
        }
        res.innerHTML += `<p>A lista tem ${total} valores ao todo.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
    }
}