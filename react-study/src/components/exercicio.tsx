//Faça um Formulário q ao preencher ele já inputa os dados na tela

import React, { useState } from "react";

export const Exercise = ()=> {
    const [Exname, setName] = useState('');
    const [ExlastName, setLastName] = useState('');
    const [Exidade, setAge] = useState('');

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName( e.target.value );
    };
    
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName( e.target.value );
    };
    
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge( e.target.value );
    };

    return(
        <div>
            Seu nome:
            <input type="text" onChange={handleName}/> <br/>
            Seu último Sobrenome:
            <input type="text" onChange={handleLastName} /> <br/>
            Sua Idade:
            <input type="text" onChange={handleAge}/> <br/>
            <br/>
            Olá {Exname} {ExlastName}, tudo ben ? <br/>
            você tem {Exidade} anos.
            <hr/>
        </div>
    );
};