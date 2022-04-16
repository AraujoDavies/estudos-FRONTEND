// ORGANIZANDO ROTAS EM ARQUIVOS SEPARADOS
import { Route, Routes } from 'react-router-dom';
import { PageDinamic } from './../pages/dinamic';
import { ItemDinamico } from './../pages/dinamic/item';

export const PageDinamicaOrg = () => {
    return(
        <Routes>
            <Route path='/rotadinamica/:urltext' element={<ItemDinamico /> /* :name faz a rota dinâmica*/} />
            <Route path='*' element={<PageDinamic /> /* path=* faz mensão a qqr link diferente*/} /> 
        </Routes>
    );
}