/*
function resume (user: {name: string, age: number}) {
    return `My name is ${user.name} and i'm ${user.age} years old`;
}
*/

//if u want a optional property, do:
function resume (user: {name: string, age?: number}) {
    if (user.age !== undefined){
        return `My name is ${user.name} and i'm ${user.age} years old`;
    } else {
        return `My name is ${user.name}`;
    }
}

let u = {
    name: "Davies",
    //age: 50
}

console.log(resume(u))