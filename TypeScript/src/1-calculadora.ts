// para gerar arquivo JS 
// abra o terminal e digite: tsc script.ts(nome deste arquivo)

let num1 = document.querySelector('#num1') as HTMLInputElement;
let num2 = document.querySelector('#num2') as HTMLInputElement;
let btn = document.querySelector('#btn');
let res = document.querySelector('#res');

const calcular = (n1: number, n2: number) => {
    return n1 + n2;
}

btn.addEventListener('click', () => {
    // o "+" antes das variaveis é = o parseFloat
    res.innerHTML = calcular(+num1.value, +num2.value).toString(); 
})