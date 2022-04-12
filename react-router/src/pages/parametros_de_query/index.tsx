// vai pegar o valor com base em nome de algum filtro da URL
import { useSearchParams } from "react-router-dom";

export const PagePdeQuery = () => {
    const [searchParams, setSearcParams] = useSearchParams();
    
    const changeOrder = (e: 'valor 1' | 'valor 2') => {
        searchParams.set('order', e) //coloca em 'algum lugar' um valor :D
        searchParams.set('filter', 'x');
        setSearcParams(searchParams) // modifico meu searchParams de fato!
    }

    return(
        <div>
            filter = {searchParams.get('filter') /*Pega o valor do filtro*/} <br/>
            order = {searchParams.get('order')} <br/>

            <button className='bg-slate-300 rounded mr-1 p-2' onClick={() => changeOrder("valor 1")}>Order 1</button>
            <button className='bg-slate-300 rounded p-2' onClick={() => changeOrder("valor 2")}>Order 2</button>
        </div>
    );
}