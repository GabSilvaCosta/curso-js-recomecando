let botao = document.querySelector('#gerador').addEventListener('click', function() {
    let UserN = document.querySelector('#Nuser')
    let res = document.querySelector('#res')
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `<option value="res">${c}</option>`
    }
})