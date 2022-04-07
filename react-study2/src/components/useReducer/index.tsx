import { Contagem } from "../../reducers/contagem";

export const ReducerLesson = () => {    
    const [state, dispatch] = Contagem();

    return( 
        <div className = "p-5">
            Contagem: {state.count} <br/>
            
            <button className="p-3" onClick={()=>dispatch({type: "ADD"})}> ADD </button>
            <button className="p-3" onClick={()=>dispatch({type: "DEL"})}> DEL </button>
            <button className="p-3" onClick={()=>dispatch({type: "RESET"})}> RESET </button>
        </div>
    );
}