//Essa função vai ignorar qualquer outro tipo de return
type FunctionQ = () => void;

const reset: FunctionQ = () => {
    return 12; 
    //não da erro, ele ignora o return
}

//porém assim, da erro:
const blabla = (): void => {
    return true;
}