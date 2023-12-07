let botao = document.querySelector('button')
    botao.addEventListener('click', function() {
        let name = window.prompt('Qual é o seu nome?')
        let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${name}`))
        let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${name}` ))
        let soma = nota1 + nota2
        let media = soma / 2
        let exib = document.querySelector('p')
            exib.innerHTML = `Calculando a média final de <strong>${name}</strong><br>As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong><br> A média final será <strong>${media}</strong>`
    })