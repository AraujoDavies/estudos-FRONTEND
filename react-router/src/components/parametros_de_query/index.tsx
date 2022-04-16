// como pegar parametros da URL que sejam filtrados diferentemente 
// do useParams que pega tudo q for definido

import { Pde_queryOrg } from './../../routes/pd_query';

export const PdeQuery = () => {
    return(
        <div className="pl-8">
            <div className="py-3">
                <h2 className="font-black text-4xl"> Parametros de Query </h2>
                <label className="text-xs text-slate-300"> Ex de URL: parametrosdequery?filter=x&order=y </label>
            </div>
            
            <Pde_queryOrg />
        </div>
    );
}