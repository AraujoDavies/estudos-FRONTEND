function resume (user: {name: string, age: number}) {
    return `My name is ${user.name} and i'm ${user.age} years old`;
}

let u = {
    name: "Davies",
    age: 50
}

console.log(resume(u))