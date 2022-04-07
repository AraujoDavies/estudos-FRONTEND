import { useState } from "react";

type Movies = {
    titulo: string;
    avatar: string
}

export const FilmesEmCartaz = () => {
    const [movies, setMovies] = useState<Movies[]>([])
    const [loading, setLoading] = useState(false)

    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema')
        .then((response)=>{
            return response.json()
        })
        .then ((json)=>{
            setLoading(true)
            setMovies(json)
            setLoading(false)
        }).catch((e) => {
            console.log('erro, clique na requisição EASY')
            setMovies([{titulo: 'erro', avatar: 'erro'}])
            setLoading(false)
        })
    }

    return(
 <div>
            <hr/>
            <br/>

            <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}> Carregar filmes </button>
            <br/> Filmes em cartas (Requisicao GET + complication): {movies.length} <br/><br/>
            

            {loading &&
                <><br/><br/>Carregando...</>
            }

            {!loading && movies.length > 1 && // exibe isso se nao carregando E array com 2 filmes ou mais
            <>
                <div className="grid grid-cols-6 gap-3">
                    {movies.map((item, index)=>( 
                        <div key={index}>
                            <img src={item.avatar} className="w-50 block"/>
                            {item.titulo}
                        </div>
                    ))}
                </div>    
            </>
            }

            {!loading && movies.length == 1 && // exibe erro se nao carregando E apenas 1 filme no array (CATCH)
                <div> Erro na requisição D: (Veja o console.log)</div>               
            }
            
        </div>
    );
}