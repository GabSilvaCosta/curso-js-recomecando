let botao = document.querySelector('#botao');
    botao.addEventListener('click', function() {
        let ini = document.getElementById('inicio')
        let fim = document.getElementById('fim')
        let passo = document.getElementById('passo')
        let res = document.getElementById('res')
        // As linhas de 8 a 11 servem para verificar se o user inseriu algum valor em todos os inputs.
        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = "Impossível contar!"
            window.alert('[Erro] Faltam dados!')
        } else {
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if ( p <= 0) {
                window.alert('Passo invalido! Considerando passo 1')
                p = 1
            }
            if (i < f) {
                // Contagem crescente
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            } else {
                // Contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    })
    