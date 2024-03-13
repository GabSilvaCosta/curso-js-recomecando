var now = new Date()
var hora = now.getHours()
if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora >= 6 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}