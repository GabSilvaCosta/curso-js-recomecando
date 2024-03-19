let button = document.querySelector('#gerar').addEventListener('click', function() {
    let Nuser = document.querySelector('#Nuser')
    let tab = document.querySelector('#SelTab')
    if (Nuser.value.length == 0) {
        window.alert('Por favor, digite um valor.')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${Number(Nuser.value)} X ${c} = ${Number(Nuser.value) * c}`
            item.value = `${c}`
            tab.appendChild(item)
        }
    }
})