let userValue = document.querySelector('#valueUser')
let res = document.querySelector('#list')
let button = document.querySelector('#iButton').addEventListener('click', function() {
    res.innerHTML = ''
    for (let c = 0; c <= 10; c++) {
        let mult = (Number(userValue.value) * c)
        let Option = document.createElement('option')
        Option.innerHTML += `${Number(userValue.value)} X ${c} = ${mult}`
        res.appendChild(Option)
    }
    userValue.value = ''
    userValue.focus()
})