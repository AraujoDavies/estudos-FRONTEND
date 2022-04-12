// ROUTES E ROUTE => faz referência dos locais que quero ir path + element

import { Route, Routes } from 'react-router-dom';
import { PageDinamic } from '../../pages/dinamic';
import { ItemDinamico } from '../../pages/dinamic/item';

export const RotaDinamica = () => {
    return(
        <div className='pl-8'>
            <h3 className='font-black'>Rota Dinâmica</h3>
            <Routes>
                <Route path='/rotadinamica/:urltext' element={<ItemDinamico /> /* :name faz a rota dinâmica*/} />
                <Route path='*' element={<PageDinamic /> /* path=* faz mensão a qqr link diferente*/} /> 
            </Routes>
        </div>
    );
}