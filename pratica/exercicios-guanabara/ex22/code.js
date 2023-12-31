let result = document.querySelector('#container')
let botao = document.querySelector('button').addEventListener('click', function() {
    result.innerHTML += `<br><br>Contando de 1 até 10<br>`
    result.style.fontFamily = 'Single Day'
    let v = 0
        while (v < 10) {
            v++
            // result.innerHTML += `&#x1F449 ${v}`
            if (v % 2 == 0) {
                result.innerHTML += `&#x1F449 <strong>${v}</strong>`
            } else {
                result.innerHTML += ``
            }
        }
    result.innerHTML += `&#x1F449&#x1F3C1`
})