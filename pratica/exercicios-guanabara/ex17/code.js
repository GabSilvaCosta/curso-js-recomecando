let button = document.querySelector('button').addEventListener('click', function() {
    let v1 = Number(window.prompt('Primeiro valor:'))
    let v2 = Number(window.prompt('Segundo valor:'))
    let operador = Number(window.prompt(`
    Valores informados ${v1} e ${v2}
    Oque vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4]Dividir`))
        switch (operador) {
            case 1:
                 resultado = v1 + v2
                 let exib = document.querySelector('p').innerHTML = `${v1} + ${v2} = ${resultado}`
            break
            case 2:
                resultado = v1 - v2
                 exib = document.querySelector('p').innerHTML = `${v1} - ${v2} = ${resultado}`
            break
            case 3:
                resultado = v1 * v2
                exib = document.querySelector('p').innerHTML = `${v1} X ${v2} = ${resultado}`
            break
            case 4:
                resultado = v1 / v2
                exib = document.querySelector('p').innerHTML = `${v1} / ${v2} = ${resultado}`
            break
            default:
                exib = document.querySelector('p').innerHTML = `OPÇÂO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles.`
            break
        }
})