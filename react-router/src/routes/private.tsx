// ORGANIZANDO ROTAS EM ARQUIVOS SEPARADOS
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from "./../RequireAuth";
import { LoginFake } from "./../pages/private";

type Props = {
    logado: boolean;
}
export const PrivateOrg = ( {logado}: Props) => {
    return(
        <Routes>
            <Route path="/Loginfake" element={
                <RequireAuth user_logado = {logado}>
                    <LoginFake />
                </RequireAuth>
                }>
            </Route>
        </Routes>
    );
}