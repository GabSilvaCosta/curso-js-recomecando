let time = new Date()
let hours = time.getHours()
let res = document.querySelector('#resTime')
let image = document.querySelector('img')
let body = document.querySelector('body')
document.addEventListener('DOMContentLoaded', function() {
    if (hours < 12) {
        body.style.background = 'burlywood'
    } else if (hours < 18) {
        body.style.background = 'rgb(133, 133, 133)'
        image.src = 'image/fototarde.png'
    }
})