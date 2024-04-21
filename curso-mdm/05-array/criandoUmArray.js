/*
var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles']

var sequence = [1, 1, 2, 3, 5, 8, 13]
var random = ['tree', 795, [0, 1, 2]]

var breakFast = ['Omelete', 'Café', 'Pão', 'Aveia', 'Frutas']
var DadosGabriel = ['Brasileiro', 20, 'Branco', 70, 'Trabalha']

shopping[0] = 'tahini'
console.log(`O item selecionado foi ${shopping}`)
console.log(` O array dentro do array RANDOM é ${random[2][1]}`)

for ( var i = 0; i < sequence.length; i++) {
    console.log(sequence[i])
}
var myNewString = myArray.join(',')
console.log(myNewString)

var dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger']
console.log(dogNames.toString())
*/

var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
var myArray = myData.split(',')
myArray.unshift('Edinburgh')
var removedItem = myArray.shift()
console.log(removedItem)
// myArray.push('Cardiff')
// myArray.push('Bradford', 'Brighton')
/*
for (let pos = 0; pos < myArray.length; pos++) {
    console.log(myArray[pos])
}

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[myArray.length - 1])
*/