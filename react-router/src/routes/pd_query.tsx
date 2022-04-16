// ORGANIZANDO ROTAS EM ARQUIVOS SEPARADOS
import { Routes, Route } from "react-router-dom";
import { PagePdeQuery } from "./../pages/parametros_de_query";
import { PagePdeQueryDefault } from "./../pages/parametros_de_query/padrao";

export const Pde_queryOrg = () => {
    return(
        <Routes>
            <Route path='parametrosdequery' element={<PagePdeQuery />}></Route>
            <Route path='*' element={<PagePdeQueryDefault />} ></Route>
        </Routes>
    );
}