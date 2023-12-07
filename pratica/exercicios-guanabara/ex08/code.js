let Button = document.querySelector('button');
    Button.addEventListener('click', function() {
        let exib = document.querySelector('p')
        let v = Number(window.prompt('Digíte um número:'))
        let Vint = parseInt(v)
        let Vaproximado = Math.ceil(v)
        let VraizQ = Math.sqrt(v)
        let VraizC = Math.cbrt(v)
        let Vsobre2 = Math.pow(v)
        let vsobre3 = math.pow(v)
        exib.innerHTML = `O número a ser analisado aqui será o ${v}<br><hr>O seu valor absoluto é ${v}<br> A sua parte inteira é ${Vint}<br> O valor inteiro mais próximo é ${Vaproximado}<br> A sua raiz quadrada é ${VraizQ}<br> A sua rauz cúbica é ${VraizC}<br>O valor de ${v}<sup>2</sup>`

    })