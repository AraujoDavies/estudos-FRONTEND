/*
function resume (user: {name: string, age: number}) {
    return `My name is ${user.name} and i'm ${user.age} years old`;
}
*/
//if u want a optional property, do:
function resume(user) {
    if (user.age !== undefined) {
        return "My name is ".concat(user.name, " and i'm ").concat(user.age, " years old");
    }
    else {
        return "My name is ".concat(user.name);
    }
}
var u = {
    name: "Davies",
    age: 50
};
console.log(resume(u));
