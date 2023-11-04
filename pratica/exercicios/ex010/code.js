function clicou() {
    var n1 = Number(window.prompt('Por favor digíte um valor.'));
    var n2 = Number(window.prompt('Digíte outro valor.'));
    var operador = (window.prompt('A conta será de adição(+), subtração(-), multiplicação(*) ou divisão(/)'));

    if (operador == 'adição' || operador == '+') {
        var soma = n1 + n2;
        window.alert(`A soma entre ${n1} e ${n2} é ${soma}`);
    } else if (operador == 'subtração' || operador == '-') {
        var soma = n1 - n2;
        window.alert(`${n1} subtraido por ${n2} é igual a ${soma}`);
    } else if (operador == 'multiplicação' || operador == '*') {
        var soma = n1 * n2;
        window.alert(`${n1} multiplicado por ${n2} é ${soma}`);
    } else {
        var soma = n1 / n2 ;
        window.alert(`${n1} dividido por ${n2} é ${soma}`);
    }
}