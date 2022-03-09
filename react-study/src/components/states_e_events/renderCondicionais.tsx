import { useState } from 'react';

export const Condicionais = () => {
    const [show, setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
        // ==
        /* 
        if (show){
            setShow(false)
        } else setShow(true) 
        */
    }

    return(
        <div>
            <button onClick={handleShow}> {show ? 'Ocultar' : 'Mostrar' }</button>

            {show && 
            <p>Bla Bla Bla...</p>
            }
        </div>
    )
}