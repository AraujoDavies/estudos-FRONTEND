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
        }
    }

    return( 
        <div>
            <hr/>
            <div className="p-10">
                <input className="border-5" type="text" value={inputName} onChange={handleChangeIput} />
                <button onClick={handleAddItem}> Add </button>

                <br/>
                <h2>Lista de pessoas</h2>
                <ul>
                    {list.map((item, index)=>( 
                        <li key={index}> {item.name} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}