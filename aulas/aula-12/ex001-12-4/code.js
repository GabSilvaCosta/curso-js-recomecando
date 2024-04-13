let time = new Date()
let hours = time.getHours()
let res = document.querySelector('#resTime').innerHTML = `Now are ${hours}:00 o´clock`
let image = document.querySelector('img')
let body = document.querySelector('body')
document.addEventListener('DOMContentLoaded', function() {
    if (hours < 12) {
        body.style.background = 'burlywood'
        image.src = 'image/fotomanha.png'
    } else if (hours < 19) {
        body.style.background = 'rgb(133, 133, 133)'
        image.src = 'image/fototarde.png'
    } else {
        body.style.background = 'rgb(49, 70, 94)'
        image.src = 'image/fotonoite.png'
    }
})