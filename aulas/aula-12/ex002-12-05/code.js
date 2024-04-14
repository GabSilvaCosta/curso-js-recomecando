let data = new Date()
let CurrentYear = data.getFullYear()
let bornUser = document.querySelector('#bornUser')
let button = document.querySelector('#Iverify').addEventListener('click', function() {
    if (Number(bornUser.value) > CurrentYear || Number(bornUser.value) == 0) {
        window.alert('[ERROR] The value entered is greater than the current year.')
    } else {
        let img = document.createElement('img')
        img.setAttribute('id', 'people')
        let age = CurrentYear - Number(bornUser.value)
        res.innerHTML = `The age of user is ${age}`
    }
})
let res = document.querySelector('#res')