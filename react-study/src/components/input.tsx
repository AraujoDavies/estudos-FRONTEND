import React from 'react';
import react, { useState } from 'react';

export const InputArea = ()=>{
    const [inp, setInp] = useState('');

    const troca = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInp( event.target.value )
    }

    return (
        <div>
            Digite um nome
            <input type="text" onChange={troca}/>
            seu nome é {inp}
        </div>
    )
}