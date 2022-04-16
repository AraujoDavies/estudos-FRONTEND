// arquivinho que faz a verificação para liberar ou não acesso a pagina privada
import { Navigate } from "react-router-dom";

type Props = {
    user_logado: boolean;
    children: JSX.Element
}

export const RequireAuth = ( { user_logado, children }: Props) => {
    const isAuth = user_logado; //está logada ?

    if (isAuth) {
        return children // ou seja vai retornar o elemento filho
    } else{
        return <Navigate to="/" />
    }
    
}