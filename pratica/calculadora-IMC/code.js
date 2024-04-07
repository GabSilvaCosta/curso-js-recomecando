let nome = document.querySelector('#IuserName')
let height = document.querySelector('#IuserAltura')
let weight = document.querySelector('#IuserWeight')
let res = document.querySelector('#res')

let button = document.querySelector('#botao').addEventListener('click', function() {
    if (nome.value == 0 || Number(height.value.length) == 0 || Number(weight.value.length) == 0) {
        window.alert('ERRO, uma das caixas está vazia!')
    } else {
        let IMC = Number(weight.value) / (Number(height.value) * Number(height.value))
        if (IMC <= 18.5) {
            res.innerHTML = `<p>${nome.value} o seu IMC é ${IMC.toFixed(1)}, você está abaixo do peso.</p>`
        } else if (IMC <= 25) {
            res.innerHTML = `<p>${nome.value} o seu IMC é ${IMC.toFixed(1)}, você está com o peso ideal.</p>`
        } else if (IMC <= 30) {
            res.innerHTML = `<p>${nome.value} o seu IMC é ${IMC.toFixed(1)}, você está com sobrepeso</p>`
        } else {
            res.innerHTML = `<p>${nome.value} o seu IMC é ${IMC.toFixed(1)}, você está obeso.</p>`
        }
        
    }
})