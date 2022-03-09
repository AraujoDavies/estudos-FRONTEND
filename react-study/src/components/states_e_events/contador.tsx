import { useState } from "react";

export const Contador = () => {
    const [n, setN] = useState(0);
    const diminui = () => {
        if (n > 0){
            setN(n-1);
        }
    }
    const aumenta = () => {
        setN(n+1);
    }
    return (
        <div>
            contador :D<br/>
            <button onClick={diminui}>-</button>
            <span>{n}</span>
            <button onClick={aumenta}>+</button>
        </div>
    );
}