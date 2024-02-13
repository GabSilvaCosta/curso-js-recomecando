 let exib = document.querySelector('#res')
 let Button = document.querySelector('#botao').addEventListener('click', function() {
    let v_inicio = document.querySelector('#inicio').value
    let V_inicio = Number(v_inicio)

    let v_final = document.querySelector('#fim').value
    let V_final = Number(v_final)

    let step_ini = document.querySelector('#passo').value
    let Step_ini = Number(step_ini)
    
    if (V_inicio == '') {
      exib.innerHTML = `Impossível contar!`
    } else if (Step_ini == ``) {
      window.alert('PASSO inválido! Considerando PASSO 1')
      exib.innerHTML += `<br>`
    while (V_inicio <= V_final) {
      exib.innerHTML += `${V_inicio} &#x1F449`
      V_inicio++
    }
    exib.innerHTML += `&#x1F3C1`
    }
    else {
      exib.innerHTML += `<br>`
    while (V_inicio <= V_final) {
      exib.innerHTML += `${V_inicio} &#x1F449`
      V_inicio = V_inicio + Step_ini 
    }
    exib.innerHTML += `&#x1F3C1`
    }
 })