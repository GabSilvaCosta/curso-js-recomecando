let inputUser = document.querySelector('#ValUser')
let resSelect = document.querySelector('#sel')
let list = []
let B_add = document.querySelector('#add').addEventListener('click', funciton() {
    if (isnumber(Number(inputUser.value)) && !haveinList()) {
        
    }
})

function isnumber(n) {
    if (n >= 0 && n <= 100) {
        return true
    } else {
        return false
    }
}

function haveinList(n,l) {

}