let button = document.querySelector('button').addEventListener('click', function() {
    let DadosSistema = new Date()
    let exib = document.querySelector('p').innerHTML = `O que eu recebi do sistema foi <strong>${DadosSistema}</strong>` 
})