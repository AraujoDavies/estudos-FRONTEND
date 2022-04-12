// como pegar parametros da URL que sejam filtrados diferentemente 
// do useParams que pega tudo q for definido
import { Routes, Route } from "react-router-dom";
import { PagePdeQuery } from "../../pages/parametros_de_query";
import { PagePdeQueryDefault } from "../../pages/parametros_de_query/padrao";

export const PdeQuery = () => {
    return(
        <div className="pl-8">
            <div className="py-3">
                <h2 className="font-black text-4xl"> Parametros de Query </h2>
                <label className="text-xs text-slate-300"> Ex de URL: parametrosdequery?filter=x&order=y </label>
            </div>
            
            <Routes>
                <Route path='parametrosdequery' element={<PagePdeQuery />}></Route>
                <Route path='*' element={<PagePdeQueryDefault />} ></Route>
            </Routes>
        </div>
    );
}