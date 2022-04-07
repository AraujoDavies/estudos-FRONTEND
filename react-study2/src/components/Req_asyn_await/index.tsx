import { useState } from "react";

type Movies = {
    titulo: string;
    avatar: string
}

export const FilmesEmCartazEASY = () => {
    const [movies, setMovies] = useState<Movies[]>([])
    const [loading, setLoading] = useState(false)

    const loadMovies = async () => {
        try{
            setLoading(true)
            let response = await fetch('https://api.b7web.com.br/cinema')
            let json = await response.json()
            setLoading(false)
            setMovies(json)
        } catch(e) {
            setLoading(false)
            setMovies([{titulo: 'erro', avatar: 'erro'}])
            console.log("erro na requisição, insira a URL correta: https://api.b7web.com.br/cinema/")
            console.log(e)
        }
    }

    return(
        <div>
            <hr/>
            <br/>

            <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}> Carregar filmes </button>
            <br/> Filmes em cartas(requisição EASY): {movies.length}

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