let button = document.querySelector('#botao').addEventListener('click', function() {
    let Fvalue = document.querySelector('#Vinicial')
    let Lvalue = document.querySelector('#VFinal')
    let Steps = document.querySelector('#Idstep')
    let res = document.querySelector('#res')
    if (Fvalue.value.length == 0 || Lvalue.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else if (Number(Fvalue.value) < Number(Lvalue.value) && Number(Steps.value) == 0) {
        window.alert('Passo inválido, considerando PASSO 1.')
        res.innerHTML = 'Contando:<br>'
        for ( let c = Number(Fvalue.value); c <= Number(Lvalue.value); c++) {
            res.innerHTML += `${c} &#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    } else if (Number(Fvalue.value) > Number(Lvalue.value) && Number(Steps.value) == 0) {
        window.alert('Passo inválido, considerando PASSO 1.')
        res.innerHTML = 'Contando:<br>'
        for ( let c = Number(Fvalue.value); c >= Number(Lvalue.value); c--) {
            res.innerHTML += `${c} &#x1F449`
        }
    } else if (Fvalue.value < Lvalue.value) {
        res.innerHTML = 'Contando:<br>'
        for (let c = Number(Fvalue.value); c <= Number(Lvalue.value); c = c + Number(Steps.value)) {
            res.innerHTML += `${c} &#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    } else if (Fvalue.value > Lvalue.value) {
        res.innerHTML = 'Contando:<br>'
        for (let c = Number(Fvalue.value); c >= Number(Lvalue.value); c = c - Number(Steps.value)) {
            res.innerHTML += `${c} &#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    }
})