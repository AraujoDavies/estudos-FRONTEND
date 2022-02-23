//any = aceita QUALQUER tipagem
var coisas = ['Davies', 17, 'toia']; //TS entende que é um array de string e number
//só usar o ANY se realmente necessário
// adicionar Boolean sem o ANY vai retornar erro
coisas.push(true);