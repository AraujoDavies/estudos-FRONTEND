import { useState, useEffect, ChangeEvent } from 'react';

export const UseEffectStudy = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    // tanto faz a posição do use effect... ele sempre fica monitorando
    useEffect(()=>{ 
        setFullName(`${name} ${lastName}`)
    }, [name, lastName])

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder='digite seu nome' value={name} onChange={handleName}/>
            <br/>
            <input type="text" placeholder='digite seu sobrenome' value={lastName} onChange={handleFullName}/>
            <br/>
            Nome completo: <strong>{fullName}</strong>
            <br/><br/>
        </div>
    );
}