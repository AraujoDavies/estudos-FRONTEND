// Caso Prático de uso do Reducers
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type Person = {
    name: string;
    id: string;
}

type ActionType = {
    type: string;
    payload?: {
        name?: string,
        id?: string
    }
}

const initialState: Person[] = []; //array de Pessoa

const reducer = (state: Person[], action: ActionType) => {
    switch(action.type){
        case "ADD":
            if (action.payload?.name){
                const newList = [...state]
                newList.push({
                    id: uuidv4(),
                    name: action.payload.name
                });
                return newList;
            }
        break;
        case "DEL":
            if (action.payload?.id){
                state = state.filter(item => item.id !== action.payload?.id);
            }
        break;
        case "ORDER":
            state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
    }
    return state;
}

export const UsePeopleList = () => {
    return useReducer(reducer, initialState);
}