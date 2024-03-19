let botao = document.querySelector('#Ibutton').addEventListener('click', function() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${Number(num.value)} X ${c} = ${Number(num.value) * c}`
            item.value = `tab${c}` // Esta linha serve para nomear cada uma das otions geradas na lista, isto é útil para outras linguagens como o PHP por exemplo.
            tab.appendChild(item)
        }
    }
})