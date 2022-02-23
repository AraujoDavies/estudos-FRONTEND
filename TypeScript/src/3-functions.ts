//change fisrt letter to UpperCase
// type of parameter 
function firstLetterUppercase(el: string){ //if dont type "el", then type = any
    let firstLetter = el.charAt(0).toUpperCase();
    return firstLetter + el.substring(1);
}
firstLetterUppercase("ola")

// type of function
function somar(n1: number, n2: number): number {
    return n1 + n2;
}
// if dont type, n1 and n2 be any
somar(9,5);