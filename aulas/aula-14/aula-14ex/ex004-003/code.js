let inputStart = document.querySelector('#StartUser')
let inputEnd = document.querySelector('#EndUser')
let inputStep = document.querySelector('#StepUser')
let res = document.querySelector('#res')
let button = document.querySelector('#Ibutton').addEventListener('click', function() {
    res.innerHTML = `Contando:<br><br>`
    if (Number(inputStart.value.length) == 0 || Number(inputEnd.value.length) == 0) {
        window.alert('[ERROR] Start or end is empty')
    } else if (Number(inputStep.value.length) == 0 && Number(inputStart.value) <= Number(inputEnd.value)) {
        window.alert('Invalid Step! Considering STEP 1')
        for (let c = Number(inputStart.value); c <= Number(inputEnd.value); c++) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else if (Number(inputStep.value.length) == 0 && Number(inputStart.value) > Number(inputEnd.value)) {
        window.alert('Invalid Step! Considering STEP 1')
        for (let c = Number(inputStart.value); c >= Number(inputEnd.value); c--) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else if (Number(inputStart.value) < Number(inputEnd.value)) {
        for (let c = Number(inputStart.value); c <= Number(inputEnd.value); c = c + Number(inputStep.value)) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else if (Number(inputStart.value) > Number(inputEnd.value)) {
        for (let c = Number(inputStart.value); c >= Number(inputEnd.value); c = c - Number(inputStep.value)) {
            res.innerHTML += `${c} \u{1F449}`
        } 
    }
    res.innerHTML += `\u{1F3C1}`
    inputStart.value = ''
    inputEnd.value = ''
    inputStep.value = ''
    inputStart.focus()
})