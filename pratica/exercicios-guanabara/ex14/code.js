let button = document.querySelector('button').addEventListener('click', function() {
    let DadosSistema = new Date()
    let DiaAtual = DadosSistema.getDay()
        switch (DiaAtual) {
            case 1:

            break
        }
    let MesAtual = DadosSistema.getMonth()
    let HoraAtual = DadosSistema.getHours()
    let MinutoAtual = DadosSistema.getMinutes()
    let AnoAtual = DadosSistema.getFullYear()
    let exib = document.querySelector('p').innerHTML = `O que eu recebi do sistema foi ${DiaAtual},${MesAtual},${HoraAtual}:${MinutoAtual} ,${AnoAtual}` 
})