// Only to understand TS
let names = ["Davies", "João", "Maria", 1, 2, 3];

names.forEach( (name)=>{
    if(typeof(name) == 'string'){
        console.log(name.toUpperCase()); //name = string
    } else {
        console.log(name); //name = number
    }
})