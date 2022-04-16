import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PrivateOrg } from '../../routes/private';

export const RotaPrivada = () => {
    const [logado, setLogado] = useState<boolean>(false);

    const loginFake = () => {
        !logado ? setLogado(true) : setLogado(false);
    }

    useEffect(() => {
        console.log(logado)
    },[logado])

    return (
        <div className="pl-8 py-4">
            <h2 className="text-lime-500 text-lg font-black py-1">Rota Privada</h2>
            
            <Link to='/Loginfake'>
                <button className="bg-green-500 p-2 rounded"
                onClick={loginFake}>
                    {logado ? "Fazer Logoff" : "Fazer Login Fake"}
                </button>
            </Link>

            <PrivateOrg logado={logado} />
        </div>
    );
}