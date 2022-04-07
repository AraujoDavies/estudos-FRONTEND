//Enviando Requisição
import { ChangeEvent, useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void
}

export const EnviandoPOST = ( { onAdd }: Props) => {
    const [titleArea, setTitleArea] = useState('')
    const [txtArea, setTxtArea] = useState('')

    const handleTitleArea = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleArea(e.target.value)
    }
    const handleTxtArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTxtArea(e.target.value)
    }
    const btnClick = () => {
        if (titleArea && txtArea){
            onAdd(titleArea, txtArea)
            setTitleArea('');
            setTxtArea('');
        } else {
            alert('preencha todos os campos!')
        }        
    }

    return (
        <fieldset className="border-4 mb-2 p-3">
            <legend> Adicionar dados: </legend> 
            Título:
            <input onChange={handleTitleArea} value={titleArea} className="block border-1" type="text" />
            Texto:
            <textarea onChange={handleTxtArea} value={txtArea} className="block border-1"></textarea>
            <button onClick={btnClick}> Adicionar </button>
        </fieldset>
    );
}