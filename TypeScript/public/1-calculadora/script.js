function resume(user) {
    return "My name is ".concat(user.name, " and i'm ").concat(user.age, " years old");
}
var u = {
    name: "Davies",
    age: 50
};
console.log(resume(u));
