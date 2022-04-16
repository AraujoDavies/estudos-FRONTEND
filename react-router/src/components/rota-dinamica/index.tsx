// ROUTES E ROUTE => faz referência dos locais que quero ir path + element

import { PageDinamicaOrg } from "../../routes/dinamica";

export const RotaDinamica = () => {
    return(
        <div className='pl-8'>
            <h3 className='font-black'>Rota Dinâmica</h3>
            <PageDinamicaOrg />
        </div>
    );
}