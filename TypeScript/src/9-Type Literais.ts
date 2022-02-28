function textoAlinhado(
    nome: string,
    alinhamento: 'left' | 'right' | 'center'
    //Type literais is useful
){
    return `<div style=" text-align: ${alinhamento}"> ${nome} </div>`
}

textoAlinhado('Davies', 'right'); //OK
textoAlinhado('Davies', 'left'); //OK
textoAlinhado('Davies', 'blabla'); //ERROR

//Another Example
type Options = {
    width?: number,
    heigth?: number
}

function config(prop: Options | 'auto'){

}

config({width: 300, heigth: 500}); //OK
config('auto'); //OK
config('automatic'); //ERROR