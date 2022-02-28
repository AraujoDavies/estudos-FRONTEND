// if parameter have two types, do verification:
function showAge(age: string | number){
    if (typeof(age) == "string"){
        console.log (age.toUpperCase());
    }
    if (typeof(age) == 'number'){
        console.log ( age.toFixed(2));
    }    
}

showAge(60);
showAge('06');