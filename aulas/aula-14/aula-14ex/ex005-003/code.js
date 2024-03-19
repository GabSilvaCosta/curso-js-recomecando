let button = document.querySelector('#botao').addEventListener('click', function() {
    let valor = document.querySelector('#IVuser')
    let selectTab = document.querySelector('#IselTab')
    if (valor.value.length == 0) {
        window.alert('Por favor, insira um valor!')
    } else {
        selectTab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                item.text = `${Number(valor.value)} X ${c} = ${Number(valor.value) * c}`
                item.value = `v${c}`
                selectTab.appendChild(item)
            }
    }
})