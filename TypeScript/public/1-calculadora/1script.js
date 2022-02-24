// para gerar arquivo JS 
// abra o terminal e digite: tsc script.ts(nome deste arquivo)
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.querySelector('#btn');
var res = document.querySelector('#res');
var calcular = function (n1, n2) {
    return n1 + n2;
};
btn.addEventListener('click', function () {
    // o "+" antes das variaveis é = o parseFloat
    res.innerHTML = calcular(+num1.value, +num2.value).toString();
});
