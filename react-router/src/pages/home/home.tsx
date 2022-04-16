// LINK para ir para outra parte do sistema
import { Link } from 'react-router-dom';

/* Usando o componente Link do RRD a pagina já está pre-carregada, 
diferente de usar a tag A q carrega tudo outra vez*/

export const Home = () => {
    return(
        <div className='py-5'>
            <p><strong>Oi, seja bem vindo a pagina inicial </strong></p>
            Rotas criadas:
            <ul className='border-dashed border-2 border-indigo-600'> 
                <li><Link to='/sobre'>sobre mim</Link></li>
                <li><Link to='/sobre/programacao'>sobre programaçao</Link></li>
                <li><Link to='/sobre/sonhos'>Sonhos...</Link></li>
            </ul>
        </div>
    );
}

