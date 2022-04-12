// USE NAVIGATE E USE PARAMS
import { useNavigate, useParams } from "react-router-dom"; // usa os parametros da URL

export const ItemDinamico = () =>{
    const params = useParams(); // armazena o parametro da URL
    const navigate = useNavigate(); // vai para algum lugar

    // uso do useNavigate():
    const handleClicksobre = () => {
        navigate('/sobre') 
    }
    const handleClickBackPage = () => {
        navigate(-1)
    }
    
    return(
        <div className="py-5">
            seja bem vindo a página do item que vc digitou: <br/> 
            <span className="text-5xl underline">{params.urltext?.toUpperCase() /*useParams*/} - {params.urltext?.length} Letras</span> 
            <button onClick={handleClicksobre} className='bg-red-500 ml-5'> Sobre </button>
            <button onClick={handleClickBackPage} className='bg-blue-500 ml-5'> Pagina anterior </button>
        </div>
    );
}