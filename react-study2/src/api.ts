//profissionalizando a requisição com AXIOS(veja documentação para mais dicas :D)
import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/posts';

export const api = {
    getAllPosts: async () => {
        /* sem o Axios:
        
        let response = await fetch(url)
        let json = await response.json()
        return json*/
        
        let response = await axios.get(url)
        return response.data
    },

    addNewPost: async (title: string, body: string, userId: number) => {
        /* sem o Axios:
        
          let response = await fetch(url, {
            method: 'POST',
            body:JSON.stringify({ title, body, userId}),
            headers: { 'Content-type' : 'application/json'}
          })
          let json = await response.json()

          return json
        */
       let response = await axios.post(url, {title, body, userId})  
       return response.data
    }

}