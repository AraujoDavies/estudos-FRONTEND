//não precisa sempre definir o tipo, 
//faça isso apenas em valores q de Fato não pode mudar
let nome: string = 'Davies';
let idade: number = 24;
let programador: boolean = false; // Buaahhh!!!

//Arrays
let nomes: string[] = ['davies', 'sirlei', 'Zilo'];
let idades: number[] = [24, 42, 53];

let numeros: Array<number> = [1, 2, 3]; //não é o padrão, mas pode acontecer

//any = aceita QUALQUER tipagem
let coisas: any = ['Davies', 17, 'toia']; //TS entende que é um array de string e number
//só usar o ANY se realmente necessário

// adicionar Boolean sem o ANY vai retornar erro
coisas.push(true);