import { UsePeopleList } from "../../reducers/peopleList";
import { ChangeEvent, useState } from "react";

export const PeopleList = () => {
    const [list, dispatch] = UsePeopleList()
    const [inputName, setInputName] = useState('');

    const handleChangeIput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value)
    }

    const handleAddItem = () => {
        if (inputName){
            dispatch({
                type: "ADD",
                payload: {
                    name: inputName
                }
            });
            setInputName('')
        }
    }

    const handleDelItem = (id: string) => {
        dispatch({
            type: "DEL",
            payload: { id }
        })
    }

    const handleOrderItens = () => {
        dispatch({
            type: "ORDER"
        })
    }

    return( 
        <div>
            <hr/>
            <div className="p-10">
                <input className="border-5" type="text" value={inputName} onChange={handleChangeIput} />
                <button onClick={handleAddItem}> Add </button>

                <br/>
                <h2>Lista de pessoas</h2>
                
                <button onClick={handleOrderItens}> [Ordenar] </button>
                <br/>
                <ul>
                    {list.map((item, index)=>( 
                        <li key={index}> {item.name} <button onClick={() => handleDelItem(item.id)}> [DEL] </button></li> 
                    ))}
                </ul>
            </div>
        </div>
    );
}