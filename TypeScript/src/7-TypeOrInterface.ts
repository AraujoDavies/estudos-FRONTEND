//type how use 

//1° simplify Objects
type person = {
    id: number,
    name: string,
    age?: number,
    programmer?: boolean
}

function sayHello(person: person){
    return `Olá ${person.name}`
}

sayHello({
    id: 1,
    name: "tesoura"
})

//2° type replicáveis
type age = string | number

let idade: age = 11;

function showAge(a: age): age{
    return a;
}

//Type x Interface
interface personI{
    id: number,
    name: string
}

interface personI{
    age: number,
    programmer: boolean
}
//type only can used one time