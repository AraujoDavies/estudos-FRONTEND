import { useState } from "react";
import { Posts } from '../../types/Post';
import { api } from '../../api';

export const JsonPlaceHolder = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<Posts[]>([])
    
    const loadPosts = async () => {
        try{ 
        setLoading(true)
        let json = await api.getAllPosts() //profissionalizei a requisição :D
        setPosts(json) // :D
        setLoading(false)
        } catch (e) {
            setLoading(false)
            setPosts([])
            console.log(e)
        }
    }

   //posts[0].id == -1000 ? console.log('s') : console.log('n')

    return(
        <>
        <hr/>
        <div className="p-5">
            <button className='bg-red-400 rounded p-2' onClick={loadPosts}> Carregar Posts </button>
            <br/>
            <span>Posts em tela: {posts.length ? posts.length : '0'}</span>
            
            {loading && 
                <div> Carregando bb... </div>
            }

            {!loading && posts.length === undefined &&
                <div> Falha na requisição com o banco de dados D:</div>
            }
            
            {!loading && posts.length > 0 &&
                <div>
                    {posts.map( (item, index) => (
                        <div key = {index}>
                            <div className="my-5">
                            <h2 className="font-bold"> {item.title} </h2>
                            <p> {item.body} </p>
                            <small> #{item.id} User: {item.userId}</small>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>       
        </>
    )
}