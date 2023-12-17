let botao = document.querySelector('button').addEventListener('click', function() {
    let name = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt('Qual foi a primeira nota?'))
    let n2 = Number(window.prompt('Qual é a segunda nota?'))
    let media = (n1 + n2) / 2
    let exib = document.querySelector('p')
    exib.innerHTML = `Calculando a média de <strong>${name}</strong><br>`
    exib.innerHTML += `<br>As notas obtidas foram <strong>${n1}</strong> e <strong>${n2}</strong><br>`
    exib.innerHTML += `<br>A média final é <strong>${media}</strong><br>`
        if (media <= 4) {
            exib.innerHTML += "<br>Reprovado! Estude um pouco mais!<br>"
        } else {
            exib.innerHTML += "<br>Você passou, parabéns!<br>"
        }
})