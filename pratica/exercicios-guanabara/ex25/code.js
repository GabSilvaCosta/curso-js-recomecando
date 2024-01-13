let Botao = document.querySelector('#botao').addEventListener('click', function() {
    let onde_aparece = document.querySelector('div')
    let c_inicio = document.querySelector('#valorInicial').value
    let C_inicio = Number(c_inicio)
    let c_final =  document.querySelector('#valorfinal').value
    let C_final = Number(c_final)
    onde_aparece.innerHTML += `<h2>Contando de ${C_inicio} até ${C_final}</h2>`
        if (C_inicio < C_final) {
            while (C_inicio <= C_final) {
                onde_aparece.innerHTML += `${C_inicio} &#x1F449`
                C_inicio++
            }
        } else if (C_inicio > C_final ) {
            while (C_inicio >= C_final) {
                onde_aparece.innerHTML += `${C_inicio} &#x1F449`
                C_inicio--
            }
        } else {
            onde_aparece.innerHTML += `Não foi possível contar, pois os valores são iguais.`
        }
        onde_aparece.innerHTML += `&#x1F3C1`
})