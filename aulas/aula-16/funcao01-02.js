function parImpar(n) { // O n é o parâmetro formal
    if (n%2 == 0) {
        return 'Par!'
    } else  {
        return 'Impar!'
    }
}
console.log(`O valor ínserido é ${parImpar(7)}`) //Parâmetro real