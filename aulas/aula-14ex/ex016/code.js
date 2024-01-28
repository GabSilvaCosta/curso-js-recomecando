 let exib = document.querySelector('#res')
 let Button = document.querySelector('#botao').addEventListener('click', function() {
    let v_inicio = document.querySelector('#inicio').value
    let V_inicio = Number(v_inicio)

    let v_final = document.querySelector('#fim').value
    let V_final = Number(v_final)

    let step_ini = document.querySelector('#passo').value
    let Step_ini = Number(step_ini)

    while (V_inicio <= V_final) {
      exib.innerHTML += `${V_inicio}`
      V_inicio++
    }
 })