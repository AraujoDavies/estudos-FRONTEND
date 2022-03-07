import { useState } from "react";

export function State(){
    const [name, setName] = useState('Davies')

    const changeName = ()=>{
        if(name == 'Davies') {
            setName('Tesouro');
        } else if (name == 'Ninguém'){
            setName('Davies');
            alert ('zé ngm')
        } else {
            setName('Ninguém');
        }
    };
    return (
        <>
            <hr/>
            <h3>Olá {name}</h3>
            <button onClick={changeName}>Eu não sou {name}</button>
        </>
    )
}