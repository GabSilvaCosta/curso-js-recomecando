// window.alert('Bem vindo ao meu Site!');
let Button = document.querySelector('button');
    Button.addEventListener('click', function() {
        let valor = window.prompt('Dígite o valor desejado.');
        let doble = valor * 2;
        let half = valor / 2
        let exib = document.querySelector('p')
            exib.innerHTML = `O dobro de ${valor} é ${doble} e a metade é ${half}!`
    })