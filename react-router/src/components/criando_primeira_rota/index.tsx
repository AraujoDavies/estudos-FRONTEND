// ROUTES E ROUTE => faz referência dos locais que quero ir path + element
// Organizei as rotas em arquivo separados :D
import { PrimeiraRotaOrg } from "../../routes/primeira";

export const CriandoRota = () => {
    return(
        <div className='p-8 pt-0 text-red-600'>
            <header>
                <h1 className='font-black'>Criando primeira Rota</h1>
            </header>
            <div className='py-5'>
                <PrimeiraRotaOrg />
            </div>
            <footer>
                todos os direitos reservados.
            </footer>
        </div>
    );
}