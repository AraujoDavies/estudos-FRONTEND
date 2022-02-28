function fazerReq(url: string, method: 'GET' | 'POST'){
    // code to be executed
}

//detalhes da requisição
type requestDetails = {
    url: string,
    method: "GET" | "POST"
}

let obj: requestDetails = {
    url: 'www.google.com.br',
    method: 'POST'
}

obj.method = 'Guet'//ERROR 

fazerReq(obj.url, obj.method);