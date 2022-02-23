//change fisrt letter to UpperCase
function firstLetterUppercase(el: string){ //if dont type "el", then type = any
    let firstLetter = el.charAt(0).toUpperCase();
    return firstLetter + el.substring(1);
}
firstLetterUppercase("ola")