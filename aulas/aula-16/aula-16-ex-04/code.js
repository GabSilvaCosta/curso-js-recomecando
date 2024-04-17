let inputUser = document.querySelector('#ValUser')
let resSelect = document.querySelector('#sel')
let Vlist = []
let res = document.querySelector('#res')
let B_add = document.querySelector('#add').addEventListener('click', function() {
    if (isnumber(inputUser.value) && !haveinList(inputUser.value, Vlist)) {
        Vlist.push(Number(inputUser.value))
        let opt = document.createElement('option')
        opt.innerHTML = `Value ${Number(inputUser.value)} added.`
        resSelect.appendChild(opt)
    } else {
        window.alert('[ERROR] Invalid value or already found at list')
    }
    inputUser.value = ''
    inputUser.focus()
    res.innerHTML = ''
})
let B_finish = document.querySelector('#finish').addEventListener('click', function() {
    let bigger = Vlist[0]
    let smaller = Vlist[0]
    let sum = 0
    let average = 0
    for (let pos in Vlist) {
        sum += Number(Vlist[pos])
        if (Vlist[pos] > bigger)
        bigger = Vlist[pos]
        if (Vlist[pos] < smaller) 
        smaller = Vlist[pos]
    }
    average = sum / Vlist.length
    res.innerHTML += `<br>In total, they have ${Vlist.length} registered numbers.<br>`
    res.innerHTML += `<br>The bigger value is ${bigger}.<br>`
    res.innerHTML += `<br>The smaller value is ${smaller}<br>`
    res.innerHTML += `<br>Adding the values, have ${sum}<br>`
    res.innerHTML += `<br> The average of the values is ${average}`
})
function isnumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function haveinList(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}